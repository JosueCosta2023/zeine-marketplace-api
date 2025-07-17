import { PrismaClient, ProductStatus } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Categorias
  await prisma.category.createMany({
    data: [
      { name: 'Eletrônicos' },
      { name: 'Roupas' },
      { name: 'Livros' },
      { name: 'Casa' },
      { name: 'Esportes' },
    ],
  });

  // Usuários com link de imagem
  await prisma.user.createMany({
    data: [
      { name: 'Alice', email: 'alice@email.com', password: '123456', photo: 'https://randomuser.me/api/portraits/women/1.jpg' },
      { name: 'Bob', email: 'bob@email.com', password: '123456', photo: 'https://randomuser.me/api/portraits/men/2.jpg' },
      { name: 'Carol', email: 'carol@email.com', password: '123456', photo: 'https://randomuser.me/api/portraits/women/3.jpg' },
      { name: 'Dave', email: 'dave@email.com', password: '123456', photo: 'https://randomuser.me/api/portraits/men/4.jpg' },
      { name: 'Eve', email: 'eve@email.com', password: '123456', photo: 'https://randomuser.me/api/portraits/women/5.jpg' },
    ],
  });

  const allUsers = await prisma.user.findMany();
  const allCategories = await prisma.category.findMany();

  // Produtos
  for (let i = 0; i < 5; i++) {
    await prisma.product.create({
      data: {
        title: `Produto ${i + 1}`,
        price: 100 + i * 10,
        description: `Descrição do produto ${i + 1}`,
        status: ['ANUNCIADO', 'VENDIDO', 'CANCELADO'][i % 3] as ProductStatus,
        userId: allUsers[i].id,
        categoryId: allCategories[i].id,
      },
    });
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });