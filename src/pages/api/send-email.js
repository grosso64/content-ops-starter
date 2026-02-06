import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    // 1. Verificamos que sea un envío de datos (POST)
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método no permitido' });
    }

    const { email, message } = req.body;

    // 2. Verificamos que no lleguen vacíos
    if (!email || !message) {
        return res.status(400).json({ message: 'Faltan datos' });
    }

    // 3. Configuración de GMAIL (Igual que en tu C#)
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // Para el puerto 587 se usa false
        auth: {
            user: process.env.EMAIL_USER, // Tu mail (sistema.unlziiii...)
            pass: process.env.EMAIL_PASS // Tu contraseña (ltss...)
        },
        tls: {
            rejectUnauthorized: false // Evita errores de certificados
        }
    });

    try {
        // 4. Enviar el mail
        await transporter.sendMail({
            from: `"Web Auriculares" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO, // Te llega a vos mismo
            subject: `Nuevo mensaje de: ${email}`,
            text: `Mensaje: ${message}`,
            html: `
        <div style="font-family: Arial; padding: 20px; border: 1px solid #ddd;">
            <h2>Tienes un nuevo cliente interesado</h2>
            <p><strong>De:</strong> ${email}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background: #f9f9f9; padding: 10px;">${message}</p>
        </div>
      `
        });

        return res.status(200).json({ message: 'Enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar:', error);
        return res.status(500).json({ message: 'Error enviando mail', error: error.message });
    }
}
