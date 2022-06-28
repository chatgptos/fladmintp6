<?php
/**
 * *
 *  * ============================================================================
 *  * Created by PhpStorm.
 *  * User: Jack
 *  * 邮箱: 1276789849@qq.com
 *  * 网址: https://fladmin.cn
 *  * Date: 2022/6/19 下午4:25
 *  * ============================================================================.
 */

namespace app\admin\controller\general;

use app\common\controller\Backend;

/**
 * 附件管理.
 *
 * @icon fa fa-circle-o
 * @remark 主要用于管理上传到又拍云的数据或上传至本服务的上传数据
 */
class Attachment extends Backend
{
    /**
     * @var \app\common\model\Attachment
     */
    protected $model = null;

    protected $searchFields = 'id,filename,url';
    protected $noNeedRight = ['classify'];

    public function _initialize()
    {
        parent::_initialize();
        $this->model = new \app\common\model\Attachment();
        $this->view->assign("mime_typeList", \app\common\model\Attachment::getmime_typeList());
        $this->view->assign("categoryList", \app\common\model\Attachment::getCategoryList());
        $this->assignconfig("categoryList", \app\common\model\Attachment::getCategoryList());
    }

    /**
     * 查看.
     */
    public function index()
    {
        //设置过滤方法
        $this->request->filter(['strip_tags', 'trim']);
        if ($this->request->isAjax()) {
            $mime_typeQuery = [];
            $filter = $this->request->request('filter');
            $filterArr = (array)json_decode($filter, true);
            if (isset($filterArr['category']) && $filterArr['category'] == 'unclassed') {
                $filterArr['category'] = ',unclassed';
                $get = $this->request->get();
                $arr = array_merge($get, ['filter' => json_encode(array_diff_key($filterArr, ['category' => '']))]);
                $this->request->withGet($arr);
            }
            if (isset($filterArr['mime_type']) && preg_match("/[]\,|\*]/", $filterArr['mime_type'])) {
                $mime_type = $filterArr['mime_type'];
                $filterArr = array_diff_key($filterArr, ['mime_type' => '']);
                $mime_typeQuery = function ($query) use ($mime_type) {
                    $mime_typeArr = explode(',', $mime_type);
                    foreach ($mime_typeArr as $index => $item) {
                        if (stripos($item, "/*") !== false) {
                            $query->whereOr('mime_type', 'like', str_replace("/*", "/", $item) . '%');
                        } else {
                            $query->whereOr('mime_type', 'like', '%' . $item . '%');
                        }
                    }
                };
            }

            $get = $this->request->get();
            $arr = array_merge($get, ['filter' => json_encode($filterArr)]);
            $this->request->withGet($arr);

            [$where, $sort, $order, $offset, $limit] = $this->buildparams();

            $total = $this->model
                ->where($mime_typeQuery)
                ->where($where)
                ->order($sort, $order)
                ->count();

            $list = $this->model
                ->where($mime_typeQuery)
                ->where($where)
                ->order($sort, $order)
                ->limit($offset, $limit)
                ->select();

            $cdnurl = preg_replace("/\/(\w+)\.php$/i", '', $this->request->domain());
            foreach ($list as $k => &$v) {
                if (strpos($v['url'], 'http') === false) {
                    $v['fullurl'] = ($v['storage'] == 'local' ? $cdnurl : $this->view->config['upload']['cdnurl']) . $v['url'];
                } else {
                    $v['fullurl'] = $v['url'];
                }

            }
            unset($v);
            $result = ['total' => $total, 'rows' => $list];

            return json($result);
        }

        return $this->view->fetch();
    }

    /**
     * 选择附件.
     */
    public function select()
    {
        if ($this->request->isAjax()) {
            return $this->index();
        }

        return $this->view->fetch();
    }

    /**
     * 添加.
     */
    public function add()
    {
        if ($this->request->isAjax()) {
            $this->error();
        }

        return $this->view->fetch();
    }

    /**
     * 删除附件.
     *
     * @param array $ids
     */
    public function del($ids = '')
    {
        if (!$this->request->isPost()) {
            $this->error(__("Invalid parameters"));
        }
        $ids = $ids ? $ids : $this->request->post("ids");
        if ($ids) {
            \think\facade\Event::listen('upload_delete', function ($params) {
                if ($params['storage'] == 'local') {
                    $attachmentFile = app()->getRootPath() . '/public' . $params['url'];
                    if (is_file($attachmentFile)) {
                        @unlink($attachmentFile);
                    }
                }
            });
            $attachmentlist = $this->model->where('id', 'in', $ids)->select();
            foreach ($attachmentlist as $attachment) {
                \think\facade\Event::trigger('upload_delete', $attachment);
                $attachment->delete();
            }
            $this->success();
        }
        $this->error(__('Parameter %s can not be empty', 'ids'));
    }

    /**
     * 归类
     */
    public function classify()
    {
        if (!$this->auth->check('general/attachment/edit')) {
            hook('admin_nopermission', $this);
            $this->error(__('You have no permission'), '');
        }
        if (!$this->request->isPost()) {
            $this->error(__("Invalid parameters"));
        }
        $category = $this->request->post('category', '');
        $ids = $this->request->post('ids');
        if (!$ids) {
            $this->error(__('Parameter %s can not be empty', 'ids'));
        }
        $categoryList = \app\common\model\Attachment::getCategoryList();
        if ($category && !isset($categoryList[$category])) {
            $this->error(__('Category not found'));
        }
        $category = $category == 'unclassed' ? '' : $category;
        \app\common\model\Attachment::where('id', 'in', $ids)->update(['category' => $category]);
        $this->success();
    }
}
