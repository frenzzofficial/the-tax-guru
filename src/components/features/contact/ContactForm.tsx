"use client";

import * as React from "react";
import { Button } from "@/components/ui/button/Button";
import { homeConfig } from "@/packages/configs/home.config";

type FormField = (typeof homeConfig)["contact"]["form"]["fields"][number];

type SubmitState = "idle" | "submitting" | "success" | "error";

const initialValues: Record<string, string> = {};

const ContactForm = () => {
  const { form } = homeConfig.contact;

  const [values, setValues] =
    React.useState<Record<string, string>>(initialValues);
  const [status, setStatus] = React.useState<SubmitState>("idle");

  const handleChange = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: values.name,
          phone: values.phone,
          email: values.email,
          service: values.service,
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {form.fields.map((field: FormField) => {
          const isFullWidth =
            field.type === "textarea" || field.name === "email";

          return (
            <div
              key={field.name}
              className={isFullWidth ? "sm:col-span-2" : undefined}
            >
              <label
                htmlFor={field.name}
                className="mb-1.5 block text-sm font-medium text-foreground"
              >
                {field.label}
                {field.required ? (
                  <span className="text-destructive"> *</span>
                ) : null}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  placeholder={field.placeholder}
                  rows={4}
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    handleChange(field.name, event.target.value)
                  }
                  className="w-full resize-none rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              ) : field.type === "select" ? (
                <select
                  id={field.name}
                  name={field.name}
                  required={field.required}
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    handleChange(field.name, event.target.value)
                  }
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                >
                  <option value="" disabled>
                    {field.placeholder}
                  </option>
                  {"options" in field &&
                    field.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                </select>
              ) : (
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  required={field.required}
                  placeholder={field.placeholder}
                  value={values[field.name] ?? ""}
                  onChange={(event) =>
                    handleChange(field.name, event.target.value)
                  }
                  className="w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                />
              )}
            </div>
          );
        })}
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full justify-center sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : form.submitLabel}
      </Button>

      {status === "success" ? (
        <p className="text-sm font-medium text-brand-accent-foreground">
          Thanks! We've received your enquiry and will get back to you shortly.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="text-sm font-medium text-destructive">
          Something went wrong sending your enquiry. Please try again, or call
          us directly.
        </p>
      ) : null}
    </form>
  );
};

export default ContactForm;
