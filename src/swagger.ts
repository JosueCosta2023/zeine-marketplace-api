import swaggerJSDoc from "swagger-jsdoc";


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zeine Marketplace Api",
      version: "1.0.0",
      description: "Documentaçao da API  do Zeine Marketplace",
    },
    servers: [
      {
        url: process.env.NODE_ENV === 'production' 
          ? "zeine-marketplace-api.vercel.app" 
          : "http://localhost:3001",
        description: process.env.NODE_ENV === 'production' ? "Produção" : "Desenvolvimento"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    tags: [
      {
        name: "Usuarios",
        description: "Url's relacionados a operacoes de usuarios ",
      },
      {
        name: "Produtos",
        description: "Url's relacionados a operacoes de produtos ",
      },
      {
        name: "Categorias",
        description: "Url's relacionados a operacoes de categorias ",
      },
    ],
    paths: {
      "/api/users/login": {
        post: {
          summary: "Realizar login no sistema, açao gera token de validacao",
          tags: ["Usuarios"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    email: {
                      type: "string",
                      example: "usuario@email.com",
                    },
                    password: {
                      type: "string",
                      example: "suasenha123",
                    },
                  },
                  required: ["email", "password"],
                },
              },
            },
          },
          responses: {
            200: {
              description: "Login realizado com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Login realizado com sucesso",
                      },
                      result: {
                        type: "object",
                        properties: {
                          user: {
                            type: "string",
                            properties: {
                              id: { type: "string" },
                              name: { type: "string" },
                              email: { type: "string" },
                            },
                          },
                          token: { type: "string" },
                        },
                      },
                    },
                  },
                },
              },
            },
            500: { description: "Erro de servidor ao afetuar o login" },
          },
        },
      },
      "/api/users": {
        get: {
          summary: "Lista todos os Usuarios",
          tags: ["Usuarios"],
          responses: {
            200: {
              description: "Usuarios listados com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          example: "clx1y2z3abc456",
                        },
                        name: {
                          type: "string",
                          example: "João Silva",
                        },
                        email: {
                          type: "string",
                          example: "joao@email.com",
                        },
                        phone: {
                          type: "string",
                          example: "(11) 99999-9999",
                        },
                        photo: {
                          type: "string",
                          example: "https://example.com/foto.jpg",
                        },
                        createdAt: {
                          type: "string",
                          format: "date-time",
                          example: "2025-07-18T10:30:00.000Z",
                        },
                        updatedAt: {
                          type: "string",
                          format: "date-time",
                          example: "2025-07-18T10:30:00.000Z",
                        },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erro de servidor ao listar usuarios",
            },
          },
        },

        post: {
          summary: "Cadastrar Novos Usuarios",
          tags: ["Usuarios"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "João Silva",
                    },
                    email: {
                      type: "string",
                      example: "joao@email.com",
                    },
                    password: {
                      type: "string",
                      example: "suasenha123",
                    },
                    phone: {
                      type: "string",
                      example: "(11) 99999-9999",
                    },
                    photo: {
                      type: "string",
                      example: "https://example.com/foto.jpg",
                    },
                  },
                  required: ["name", "email", "password"],
                },
              },
            },
          },
          responses: {
            201: {
              description: "Usuario cadastrado com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Usuario cadastrado com sucesso",
                      },
                      user: {
                        type: "string",
                        example: "clx1y2z3abc456",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Dados Invalidos",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        example: "Dados invalidos",
                      },
                      details: {
                        type: "array",
                        items: {
                          type: "object",
                        },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erro de servidor ao cadastrar usuario",
            },
          },
        },
      },
      "/api/users/{id}": {
        patch: {
          summary: "Atualizar Usuario",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID do usuário",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "João Silva Atualizado",
                    },
                    email: {
                      type: "string",
                      example: "joao.novo@email.com",
                    },
                    password: {
                      type: "string",
                      example: "novasenha123",
                    },
                    phone: {
                      type: "string",
                      example: "(11) 88888-8888",
                    },
                    photo: {
                      type: "string",
                      example: "https://example.com/nova-foto.jpg",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Usuario atualizado com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Usuario atualizado com sucesso",
                      },
                    },
                  },
                },
              },
            },
            400: {
              description: "Dados invalidos",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      error: {
                        type: "string",
                        example: "Dados invalidos",
                      },
                      details: {
                        type: "array",
                        items: {
                          type: "object",
                        },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erro de servidor ao atualizar usuario",
            },
          },
        },

        delete: {
          summary: "Deletar Usuario",
          tags: ["Usuarios"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID do usuário",
            },
          ],
          responses: {
            200: {
              description: "Usuario excluido com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Usuario excluido com sucesso",
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erro de servidor ao excluir usuario",
            },
          },
        },
      },
      "/api/product": {
        get: {
          summary: "Lista todos os produtos",
          tags: ["Produtos"],
          responses: {
            200: {
              description: "Produtos listados com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: null,
                      },
                      result: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            id: {
                              type: "string",
                              example: "clx1y2z3abc456",
                            },
                            title: {
                              type: "string",
                              example: "iPhone 15 Pro Max",
                            },
                            price: {
                              type: "number",
                              example: 7999.99,
                            },
                            description: {
                              type: "string",
                              example:
                                "Smartphone Apple com 256GB de armazenamento",
                            },
                            categoryId: {
                              type: "string",
                              example: "eletronicos",
                            },
                            userId: {
                              type: "string",
                              example: "usr_abc123def456",
                            },
                            status: {
                              type: "string",
                              enum: ["ANUNCIADO", "CANCELADO", "VENDIDO"],
                              example: "ANUNCIADO",
                            },
                            createdAt: {
                              type: "string",
                              format: "date-time",
                              example: "2025-07-18T10:30:00.000Z",
                            },
                            updatedAt: {
                              type: "string",
                              format: "date-time",
                              example: "2025-07-18T10:30:00.000Z",
                            },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erro de servidor ao listar produtos",
            },
          },
        },

        post: {
          summary: "Cadastrar novo produto",
          tags: ["Produtos"],
          security: [
            {
              bearerAuth: [],
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      example: "iPhone 15 Pro Max",
                    },
                    price: {
                      type: "number",
                      example: 7999.99,
                    },
                    description: {
                      type: "string",
                      example: "Smartphone Apple com 256GB de armazenamento",
                    },
                    status: {
                      type: "string",
                      enum: ["ANUNCIADO", "CANCELADO", "VENDIDO"],
                      example: "ANUNCIADO",
                    },
                    categoryId: {
                      type: "string",
                      example: "clx1y2z3abc456",
                    },
                  },
                  required: [
                    "title",
                    "price",
                    "description",
                    "status",
                    "categoryId",
                  ],
                },
              },
            },
          },
          responses: {
            201: {
              description: "Produto cadastrado com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Produto cadastrado com sucesso",
                      },
                      product: {
                        type: "object",
                        properties: {
                          id: { type: "string" },
                        },
                      },
                    },
                  },
                },
              },
            },
            400: { description: "Dados inválidos" },
            401: { description: "Token não fornecido ou inválido" },
            500: { description: "Erro de servidor ao cadastrar produto" },
          },
        },
      },
      "/api/product/{id}": {
        patch: {
          summary: "Atualizar produto",
          tags: ["Produtos"],
          security: [
            {
              bearerAuth: [],
            },
          ],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID do produto",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    title: {
                      type: "string",
                      example: "iPhone 15 Pro Max - Atualizado",
                    },
                    price: {
                      type: "number",
                      example: 6999.99,
                    },
                    description: {
                      type: "string",
                      example:
                        "Smartphone Apple com 256GB - Descrição atualizada",
                    },
                    status: {
                      type: "string",
                      enum: ["ANUNCIADO", "CANCELADO", "VENDIDO"],
                      example: "VENDIDO",
                    },
                    categoryId: {
                      type: "string",
                      example: "clx1y2z3abc456",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: { description: "Produto atualizado com sucesso" },
            400: { description: "Dados inválidos" },
            401: { description: "Token não fornecido ou inválido" },
            404: { description: "Produto não encontrado" },
            500: { description: "Erro de servidor ao atualizar produto" },
          },
        },

        delete: {
          summary: "Deletar produto",
          tags: ["Produtos"],
          security: [
            {
              bearerAuth: [],
            },
          ],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID do produto",
            },
          ],
          responses: {
            200: { description: "Produto excluído com sucesso" },
            401: { description: "Token não fornecido ou inválido" },
            404: { description: "Produto não encontrado" },
            500: { description: "Erro de servidor ao excluir produto" },
          },
        },
      },
      "/api/category": {
        get: {
          summary: "Lista todas as categorias",
          tags: ["Categorias"],
          responses: {
            200: {
              description: "Categorias listadas com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string",
                          example: "clx1y2z3abc456",
                        },
                        name: {
                          type: "string",
                          example: "Eletrônicos",
                        },
                        createdAt: {
                          type: "string",
                          format: "date-time",
                          example: "2025-07-18T10:30:00.000Z",
                        },
                        updatedAt: {
                          type: "string",
                          format: "date-time",
                          example: "2025-07-18T10:30:00.000Z",
                        },
                      },
                    },
                  },
                },
              },
            },
            500: {
              description: "Erro de servidor ao listar categorias",
            },
          },
        },

        post: {
          summary: "Cadastrar nova categoria",
          tags: ["Categorias"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "Eletrônicos",
                    },
                  },
                  required: ["name"],
                },
              },
            },
          },
          responses: {
            201: {
              description: "Categoria cadastrada com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Categoria cadastrada com sucesso",
                      },
                      category: {
                        type: "string",
                        example: "clx1y2z3abc456",
                      },
                    },
                  },
                },
              },
            },
            400: { description: "Dados inválidos" },
            500: { description: "Erro de servidor ao cadastrar categoria" },
          },
        },
      },
      "/api/category/{id}": {
        patch: {
          summary: "Atualizar categoria",
          tags: ["Categorias"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID da categoria",
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: {
                      type: "string",
                      example: "Eletrônicos Atualizados",
                    },
                  },
                },
              },
            },
          },
          responses: {
            200: {
              description: "Categoria atualizada com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Categoria atualizada com sucesso",
                      },
                    },
                  },
                },
              },
            },
            400: { description: "Dados inválidos" },
            404: { description: "Categoria não encontrada" },
            500: { description: "Erro de servidor ao atualizar categoria" },
          },
        },

        delete: {
          summary: "Deletar categoria",
          tags: ["Categorias"],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              schema: {
                type: "string",
              },
              description: "ID da categoria",
            },
          ],
          responses: {
            200: {
              description: "Categoria excluída com sucesso",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      message: {
                        type: "string",
                        example: "Categoria excluida com sucesso",
                      },
                    },
                  },
                },
              },
            },
            404: { description: "Categoria não encontrada" },
            500: { description: "Erro de servidor ao excluir categoria" },
          },
        },
      },
    },
  },

  apis: [],
};

const swaggerSpec = swaggerJSDoc(options)

export { swaggerSpec  };
