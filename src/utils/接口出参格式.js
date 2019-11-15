// 分页列表
let page = {
    code: 200,
    message: '成功',
    data: {
        count: 10, //数据总条数
        pages: 2, //数据总页数
        pageNo: 1, //数据起始页
        pageSize: 2, //每页数据量
        list: [
            {
                createTime: '2019-09-29 12：12：12',
                type: '交通',
                remark: '吃',
                money: '100.00'
            }
        ],
    }
}
// 不分页列表
let list = {
    code: 200,
    message: '成功',
    data: {
        list: [
            {
                createTime: '2019-09-29 12：12：12',
                type: '交通',
                remark: '吃',
                money: '100.00'
            }
        ],
    }
}
// 新增/编辑
let create = {
    code: 200,
    message: '成功',
    data: {
        createTime: '2019-09-29 12：12：12',
        type: '交通',
        remark: '吃',
        money: '100.00'
    }
}

// 删除
let delet = {
    code: 200,
    message: '成功'
}
