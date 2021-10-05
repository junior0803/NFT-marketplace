import {Login, BaseLogin} from './login.interface';
import {Logindata} from './logindata.interface';

let logindatas: Logindata = {
    1: {
        id: 1,
        name: 'rck',
        email: 'rck@gmail.com',
        description: 'This is login Test'
    },
    2: {
        id: 2,
        name: 'koala',
        email: 'koala@gmail.com',
        description: 'This is login Test'
    },
    3: {
        id: 3,
        name: 'koala',
        email: 'koala@gmail.com',
        description: 'This is login Test'
    }
}

export const findAll = async(): Promise<Login[]>=>Object.values(logindatas);
export const find = async(id:number): Promise<Login> => logindatas[id];

export const create = async (newItem: BaseLogin): Promise<Login> => {
    const id = new Date().valueOf();

    logindatas[id] = {
        id,
        ...newItem,
    };

    return logindatas[id];
};

export const update = async (
    id: number,
    itemUpdate: BaseLogin
): Promise<Login | null> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    logindatas[id] = { id, ...itemUpdate };

    return logindatas[id];
};
export const remove = async (id: number): Promise<null | void> => {
    const item = await find(id);

    if (!item) {
        return null;
    }

    delete logindatas[id];
};
