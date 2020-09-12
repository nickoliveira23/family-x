const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('member').count();

        const members = await connection('member')
            .join('address', 'id_member', '=', 'member.id')
            .limit(30)
            .offset((page - 1) * 30)
            .select([
                'member.*',
                'address.street',
                'address.number',
                'address.neighborhood',
                'address.city',
                'address.uf',
                'address.zip']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(members);
    },

    async create(request, response) {
        const { name, email, situation, birth, rg } = request.body;

        const [id] = await connection('member').insert({
            name,
            email,
            situation,
            birth,
            rg,
        });

        return response.json({ id });
    },
    async delete(request, response) {
        const { id } = request.params;

        const members = await connection('member')
            .where('id', id)
            .select('id')
            .first();

        if (!members) {
            return response.status(404).json({ error: 'Operation Not Found.' });
        }
        else {
            await connection('member').where('id', id).delete();

            return response.status(204).send();
        }
    },
    /* async indexById(request, response) {

        const members = await connection('member')
            .join('address', 'id_member', '=', 'member.id')
            .limit(30)
            .select([
                'member.*',
                'address.street',
                'address.number',
                'address.neighborhood',
                'address.city',
                'address.uf',
                'address.zip']);

        return response.json(members);
    }, */


    async update(request, response) {

        const { name, email, situation, birth, rg } = request.body;
        
        const { id } = request.params

        await connection('member')
        .update({
            name,
            email,
            situation,
            birth,
            rg
        })
        .where({ id })

        return response.send();
    } 
};