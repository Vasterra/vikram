<template>
    <div class="main-search">
        <div class="search-content">
            <img :src="searchIcon" class="search-icon" alt="">
            <input type="text" class="search-input" placeholder="Search..." v-model="searchValue" @keyup="filterOptions" @focus="$store.dispatch('showSearchOptions')" @keyup.esc="showSearchOptions = false">
            <img :src="dropdownIcon" alt="">
            <div class="search-options" v-if="showSearchOptions">
                <div class="search-option" v-for="searchOption in searchOptions" :key="searchOption.id" @click="selectSearchOption(searchOption)" v-html="searchOption.name"></div>
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

            searchValue: null,
            requestHelper: RequestHelper,
            searchOptions: [],
            searchOptionsStorage: []

        }
    },
    mounted() {
        this.getCategories()
    },
    methods: {
        selectSearchOption(searchOption) {
            this.searchValue = searchOption.name;
            this.$store.dispatch('setCategoryId', searchOption.id)
            this.$store.dispatch('hideSearchOptions')
        },
        toQuestions() {
            this.$router.push({name: 'Rfq'})
        },
        getCategories() {
            this.requestHelper.get('categories').then(response => {
                if (response.data) {
                    this.searchOptions = response.data;
                    this.searchOptionsStorage = response.data;
                }
            }).catch(response => {
                console.log(response)
            }) 
        },
        filterOptions(e) {
            let searchValue = this.searchValue.trim();

            if (searchValue != '') {
                this.searchOptions = [];

                this.searchOptionsStorage.forEach(option => {
                    let optionPos = option.name.search(searchValue);

                    if (optionPos != -1) {
                        this.searchOptions.push(option);
                    }
                })
            } else {
                this.searchOptions =  this.searchOptionsStorage;
            }
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    .search-content {
        width: 80%;
        position: relative;

        .search-icon {
            margin-right: 18px;
        }

        .search-input {
            padding: 16px;
            margin-right: 32px;
            width: 88%;
            border: none;
            outline: none;
        }

        .search-options {
            position: absolute;
            top: 136%;
            left: -16px;
            width: 100%;
            background-color: #fff;
            padding: 6px 0;
            border-radius: 5px;
            max-height: 271px;
            overflow-y: auto;

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
}

@media screen and (max-width: 1400px) {
    .main-search {
        .search-content {
            width: 78%;

            .search-input {
                width: 80%;
            }
        }
    }
}

@media screen and (max-width: 1199px) {
    .main-search {
        .search-content {
            width: 74%;

            .search-input {
                margin-right: 0;
            }
        }
    }
}

@media screen and (max-width: 767px) {
    .main-search {
        display: none;
    }
}

</style>