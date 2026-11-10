import { knex } from "../database/knex.js";

class JogoRepository {
    async findAll() {
        return knex("jogos").select("*").orderBy("criado_em");
    }

    async findById(id) {
        return knex("jogos").where({ id }).first();
    }

    async create({  }) {
        const [jogo] = await knex("jogos")
            .insert({  })
            .returning("*");
        return jogo;
    }

    async update(id) {
        const [jogo] = await knex("jogos")
            .where({ id })
            .update(plataforma)
            .returning("*");
        return jogo;
    }

    async delete(id) {
        return knex("jogos").where({ id }).del();
    }
}

export const jogoRepository = new JogoRepository();