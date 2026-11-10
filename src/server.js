import express from "express";
import { jogosRouter } from "./routes/jogos.route.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use("/jogos", jogosRouter);

app.listen (port), () =>{
    console.log(`App rodando em http://localhost:${port}`); 
    // to puxando ta queridinho bjs bjs bjs
}