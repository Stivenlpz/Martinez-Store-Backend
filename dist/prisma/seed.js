"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const prisma = new client_1.PrismaClient();
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
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map