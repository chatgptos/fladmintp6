define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'exhibitor/index' + location.search,
                    add_url: 'exhibitor/add',
                    edit_url: 'exhibitor/edit',
                    del_url: 'exhibitor/del',
                    multi_url: 'exhibitor/multi',
                    table: 'booth_user_exhibitor',
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
                        {field: 'exhibitor_id', title: __('Exhibitor_id')},
                        {field: 'name', title: __('Name')},
                        {field: 'company_name', title: __('Company_name')},
                        {field: 'company_name_en', title: __('Company_name_en')},
                        {field: 'contact_address', title: __('Contact_address')},
                        {field: 'contact_address_en', title: __('Contact_address_en')},
                        {field: 'linkman', title: __('Linkman')},
                        {field: 'linkman_en', title: __('Linkman_en')},
                        {field: 'contact_number', title: __('Contact_number')},
                        {field: 'fax', title: __('Fax')},
                        {field: 'email', title: __('Email')},
                        {field: 'siturl', title: __('Siturl'), formatter: Table.api.formatter.url},
                        {field: 'cellphone', title: __('Cellphone')},
                        {field: 'postcode', title: __('Postcode')},
                        {field: 'number', title: __('Number')},
                        {field: 'phone_pre1', title: __('Phone_pre1')},
                        {field: 'phone_pre2', title: __('Phone_pre2')},
                        {field: 'fax_pre1', title: __('Fax_pre1')},
                        {field: 'fax_pre2', title: __('Fax_pre2')},
                        {field: 'boothNum', title: __('Boothnum')},
                        {field: 'productServices', title: __('Productservices')},
                        {field: 'product_services_en', title: __('Product_services_en')},
                        {field: 'others', title: __('Others')},
                        {field: 'others_en', title: __('Others_en')},
                        {field: 'edit_user', title: __('Edit_user')},
                        {field: 'edit_time', title: __('Edit_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'company_name_en2zh', title: __('Company_name_en2zh')},
                        {field: 'approved_flag', title: __('Approved_flag'), formatter: Table.api.formatter.flag},
                        {field: 'approved_time', title: __('Approved_time'), operate:'RANGE', addclass:'datetimerange', formatter: Table.api.formatter.datetime},
                        {field: 'approved_ip', title: __('Approved_ip')},
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