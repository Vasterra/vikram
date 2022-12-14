<template>
    <section class="reviews-section" v-if="reviews.length">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h3 class="section-title">Reviews</h3>
                    <div class="reviews">
                        <div class="reviews-slider">
                            <div class="reviews-wrapper">
                                <div class="review-block" v-for="(reviewBlock, index) in reviews" :key="index">
                                    <Review v-for="review in reviewBlock" :key="review.id" :review="review" />
                                </div>
                            </div>
                        </div>
                        <button class="review-prev" @click="sliderPrev">
                            <img :src="arrowLeftIcon" alt="">
                        </button>
                        <button class="review-next" @click="sliderNext">
                            <img :src="arrowRightIcon" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

// Import images
import ArrowLeftIcon from 'Images/arrow-left.png';
import ArrowRightIcon from 'Images/arrow-right.png';
import ReviewImage1 from 'Images/review1.png';
import ReviewImage2 from 'Images/review2.png';
import ReviewImage3 from 'Images/review3.png';
import ReviewImage4 from 'Images/review4.png';
import ReviewImage5 from 'Images/review5.png';
import ReviewImage6 from 'Images/review6.png';

import Review from 'Components/Review.vue';
import RequestHelper from 'Helpers/RequestHelper.js';

export default {
    name: 'ReviewSlider',
    components: {Review},
    data() {
        return {
            arrowLeftIcon: ArrowLeftIcon,
            arrowRightIcon: ArrowRightIcon,

            sliderSettings: {
                reviewsSlider: null,
                reviewsWrapper: null,
                reviewBlocks: null,
                reviewsWrapperWidth: 0,
                slideMove: 0
            },
            reviews: [],
            elementsPerBlock: 6,
            requestHelper: RequestHelper
        }
    },
    mounted() {
        this.getReviews()
    },
    methods: {
        setSliderSettings() {
            this.sliderSettings.reviewsSlider = document.querySelector('.reviews-slider');
            this.sliderSettings.reviewsWrapper = document.querySelector('.reviews-wrapper');
            this.sliderSettings.reviewBlocks = document.querySelectorAll('.review-block');
            this.sliderSettings.reviewsWrapperWidth = 0;

            this.sliderSettings.reviewBlocks.forEach(reviewBlock => {
                reviewBlock.style.width = this.sliderSettings.reviewsSlider.clientWidth + 'px';
                this.sliderSettings.reviewsWrapperWidth += this.sliderSettings.reviewsSlider.clientWidth;
            })

            this.sliderSettings.reviewsWrapper.style.width = this.sliderSettings.reviewsWrapperWidth + 'px';
        },
        sliderNext() {
            if (Math.abs(this.sliderSettings.slideMove) >= (this.sliderSettings.reviewsWrapperWidth - this.sliderSettings.reviewsSlider.clientWidth)) {
                return false;
            }
            
            this.sliderSettings.slideMove -= this.sliderSettings.reviewsSlider.clientWidth;
            this.sliderSettings.reviewsWrapper.style.marginLeft = `${this.sliderSettings.slideMove}px`;
        },
        sliderPrev() {
            if (this.sliderSettings.slideMove >= 0) {
                return false;
            }

            this.sliderSettings.slideMove += this.sliderSettings.reviewsSlider.clientWidth
            this.sliderSettings.reviewsWrapper.style.marginLeft = `${this.sliderSettings.slideMove}px`;
        },
        groupReviews() {
            let reviews = [];
            let group = [];
            let iteration = 1;

            this.reviews.forEach(review => {
                group.push(review);

                if (iteration%this.elementsPerBlock == 0) {
                    reviews.push(group);
                    group = [];
                }

                iteration++;
            });

            this.reviews = reviews;
        },
        setElementsPerBlock() {
            if (window.innerWidth <= 1199 && window.innerWidth > 991) {
                this.elementsPerBlock = 4;
            } else if (window.innerWidth <= 991) {
                this.elementsPerBlock = 2;
            }
        },
        getReviews() {
            this.requestHelper.get('reviews').then(response => {
                if (response.data) {
                    this.reviews = response.data;
                    this.setElementsPerBlock();
                    this.groupReviews();
                    
                    setTimeout(() => {
                        this.setSliderSettings();
                    }, 1000)
                }
            }).catch(response => {
                console.log(response)
            })
        }
    }
}

</script>


<style scoped lang="scss">

.reviews-section {
    padding: 50px 0;
    background-color: #F9FAFF;
}

.reviews {
    position: relative;

    .reviews-slider {
        overflow-x: hidden;

        .reviews-wrapper {
            display: flex;
            transition: all ease 0.4s;

            .review-block {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }
        }
    }

    .review-prev, .review-next {
        position: absolute;
        top: 45%;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }

    .review-prev {
        left: -7%;
    }

    .review-next {
        right: -7%;
    }
}


@media screen and (max-width: 1480px) {
    .reviews {
        .review-prev {
            left: -4%;
        }

        .review-next {
            right: -4%;
        }
    }
    
}

@media screen and (max-width: 1199px) {
    .reviews {
        .reviews-slider {
            .reviews-wrapper {
                .review-block {
                    justify-content: space-around;
                }
            }
        }
    }
}

@media screen and (max-width: 991px) {
    .reviews {
        .review-prev {
            left: 15%;
        }

        .review-next {
            right: 15%;
        }
    }
    
}

@media screen and (max-width: 767px) {
    .reviews {
        .review-prev {
            left: 5%;
        }

        .review-next {
            right: 5%;
        }
    }
    
}

</style>