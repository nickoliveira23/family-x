const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { street, number, neighborhood, city, uf, zip, id_member } = request.body;

        const [id] = await connection('address').insert({
            street,
            number,
            neighborhood,
            city,
            uf,
            zip,
            id_member,
        });

        return response.json({ id });
    }
};