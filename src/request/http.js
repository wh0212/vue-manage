import Request from "../util/request"

//登录
export const login = (data) => Request({
    url: "/api/user/login.do",
    method: "POST",
    params: data
})