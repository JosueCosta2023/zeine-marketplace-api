# 🛒 Zeine Marketplace API

Uma API REST completa para marketplace desenvolvida com Node.js, TypeScript, Express e Prisma.

## 🚀 **Links Importantes**

- **🌐 API em Produção:** [https://zeine-marketplace-api.vercel.app](https://zeine-marketplace-api.vercel.app)
- **📚 Documentação Swagger:** [https://zeine-marketplace-api.vercel.app/api/docs](https://zeine-marketplace-api.vercel.app/api/docs)
- **🔗 Repositório:** [https://github.com/JosueCosta2023/zeine-marketplace-api](https://github.com/JosueCosta2023/zeine-marketplace-api)

## 📋 **Funcionalidades**

### 👥 **Usuários**
- ✅ Cadastro de usuários
- ✅ Login com JWT
- ✅ Atualização de perfil
- ✅ Exclusão de conta
- ✅ Criptografia de senhas com bcryptjs

### 📦 **Produtos**
- ✅ CRUD completo de produtos
- ✅ Listagem com filtros
- ✅ Busca por categoria
- ✅ Validação de dados com Zod

### 🏷️ **Categorias**
- ✅ CRUD completo de categorias
- ✅ Relacionamento com produtos
- ✅ Validação de dados

## 🛠️ **Tecnologias Utilizadas**

- **⚡ Runtime:** Node.js 22.x
- **🔷 Linguagem:** TypeScript
- **🌐 Framework:** Express.js
- **🗄️ ORM:** Prisma
- **🐘 Banco de Dados:** PostgreSQL (Neon)
- **🔐 Autenticação:** JWT + bcryptjs
- **✅ Validação:** Zod
- **📚 Documentação:** Swagger UI
- **🚀 Deploy:** Vercel

## ⚡ **Instalação e Uso**

### **Pré-requisitos:**
- Node.js 18+ 
- PostgreSQL
- Git

### **1. Clone o repositório:**
```bash
git clone https://github.com/JosueCosta2023/zeine-marketplace-api.git
cd zeine-marketplace-api
```

### **2. Instale as dependências:**
```bash
npm install
```

### **3. Configure as variáveis de ambiente:**
```bash
# Crie o arquivo .env na raiz do projeto
cp .env.example .env

# Configure as variáveis:
DATABASE_URL="postgresql://username:password@localhost:5432/zeine_marketplace"
JWT_SECRET="seu-jwt-secret-super-secreto"
```

### **4. Execute as migrações:**
```bash
npx prisma migrate dev
npx prisma generate
```

### **5. (Opcional) Execute o seed:**
```bash
npx prisma db seed
```

### **6. Inicie o servidor:**
```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

## 📡 **Endpoints da API**

### **🔐 Autenticação**
```
POST /api/users/          # Cadastro
POST /api/users/login     # Login
```

### **👥 Usuários**
```
GET    /api/users         # Listar usuários
GET    /api/users/:id     # Buscar usuário
PUT    /api/users/:id     # Atualizar usuário
DELETE /api/users/:id     # Deletar usuário
```

### **📦 Produtos**
```
GET    /api/product       # Listar produtos
GET    /api/product/:id   # Buscar produto
POST   /api/product       # Criar produto
PUT    /api/product/:id   # Atualizar produto
DELETE /api/product/:id   # Deletar produto
```

### **🏷️ Categorias**
```
GET    /api/category      # Listar categorias
GET    /api/category/:id  # Buscar categoria
POST   /api/category      # Criar categoria
PUT    /api/category/:id  # Atualizar categoria
DELETE /api/category/:id  # Deletar categoria
```

## 📚 **Documentação**

A documentação completa da API está disponível via Swagger UI:

**🔗 [Acesse a documentação interativa](https://zeine-marketplace-api.vercel.app/api/docs)**

## 🗄️ **Estrutura do Banco de Dados**

```prisma
model User {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  password  String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Category {
  id       String    @id @default(cuid())
  name     String    @unique
  products Product[]
}

model Product {
  id          String   @id @default(cuid())
  name        String
  description String?
  price       Float
  status      ProductStatus 
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 📁 **Estrutura do Projeto**

```
src/
├── controllers/     # Controladores das rotas
├── middleware/      # Middlewares (auth, validation)
├── routes/          # Definição das rotas
|-- repositories     # Comunicaçao com banco de dados
├── services/        # Lógica de negócio
├── types/           # Tipos TypeScript
├── utils/           # Utilitários
├── validation/      # Schemas de validação Zod
├── swagger.ts       # Configuração do Swagger
└── servers.ts       # Servidor Express
```

## 🧪 **Scripts Disponíveis**

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm start            # Inicia servidor de produção
npm run vercel-build # Build para deploy na Vercel
```

## 🌍 **Deploy**

A API está deployada na **Vercel** com banco **PostgreSQL** na **Neon**.

### **URLs de Produção:**
- **API Base:** https://zeine-marketplace-api.vercel.app
- **Documentação:** https://zeine-marketplace-api.vercel.app/api/docs

### **Para fazer deploy:**
```bash
# 1. Configure as variáveis de ambiente na Vercel
# 2. Conecte o repositório
# 3. Deploy automático a cada push
```

## 🤝 **Contribuição**

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 **Autor**

### Josué Ocanha Costa
#### FrontEnd Developer
#### Redes Sociais

- Linkedin - [JosueOcanhaCosta](https://www.linkedin.com/in/josue-ocanha-costa/)
- Github - [JosueCosta2023](https://github.com/JosueCosta2023)
- Twitter - [@JosueOcanhaCosta](https://twitter.com/josue_ocanha)
- Facebook - [JosueCosta](https://www.facebook.com/JosueOcanhaCosta2023)
- Whatsapp - [Josue2023](https://wa.me/5565996408371?text=Ol%C3%A1%2C+encontrei+seu+whatsapp+no+Github.+Gostaria+de+falar+sobre+seus+projetos.)

# "Vida longa e próspera. 🖖🖖🖖"
Feito com o ❤️ por Josué Ocanha Costa

---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