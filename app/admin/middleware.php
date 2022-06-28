<?php
/**
 * *
 *  * ============================================================================
 *  * Created by PhpStorm.
 *  * User: Jack
 *  * 邮箱: 1276789849@qq.com
 *  * 网址: https://fladmin.cn
 *  * Date: 2022/6/19 下午3:52
 *  * ============================================================================.
 */

return [
    \think\middleware\LoadLangPack::class,
    \think\middleware\SessionInit::class,
    app\common\middleware\FastInit::class,
];
