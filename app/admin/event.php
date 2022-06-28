<?php
/**
 * *
 *  * ============================================================================
 *  * Created by PhpStorm.
 *  * User: Jack
 *  * 邮箱: 1276789849@qq.com
 *  * 网址: https://fladmin.cn
 *  * Date: 2022/6/19 下午5:45
 *  * ============================================================================.
 */

// 事件定义文件
return [
    'bind' => [
    ],

    'listen' => [
        'AppInit'  => [],
        'HttpRun'  => [],
        'HttpEnd'  => [app\admin\event\AdminLog::class],
        'LogLevel' => [],
        'LogWrite' => [],
    ],

    'subscribe' => [
    ],
];
