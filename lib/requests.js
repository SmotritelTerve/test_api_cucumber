const request = require('request-promise')
const User = require('./user');

const uriUsers = 'http://localhost:8000/api/users/';
const uriUser = 'http://localhost:8000/api/user/';

const sendPost = async (data) => {
    let userId;
    const options = {
        method: 'POST',
        uri: uriUser,
        body: data,
        resolveWithFullResponse: true,
        json: true // Automatically stringifies the body to JSON
    };

    try {
        const response = await request(options);
        userId = response.body.id;
    } catch (err) {
        console.log(err);
        throw err;
    }
    return userId;
}

const sendGet = (uri) => {

    const options = {
        method: 'GET',
        uri: uri,
        resolveWithFullResponse: true,
        json: true
    };

    request(options)
    .then( (res) => {
        console.log(res.statusCode);
    })
    .catch((err) => {
        console.log(err);
    });

}

const getUserById = async (id) => {
    let user;
    const options = {
        method: 'GET',
        uri: `${uriUser}${id}`,
        resolveWithFullResponse: true,
        json: true
    };

    try {
        const response = await request(options);
        user = new User(response.body.data.name, response.body.data.email);
    } catch (err) {
        console.log(err);
        throw err;
    }
    return user;
}

const deleteUserById = async (id) => {
    let message;
    const options = {
        method: 'DELETE',
        uri: `${uriUser}${id}`,
        resolveWithFullResponse: true,
        json: true
    };

    try {
        const response = await request(options);
        message = response.body.message;
    } catch (err) {
        console.log(err);
        throw err;
    }
    return message;
}

const verifyUserEmail = async (userEmail) => {
    let flag = false;
    const options = {
        method: 'GET',
        uri: uriUsers,
        resolveWithFullResponse: true,
        json: true
    };
    
    try {
        const response = await request(options);
        const usersList = response.body.data;
        usersList.forEach((user) => {
            if(user.email===userEmail){
                flag = true;
            }
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
    return flag;
}

const updateUserById = async (id, data) => {
    let message;
    const options = {
        method: 'PATCH',
        uri: `${uriUser}${id}`,
        body: data,
        resolveWithFullResponse: true,
        json: true
    };

    try {
        const response = await request(options);
        message = response.body.message;
    } catch (err) {
        console.log(err);
        throw err;
    }
    return message;
}

module.exports = {
    sendPost,
    sendGet,
    verifyUserEmail,
    getUserById,
    deleteUserById,
    updateUserById,
}