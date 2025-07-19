import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import { swaggerSpec, swaggerUi } from "./swagger";


const app = express();
const PORT = process.env.PORT || 3000;
const LOCALHOST = "http://localhost:"
const APIDOCS = LOCALHOST+PORT+ `/api/docs`;

// Aqui voce precisa colocar o endereço ip do frontend
app.use(cors())

app.use(express.json())

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))


// ROTAS RAIS
app.use("/api/users", userRoutes  )
app.use("/api/product", productRoutes )
app.use("/api/category", categoryRoutes )

app.get("/", (req: Request, res: Response) => {
    res.send({message: `API Zeine Marketplace rodando!`, docLink: APIDOCS})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${LOCALHOST}${PORT}`)
    console.log(`Documentação da Api: ${APIDOCS}`)
})

