<template>
    <div class="review">
        <div class="review-head">
            <img :src="review.image" alt="">
            <span class="reviewer-name">{{ review.name }}</span>
        </div>
        <div class="review-body">
            <p class="review-text">
                {{ review.text }}
            </p>
        </div>
        <div class="review-foot">
            <div class="review-estimation">
                <img :src="starIcon" alt="" class="review-star">
                <img :src="starIcon" alt="" class="review-star">
                <img :src="starIcon" alt="" class="review-star">
                <img :src="starIcon" alt="" class="review-star">
                <img :src="starIcon" alt="" class="review-star">
            </div>
        </div>
    </div>
</template>

<script>

import StarIcon from 'Images/star_icon.png';

export default {
    name: 'Review',
    props: {
        review: Object        
    },
    data() {
        return {
            starIcon: StarIcon,
        }
    }
}

</script>


<style scoped lang="scss">


.review {
    min-width: 357px;
    min-height: 196px;
    width: 32%;
    background-color: #fff;
    border: 1px solid #C8CADA;
    border-radius: 10px;
    padding: 16px;
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;

    .review-head {
        display: flex;
        align-items: center;

        img {
            margin-right: 8px;
        }

        .reviewer-name {
            color: #000535;
            font-weight: 700;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
        }
    }

    .review-body {
        flex-grow: 1;
        padding: 16px 0;

        .review-text {
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #8A8C94;
        }
    }

    .review-foot {
        .review-estimation {
            display: flex;
            justify-content: flex-end;
            align-items: center;

            .review-star {
                margin-right: 4px;
            }
        }
    }
}


</style>