<template>
    <div>
        <div id="myMap" ref="myMap"></div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: 'home',

        computed: {
            ...mapState([
                'currentUser',
            ]),
        },

        methods: {
            ...mapMutations([
                'setUsers',
            ]),
            initMap() {
                this.map = new google.maps.Map(this.$refs.myMap, {
                    center: {
                        lat: 61.180059,
                        lng: -149.822075
                    },
                    scrollwheel: false,
                    zoom: 4
                })
            },
        },

        mounted() {
            window.axios.get('http://localhost:8081/users').then((response) => {
                this.setUsers(response.data)
                this.initMap()
            }).catch((error) => {
                console.log('Error in getting all users')
                console.error(error)
            })
        }
    }
</script>

<style scoped>
    #myMap {
        height: 500px;
        width: 80%;
        margin: auto;
    }
</style>