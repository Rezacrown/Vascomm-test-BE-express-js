import { Request } from "express";
import { prisma } from "../utils/prisma";

export async function getDataDashboard(req: Request) {
  const productActive = await prisma.product.count({
    where: {
      status: "aktif",
    },
  });

  const productTotal = await prisma.product.count();

  const userActive = await prisma.user.count({
    where: {
      status: "aktif",
    },
  });

  const userTotal = await prisma.user.count();

  const newProducts = await prisma.product.findMany({
    take: 10,
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
      status: true,
    },
  });

  return { productActive, productTotal, userActive, userTotal, newProducts };
}
