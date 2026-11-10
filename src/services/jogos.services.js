
import { jogoRepository } from "../repositories/jogos.repository.js";

class JogosService {
    async getAll() {
        return jogoRepository.findAll();
    }

    async getById(id) {
        validarId(id);
        const jogo = await jogoRepository.findById(id);
        if (!jogo) throw erro("jogo não encontrado", 404);
        return jogo;
    }

    

    async update(id, { preco, titulo }) {
        await this.getById(id); 
        const plataforma = {};
        if (preco !== undefined) plataforma.preco = preco;
        if (titulo !== undefined) plataforma.titulo = titulo;

        if (Object.keys(plataforma).length === 0) {
            throw erro("Envie preco e/ou titulo", 400);
        }
        return jogoRepository.update(id, plataforma);
    }

    async delete(id) {
        await this.getById(id);
        await jogoRepository.delete(id);
    }
}

export const jogosServices = new JogosService();