<template>
    <div>
        <Header />
        <section class="result-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="section-title-2">Results</h3>
                        <div class="result-block">
                            <div class="result" v-for="result in results" :key="result.id">
                                <h4 class="result-title">{{ result.title }}</h4>
                                <div class="result-details">
                                    <div class="contact-details">
                                        <p>
                                            <img :src="phoneIcon" alt="" class="detail-icon">
                                            <span>{{ result.phone }}</span>
                                        </p>
                                        <p>
                                            <img :src="smsIcon" alt="" class="detail-icon">
                                            <span>{{ result.email }}</span>
                                        </p>
                                    </div>
                                    <div class="location-details">
                                        <p>
                                            <img :src="locationIcon" alt="" class="detail-icon">
                                            <span>{{ result.address }}</span>
                                        </p>
                                        <p>
                                            <img :src="routingIcon" alt="" class="detail-icon">
                                            <span>{{ result.distance }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>

import Header from 'Components/Header.vue';
import resultsData from 'Data/result.js';

// Import images
import PhoneIcon from 'Images/phone_icon.png';
import LocationIcon from 'Images/location_icon.png';
import SmsIcon from 'Images/sms_icon.png';
import RoutingIcon from 'Images/routing_icon.png';

export default {
    name: 'Result',
    components: {Header},
    data() {
        return {
            // Images
            phoneIcon: PhoneIcon,
            locationIcon: LocationIcon,
            smsIcon: SmsIcon,
            routingIcon: RoutingIcon,

            results: resultsData
        }
    }
}

</script>


<style scoped lang="scss">

.result-section {
    padding: 40px 0;
    background-color: #F9FAFF;
    min-height: 91vh;
    position: relative;
}

.result-block {
    background-color: #fff;
    border: 1px solid #C8CADA;
    border-radius: 5px;

    div:last-of-type {
        border-bottom: none;
    }

    .result {
        border-bottom: 1px solid #C8CADA;
        padding: 16px;

        .result-title {
            font-size: 18px;
            color: #000535;
            font-family: 'Open Sans', sans-serif;
            margin-bottom: 16px;
            font-weight: 600;
        }

        .result-details {
            display: flex;
            font-family: 'Open Sans', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            color: #8A8C94;

            div {
                margin-right: 27px;

                p {
                    display: flex;
                    align-items: center;
                    margin-bottom: 4px;

                    img {
                        margin-right: 9px;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .result {
        .result-details {
            flex-direction: column;

            div {
                margin-right: 0;
            }
        }
    }
}

</style>