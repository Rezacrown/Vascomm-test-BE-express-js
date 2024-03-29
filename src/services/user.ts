import { Request } from "express";

import { prisma } from "../utils/prisma";

import { generateRandomPassword } from "../utils/generateRandPassword";
import { transport } from "../utils/mail/nodemailer";

export async function getAllUser(req: Request) {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      telp: true,
      roleId: true,
      Role: true,
      status: true,
      deleted: true,
    },
  });

  return users;
}

export async function createUser(req: Request) {
  const { name, email, telp } = req.body;

  if (!name || !email || !telp) throw new Error("Input Data was not valid");

  // generate random password for user
  const randomPassword = generateRandomPassword(12);

  const user = await prisma.user.create({
    data: {
      email: email,
      name: name,
      telp: telp,
      password: randomPassword,
      roleId: 2, // 2 for role user
      status: "aktif",
    },
    select: {
      id: true,
      name: true,
      email: true,
      telp: true,
      roleId: true,
      status: true,
    },
  });

  // send email to user
  await transport.sendMail({
    from: "vascommtest@rizkyrezaserver123.my.id",
    to: user.email,
    subject: "Your Password from server",
    text: `This is a test email from Next.js with password: ${randomPassword}`,
    html: `<h1>ini adalah passwordnya: ${randomPassword}</h1>`,
  });

  return user;
}

export async function softDeleteUser(req: Request) {
  const { id } = req.query;

  console.log(id);

  if (!id) throw new Error("Id Required");

  // set deleted for soft delete implement
  const user = await prisma.user.update({
    where: {
      id: Number(id),
      roleId: 2, // 2 for role user
    },
    data: {
      status: "nonaktif",
      deleted: true,
    },
    select: {
      id: true,
      name: true,
      email: true,
      status: true,
      roleId: true,
    },
  });

  return user;
}

export async function updateUser(req: Request) {
  const { id } = req.query;
  const { name, email, telp } = req.body;

  if (!id) throw new Error("Id Required");
  if (!name || !email || !telp) throw new Error("Input Data Required");

  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: {
      name,
      email,
      telp,
    },
    select: {
      id: true,
      name: true,
      email: true,
      telp: true,
    },
  });

  return user;
}
