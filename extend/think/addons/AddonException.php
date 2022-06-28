<?php

namespace think\addons;

use think\Exception;

/**
 * 服务异常处理类
 * @package think\addons
 */
class AddonException extends Exception
{

    public function __construct($message, $code = 0, $data = '')
    {
        $this->message  = $message;
        $this->code     = $code;
        $this->data     = $data;
    }

}
