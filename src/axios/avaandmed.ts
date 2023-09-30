import axios, { type AxiosInstance } from "axios";

export function avaandmedClient(): AxiosInstance {
    return axios.create({
        baseURL: `https://avaandmed.eesti.ee/api/`,
        headers: {
            'Content-type': 'application/json'
        }
    });
}