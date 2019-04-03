import axios from 'axios'

try {
    axios.defaults.baseURL = '/yzshis'
} catch (e) {
    console.log(e)
}

function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params).then(
            respone => {
                resolve(respone.data)
            }
        ).catch(error => {
            console.log(error);
            reject(error);
        })
    })
}

export {
    fetch
}