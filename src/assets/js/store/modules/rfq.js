export default {
    state: {
        categoryId: null, 
        measuring: null,
        thermocoupleType: null,
        outputType: null,
        displaySize: null,
        otherReqsText: null,
        uploadedFiles: [],
        uploadedImages: [],
    },
    getters: {
        rfqData(state) {
            return {
                measuring: state.measuring,
                thermocoupleType: state.thermocoupleType,
                outputType: state.outputType,
                displaySize: state.displaySize,
                otherReqsText: state.otherReqsText,
                uploadedFiles: state.uploadedFiles,
                uploadedImages: state.uploadedImages,
                categoryId: state.categoryId
            }
        },
        selectedCategoryId(state) {
            return state.categoryId;
        }
    },
    mutations: {
        SET_RFQ_DATA(state, payload) {
            state.measuring = payload.measuring;
            state.thermocoupleType = payload.thermocoupleType;
            state.outputType = payload.outputType;
            state.displaySize = payload.displaySize;
            state.otherReqsText = payload.otherReqsText;
            state.uploadedFiles = payload.uploadedFiles;
            state.uploadedImages = payload.uploadedImages;
        },
        SET_CATEGORY_ID(state, payload) {
            state.categoryId = payload;
        }
    },
    actions: {
        setRfqData({commit}, payload) {
            commit('SET_RFQ_DATA', payload);
        },
        setCategoryId({commit}, payload) {
            commit('SET_CATEGORY_ID', payload);
        }
    }
}