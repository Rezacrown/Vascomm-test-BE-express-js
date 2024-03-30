import { NextFunction, Request } from "express";
import jwt from "jsonwebtoken";

import { prisma } from "../utils/prisma";

import { config } from "../config";
import { generateRandomPassword } from "../utils/generateRandPassword";
import { transport } from "../utils/mail/nodemailer";

export async function SignInJwt(req: Request) {
  const { email, password } = req.body;
  if (!email || !password) throw new Error("Invalid email or password");

  // find user with match data
  const user = await prisma.user.findFirst({
    where: {
      email: String(email).toLowerCase(),
    },
  });
  // check password isValid
  if (!user || user.password != password) throw new Error("Invalid credential");

  // generate token
  const token = jwt.sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.roleId,
    },
    config.jwtSecret as string,
    { expiresIn: 60 * 60 * 2 } // expires in two hour
  );

  return { token: `Bearer ${token}` };
}

export async function SignUp(req: Request) {
  const { email, name, telp } = req.body;

  if (!email || !name || !telp) throw new Error("Input not valid");

  const randomPassword = await generateRandomPassword(12);

  const user = await prisma.user.create({
    data: {
      email: String(email).toLowerCase(),
      name: name as string,
      telp: telp as string,
      password: randomPassword,
      status: "nonaktif", // nonaktif need admin approved register account
      roleId: 2, // 2 for roleId user
    },
    select: {
      id: true,
      name: true,
      email: true,
      telp: true,
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

  return { user };
}

// approve status user by admin
export async function ApproveStatus(req: Request) {
  const { id } = req.params;
  if (!id) throw new Error("Id not found");

  const user = await prisma.user.update({
    where: {
      id: Number(id),
      status: "nonaktif",
      roleId: 2, // 2 for roleId user
    },
    data: {
      status: "aktif",
    },
    select: {
      id: true,
      name: true,
      roleId: true,
      status: true,
    },
  });

  return { user };
}
