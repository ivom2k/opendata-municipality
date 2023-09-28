import axios, { type AxiosInstance } from "axios";

export function avaandmeDatasetFile(dataset: string, fileId: string, requestMethod: string): AxiosInstance {
    return axios.create({
        baseURL: `https://avaandmed.eesti.ee/api/`,
        url: `datasets/${dataset}/files/${fileId}/download`,
        method: requestMethod,
        timeout: 1000,
        headers: {
            "Content-type": "application/json"
        }
    });
}