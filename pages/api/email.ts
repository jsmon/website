import type { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
    if (req.method === 'GET') {
        return res.json({ email: 'jsmon.dev@gmail.com' });
    } else if (req.method !== 'POST') {
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }

    let { name, email, subject, content }: {
        name: string;
        email: string;
        subject: string;
        content: string;
    } = req.body;

    name = name || '[ANONYMOUS]';
    email = email || '[ANONYMOUS]';
    subject = subject || '[NO SUBJECT]';
    content = content || '[NO CONTENT]';


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jsmon.dev@gmail.com',
            pass: process.env.EMAIL_PASSWORD
        }
    });

    transporter.sendMail({
        from: `${name} ${email}`,
        to: 'jsmon.dev@gmail.com',
        subject,
        text: `${content}\n\nName: "${name}"\nEmail: "${email}"`
    }, (err, info) => {
        if (err) {
            res.status(500).json({ success: false, error: err });
        } else {
            res.json({ success: true, info });
        }
    });

};

export default handler;
