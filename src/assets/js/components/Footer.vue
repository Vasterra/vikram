<template>
    <footer>
        <div class="footer-top">
            <div class="footer-menu">
                <div class="d-flex justify-content-center align-items-center">
                    <a href="" class="footer-menu-link">How it works</a>
                    <a href="" class="footer-menu-link">Reviews</a>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                    <a href="" class="footer-menu-link mr-1">Terms of Use</a>
                    <a href="" class="footer-menu-link">Privacy Policy</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom d-flex justify-content-center">
            <p class="copyright">© 2022 BIDS</p>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    data() {
        return {

        }
    }
}

</script>


<style scoped lang="scss">

footer {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;

    .footer-top {
        padding: 24px 0;
        color: #fff;
        background-color: #000535;

        .footer-menu-link {
            text-decoration: none;
            color: inherit;
            margin-right: 32px;
            margin-bottom: 16px;
        }

        .footer-menu div:last-of-type {
            .footer-menu-link {
                margin-bottom: 0;
            }
        }
    }

    .footer-bottom {
        padding: 16px 0;
        background-color: #000747;

        .copyright {
            margin-bottom: 0;
            color: #fff;
        }
    }
}

</style>