export const config = {
  nodeMailerEmail: process.env.NODEMAILER_EMAIL as string,
  nodeMailerPassword: process.env.NODEMAILER_PASSWORD as string,
  nodeMailerHost: process.env.NODEMAILER_HOST as string,

  //
  jwtSecret: process.env.JWT_SECRET as string,
};
