import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';

const service = axios.create();

// 拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> => {
        return Promise.resolve(config);
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

service.interceptors.response.use(
    async (response: AxiosResponse): Promise<AxiosResponse> => {
        return response;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// noinspection JSUnusedGlobalSymbols
export default service;