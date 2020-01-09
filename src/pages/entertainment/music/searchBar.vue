<template>
    <div class="searchBar">
        <div class="search">
            <input type="text" class="input" v-model="keywords" placeholder="关键字" />
            <button type="button" class="btn" @click="search">查询</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchBar",
        data(){
            return {
                keywords: ''
            }
        },
        methods: {
            search() {
                this.$emit('search', this.keywords)
            }
        }
    }
</script>

<style scoped lang="less">
    .searchBar{
        padding: 0 15px;margin-top: 15px;
        height: 30px;
        .search{
            height: 26px;float: right;display: flex;
            .input{width: 200px;height: 28px;margin: 0;padding: 0 10px;outline: none;box-sizing: border-box;border: 2px solid #409eff;}
            .btn{width: 60px;height: 28px;border: none;background: #409eff;color: #fff;outline: none}
        }
    }
</style>
