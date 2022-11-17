import * as httpRequest from '../utils/httpRequest';

export const home = async () => {
    try {
        const res = await httpRequest.get('/home');
        return res.data.data.items;
    } catch (error) {
        console.log(error);
    }
};

export const getSong = async () => {
    try {
        const res = await httpRequest.get('/song', {
            id: '67WIO6CF',
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
