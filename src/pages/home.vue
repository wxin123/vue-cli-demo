<template>
    <div class="home">
        <button type="button" @click="createDB">创建数据库</button>
        <button type="button" @click="createTable">创建表</button>
        <button type="button" @click="insert">插入数据</button>
        <button type="button" @click="getList">获取列表</button>
        <button type="button" @click="updateData">更新数据</button>
        <button type="button" @click="deleteData">删除数据</button>
    </div>
</template>
<script>
import io from '../api/io2'
export default {
    created(){},
    methods: {
        createDB(){
            io.openDB('IDB')
        },
        createTable(){
            io.createTable('IDB','user')
        },
        insert(){
            io.insert('IDB','user',{name:"张三",sex: 1})
        },
        deleteData(){
            io.deleteById('IDB','user', 1)
        },
        updateData(){
            io.update('IDB', 'user', {id:1, name:String(new Date().getTime()),sex: 1},res => {
                window.console.log(JSON.stringify(res))
            })
        },
        getList(){
            io.getList('IDB','user', res => {
                window.console.log(JSON.stringify(res))
            })
            io.getById('IDB','user', res => {
                window.console.log(JSON.stringify(res))
            })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
