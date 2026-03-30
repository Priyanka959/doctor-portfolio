import twilio from "twilio";

export async function sendSmsConfirmation(phone: string, name: string) {
  try {
    const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      body: `Hello ${name}, your appointment request at ProHealth has been received. We will call you soon!`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phone,
    });
    return true;
  } catch (error) {
    console.error("SMS error:", error);
    return false;
  }
}