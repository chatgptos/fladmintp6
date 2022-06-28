define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'shop_config/index' + location.search,
                    add_url: 'shop_config/add',
                    edit_url: 'shop_config/edit',
                    del_url: 'shop_config/del',
                    multi_url: 'shop_config/multi',
                    table: 'booth_shop_config',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'id',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'shop_id', title: __('Shop_id')},
                        {field: 'freight', title: __('Freight'), searchList: {"0":__('Freight 0'),"1":__('Freight 1'),"2":__('Freight 2')}, formatter: Table.api.formatter.normal},
                        {field: 'category_style', title: __('Category_style'), searchList: {"1":__('Category_style 1'),"2":__('Category_style 2'),"3":__('Category_style 3'),"4":__('Category_style 4')}, formatter: Table.api.formatter.normal},
                        {field: 'iscloud', title: __('Iscloud'), searchList: {"0":__('Iscloud 0'),"1":__('Iscloud 1')}, formatter: Table.api.formatter.normal},
                        {field: 'isauto', title: __('Isauto'), searchList: {"0":__('Isauto 0'),"1":__('Isauto 1')}, formatter: Table.api.formatter.normal},
                        {field: 'secret', title: __('Secret')},
                        {field: 'key', title: __('Key')},
                        {field: 'partnerId', title: __('Partnerid')},
                        {field: 'partnerKey', title: __('Partnerkey')},
                        {field: 'siid', title: __('Siid')},
                        {field: 'tempid', title: __('Tempid')},
                        {field: 'sendName', title: __('Sendname')},
                        {field: 'sendPhoneNum', title: __('Sendphonenum')},
                        {field: 'returnName', title: __('Returnname')},
                        {field: 'returnPhoneNum', title: __('Returnphonenum')},
                        {field: 'createtime', title: __('Createtime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'updatetime', title: __('Updatetime'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'operate', title: __('Operate'), table: table, events: Table.api.events.operate, formatter: Table.api.formatter.operate}
                    ]
                ]
            });

            // 为表格绑定事件
            Table.api.bindevent(table);
        },
        add: function () {
            Controller.api.bindevent();
        },
        edit: function () {
            Controller.api.bindevent();
        },
        api: {
            bindevent: function () {
                Form.api.bindevent($("form[role=form]"));
            }
        }
    };
    return Controller;
});