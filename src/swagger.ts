import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Zeine Marketplace Api",
      version: "1.0.0",
      description: "Documentaçao da API  do Zeine Marketplace",
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
                        example: "usuario@email.com" },
                    password: {
                      type: "string",
                      example: "suasenha123",
                    },
                  },
                  required: ["email", "password"]
                },
              },
            },
          },
          responses: {
            200: { 
                description: "Login realizado com sucesso",
                content: {
                    "application/json":{
                        schema: {
                            type: "object",
                            properties: {
                                message: {
                                    type: "string",
                                    example: "Login realizado com sucesso"
                                },
                                result: {
                                    type: "object",
                                    properties: {
                                        user: {
                                            type: "string",
                                            properties: {
                                                id: {type: "string"},
                                                name: {type: "string"},
                                                email: {type: "string"}
                                            }
                                        },
                                        token: {type: "string"}
                                    }
                                }
                            }
                        }
                    }
                } 
                
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
            },
          },
        },

        post: {
          summary: "Cadastrar Novos Usuarios",
          tags: ["Usuarios"],
          responses: {
            201: {
              description: "Usuario cadastrado com sucesso",
            },
            400: {
              description: "Dados Invalidos",
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
          responses: {
            200: { description: "Usuario atualizado com sucesso" },
            400: { description: "Dados invalidos" },
            500: { description: "Erro de servidor ao atualizar usuario" },
          },
        },

        delete: {
          summary: "Deletar Usuario",
          tags: ["Usuarios"],
          responses: {
            200: { description: "Usuario excluido com sucesso" },
            500: { description: "Erro de servidor ao excluir usuario" },
          },
        },
      },
    },
  },

  apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi };
