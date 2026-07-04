import { Resend } from "resend";

let client: Resend | null = null;

export function getResendClient(): Resend {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

// TODO: replace with your real recipient email once RESEND_API_KEY is configured
export const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "you@example.com";
