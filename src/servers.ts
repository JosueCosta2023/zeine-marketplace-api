import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";


const app = express();
const PORT = process.env.PORT || 3000;

// Aqui voce precisa colocar o endereço ip do frontend
app.use(cors())

app.use(express.json())


// ROTAS RAIS
app.use("/api/users", userRoutes  )
app.use("/api/product", productRoutes )
app.use("/api/category", categoryRoutes )

app.get("/", (req: Request, res: Response) => {
    res.send(`API Zeine Marketplace rodando!`)
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})

