import nodemailer from "nodemailer";
import { config } from "../../config";

export const transport = nodemailer.createTransport({
  host: config.nodeMailerHost, // Ganti dengan host SMTP hosting Anda
  port: 465, // Ganti dengan port SMTP hosting Anda
  secure: true, // Ganti dengan true jika hosting Anda menggunakan SSL/TLS
  auth: {
    user: config.nodeMailerEmail, // Ganti dengan username email hosting Anda
    pass: config.nodeMailerPassword, // Ganti dengan password email hosting Anda
  },
});
