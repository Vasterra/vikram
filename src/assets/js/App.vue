<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>

import '../scss/main.scss';

export default {
    name: 'App',
    data() {
        return {
            message: 'App works',
        }
    },
    created() {
        this.$store.dispatch('setAuthorized')
    }
}

</script>

<style>



</style>