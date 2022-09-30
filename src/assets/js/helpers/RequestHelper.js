const axios = require('axios').default;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

const RequestHelper = {
    request: axios.create({
        baseURL: 'http://185.137.233.223:8049/api/',
        timeout: 5000,
        headers: {'Content-Type': 'application/json'}
    }),
    authorizeParams(params = {}) {
        params.api_token = localStorage.getItem('api_token');
        return params;
    },
    get(uri, params = {}, authotize = true) {
        if (authotize) {
            params = this.authorizeParams(params);
        }

        uri = uri + '?' + new URLSearchParams(params).toString()

        return this.request.get(uri)
    },
    post(uri, params = {}, authotize = true, config = {}) {
        if (authotize) {
            params = this.authorizeParams(params);
        }

        if (config.headers && this.hasContentType(config.headers, 'multipart/form-data')) {
            params = this.makeFormData(params)
        }
        console.log(params.getAll('uploadedImages'))

        return this.request.post(uri, params, config)
    },
    put(uri, params = {}, authotize = true, config = {}) {
        if (authotize) {
            params = this.authorizeParams(params);
        }

        if (config.headers && this.hasContentType(config.headers, 'multipart/form-data')) {
            params = this.makeFormData(params)
        }

        return this.request.put(uri, params, config)
    },
    delete(uri, params = {}, authotize = true) {
        if (authotize) {
            params = this.authorizeParams(params);
        }

        uri = uri + '?' + new URLSearchParams(params).toString()

        return this.request.delete(uri)
    },
    makeFormData(params) {
        let formData = new FormData();

        for (const [key, value] of Object.entries(params)) {
            if (Array.isArray(value)) {
                let index = 0;

                value.forEach(item => {
                    formData.append(`${key}[${index}]`, item);
                    index++;
                })
            } else {
                formData.append(key, value)
            }
        }

        return formData;
    },
    hasContentType(headers, contentType) {
        return headers['Content-Type'] && headers['Content-Type'] == contentType
    }
}

export default RequestHelper;