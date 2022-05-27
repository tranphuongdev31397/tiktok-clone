import axiosClient from '~/axios/axiosClient';

export const userAPI = {
    searchUser: (searchString, type = 'less', params) => {
        const url = `/api/users/search?q=${encodeURIComponent(searchString)}&type=${type}`;
        return axiosClient.get(url, { params });
    },
};
