<template>
    <div id="app">
        <div class="demo" @click="onClick">
            一段内容
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        onClick() {
            console.log('click!!!!!!!!!!!!')
        }
    }
}
</script>
<style lang="">
.demo {
    width: 300px;
    height: 300px;
    background-color: orange;
}
</style>