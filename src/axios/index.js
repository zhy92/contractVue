import axios from "axios";
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

axios.interceptors.request.use(function(config) {
        return config;
    },
    function(error) {
        console.log('shibai22222')
        return Promise.reject(error);
    })

axios.interceptors.response.use(function(response) {
        return response.data;
    },
    function(error) {
        console.log('shibai')
        return Promise.reject(error);
    })

axios.defaults.baseURL = 'http://localhost:1000/';
axios.defaults.headers.common['Authorization'] = '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const httpServer = (opts, data) => {
    let publicParams = {
        v: '1.0.9'
    };
    let httpDefaultOptions = {
        method: opts.method,
        url: opts.url,
        params: Object.assign(publicParams, data),
        data: JSON.stringify(data),
        headers: {}
    };
    if (opts.method == 'get') {
        delete httpDefaultOptions.data;
    } else {
        delete httpDefaultOptions.params;
    }
    let promise = new Promise(function(resolve, reject) {
        axios(httpDefaultOptions).then(
            (res) => {
                resolve(res)
            }
        ).catch(
            (response) => {
                reject(response)
            }
        )
    })
    return promise;
};

export default httpServer;