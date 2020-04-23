<template>
    <div>
        <Header/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
    import Footer from "./Footer";
    import Header from "./Header";

    export default {
        name: "GuessLayout",
        components: {Header, Footer}
    }
</script>

<style scoped>

</style>