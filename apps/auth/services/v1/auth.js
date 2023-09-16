'use strict';

const models = require('../../../../models');

/**
 * Auth Service
 * 
*/

// get user by username
const getUserByUsername = async(username) => {
    const user = await models.User.findOne({
        where: {
            username: username
        }
    });

    if(!user) throw new Error("User not found!");

    return user;
}

module.exports = {
    getUserByUsername
};