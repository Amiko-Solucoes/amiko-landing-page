import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

interface MailRequestBody {
  email: string;
  sendTo?: string;
  subject: string;
  text: string;
  html?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { email, sendTo, subject, text, html }: MailRequestBody = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_SERVER_USERNAME,
      pass: process.env.SMTP_SERVER_PASSWORD,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: email,
      to: sendTo || process.env.SITE_MAIL_RECIEVER,
      subject,
      text,
      html: html || '',
    });

    console.log('Email enviado com sucesso!', info);
    return res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error: any) {
    console.error('Erro ao enviar email:', error.message, error.response);
    return res.status(500).json({ message: 'Falha ao enviar email', error: error.message });
  }
}
