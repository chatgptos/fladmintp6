# fladmin-TP6 基于ThinkPHP6+fladmin的快速开发框架
[![fladmin-TP6](https://img.shields.io/hexpm/l/plug.svg)](https://www.iuok.cn/)
[![fladmin-TP6](https://img.shields.io/badge/fladmin--TP6-V3.0.0-brightgreen.svg)](https://www.iuok.cn/)
[![star](https://gitee.com/nymondo/fladmin-tp6/badge/star.svg?theme=dark)](https://gitee.com/nymondo/fladmin-tp6/stargazers)
[![fork](https://gitee.com/nymondo/fladmin-tp6/badge/fork.svg?theme=dark)](https://gitee.com/nymondo/fladmin-tp6/members)

## **fladmin-TP6重要说明**
* 多层控制器路径“/”改成“.”，例如：auth/admin/index改成auth.admin/index，js文件里面同样要这样调整
* auth_rule表增加route字段，创建菜单时，自动写入路由，为访问的url
* 在线命令和服务都可以正常使用，服务和TP5.0版本不通用，需要简单调整后服务才可正常使用
* 服务基础文件采用服务方式注入
* 服务增加自定义服务功能，服务根目录下的service文件夹，系统会自动载入service内的服务，进行注册和启动
* 原有认证的Auth类改为服务，可自行注入替换，调用方式app()->auth;例如即将发布的SSO单点登陆，通过服务注入替换Auth


## **在线演示**

https://demo.iuok.cn/

用户名：admin

密　码：123456

提　示：演示站数据无法进行修改，请下载源码安装体验全部功能

## **界面截图**
![控制台](https://gitee.com/uploads/images/2017/0411/113717_e99ff3e7_10933.png "控制台")

## **问题反馈**

在使用中有任何问题，请使用以下联系方式联系我们

QQ群: [345183861](https://shang.qq.com/wpa/qunwpa?idkey=6a55d7fe157f1093fb2f28c0883e173d0bff31948fa2939d849846fd9db72a23)

Email: (ice#sbing.vip, 把#换成@)

Gitee: https://gitee.com/nymondo/fladmin-tp6

Github: https://github.com/0377/fladmin-tp6
## **特别鸣谢**

感谢以下的项目,排名不分先后

fladmin：https://www.fladmin.net

ThinkPHP：http://www.thinkphp.cn

AdminLTE：https://adminlte.io

Bootstrap：http://getbootstrap.com

jQuery：http://jquery.com

Bootstrap-table：https://github.com/wenzhixin/bootstrap-table

Nice-validator: https://validator.niceue.com

SelectPage: https://github.com/TerryZ/SelectPage


## **版权信息**

fladmin-TP6遵循Apache2开源协议发布，并提供免费使用。

本项目包含的第三方源码和二进制文件之版权信息另行标注。

版权所有Copyright © 2019-2020 by fladmin-TP6

All rights reserved。# fladmintp6
