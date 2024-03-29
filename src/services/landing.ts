import { Request } from "express";
import { prisma } from "../utils/prisma";

export async function getLandingProduct(req: Request) {
  const { searching, take } = req.query;

  const products = await prisma.product.findMany({
    where: {
      AND: [
        {
          name: {
            contains: searching as string,
          },
          status: "aktif",
        },
      ],
      OR: [
        {
          status: "aktif",
        },
      ],
    },
    take: Number(take) || 10,

    select: {
      id: true,
      name: true,
      price: true,
      image: true,
    },
  });

  const newProduct = await getNewProducts();

  return { products, newProduct };
}

//
export async function getNewProducts() {
  const newProducts = await prisma.product.findMany({
    where: {
      status: "aktif",
    },
    orderBy: {
      createdAt: "asc",
    },
    take: 10,
    select: {
      id: true,
      name: true,
      price: true,
      image: true,
    },
  });

  return newProducts;
}
