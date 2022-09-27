<template>
    <div>
        <Header />
        <ProgressBar :percent="percent" />
        <section class="poll-section">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8">
                        <!-- <div class="poll-content" v-if="step == 1">
                            <h3 class="poll-title">Do you have a manufacturer name or part number?</h3>
                            <div class="poll-actions d-flex justify-content-center">
                                <button class="poll-btn btn-transparent mar-r-24" @click="hasManufacturerName = false; stepNext()">No</button>
                                <button class="poll-btn btn-blue" @click="hasManufacturerName = true; stepNext()">Yes</button>
                            </div>
                        </div>
                        <div class="poll-content" v-if="step == 2">
                            <h3 class="poll-title">Enter manufacturer name or part number</h3>
                            <div class="poll-actions d-flex justify-content-center">
                                <input type="text" placeholder="Manufacturer name or part number" v-model="manufacturerName" class="poll-input">
                            </div>
                        </div> -->
                        <div class="poll-content" v-if="step == 1">
                            <h3 class="poll-title">Select measuring temperature range or probe type</h3>
                            <div class="poll-actions d-flex justify-content-center">
                                <div class="poll-questions-block">
                                    <div class="poll-option" :class="isOptionSelected(measuring, 'Thermocouple')" @click="selectOption('measuring', 'Thermocouple')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Thermocouple</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(measuring, 'RTD')" @click="selectOption('measuring', 'RTD')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">RTD</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(measuring, 'Thermistor')" @click="selectOption('measuring', 'Thermistor')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Thermistor</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(measuring, 'Other')" @click="selectOption('measuring', 'Other')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Other</p>
                                        </div>
                                        <input type="text" class="form-control" v-if="isOtherOptionSelected" v-model="measuring">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="poll-content" v-if="step == 2">
                            <h3 class="poll-title">Enter Thermocouple Type if available or skip</h3>
                            <div class="poll-actions d-flex justify-content-center">
                                <input type="text" placeholder="Thermocouple Type" v-model="thermocoupleType" class="poll-input">
                            </div>
                        </div>
                        <div class="poll-content" v-if="step == 3">
                            <h3 class="poll-title">Output Type</h3>
                            <div class="poll-actions d-flex justify-content-center">
                                <div class="poll-questions-block">
                                    <div class="poll-option" :class="isOptionSelected(outputType, 'Relay')" @click="selectOption('outputType', 'Relay')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Relay</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(outputType, 'SSR')" @click="selectOption('outputType', 'SSR')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">SSR</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(outputType, 'DC')" @click="selectOption('outputType', 'DC')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">DC</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(outputType, 'Other')" @click="selectOption('outputType', 'Other')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Other</p>
                                        </div>
                                        <input type="text" class="form-control" v-if="isOtherOptionSelected" v-model="outputType">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="poll-content" v-if="step == 4">
                            <h3 class="poll-title">Display Size Requirement</h3>
                            <div class="poll-actions d-flex justify-content-center">
                                <div class="poll-questions-block">
                                    <div class="poll-option" :class="isOptionSelected(displaySize, '1/4')" @click="selectOption('displaySize', '1/4')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">1/4</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(displaySize, '1/8')" @click="selectOption('displaySize', '1/8')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">1/8</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(displaySize, '1/16')" @click="selectOption('displaySize', '1/16')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">1/16</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(displaySize, 'Larger')" @click="selectOption('displaySize', 'Larger')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Larger</p>
                                        </div>
                                    </div>
                                    <div class="poll-option" :class="isOptionSelected(displaySize, 'Other')" @click="selectOption('displaySize', 'Other')">
                                        <div class="option-content">
                                            <div class="poll-check">
                                                <span></span>
                                            </div>
                                            <p class="question-text">Other</p>
                                        </div>
                                        <input type="text" class="form-control" v-if="isOtherOptionSelected" v-model="displaySize">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="poll-content" v-if="step == 5">
                            <h3 class="poll-title">Other requirements</h3>
                            <div class="poll-actions">
                                <textarea class="poll-textarea" v-model="otherReqsText" placeholder="Enter text"></textarea>
                                <div class="poll-images-block" v-if="uploadedImagesData.length">
                                    <div class="uploaded-image" v-for="image in uploadedImagesData" :key="image.src" :style="'background-image: url('+ image.src +')'">
                                        <div class="uploaded-image-wrap">
                                            <button class="delete-image" @click="deleteUploadedImage(image.src)">
                                                <img :src="closeIconWhite" alt="">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="poll-files-block" v-if="uploadedFilesData.length">
                                    <div class="uploaded-file" v-for="file in uploadedFilesData" :key="file.src">
                                        <img :src="uploadedFileIcon" alt="">
                                        <div class="file-info">
                                            <span class="file-name">{{ file.name }}</span>
                                            <span class="file-size">{{ file.size }} MB</span>
                                        </div>
                                        <button class="delete-file" @click="deleteUploadedFile(file.src)">
                                            <img :src="closeIconGray" alt="">
                                        </button>
                                    </div>
                                </div>
                                <div class="poll-uploads-block">
                                    <label for="imageUpload" class="image-upload">
                                        <img :src="galleryAddIcon" alt="">
                                        <input type="file" id="imageUpload" @change="uploadImage">
                                    </label>
                                    <label for="fileUpload" class="file-upload">
                                        <img :src="folderAddIcon" alt="">
                                        <input type="file" id="fileUpload" @change="uploadFile">
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="poll-navigation">
                <div class="container">
                    <div class="row">
                        <div class="col-12 d-flex justify-content-center">
                            <button class="poll-btn poll-prev" @click="stepPrev">
                                <img :src="prevIcon" class="mar-r-10" alt="">
                                <span>Back</span>
                            </button>
                            <button class="poll-btn poll-next" @click="stepNext">
                                <span class="mar-r-10">Next</span>
                                <img :src="nextIcon" alt="">
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import Header from 'Components/Header.vue';
import ProgressBar from 'Components/ProgressBar.vue';

