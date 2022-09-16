<template>
    <div>
        <Header />
        <section class="main-slide-block" :style="'background-image: url(' + mainImage + ')'" @click="hideSearchOptions">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-9">
                        <h1 class="home-title">The entire industry at your finger tips</h1>
                        <MainSearch />
                    </div>
                    <div class="col-md-8">
                        <div class="advantages d-flex align-items-center justify-content-around">
                            <div class="advantage">
                                <img :src="walletIcon" alt="">
                                <span>100% Free Service</span>
                            </div>
                            <div class="advantage">
                                <img :src="likeIcon" alt="">
                                <span>Easy to use</span>
                            </div>
                            <div class="advantage">
                                <img :src="commisionIcon" alt="">
                                <span>No Commissions</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mobile-search-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <MobileSearch />
                    </div>
                </div>
            </div>
        </section>
        <section class="how-it-works">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-9">
                        <h3 class="section-title">How it works</h3>
                        <div class="features">
                            <img :src="lineImage" alt="" class="features-line">
                            <div class="feature-block">
                                <div class="feature">
                                    <div class="feature-label">
                                        <img :src="fileIcon" alt="">
                                        <span>request</span>
                                    </div>
                                    <h4 class="feature-title">
                                        Submit a request
                                        <i class="feature-title-number">01</i>
                                    </h4>
                                    <p class="feature-text">
                                        Submit a request and receive <br> 
                                        personalised quotes from a range <br>
                                        of trusted suppliers.
                                    </p>
                                </div>
                                <div class="feature">
                                    <img :src="letterImage" alt="" class="feature-image">
                                </div>
                            </div>
                            <div class="feature-block">
                                <div class="feature">
                                    <img :src="scalesImage" alt="" class="feature-image">
                                </div>
                                <div class="feature">
                                    <div class="feature-label">
                                        <img :src="likeBlueIcon" alt="">
                                        <span>comparison</span>
                                    </div>
                                    <h4 class="feature-title">
                                        Compare suppliers
                                        <i class="feature-title-number">02</i>
                                    </h4>
                                    <p class="feature-text">
                                        View an estimate, message, <br> 
                                        reviews and profile of each <br>
                                        supplier that gets in touch.
                                    </p>
                                </div>
                            </div>
                            <div class="feature-block">
                                <div class="feature">
                                    <div class="feature-label">
                                        <img :src="briefcaseIcon" alt="">
                                        <span>hire</span>
                                    </div>
                                    <h4 class="feature-title">
                                        Compare suppliers
                                        <i class="feature-title-number">03</i>
                                    </h4>
                                    <p class="feature-text">
                                        Call or message your favourite <br> 
                                        suppliers and hire the best. <br>
                                    </p>
                                </div>
                                <div class="feature">
                                    <img :src="handshakeImage" alt="" class="feature-image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ReviewSlider />
        <Footer />
    </div>
</template>

<script>

import Header from 'Components/Header.vue';
import MainSearch from 'Components/MainSearch.vue';
import MobileSearch from 'Components/MobileSearch.vue';
import ReviewSlider from 'Components/ReviewSlider.vue';
import Footer from 'Components/Footer.vue';

// Images import
import MainImage from 'Images/main_image.png'
import WalletIcon from 'Images/wallet_icon.png'
import CommisionIcon from 'Images/commision.png'
import LikeIcon from 'Images/like.png'
import FileIcon from 'Images/file.png'
import LikeBlueIcon from 'Images/like_blue.png'
import BriefcaseIcon from 'Images/briefcase.png'
import LetterImage from 'Images/letter.png'
import ScalesImage from 'Images/scales.png'
import HandshakeImage from 'Images/handshake.png'
import LineImage from 'Images/line.png'

export default {
    name: 'Home',
    components: {Header, MainSearch, MobileSearch, ReviewSlider, Footer},
    data() {
        return {
            // Images
            mainImage: MainImage,
            walletIcon: WalletIcon,
            likeIcon: LikeIcon,
            commisionIcon: CommisionIcon,
            fileIcon: FileIcon,
            likeBlueIcon: LikeBlueIcon,
            briefcaseIcon: BriefcaseIcon,
            letterImage: LetterImage,
            scalesImage: ScalesImage,
            handshakeImage: HandshakeImage,
            lineImage: LineImage,
        }
    },
    methods: {
        hideSearchOptions(e) {
            let target = e.target;
            let hasWrongTargetClass = target.classList.contains('main-search') || target.classList.contains('search-content') 
                || target.classList.contains('search-input') || target.classList.contains('search-icon') 
                || target.classList.contains('search-options') || target.classList.contains('search-option');
                

            if (!hasWrongTargetClass) {
                this.$store.dispatch('hideSearchOptions')
            }
        }
    }
}

</script>


<style scoped lang="scss">

.main-slide-block {
    height: 653px;
    display: flex;
    justify-content: center;
    background-size: cover;
    background-position: center;
}

.home-title {
    color: #fff;
    text-align: center;
    font-weight: 700;
    font-size: 36px;
    margin-top: 8.5%;
    margin-bottom: 40px;
}

.advantage {
    font-weight: 600;
    font-size: 18px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;

    img {
        margin-right: 10px;
    }
}

.how-it-works {
    padding: 64px 0;
    background-color: #fff;
}

.features {
    position: relative;

    .feature-block {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        .feature {
            width: 50%;
            margin-bottom: 70px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            .feature-label {
                padding: 6px 18px;
                background: #ECF1FF;
                border-radius: 40px;
                display: flex;
                align-items: center;
                font-size: 14px;
                color: #5A59D7;
                font-weight: 700;
                font-family: 'Open Sans', sans-serif;
                margin-bottom: 10px;

                img {
                    margin-right: 10px;
                }
            }

            .feature-title {
                font-weight: 600;
                font-size: 24px;
                color: #000535;
                position: relative;
                z-index: 1;
            }

            .feature-title-number {
                position: absolute;
                right: -40px;
                bottom: -10px;
                z-index: -1;
                color: #EAEBF2;
                font-style: normal;
                font-weight: 700;
                font-size: 60px;
            }

            .feature-text {
                font-weight: 500;
                font-size: 18px;
                color: #8A8C94;
            }
        }
    }

    .features-line {
        position: absolute;
        left: -90px;
        top: 70px;
    }
}

@media screen and (max-width: 1399px) {
    .features {
        .feature-block {
            div:nth-of-type(2) {
                align-items: center;
            }
        }
    }
}

@media screen and (max-width: 991px) {
    .advantages {

        .advantage {
            font-size: 14px;
        }
    }
}

@media screen and (max-width: 767px) {
    .home-title {
        font-size: 24px;
        margin-top: 51px;
        margin-bottom: 16px;
    }

    .main-slide-block {
        height: 241px;
    }

    .advantages {
        flex-direction: column;

        .advantage {
            min-width: 30%;
        }
    }

    .features {
        .feature-block {
            flex-direction: column;
            align-items: center;

            .feature {
                margin-bottom: 32px;
                width: 100%;
                align-items: flex-start !important;

                .feature-text {
                    font-size: 14px;

                    br {
                        display: none;
                    }
                }

                .feature-label {
                    font-size: 12px;
                }

                .feature-title {
                    font-size: 16px;
                }

                .feature-title-number {
                    font-size: 40px;
                    right: -25px;
                }
            }
        }

        div:nth-of-type(2) {
            flex-direction: column-reverse;
        }
    }

    .features-line {
        display: none;
    }
}

@media screen and (max-width: 724px) {
    
}

</style>