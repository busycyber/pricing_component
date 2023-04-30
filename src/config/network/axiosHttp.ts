import { BASE_URL_API } from "@/config/env";
import axios from "axios";

const instance = axios.create({
    baseURL: BASE_URL_API
});

interface IHttp {
    get<T>(url: string, params?: any): Promise<T>;
}

const axiosHttp: IHttp = {
    get: async <T>(url: string, params?: any) => {
        const response = await instance.get<T>(url, { params });
        return response.data;
    },
}

export default axiosHttp;