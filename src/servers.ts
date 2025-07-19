import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import { swaggerSpec, swaggerUi } from "./swagger";

const app = express();
const PORT = process.env.PORT || 3000;
const LOCALHOST = "http://localhost:";
const APIDOCS = LOCALHOST + PORT + `/api/docs`;

// Aqui voce precisa colocar o endereço ip do frontend
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ROTAS RAIS
app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);
app.use("/api/category", categoryRoutes);

app.get("/", (req: Request, res: Response) => {
  res.json({
    message: "Api Zeine Marketplace Online",
    version: "1.0.0",
    documentation: "/api/docs",
    api_json: "/api/docs.json",
    endpoints: {
      users: "/api/users",
      products: "/api/product",
      categories: "/api/category",
    },
  });
});

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📚 Docs: http://localhost:${PORT}/api/docs`);
  });
}

export default app;
