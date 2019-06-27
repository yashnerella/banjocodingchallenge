<template>
    <div>
        <b-container class="left-container">
            <b-row>
                <b-col>
                    <h4>ABOUT</h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </p>
                </b-col>
            </b-row>
        </b-container>

        <b-container class="right-container">
            <b-row>
                <b-col>
                    <signup v-if="showSignup" @showSignin="toggleToSignin()"></signup>
                    <signin v-else @showSignup="toggleToSignup()"></signin>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    export default {
        name: 'About',

        data() {
            return {
                showSignup: true,
            }
        },

        methods: {
            toggleToSignin() {
                this.showSignup = false
            },
            toggleToSignup() {
                this.showSignup = true
            }
        }
    }
</script>

<style scoped>
    .left-container {
        float:left;
        height: 650px;
        width: 60%;
        display: flex;
        align-items: center;
        text-align: justify;
    }

    .right-container {
        float: right;
        height: 650px;
        width: 40%;
        display: flex;
        align-items: center;
    }
</style>