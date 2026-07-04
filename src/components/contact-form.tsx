"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from "@/lib/actions";

const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-foreground/40"
        />
        {state.fieldErrors?.name && (
          <p className="text-sm text-red-500">{state.fieldErrors.name}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-foreground/40"
        />
        {state.fieldErrors?.email && (
          <p className="text-sm text-red-500">{state.fieldErrors.email}</p>
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="rounded-lg border border-foreground/15 bg-background px-3 py-2 text-sm outline-none focus:border-foreground/40"
        />
        {state.fieldErrors?.message && (
          <p className="text-sm text-red-500">{state.fieldErrors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="self-start rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send message"}
      </button>

      {state.status === "success" && (
        <p className="text-sm text-green-600">{state.message}</p>
      )}
      {state.status === "error" && !state.fieldErrors && (
        <p className="text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
}
