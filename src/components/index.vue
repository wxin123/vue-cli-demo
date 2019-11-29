<template>
    <div id="index">
        <ul>
            <li @click="goPage(item.link)" :key="idx" v-for="(item,idx) in menuList">{{item.name}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data () {
            return {
                menuList: [
                    {name:'字典类型',link: '/dictionary/type'},
                    {name:'字典详情',link: '/dictionary/data'},
                    {name:'记账本',link: '/home'}
                ]
            }
        },
        methods: {
            goPage (url){
                this.$router.push({path: url})
            }
        }
    }
</script>

<style scoped lang="less">
    li{
        cursor: pointer;
        &hover{ text-decoration: underline}
    }
</style>
