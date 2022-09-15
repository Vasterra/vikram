<template>
    <section class="login-section">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="login-header">
                        <MainLogo @click="$router.push({name: 'Home'})"/>
                    </div>
                    <div class="login-content">
                        <div class="login-block">
                            <h2 class="login-title mar-b-32">Sign In</h2>
                            <div class="form-group mb-3">
                                <input type="text" placeholder="Username" class="form-control form-input" :class="[{error_input: isAuthError}]" v-model="username">
                            </div>
                            <div class="form-group mb-3 relative-block">
                                <span class="show-password-btn" @click="togglePasswordType">
                                    <img :src="passwordIcon" alt="">
                                </span>
                                <input :type="passwordType" placeholder="Password" class="form-control form-input" :class="[{error_input: isAuthError}]" v-model="password">
                            </div>
                            <div v-if="isAuthError" class="error-message d-flex align-items-center">
                                <img :src="errorIcon" alt="">
                                <span>Invalid username or password</span>
                            </div>
                            <div class="form-group mar-t-32">
                                <button class="btn login-btn" @click="login">Log In</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import MainLogo from 'Components/MainLogo.vue';
import ShowPasswordIcon from 'Images/show_passwd.png';
import HidePasswordIcon from 'Images/hide_passwd.png';
import ShieldCrossIcon from 'Images/shield-cross.png';

export default {
    name: 'Login',
    components: {MainLogo},
    data() {
        return {
            passwordIcon: ShowPasswordIcon,
            passwordType: 'password',
            errorIcon: ShieldCrossIcon,
            isAuthError: false,
            username: null,
            password: null,
            authName: 'admin',
            authPassword: 'admin'
        }
    },
    methods: {
        togglePasswordType() {
            if (this.passwordType == 'password') {
                this.passwordType = 'text';
                this.passwordIcon = HidePasswordIcon;
            } else {
                this.passwordType = 'password';
                this.passwordIcon = ShowPasswordIcon;
            }
        },
        login() {
            if (!this.validate()) {
                this.isAuthError = true;

                return false;
            }

            localStorage.setItem('user_token', 'test_token')
            this.$store.dispatch('setAuthorized')
            this.$router.push({name: 'Home'});
        },
        validate() {
            return this.username && this.password && this.username == this.authName && this.password == this.authPassword;
        }
    }
}

</script>


<style lang="scss" scoped>

.login-header {
    padding: 12px 0;
    margin-bottom: 20%;
}

.login-section {
    background-color: #F9FAFF;
    height: 100vh;

    .login-content {
        display: flex;
        justify-content: center;
        align-items: center;

        .login-block {
            width: 364px;
            background-color: #fff;
            box-shadow: 0px 0px 20px rgba(19, 41, 86, 0.08);
            border-radius: 10px;
            padding: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            .login-title {
                color: #000535;
                font-size: 24px;
                font-weight: 600;
                text-align: center;
            }

            .form-group {
                width: 100%;

                .form-input {
                    font-size: 14px;
                }
            }

            .relative-block {
                .show-password-btn {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                }
            }

            .login-btn {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 12px 16px;
                background-color: #34338A;
                color: #fff;
                border-radius: 5px;
                font-weight: 600;
                font-size: 14px;
                cursor: pointer;
            }

            .error-message {
                width: 100%;
                background: #FFF3F3;
                border-radius: 5px;
                padding: 10px;
                color: #F64242;
                font-size: 12px;

                img {
                    margin-right: 10px;
                }
            }

            .error_input {
                border-color: #F64242;
            }
        }
    }
}

@media screen and (max-width: 410px) {
    .login-block {
        box-shadow: none !important;
        width: 100%;
        border-radius: 0;
    }

    .login-section {
        background-color: #fff;
    }
}

</style>
