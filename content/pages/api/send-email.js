import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { email, message } = req.body;

    if (!email || !message) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    // --- AQUÍ ESTÁ LA TRADUCCIÓN DE TU CÓDIGO C# ---
    // En C#: new SmtpClient("smtp.gmail.com", 587)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // En C# SmtpServer.EnableSsl = true se traduce a secure: false con puerto 587 en Node
        auth: {
            // Estas variables las lee de Netlify (como si fuera el web.config)
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        },
        tls: {
            rejectUnauthorized: false // Esto ayuda a que no falle por certificados
        }
    });

    try {
        // En C#: mail.From, mail.To, mail.Subject...
        await transporter.sendMail({
            from: `"Mundo iPhone Web" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO, // Te lo mandas a vos mismo
            subject: `Nuevo contacto de: ${email}`,
            text: `Mensaje: ${message}`,
            html: `
        <div style="font-family: Arial; padding: 20px; border: 1px solid #ddd;">
            <h2>Tienes un nuevo cliente interesado</h2>
            <p><strong>Email del cliente:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background: #f9f9f9; padding: 10px;">${message}</p>
        </div>
      `
        });

        return res.status(200).json({ message: 'Enviado' });
    } catch (error) {
        console.error('Error enviando mail:', error);
        return res.status(500).json({ message: 'Error', error: error.message });
    }
}
