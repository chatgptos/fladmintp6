define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'exhibition/index' + location.search,
                    add_url: 'exhibition/add',
                    edit_url: 'exhibition/edit',
                    del_url: 'exhibition/del',
                    multi_url: 'exhibition/multi',
                    table: 'booth_exhibition',
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
                        {field: 'exhibition_name', title: __('Exhibition_name')},
                        {field: 'name', title: __('Name')},
                        {field: 'business_services_img', title: __('Business_services_img')},
                        {field: 'traffic_img', title: __('Traffic_img')},
                        {field: 'service', title: __('Service')},
                        {field: 'start_time', title: __('Start_time')},
                        {field: 'end_time', title: __('End_time')},
                        {field: 'status', title: __('Status')},
                        {field: 'remark', title: __('Remark')},
                        {field: 'modified', title: __('Modified')},
                        {field: 'created', title: __('Created')},
                        {field: 'deleted', title: __('Deleted')},
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