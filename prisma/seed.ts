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

  console.log({ user1, user2, user3 });
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
