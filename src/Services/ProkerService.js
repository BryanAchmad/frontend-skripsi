import http from '../config/Http/http-common';

const getAll = () => {
    return http.get("/prokers/");
};

export default {
    getAll
};