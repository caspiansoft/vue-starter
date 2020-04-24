<template>
    <div>
        <HelloWorld msg="Welcome to Home"/>
    </div>
</template>

<script>
    import HelloWorld from '../components/HelloWorld.vue'

    export default {
        name: "home",
        components: {
            HelloWorld
        }
    }
</script>

<style scoped>

</style>