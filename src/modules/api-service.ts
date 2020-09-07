import Axios from 'axios'
import { LocalStorage } from 'quasar'

const baseURL = process.env['VUE_APP_API_URL'] as string;
const axios = Axios.create({ baseURL });

axios.interceptors.request.use(config => {
    if (LocalStorage.has('session')) {
        const session = LocalStorage.getItem('session') as any;
        config.headers['Authorization'] = `Bearer ${session['token']}`;
    }
    return config;
});

export class Service {

    public async login(username: string, password: string): Promise<void> {
        const response = await axios.post('/login', { username, password });
        const token = response.data['token'];
        LocalStorage.set('session', { token });
    }

    public async getMe(): Promise<User> {
        return (await axios.get('/me')).data;
    }

    public async getUsers(limit: number = 20, offset: number = 0): Promise<User[]> {
        const response = await axios.get('/user/users', {
            params: { limit, offset }
        });
        return response.data;
    }

}

export declare interface User {

    readonly _id: string;

    readonly email: string;

    readonly nome: string;

    readonly data_criacao: number;

}

export default new Service();