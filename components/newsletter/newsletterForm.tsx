"use client";

import { useEffect, useState } from "react";

export default function NewsletterForm({
  id,
}: // footer,
{
  id: string;
  footer: boolean;
}) {
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

  // const btnStyles = footer ? "bg-white primary b--white" : "bg-primary white";
  const btnStyles = "bg-primary white";

  return (
    <div
      id={`mlb2-${id}`}
      className={`ml-form-embedContainer ml-subscribe-form ml-subscribe-form-${id}`}
    >
      <form
        className="ml-block-form flex-ns"
        action="https://app.mailerlite.com/webforms/submit/n6v2g4"
        data-code="n6v2g4"
        method="post"
        target="_blank"
        style={{ display: success ? "none" : undefined }}
      >
        <div className="flex-auto mb2 mb0-ns mr2-ns relative">
          <input
            type="text"
            className="form-control input w-100"
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
        <div className="flex-auto mb2 mb0-ns mr2-ns relative">
          <input
            type="email"
            className="form-control input w-100"
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
          className={`btn w-100 w-auto-ns mb0-ns raise ${btnStyles}`}
          type="submit"
        >
          Subscribe
        </button>
        <button
          disabled
          type="button"
          className={`btn w-100 w-auto-ns mb0-ns loading ${btnStyles}`}
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
          <h4 className="f3 primary b serif">Thank You!</h4>
          <p>You are now signed up for my newsletters.</p>
        </div>
      </div>
    </div>
  );
}
