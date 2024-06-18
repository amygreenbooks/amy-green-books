"use client";

import { useEffect, useState } from "react";

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

  const btnStyles = "bg-primary white";

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
          <input
            type="text"
            className="form-control input w-full"
            data-inputmask=""
            id={`newsletter-fname-${id}`}
            name="fields[name]"
            placeholder="First Name"
            autoComplete="name"
          />
          <label htmlFor={`newsletter-fname-${id}`} className="label">
            First Name
          </label>
        </div>
        <div className="relative mb-2 flex-auto sm:mb-0 sm:mr-2">
          <input
            type="email"
            className="form-control input w-full"
            data-inputmask=""
            id={`newsletter-email-${id}`}
            name="fields[email]"
            placeholder="Email"
            autoComplete="email"
          />
          <label htmlFor={`newsletter-email-${id}`} className="label">
            Email
          </label>
        </div>

        <button
          className={`btn raise w-full sm:mb-0 sm:w-auto ${btnStyles}`}
          type="submit"
        >
          Subscribe
        </button>
        <button
          disabled
          type="button"
          className={`btn loading w-full sm:mb-0 sm:w-auto ${btnStyles}`}
          style={{ display: "none" }}
          aria-label="Subscribing"
        >
          <div className="ml-form-embedSubmitLoad">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>

        <input type="hidden" name="ml-submit" value="1" />
      </form>
      <div
        className="ml-form-successBody row-success"
        style={{ display: success ? undefined : "none" }}
      >
        <div className="ml-form-successContent tc">
          <h4 className="font-serif text-2xl font-bold text-primary">
            Thank You!
          </h4>
          <p>You are now signed up for my newsletters.</p>
        </div>
      </div>
    </div>
  );
}
