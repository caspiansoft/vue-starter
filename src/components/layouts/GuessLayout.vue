<template>
    <div>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "./Footer";

    export default {
        name: "GuessLayout",
        components: {Footer}
    }
</script>

<style scoped>

</style>