<template>
        <b-form @submit.prevent="signupUser">
            <b-form-row>
                <b-col>
                    <h1>Sign up</h1>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-firstname"
                            label="First Name:"
                            label-for="first_name">
                        <b-form-input autocomplete="off"
                                      v-model="signupForm.firstName"
                                      id="first_name"
                                      type="text"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-lastname"
                            label="Last Name:"
                            label-for="last_name">
                        <b-form-input autocomplete="off"
                                      v-model="signupForm.lastName"
                                      id="last_name"
                                      type="text"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-email"
                            label="Email address:"
                            label-for="email"
                            description="We'll never share your email with anyone else.">
                        <b-form-input autocomplete="off"
                                      v-model="signupForm.email"
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
                            label-for="password"
                            description="No Special Characters, Max length 10, Min length 6">
                        <b-form-input autocomplete="off"
                                      v-model="signupForm.password"
                                      id="password"
                                      type="password"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-age"
                            label="Age:"
                            label-for="age">
                        <b-form-input autocomplete="off"
                                      v-model="signupForm.age"
                                      id="age"
                                      type="number"
                                      required>
                        </b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-button type="submit" variant="primary">Sign up</b-button>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-link href="#" @click="toggleToSignin()">Sign in instead</b-link>
                </b-col>
            </b-form-row>
        </b-form>
</template>

<script>
    import {mapMutations} from 'vuex'

    export default {
        name: "signup",

        data() {
            return {
                signupForm: {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    age: '',
                }
            }
        },

        methods: {
            ...mapMutations([
                'setCurrentUser',
            ]),
            toggleToSignin() {
                this.$emit('showSignin')
            },
            signupUser() {
                window.axios.post('http://localhost:8081/users/signup', this.signupForm).then((response) => {
                    this.setCurrentUser(response.data)
                    this.$router.push('/home')
                }).catch((error) => {
                    console.error(error)
                })
            },
        },
    }
</script>