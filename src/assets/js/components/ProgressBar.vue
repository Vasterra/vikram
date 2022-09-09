<template>
    <div class="progress-block">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="progress-line">
                        <div class="progress-fill" :style="{width: percent + '%'}"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProgressBar',
    props: {
        percent: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            
        }
    },
    created() {
        
    }
}

</script>


<style scoped lang="scss">

.progress-block {
    padding: 16px 0;
    border-bottom: 1px solid #EAEBF2;

    .progress-line {
        height: 6px;
        border-radius: 10px;
        overflow: hidden;
        border: 1px solid #EAEBF2;

        .progress-fill {
            // width: 20%;
            height: 100%;
            border-radius: 10px;
            background-color: #5A59D7;
            transition: all ease 0.4s;
        }
    }
}

</style>