import fs from "fs";
import { Request } from "express";
import { prisma } from "../utils/prisma";
import { generateUrlImage } from "../utils/generateImageUrl";
import path from "path";

export async function getAllProduct(req: Request) {
  const products = await prisma.product.findMany({});

  return { products };
}

export async function createProduct(req: Request) {
  const { name, price } = req.body;
  if (!name || !price || !req?.file) {
    throw new Error("Invalid Input Data");
  }

  const urlImage = await generateUrlImage(req);

  const product = await prisma.product.create({
    data: {
      name: name,
      image: urlImage,
      price: price,
      status: "aktif",
    },
    select: {
      name: true,
      price: true,
      id: true,
      image: true,
      status: true,
    },
  });

  return { product };
}

export async function deleteProduct(req: Request) {
  const { id } = req.params;

  if (!id) throw new Error("Id Not found");

  // delete product from database
  const product = await prisma.product.delete({
    where: { id: Number(id) },
    select: {
      id: true,
      name: true,
      image: true,
    },
  });

  // delete image from local storage
  if (
    fs.existsSync(path.join(__dirname, "../../public", String(product?.image)))
  ) {
    fs.rmSync(path.join(__dirname, "../../public", String(product?.image)));
    console.log("Removing image from local storage");
  }

  return product;
}

export async function upadateProduct(req: Request) {
  const { id } = req.params;
  const { name, price } = req.body;

  if (!id) throw new Error("Id not found");
  if (!name || !price) {
    throw new Error("Input not Provided");
  }

  // find product data
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
  });

  let newImageUrl: string | null = null;
  // delete file image from local storage if user set new Image
  if (
    req.file &&
    fs.existsSync(path.join(__dirname, "../../public", String(product?.image)))
  ) {
    // delete old image
    fs.rmSync(path.join(__dirname, "../../public", String(product?.image)));
    newImageUrl = await generateUrlImage(req);
  }

  // update product data
  const productUpdated = await prisma.product.update({
    where: { id: Number(id) },
    data: {
      name,
      price: price as number as unknown as string,
      image: newImageUrl || product?.image,
    },
  });

  return productUpdated;
}
