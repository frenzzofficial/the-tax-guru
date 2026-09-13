"use client";

import * as React from "react";
import { Button } from "@/components/ui/button/Button";
import { MailIcon } from "@/components/ui/icons/UtilityIcons";
import { appConfig } from "@/packages/configs/app.config";

type SubmitState = "idle" | "submitting" | "success";

const FooterNewsletter = () => {
  const { newsletter } = appConfig.footer;
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<SubmitState>("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // No newsletter backend exists yet — this is a visual placeholder
    // until a subscribe endpoint is wired up.
    setStatus("success");
    setEmail("");
  };

  return (
    <div className="bg-primary py-8 text-primary-foreground">
      <div className="container-page flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-primary-foreground/15">
            <MailIcon className="size-4.5" />
          </span>
          <div>
            <p className="font-bold">{newsletter.title}</p>
            <p className="text-sm text-primary-foreground/80">
              {newsletter.description}
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-md items-center gap-2 sm:w-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={newsletter.placeholder}
            className="w-full rounded-lg border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-2.5 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/60 focus:border-primary-foreground/60"
          />

          <Button type="submit" variant="accent" size="md" icon={false}>
            {status === "success" ? "Subscribed" : newsletter.submitLabel}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default FooterNewsletter;
