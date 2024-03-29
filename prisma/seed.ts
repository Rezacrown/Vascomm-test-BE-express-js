import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import { roles } from "./seeder/role";
import { users } from "./seeder/user";

// define seeder
async function main() {
  // base role
  roles.forEach(async (role) => {
    await prisma.role.create({
      data: role,
    });
  });

  // create admin for starter user
  users.forEach(async (user) => {
    await prisma.user.create({
      data: user,
    });
  });
}

// running seeder
main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
