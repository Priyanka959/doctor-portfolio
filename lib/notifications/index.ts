import { sendEmailConfirmation } from "./email";
import { sendSmsConfirmation } from "./sms";

export async function processNotifications(data: any) {
  const promises = [];
  
  if (process.env.ENABLE_EMAIL === "true") {
    promises.push(sendEmailConfirmation(data));
  }
  
  if (process.env.ENABLE_SMS === "true") {
    promises.push(sendSmsConfirmation(data.phone, data.name));
  }
  
  await Promise.all(promises);
}