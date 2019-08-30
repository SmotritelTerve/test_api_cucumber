const request = require('request-promise')

const uriUsers = 'http://localhost:8000/api/users/';

const sendPost = (uri, data) => {

    const options = {
        method: 'POST',
        uri: uri,
        body: data,
        resolveWithFullResponse: true,
        json: true // Automatically stringifies the body to JSON
    };

    request(options)
    .then( (res) => {
        console.log(res.statusCode);
    })
    .catch((err) => {
        console.log(err);
    });

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

const verifyUserName = async (userName) => {
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
            if(user.name===userName){
                flag = true;
            }
        });
    } catch (err) {
        console.log(err);
        throw err;
    }
    return flag;
}

module.exports = {
    sendPost,
    sendGet,
    verifyUserName,
}