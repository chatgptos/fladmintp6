<?php

namespace app\admin\model;

use app\common\library\Token;
use app\common\model\MoneyLog;
use app\common\model\BaseModel;
use app\common\model\ScoreLog;

class User extends BaseModel
{
    // 表名
    protected $name = 'user';
    // 自动写入时间戳字段
    protected $autoWriteTimestamp = 'int';
    // 定义时间戳字段名
    protected $createTime = 'createtime';
    protected $updateTime = 'updatetime';
    // 追加属性
    protected $append = [
        'prev_time_text',
        'login_time_text',
        'join_time_text',
    ];

    public function getOriginData()
    {
        return $this->origin;
    }

    public static function onBeforeUpdate($row)
    {
        $changed = $row->getChangedData();
        //如果有修改密码
        if (isset($changed['password'])) {
            if ($changed['password']) {
                $salt = \fast\Random::alnum();
                $row->password = \app\common\library\Auth::instance()->getEncryptPassword($changed['password'], $salt);
                $row->salt = $salt;
                Token::clear($row->id);
            } else {
                unset($row->password);
            }
        }

        $changedata = $row->getChangedData();
        if (isset($changedata['money'])) {
            $origin = $row->getOrigin();
            MoneyLog::create([
                'user_id' => $row['id'], 'money' => $changedata['money'] - $origin['money'],
                'before'  => $origin['money'], 'after' => $changedata['money'], 'memo' => '管理员变更金额',
            ]);
        }
        if (isset($changedata['score'])) {
            $origin = $row->getOrigin();
            ScoreLog::create(['user_id' => $row['id'], 'score' => $changedata['score'] - $origin['score'], 'before' => $origin['score'], 'after' => $changedata['score'], 'memo' => '管理员变更积分']);
        }
    }

    public function getGenderList()
    {
        return ['1' => __('Male'), '0' => __('Female')];
    }

    public function getStatusList()
    {
        return ['normal' => __('Normal'), 'hidden' => __('Hidden')];
    }

    public function getprev_timeTextAttr($value, $data)
    {
        $value = $value ? $value : $data['prev_time'];

        return is_numeric($value) ? date('Y-m-d H:i:s', $value) : $value;
    }

    public function getlogin_timeTextAttr($value, $data)
    {
        $value = $value ? $value : $data['login_time'];

        return is_numeric($value) ? date('Y-m-d H:i:s', $value) : $value;
    }

    public function getjoin_timeTextAttr($value, $data)
    {
        $value = $value ? $value : $data['join_time'];

        return is_numeric($value) ? date('Y-m-d H:i:s', $value) : $value;
    }

    protected function setprev_timeAttr($value)
    {
        return $value && ! is_numeric($value) ? strtotime($value) : $value;
    }

    protected function setlogin_timeAttr($value)
    {
        return $value && ! is_numeric($value) ? strtotime($value) : $value;
    }

    protected function setjoin_timeAttr($value)
    {
        return $value && ! is_numeric($value) ? strtotime($value) : $value;
    }

    public function group()
    {
        return $this->belongsTo('UserGroup', 'group_id', 'id')->joinType('LEFT');
    }
}
