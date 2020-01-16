<template>
    <div id="index">
        <StackedBar/>
        <StackedBarVertical/>
    </div>
</template>

<script>
    import StackedBar from './stackedBar'
    import StackedBarVertical from './stackedBarVertical'
    export default {
        name: "index",
        components: {
            StackedBar,
            StackedBarVertical
        }
    }
</script>
<style scoped lang="less">

</style>
