import nodemailer from "nodemailer";

export async function sendEmailConfirmation(data: any) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT) || 587,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || "no-reply@prohealth.com",
      to: data.email,
      subject: "Appointment Request Received",
      text: `Hello ${data.name},\n\nWe have received your appointment request for ${data.service}. Our team will contact you shortly to confirm the date and time.\n\nBest regards,\nProHealth Team`,
    });
    return true;
  } catch (error) {
    console.error("Email error:", error);
    return false;
  }
}