// Import images
import PrevIcon from 'Images/prev_icon.png';
import NextIcon from 'Images/next_icon.png';
import FolderAddIcon from 'Images/folder-add_icon.png';
import GalleryAddIcon from 'Images/gallery-add_icon.png';
import UploadedFileIcon from 'Images/uploaded_file.png';
import CloseIconWhite from 'Images/close_icon_white.png';
import CloseIconGray from 'Images/close_icon_gray.png';

export default {
    name: 'Rfq',
    components: {Header, ProgressBar},
    data() {
        return {
            // Images
            prevIcon: PrevIcon,
            nextIcon: NextIcon,
            folderAddIcon: FolderAddIcon,
            galleryAddIcon: GalleryAddIcon,
            uploadedFileIcon: UploadedFileIcon,
            closeIconWhite: CloseIconWhite,
            closeIconGray: CloseIconGray,

            step: 1,
            stepsCount: 5,
            percent: 0,
            hasManufacturerName: false,
            manufacturerName: null,
            measuring: null,
            thermocoupleType: null,
            outputType: null,
            displaySize: null,
            otherReqsText: null,
            isOtherOptionSelected: false,
            uploadedFiles: [],
            uploadedImages: [],
            uploadedFilesData: [],
            uploadedImagesData: [],
        }
    },
    mounted() {
        this.setProgress();
    },
    methods: {
        stepNext() {
            if (this.step >= this.stepsCount) {
                this.setRfqData();
                this.$router.push({name: 'Result'});
                return false;
            }

            if (this.measuring != 'Thermocouple' && this.step == 1) {
                this.step += 2;
                this.setProgress();

                return true;
            }

            this.step++;
            this.setProgress();
        },
        stepPrev() {
            if (this.step <= 1) {
                this.$router.push({name: 'Home'});
                return false;
            }

            if (this.measuring != 'Thermocouple' && this.step == 3) {
                this.step -= 2;
                this.setProgress();

                return true;
            }

            this.step--;
            this.setProgress();
        },
        setProgress() {
            this.percent = (this.step * 100) / this.stepsCount;
        },
        isValid() {

        },
        isOptionSelected(property, value) {
            return property == value ? 'selected' : null;
        },
        selectOption(propertyName, value) {
            this[propertyName] = value;

            this.isOtherOptionSelected = value == 'Other';
        },
        uploadImage(e) {
            let image = this.upload(e);

            if (image) {
                this.uploadedImages.push(image);
                this.uploadedImagesData.push(this.processUploadedData(image));
            }
        },
        uploadFile(e) {
            let file = this.upload(e);

            if (file) {
                this.uploadedFiles.push(file);
                this.uploadedFilesData.push(this.processUploadedData(file));
            }
        },
        upload(uploadEvent) {
            return uploadEvent.target.files && uploadEvent.target.files.length ? uploadEvent.target.files[0] : false
        },
        processUploadedData(file) {
            return {
                name: file.name,
                size: (file.size / 1024 / 1024).toFixed(1),
                src: URL.createObjectURL(file)
            }
        },
        deleteUploadedImage(src) {
            this.uploadedImages = this.uploadedImages.filter(item => item.src != src);
        },
        deleteUploadedFile(src) {
            this.uploadedFiles = this.uploadedFiles.filter(item => item.src != src)
        },
        setRfqData() {
            this.$store.dispatch('setRfqData', {
                measuring: this.measuring,
                thermocoupleType: this.thermocoupleType,
                outputType: this.outputType,
                displaySize: this.displaySize,
                otherReqsText: this.otherReqsText,
                uploadedFiles: this.uploadedFiles,
                uploadedImages: this.uploadedImages,
            })
        }

    }
}

