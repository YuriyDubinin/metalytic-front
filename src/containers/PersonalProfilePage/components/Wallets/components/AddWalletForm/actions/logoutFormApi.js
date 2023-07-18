import * as cookie from '../../../../../helpers/Cookie';

export const clearStorages = () => {
    cookie.clear();
    localStorage.clear();
};
