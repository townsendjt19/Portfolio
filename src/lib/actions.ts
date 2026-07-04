"use server";

import { contactFormSchema } from "@/lib/schema";
import { getResendClient, CONTACT_TO_EMAIL } from "@/lib/resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
};

export async function sendContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const parsed = contactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === "name" || key === "email" || key === "message") {
        fieldErrors[key] = issue.message;
      }
    }
    return {
      status: "error",
      message: "Please fix the errors below.",
      fieldErrors,
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return {
      status: "error",
      message:
        "Contact form isn't configured yet (missing RESEND_API_KEY). Try again later.",
    };
  }

  try {
    const resend = getResendClient();
    await resend.emails.send({
      // TODO: replace with a verified sending domain once set up in Resend
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: CONTACT_TO_EMAIL,
      replyTo: parsed.data.email,
      subject: `New message from ${parsed.data.name}`,
      text: parsed.data.message,
    });
    return { status: "success", message: "Thanks! Your message has been sent." };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again later.",
    };
  }
}
