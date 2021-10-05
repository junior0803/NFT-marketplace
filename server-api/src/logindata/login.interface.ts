export interface BaseLogin {
    name: string;
    email: string;
    description: string;
}

export interface Login extends BaseLogin {
    id: number;
}