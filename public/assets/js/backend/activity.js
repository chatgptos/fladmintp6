define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'activity/index' + location.search,
                    add_url: 'activity/add',
                    edit_url: 'activity/edit',
                    del_url: 'activity/del',
                    multi_url: 'activity/multi',
                    table: 'booth_activity',
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
                        {field: 'is_recommend', title: __('Is_recommend')},
                        {field: 'name', title: __('Name')},
                        {field: 'act_add', title: __('Act_add')},
                        {field: 'act_date', title: __('Act_date')},
                        {field: 'act_time', title: __('Act_time')},
                        {field: 'act_content', title: __('Act_content')},
                        {field: 'linkman', title: __('Linkman')},
                        {field: 'tel', title: __('Tel')},
                        {field: 'registrant_id', title: __('Registrant_id')},
                        {field: 'pass', title: __('Pass')},
                        {field: 'act_time_minute', title: __('Act_time_minute')},
                        {field: 'end_time', title: __('End_time')},
                        {field: 'act_time_minute_end', title: __('Act_time_minute_end')},
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