import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const password1 = await bcrypt.hash('camilo_pass', roundsOfHashing);
  const password2 = await bcrypt.hash('esteban_pass', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: {
      email: 'camilodavila@gmail.com',
    },
    update: {
      password: password1,
    },
    create: {
      name: 'camilo davila',
      email: 'camilodavila@gmail.com',
      password: password1,
      phone: '1234567890',
      role: 'ADMIN',
      activated: true,
      cart: {
        create: {},
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: {
      email: 'esteban@gmail.com',
    },
    update: {
      password: password2,
    },
    create: {
      name: 'esteban davila',
      email: 'esteban@gmail.com',
      password: password2,
      phone: '1234567890',
      role: 'USER',
      cart: {
        create: {},
      },
    },
  });

  const product1 = await prisma.product.upsert({
    where: {
      sku: 'CAP-01',
    },
    update: {
      sku: 'CAP-01',
    },
    create: {
      sku: 'CAP-01',
      name: 'Holy Cap',
      slug: 'holy-cap',
      description: 'Holy Cap description.',
      price: 40000,
      stock: 8,
      categories: ['cap', 'accesory', 'holy'],
      images: [
        'https://dropdead.world/cdn/shop/files/JaneCap4.png?v=1756200563',
        'https://dropdead.world/cdn/shop/files/JaneCap5.png?v=1756200563',
        'https://dropdead.world/cdn/shop/files/JaneCap2.jpg?v=1756200563',
      ],
      sizes: ['m', 'xl'],
      colors: ['black'],
      featured: true,
      gender: 'UNISEX',
      meta: null,
    },
  });

  const product2 = await prisma.product.upsert({
    where: {
      sku: 'SHIRT-002',
    },
    update: {
      sku: 'SHIRT-002',
    },
    create: {
      sku: 'SHIRT-002',
      name: 'Lucky Zip-Up Hoodie',
      slug: 'lucky-zip-up-hoodie',
      description: 'Lucky Zip-Up Hoodie description.',
      price: 120000,
      stock: 4,
      categories: ['hoodie'],
      images: [
        'https://dropdead.world/cdn/shop/files/LuckyFront.png?v=1756905260',
        'https://dropdead.world/cdn/shop/files/LuckyBack.png?v=1756905260',
        'https://dropdead.world/cdn/shop/files/BoyLucky2.jpg?v=1756905260',
      ],
      sizes: ['xs', 'm', 'l'],
      colors: ['black', 'green'],
      featured: false,
      gender: 'UNISEX',
      meta: null,
    },
  });

  console.log({ user1, user2, product1, product2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async () => {
    await prisma.$disconnect();
  });
