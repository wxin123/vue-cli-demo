<template>
    <div>
        <el-button @click="deleteDB">删除数据库</el-button>
        <el-button @click="openDB">新建数据库</el-button>
        <el-button @click="createTable('user')">新建user表</el-button>
    </div>
</template>

<script>
    import db from '../../../api/io2'
    export default {
        name: "initDB",
        methods: {
            deleteDB(){
                db.deleteDB('IDB')
                window.location.reload()
            },
            openDB(){
                db.openDB('IDB')
                window.location.reload()
            },
            createTable(tableName){
                db.createTable('IDB',tableName);
                window.location.reload()
            }
        }
    }
</script>

<style scoped>

</style>
