const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const address = await connection('address').select('*');

        return response.json(address);
    },

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
    },

    async delete(request, response) {
        const { id_member } = request.params;

        const address = await connection('address')
            .where('id_member', id_member)
            .select('id_member')
            .first();

        if (!address) {
            return response.status(404).json({ error: 'Operation Not Found.' });
        }
        else {
            await connection('address').where('id_member', id_member).delete();

            return response.status(204).send();
        }
    }
};