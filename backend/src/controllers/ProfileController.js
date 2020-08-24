const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;

        const members = await connection('member').select('*');

        return response.json(members);
    }
};