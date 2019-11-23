<template>
    <div id="dictionary">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    #dictionary{
        width: 1000px;
        position: absolute;
        top: 0;
        bottom: 0;
        height: 100%;
        background: #fff;
        box-sizing: border-box;
        padding: 0 15px;
    }
</style>
