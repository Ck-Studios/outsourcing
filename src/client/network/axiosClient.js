import axios from "axios";

export const axiosClient = axios.create({
    baseURL: "https://4qqi1dlzc9.execute-api.ap-northeast-2.amazonaws.com/dev",

});

export function setAuthToken(token) {
    if (!token) {
        delete axiosClient.defaults.headers.common["SN-API-KEY"];
    } else {
        axiosClient.defaults.headers.common["SN-API-KEY"] = "zxiZm5Kpn69MNwsx8PKLfadZWsTP4Qi94E9Rxin9";
    }
}