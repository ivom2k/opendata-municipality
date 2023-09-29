import axios, { type AxiosInstance } from "axios";

export function avaandmeDatasetFile(dataset: string, fileId: string): AxiosInstance {
    return axios.create({
        baseURL: `https://avaandmed.eesti.ee/api/`,
        url: `datasets/${dataset}/files/${fileId}/download`,
        method: 'post',
        timeout: 1000,
        headers: {
            'Content-type': 'application/json'
        }
    });
}