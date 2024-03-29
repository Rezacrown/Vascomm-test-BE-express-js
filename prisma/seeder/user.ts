import { User } from "@prisma/client";

export const users: User[] = [
  {
    id: 1,
    name: "admin",
    email: "admin@example.com",
    password: "rahasia",
    telp: "0000000000",

    status: "aktif",
    roleId: 1, // 1 for admin seed

    createdAt: new Date(),
    updatedAt: new Date(),
    deleted: false,
  },
];
