import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const password1 = await bcrypt.hash('pass123', roundsOfHashing);
  const password2 = await bcrypt.hash('pass123', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: {
      email: 'brahians.lopezc@uqvirtual.edu.co',
    },
    update: {
      password: password1,
    },
    create: {
      name: 'Brahian Steven Lopez Ceballos ',
      email: 'brahians.lopezc@uqvirtual.edu.co',
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
      email: 'daniela.penag@uqvirtual.edu.co',
    },
    update: {
      password: password2,
    },
    create: {
      name: 'Daniela Peña Gómez',
      email: 'daniela.penag@uqvirtual.edu.co',
      password: password2,
      phone: '1234567890',
      role: 'ADMIN',
      activated: true,
      cart: {
        create: {},
      },
    },
  });

  const user3 = await prisma.user.upsert({
    where: {
      email: 'user@gmail.com',
    },
    update: {
      password: password2,
    },
    create: {
      name: 'user user',
      email: 'user@gmail.com',
      password: password2,
      phone: '1234567890',
      role: 'USER',
      activated: true,
      cart: {
        create: {},
      },
    },
  });

  const product = await prisma.product.upsert({
    where: {
      sku: 'TSHIRT-001',
    },
    update: {
      sku: 'TSHIRT-001',
    },
    create: {
      sku: 'TSHIRT-001',
      name: 'Daddy Issues Boxy T-shirt',
      description: `
      - Boxy fit t-shirt with heavy wash for a vintage feel
- Hand distressing at the collar, cuffs and hem
- Screen printed at our Sheffield HQ
- Artwork by Brando Chisea

- 100% cotton
- Wash at 30 degrees `,
      price: 50000,
      stock: 5,
      categories: ['TSHIRT', 'FEMALE'],
      images: [
        'https://res.cloudinary.com/doci4d2ow/image/upload/v1760490980/PinkT-ShirtFront_xkzknd.png',
        'https://res.cloudinary.com/doci4d2ow/image/upload/v1760490988/PinkT-ShirtBack_y51seg.png',
        'https://res.cloudinary.com/doci4d2ow/image/upload/v1760490941/GirlFlayed4_dpwxfg.jpg',
      ],
      sizes: ['XS', 'S', 'M', 'LG', 'XL'],
      colors: ['PINK'],
      featured: true,
      gender: 'FEMALE',
    },
  });

  const comment = await prisma.comment.create({
    data: {
      content: 'Buena calidad, entrega a tiempo. Excelente.',
      images: [
        'https://res.cloudinary.com/doci4d2ow/image/upload/v1760490997/PinkT-ShirtDetail1_lyloko.jpg',
      ],
      stars: 5,
      productId: product.id,
      userId: user1.id,
    },
  });

  console.log({ user1, user2, user3, product, comment });
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
