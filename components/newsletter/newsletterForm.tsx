"use client";

import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterForm({ id }: { id: string }) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const win = window as unknown as Record<string, () => void>;
    win[`ml_webform_success_${id}`] = function () {
      setSuccess(true);
    };

    return () => {
      delete win[`ml_webform_success_${id}`];
    };
  }, [id]);

  return (
    <div
      id={`mlb2-${id}`}
      className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${id}`}
    >
      <form
        className="ml-block-form sm:flex"
        action="https://app.mailerlite.com/webforms/submit/n6v2g4"
        data-code="n6v2g4"
        method="post"
        target="_blank"
        style={{ display: success ? "none" : undefined }}
      >
        <div className="relative mb-2 flex-auto sm:mb-0 sm:mr-2">
          <Input
            type="text"
            data-inputmask=""
            id={`newsletter-fname-${id}`}
            name="fields[name]"
            placeholder="First Name"
            autoComplete="name"
            required
          />
          <Label htmlFor={`newsletter-fname-${id}`} variant="floating">
            First Name
          </Label>
        </div>
        <div className="relative mb-2 flex-auto sm:mb-0 sm:mr-2">
          <Input
            type="email"
            data-inputmask=""
            id={`newsletter-email-${id}`}
            name="fields[email]"
            placeholder="Email"
            autoComplete="email"
            required
          />
          <Label htmlFor={`newsletter-email-${id}`} variant="floating">
            Email
          </Label>
        </div>

        <Button className="primary w-full sm:mb-0 sm:w-auto" type="submit">
          Subscribe
        </Button>
        <Button
          disabled
          style={{ display: "none" }}
          type="button"
          className="loading w-full sm:mb-0 sm:w-auto"
        >
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Subscribing
        </Button>

        <input type="hidden" name="ml-submit" value="1" />
      </form>
      <div
        className="ml-form-successBody row-success"
        style={{ display: success ? undefined : "none" }}
      >
        <div className="ml-form-successContent text-center">
          <h4 className="font-serif text-2xl font-bold text-primary">
            Thank You!
          </h4>
          <p className="font-light">
            You are now signed up for my newsletters.
          </p>
        </div>
      </div>
    </div>
  );
}
