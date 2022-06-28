define(['jquery', 'bootstrap', 'backend', 'table', 'form'], function ($, undefined, Backend, Table, Form) {

    var Controller = {
        index: function () {
            // 初始化表格参数配置
            Table.api.init({
                extend: {
                    index_url: 'boothinfo/index' + location.search,
                    add_url: 'boothinfo/add',
                    edit_url: 'boothinfo/edit',
                    del_url: 'boothinfo/del',
                    multi_url: 'boothinfo/multi',
                    table: 'booth_boothinfo',
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
                        {field: 'exhibition_id', title: __('Exhibition_id')},
                        {field: 'hall_id', title: __('Hall_id')},
                        {field: 'is_recommend', title: __('Is_recommend')},
                        {field: 'coordinate_x', title: __('Coordinate_x')},
                        {field: 'coordinate_y', title: __('Coordinate_y')},
                        {field: 'booth_widht', title: __('Booth_widht')},
                        {field: 'booth_height', title: __('Booth_height')},
                        {field: 'booth_area', title: __('Booth_area')},
                        {field: 'boothtem_id', title: __('Boothtem_id')},
                        {field: 'boothtype_id', title: __('Boothtype_id')},
                        {field: 'booth_standard', title: __('Booth_standard')},
                        {field: 'booth_type', title: __('Booth_type')},
                        {field: 'booth_num', title: __('Booth_num')},
                        {field: 'booth_name', title: __('Booth_name')},
                        {field: 'sales_status', title: __('Sales_status')},
                        {field: 'booth_tips', title: __('Booth_tips')},
                        {field: 'company_name', title: __('Company_name')},
                        {field: 'category', title: __('Category')},
                        {field: 'country', title: __('Country')},
                        {field: 'state', title: __('State')},
                        {field: 'addr', title: __('Addr')},
                        {field: 'moble_phone', title: __('Moble_phone')},
                        {field: 'phone', title: __('Phone')},
                        {field: 'email', title: __('Email')},
                        {field: 'webaddr', title: __('Webaddr')},
                        {field: 'contacts', title: __('Contacts')},
                        {field: 'fax', title: __('Fax')},
                        {field: 'position', title: __('Position')},
                        {field: 'open_angle', title: __('Open_angle')},
                        {field: 'booth_discount', title: __('Booth_discount')},
                        {field: 'sales_distribution', title: __('Sales_distribution')},
                        {field: 'booth_price', title: __('Booth_price')},
                        {field: 'angle_add', title: __('Angle_add')},
                        {field: 'booth_amount', title: __('Booth_amount')},
                        {field: 'build_state', title: __('Build_state')},
                        {field: 'china_abbreviate', title: __('China_abbreviate')},
                        {field: 'english_abbreviate', title: __('English_abbreviate')},
                        {field: 'xiongk_num_free', title: __('Xiongk_num_free')},
                        {field: 'xiongk_num_change', title: __('Xiongk_num_change')},
                        {field: 'is_assigned', title: __('Is_assigned')},
                        {field: 'imp_buyernum', title: __('Imp_buyernum')},
                        {field: 'upload_batch', title: __('Upload_batch')},
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