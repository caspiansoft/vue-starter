<template>
    <div class="flex-container">
        <form @submit.prevent="login">
            <div class="container">
                <label for="email"><b>Username</b></label>
                <input id="email" type="email" placeholder="Enter Username" v-model="email" required>

                <label for="psw"><b>Password</b></label>
                <input id="psw" type="password" placeholder="Enter Password" v-model="password" required>

                <button type="submit">Login</button>
                <br/>
                <label>
                    <input type="checkbox" checked="checked" name="remember"> Remember me
                </label>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                email: '',
                password: ''
            }
        },
        components: {},
        methods: {
            login() {
                this.$store.dispatch('auth/login', {email: this.email, password: this.password})
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
    /* Bordered form */
    .flex-container {
        min-height: 400px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border: 3px solid #f1f1f1;
    }

    /* Full-width inputs */
    input[type=text], input[type=password], input[type=email] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }

    /* Set a style for all buttons */
    button {
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        cursor: pointer;
        width: 100%;
    }

    /* Add a hover effect for buttons */
    button:hover {
        opacity: 0.8;
    }

    /* Avatar image */
    img.avatar {
        width: 40%;
        border-radius: 50%;
    }

    /* Add padding to containers */
    .container {
        padding: 16px;
    }

    /* The "Forgot password" text */
    span.psw {
        float: right;
        padding-top: 16px;
    }

    /* Change styles for span and cancel button on extra small screens */
    @media screen and (max-width: 300px) {
        span.psw {
            display: block;
            float: none;
        }
    }
</style>