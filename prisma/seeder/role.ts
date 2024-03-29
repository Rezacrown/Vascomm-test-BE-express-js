import { Role } from "@prisma/client";

export const roles: Role[] = [
  {
    id: 1,
    name: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    name: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
