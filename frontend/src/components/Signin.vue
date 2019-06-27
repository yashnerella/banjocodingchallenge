<template>
    <b-container>
        <b-form @submit.prevent="signinUser">
            <b-form-row>
                <b-col>
                    <h1>Sign in</h1>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-email"
                            label="Email address:"
                            label-for="email">
                        <b-form-input v-model="signinForm.email"
                                      autocomplete="off"
                                      id="email"
                                      type="email"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-password"
                            label="Password:"
                            label-for="password">
                        <b-form-input v-model="signinForm.password"
                                      autocomplete="off"
                                      id="password"
                                      type="password"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-button type="submit" variant="primary">Sign in</b-button>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-link href="#" @click="toggleToSignup()">Create Account</b-link>
                </b-col>
            </b-form-row>

            <b-form-row v-show="showErrorInSignin">
                <b-col>
                    <b-alert fade
                             :show="showErrorInSignin && dismissSigninErrorCountDown"
                             variant="warning"
                             @dismissed="resetCountDown()"
                             @dismiss-count-down="countDownChanged">
                        Please check your credentials and try again!
                    </b-alert>
                </b-col>
            </b-form-row>
        </b-form>
    </b-container>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "singin",

        data() {
            return {
                signinForm: {
                    email: '',
                    password: '',
                },
                showErrorInSignin: false,
                dismissSigninErrorCountDown: 3,
            }
        },

        methods: {
            ...mapMutations([
                'setCurrentUser'
            ]),
            countDownChanged(dismissCountDown) {
                this.dismissSigninErrorCountDown = dismissCountDown
            },
            resetCountDown() {
                this.dismissSigninErrorCountDown = 3
            },
            toggleToSignup() {
                this.$emit('showSignup')
            },
            signinUser() {
                window.axios.post('http://localhost:8081/users/signin', this.signinForm).then((response) => {
                    this.setCurrentUser(response.data)
                    this.$router.push('/home')
                }).catch((error) => {
                    console.log(error)
                    this.showErrorInSignin = true
                })
            },
        }
    }
</script>