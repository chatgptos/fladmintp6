<?php

// 定义服务
return array_merge([
    '\app\common\service\AuthService', //登陆认证服务
    '\app\common\service\AddonService', //服务服务
], config('addons.service'));
