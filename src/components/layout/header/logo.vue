<template>
    <div class="logo"></div>
</template>
<script>
import { mapState } from "vuex"
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState([
            "isFoldAsdie"
        ])
    }
}
</script>
<style lang="less" scoped>

</style>