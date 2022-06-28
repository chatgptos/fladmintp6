<?php
/**
 * *
 *  * ============================================================================
 *  * Created by PhpStorm.
 *  * User: Jack
 *  * 邮箱: 1276789849@qq.com
 *  * 网址: https://fladmin.cn
 *  * Date: 2022/6/20 下午5:19
 *  * ============================================================================.
 */

namespace app\common\service;

use think\Service;
use app\common\library\Auth;

/**
 * 认证服务
 */
class AuthService extends Service
{
    public function register()
    {
        $this->app->bind('auth', Auth::class);
    }
}
