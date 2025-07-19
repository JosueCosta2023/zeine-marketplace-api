import express, { Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes";
import productRoutes from "./routes/productRoutes";
import categoryRoutes from "./routes/categoryRoutes";
import { swaggerSpec } from "./swagger";

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

// Swagger JSON endpoint
app.get("/api/docs.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});

// Swagger UI usando CDN (NOVA IMPLEMENTAÇÃO)
app.get("/api/docs", (req: Request, res: Response) => {
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zeine Marketplace API Documentation</title>
    <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@5.10.5/swagger-ui.css" />
    <style>
      html {
        box-sizing: border-box;
        overflow: -moz-scrollbars-vertical;
        overflow-y: scroll;
      }
      *, *:before, *:after {
        box-sizing: inherit;
      }
      body {
        margin:0;
        background: #fafafa;
      }
      .swagger-ui .topbar {
        background-color: #2c5a7e;
      }
      .swagger-ui .topbar .download-url-wrapper {
        display: none;
      }
    </style>
  </head>
  <body>
    <div id="swagger-ui"></div>
    
    <script src="https://unpkg.com/swagger-ui-dist@5.10.5/swagger-ui-bundle.js"></script>
    <script src="https://unpkg.com/swagger-ui-dist@5.10.5/swagger-ui-standalone-preset.js"></script>
    <script>
      window.onload = function() {
        const ui = SwaggerUIBundle({
          url: '/api/docs.json',
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [
            SwaggerUIBundle.presets.apis,
            SwaggerUIStandalonePreset
          ],
          plugins: [
            SwaggerUIBundle.plugins.DownloadUrl
          ],
          layout: "StandaloneLayout",
          tryItOutEnabled: true,
          requestInterceptor: function(req) {
            return req;
          }
        });
      };
    </script>
  </body>
  </html>`;
  
  res.send(html);
});

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
