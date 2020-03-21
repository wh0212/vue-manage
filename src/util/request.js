import axios from "axios"

const Request = (params) => {
    return new Promise((resove, reject) => {
        axios({
            ...params
        }).then((res) => {
            resove(res)
        }).catch((err) => {
            reject(err)
        })
    })
}

export default Request