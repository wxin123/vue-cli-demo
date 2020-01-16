<template>
    <div class="editTable">
        <ul class="my-table">
            <li ></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            data: {
                type: [Array],
                default(){
                    return [
                        {name: '张三', age: 12, sex: '男'}
                    ]
                }
            },
            header: {
                type: [Array],
                default(){
                    return []
                }
            }
        },
        data(){
            return {
            }
        }
    }
</script>

<style scoped lang="less">

</style>
