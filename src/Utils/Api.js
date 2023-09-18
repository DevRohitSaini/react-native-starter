import React from 'react';
import constant from '../Utils/constant';

const loginApi = async (data) => {
    console.log('data: ', data);
    const apiUrl = constant.apiUrl + '/auth/login'
    console.log('apiUrl: ', apiUrl);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(apiUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const checkCredentials = async (data) => {
    console.log('data: ', data);
    const apiUrl = constant.apiUrl + '/auth/check-credentials'
    console.log('apiUrl: ', apiUrl);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(apiUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const signupApi = async (data) => {
    console.log('data: ', data);
    const apiUrl = constant.apiUrl + '/auth/register'
    console.log('apiUrl: ', apiUrl);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(apiUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const fetchAllApi = async (token, data) => {
    console.log('token: ', token);
    console.log('data: ', data);

    const apiUrl = constant.apiUrl + '/users';
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    return fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const fetchApi = async (token, id, data) => {
    console.log('token: ', token);
    console.log('data: ', data);

    const apiUrl = constant.apiUrl + '/users/' + id;
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    };
    return fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const postApi = async (token, data) => {
    console.log('token: ', token);
    console.log('Data: ', data);
    const apiUrl = constant.apiUrl + '/users/';

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    };

    return fetch(apiUrl, requestOptions)
        .then(response => response.text())
        .then(result => {
            let data = JSON.parse(result);
            return data;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const putApi = async (token, id, data) => {
    console.log('token: ', token);
    console.log('data: ', data);

    const apiUrl = constant.apiUrl + '/users/' + id;

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(data)
    };
    return fetch(apiUrl, requestOptions)
        .then(response => response.json())
        .then(json => {
            return json;
        })
        .catch(error => {
            console.log('error=>', error);
            return error;
        });
};

const deleteApi = async url => {
    const requestOptions = {
        method: 'DELETE',
    };
    return (
        fetch(url, requestOptions)
            .then(async response => {
                console.log('DELETE API RESPONSE: ', response);
                return response;
            })
            .catch(error => {
                console.error('There was an error!', error);
                return error.message;
            })
    );
};

export { loginApi, checkCredentials, signupApi, fetchAllApi, fetchApi, postApi, putApi, deleteApi }