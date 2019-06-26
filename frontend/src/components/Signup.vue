<template>
    <b-container>
        <b-form>
            <b-form-row>
                <b-col>
                    <h1>SIGN UP</h1>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-firstname"
                            label="First Name:"
                            label-for="first_name">
                        <b-form-input id="first_name" type="text"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-lastname"
                            label="Last Name:"
                            label-for="last_name">
                        <b-form-input id="last_name" type="text"></b-form-input>
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
                        <b-form-input id="email" type="email"></b-form-input>
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
                        <b-form-input id="password" type="password"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-form-group
                            id="input-group-age"
                            label="Age:"
                            label-for="age">
                        <b-form-input id="age" type="number"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-form-row>

            <b-form-row>
                <b-col>
                    <b-button type="submit" variant="primary">Submit</b-button>
                </b-col>
            </b-form-row>
        </b-form>
    </b-container>
</template>

<script>
    export default {
        name: "signup"
    }
</script>

<style scoped>

</style>