</script>


<style scoped lang="scss">

.poll-section {
    padding: 40px 0;
    background-color: #F9FAFF;
    min-height: 91vh;
    position: relative;
}

.poll-navigation {
    position: fixed;
    width: 100%;
    background-color: #fff;
    left: 0;
    bottom: 0;
    padding: 24px 0;
}

.poll-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    border-radius: 5px;
    border: 2px solid #34338A;
    padding: 12px 0;
    width: 152px;
}

.poll-prev {
    background-color: transparent;
    color: #34338A;
    margin-right: 24px;
}

.poll-next {
    background-color: #34338A;
    color: #fff;
}

.poll-content {
    display: flex;
    align-items: center;
    flex-direction: column;

    .poll-title {
        margin-bottom: 40px;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 20px;
        color: #000535;
    }

    .poll-actions {
        width: 100%;

        .poll-input {
            border: 1px solid #C8CADA;
            border-radius: 5px;
            background-color: #fff;
            padding: 8px;
            width: 100%;
            font-size: 14px;
            outline: none
        }

        .poll-questions-block {
            width: 100%;
            background: #FFFFFF;
            border: 1px solid #C8CADA;
            border-radius: 5px;
            overflow: hidden;

            .poll-option {
                border-bottom: 1px solid #C8CADA;
                padding: 16px;
                font-size: 14px;
                font-family: 'Open Sans', sans-serif;
                font-weight: 600;
                cursor: pointer;

                .option-content {
                    display: flex;
                    align-items: center;

                    p {
                        margin-bottom: 0;
                    }

                    .poll-check {
                        width: 18px;
                        height: 18px;
                        border: 2px solid #C8CADA;
                        border-radius: 50%;
                        margin-right: 16px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }

                input {
                    margin-top: 16px;
                }
            }

            div:last-of-type {
                border-bottom: none;
            }
        }

        .poll-option.selected {
            .option-content {
                .poll-check {
                    border-color: #5A59D7;

                    span {
                        width: 8px;
                        height: 8px;
                        border-radius: 50%;
                        background-color: #5A59D7;
                        display: block;
                    }
                }
            }
        }

        .poll-textarea {
            width: 100%;
            height: 150px;
            padding: 8px;
            background-color: #fff;
            border: 1px solid #C8CADA;
            border-radius: 5px;
            font-size: 14px;
            margin-bottom: 10px;
        }

        .poll-textarea:focus {
            outline: none;
        }

        .poll-uploads-block {
            display: flex;

            label {
                margin-right: 20px;
                cursor: pointer;

                input {
                    display: none;
                }
            }
        }

        .poll-images-block {
            display: flex;
            // justify-content: space-between;
            flex-wrap: wrap;
            margin-bottom: 16px;

            .uploaded-image {
                width: 32%;
                min-width: 177px;
                height: 100px;
                background-size: cover;
                background-position: center;
                background-color: #C8CADA;
                margin-right: 8px;

                .uploaded-image-wrap {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.3);

                    .delete-image {
                        position: absolute;
                        right: 5px;
                        top: 5px;
                        background-color: transparent;
                        border: none;
                        outline: none;
                        cursor: pointer;
                    }
                }
            }
        }

        .poll-files-block {
            display: flex;
            flex-wrap: wrap;
            border-bottom: 1px solid #EAEBF2;
                padding-bottom: 25px;
                margin-bottom: 25px;

            .uploaded-file {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                margin-right: 8px;

                img {
                    margin-right: 10px;
                }

                .file-info {
                    display: flex;
                    flex-direction: column;
                    margin-right: 17px;

                    .file-name {
                        font-family: 'Open Sans', sans-serif;
                        font-size: 14px;
                        font-weight: 700;
                        color: #000535;
                    }

                    .file-size {
                        font-family: 'Open Sans', sans-serif;
                        font-size: 12px;
                        font-weight: 400;
                        color: #000535;
                    }
                }

                .delete-file {
                    background-color: transparent;
                    border: none;
                    outline: none;
                    cursor: pointer;

                    img {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}

</style>