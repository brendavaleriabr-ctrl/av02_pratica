
import { jogosServices } from "../services/jogos.services.js";


class JogoController {
    async create(req, res) {
        try {
            const jogos = await jogosServices.create(req.body);
            res.status(201).json(jogos);
        } catch (error) {
            responderErro(res, error);
        }
    }

    async getAll(req, res) {
        try {
            const jogos = await jogosServices.getAll();
            res.json(jogos);
        } catch (error) {
            responderErro(res, error);
        }
    }

    async getById(req, res) {
        try {
            const jogo = await jogosServices.getById(req.params.id);
            res.json(jogo);
        } catch (error) {
            responderErro(res, error);
        }
    }

    async update(req, res) {
        try {
            const jogo = await jogosServices.update(req.params.id, req.body);
            res.json(jogo);
        } catch (error) {
            responderErro(res, error);
        }
    }

    async delete(req, res) {
        try {
            await jogosServices.delete(req.params.id);
            res.status(204).send();
        } catch (error) {
            responderErro(res, error);
        }
    }
}

export const jogoController = new JogoController();
