<template>
    <div class="header">
        <div class="container">
            <div class="row d-flex align-items-center">
                <div class="col-9 d-flex align-items-center">
                    <MainLogo @click="$router.push({name: 'Home'})" />
                    <div class="nav-bar">
                        <ul>
                            <li>
                                <a href="">How it works</a>
                            </li>
                            <li>
                                <a href="">Reviews</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="d-flex align-items-center justify-content-end">
                        <a href="" v-if="!isAuthorized" @click.prevent="$router.push({name: 'Login'})" class="account-link">Sign in</a>
                        <a href="" v-else class="account-link">My Account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import MainLogo from 'Components/MainLogo.vue';

export default {
    name: 'Header',
    components: {MainLogo},
    data() {
        return {

        }
    },
    mounted() {
        console.log(this.isAuthorized)
    },
    computed: {
        isAuthorized() {
            return this.$store.getters.isAuthorized;
        }
    }
}

</script>

<style scoped lang="scss">

.header {
    padding: 12px 0;
    border-bottom: 1px solid #EAEBF2;

    a {
        color: #000535;
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        font-weight: 700;
        text-decoration: none;
    }
}

.nav-bar {
    ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        padding-left: 0;
        margin-bottom: 0;

        li {
            margin-left: 32px;
        }
    }
}

@media screen and (max-width: 768px) {
    .nav-bar {
        display: none;
    }
}

</style>