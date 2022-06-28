define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'advert/index' + location.search,
                    add_url: 'advert/add',
                    edit_url: 'advert/edit',
                    del_url: 'advert/del',
                    multi_url: 'advert/multi',
                    table: 'booth_advert',
                }
            });

            var table = $("#table");

            // 初始化表格
            table.bootstrapTable({
                url: $.fn.bootstrapTable.defaults.extend.index_url,
                pk: 'id',
                sortName: 'weigh',
                columns: [
                    [
                        {checkbox: true},
                        {field: 'id', title: __('Id')},
                        {field: 'admin_id', title: __('Admin_id')},
                        {field: 'module', title: __('Module'), searchList: {"open":__('Module open'),"page":__('Module page'),"category":__('Module category'),"first":__('Module first'),"other":__('Module other')}, formatter: Table.api.formatter.normal},
                        {field: 'category_id', title: __('Category_id')},
                        {field: 'type', title: __('Type'), searchList: {"banner":__('Type banner'),"image":__('Type image'),"video":__('Type video')}, formatter: Table.api.formatter.normal},
                        {field: 'media', title: __('Media')},
                        {field: 'url', title: __('Url'), formatter: Table.api.formatter.url},
                        {field: 'title', title: __('Title')},
                        {field: 'city', title: __('City')},
                        {field: 'startdate', title: __('Startdate'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'enddate', title: __('Enddate'), operate:'RANGE', addclass:'datetimerange'},
                        {field: 'views', title: __('Views')},
                        {field: 'show', title: __('Show')},
                        {field: 'created', title: __('Created')},
                        {field: 'modified', title: __('Modified')},
                        {field: 'deleted', title: __('Deleted')},
                        {field: 'weigh', title: __('Weigh')},
                        {field: 'status', title: __('Status'), searchList: {"normal":__('Normal'),"hidden":__('Hidden')}, formatter: Table.api.formatter.status},
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