<template>
    <div class="music">
        <el-row type="flex" class="rank" justify="space-between">
            <el-col :span="4" v-for="item in rankList" :key="JSON.stringify(item)">
                <div class="rank-item">
                    <h2 class="name">{{item.name}}</h2>
                    <ul class="song-list">
                        <li class="song-item" v-for="contentItem in item.content" :key="JSON.stringify(contentItem)">
                            <img class="small-pic" :src="contentItem.pic_small" alt="">
                            <div>
                                <el-tooltip effect="dark" :content="contentItem.title" placement="top-start">
                                    <p class="title">{{contentItem.title}}</p>
                                </el-tooltip>
                                <span class="author">{{contentItem.author}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
        </el-row>
        <SearchBar @search="search"/>
        <template v-if="list && list.length > 0">
            <ul class="search-list">
                <li class="search-item" v-for="item in list" :key="JSON.stringify(item)">
                    <img  class="small-pic rotate" :src="item.pic" alt="" />
                    <span class="title">{{item.title}}-{{item.author}}</span>
                    <a class="listen" :href="item.link" target="_blank">去听听</a>
                </li>
            </ul>
        </template>
        <template v-else>
            <div class="noData">
                快去开启你的音乐之旅吧~
            </div>
        </template>
    </div>
</template>

<script>
    import axios from 'axios'
    import SearchBar from "./searchBar";
    export default {
        name: "index",
        data(){
            return {
                rankList: [],
                list: []
            }
        },
        created(){
            axios.get('https://api.apiopen.top/musicRankings').then(res => {
                this.rankList = res.data.result || []
            })
        },
        methods: {
            search(val){
                if(val) {
                    axios.get(`https://api.apiopen.top/searchMusic?name=${val}`).then(res => {
                        this.list = res.data.result || []
                    })
                }
            }
        },
        components: {SearchBar}
    }
</script>

<style scoped lang="less">
    @keyframes rotate {
        0% {transform: rotate(0)}
        100% {transform: rotate(360deg)}
    }
    .rank{
        .rank-item{
            box-sizing: border-box;
            .name{margin: 15px;padding: 0;line-height: 40px;font-size: 20px;font-weight: bold;text-align: left;}
            .song-list{
                list-style: none;margin: 0 15px;padding: 0;overflow: hidden;
                .song-item{
                    list-style: none;margin: 0 0 5px;padding: 0;height: 50px;display: flex;
                    .small-pic{width: 30px;height: 30px;border-radius: 15px;margin: 10px 8px 0 0}
                    .title{font-size: 14px;margin: 0;height: 20px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden}
                    .author{font-size: 12px;color: #999}
                }
            }
        }
    }
    .search-list{
        list-style: none;margin: 20px auto;padding: 0;
        width: 800px;
        .search-item{
            display: flex;line-height: 80px;
            .small-pic{width: 60px;height: 60px;border-radius: 30px;border: 12px solid #333;box-sizing: border-box;margin-top: 10px; animation: rotate 60s linear infinite}
            .title{width: 600px;margin: 0 15px}
            .listen{width: 100px;color: #409eff}
        }
    }
    .noData{
        height: 300px;width: 800px;margin: 0 auto;
        text-align: center;line-height: 300px;
    }
</style>
