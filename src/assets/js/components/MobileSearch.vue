<template>
    <div class="main-search">
        <div class="search-content">
            <img :src="searchIcon" class="search-icon" alt="">
            <input type="text" class="search-input" placeholder="Search..." v-model="searchValue" @focus="$store.dispatch('showSearchOptions')" @keyup.esc="showSearchOptions = false">
            <img :src="dropdownIcon" alt="">
            <div class="search-options" v-if="showSearchOptions">
                <div class="search-option" v-for="searchOption in searchOptions" :key="searchOption.id" @click="selectSearchOption(searchOption.name)">{{ searchOption.name }}</div>
            </div>
        </div>
        <button class="btn search-btn" @click="toQuestions">Get Started</button>
    </div>
</template>

<script>

import SearchIcon from 'Images/search-normal.png';
import DropdownIcon from 'Images/arrow-down.png';

import RequestHelper from 'Helpers/RequestHelper';

export default {
    name: 'MainSearch',
    data() {
        return {
            // Images
            searchIcon: SearchIcon,
            dropdownIcon: DropdownIcon,

            showSearchOptions: false,
            searchValue: null,
            requestHelper: RequestHelper,
            searchOptions: []
        }
    },
    mounted() {
        this.getCategories()
    },
    methods: {
        selectSearchOption(optionValue) {
            this.searchValue = optionValue;
            this.$store.dispatch('hideSearchOptions')
        },
        toQuestions() {
            this.$router.push({name: 'Rfq'})
        },
        getCategories() {
            this.requestHelper.get('categories').then(response => {
                if (response.data) {
                    this.searchOptions = response.data;
                }
            }).catch(response => {
                console.log(response)
            }) 
        }
    },
    computed: {
        showSearchOptions() {
            return this.$store.getters.showSearchOptions;
        }
    }
}

</script>


<style scoped lang="scss">

.main-search {
    background-color: #fff;
    padding: 16px;
    border-radius: 10px;
    display: none;
    flex-direction: column;
    margin-bottom: 24px;

    .search-content {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        border: 1px solid #C8CADA;
        border-radius: 10px;
        padding: 20px;
        margin-bottom: 16px;

        .search-icon {
            margin-right: 18px;
        }

        .search-input {
            margin-right: 32px;
            width: 90%;
            border: none;
            outline: none;
        }

        .search-options {
            position: absolute;
            top: 104%;
            left: 0;
            width: 100%;
            background-color: #fff;
            padding: 6px 0;
            border-radius: 5px;
            max-height: 271px;
            overflow-y: auto;
            box-shadow: 0px 0px 20px rgba(19, 41, 86, 0.08);

            .search-option {
                cursor: pointer;
                padding: 8px 16px;
                color: #000535;
                font-size: 14px;
                font-family: 'Open Sans', sans-serif;
                font-weight: 600;
            }

            .search-option:hover {
                background-color: #EAEBF2;
            }
        }
    }
}

.search-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 21px 42px;
    background: linear-gradient(278.65deg, #5958BE 0%, #34338A 94.11%);
    border-radius: 5px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    width: 100%;
}

@media screen and (max-width: 767px) {
    .main-search {
        display: flex;
        margin-bottom: 0;
    }
}

</style>