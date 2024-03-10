"use client";

import { useState } from "react";

import cn from "classnames";

import styles from "./contact.module.css";
import ContactSuccess from "./contactSuccess";

const subject = (formState: { name: string }) =>
  `New submission from ${formState.name}`;

export default function ContactForm({
  content,
}: {
  content?: React.ReactNode;
}) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;

    try {
      await fetch(form.action, {
        method: form.method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          subject: subject(formState),
        }),
      });
      setSuccess(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unable to submit the contact form");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative z-0 ph3">
      <article
        className={cn(`mw6 center pa3 mt4 mb5 paper-2 br1 bg-white`, {
          [styles.envelope]: success,
          [styles.letter]: !success,
        })}
      >
        {success ? (
          <ContactSuccess />
        ) : (
          <>
            {content && <div className="cms mb4">{content}</div>}
            <form
              method="POST"
              action="https://formspree.io/f/xwkgqnoo"
              onSubmit={handleSubmit}
            >
              <input name="subject" type="hidden" value={subject(formState)} />
              <p className="dn">
                <label>
                  Don&apos;t fill this out if you&apos;re human:{" "}
                  <input
                    name="_gotcha"
                    value={formState["_gotcha"]}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                </label>
              </p>
              <div className="flex-l mhn1-l">
                <div className="ph1-l w-50-l relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="input w-100 mb2"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                </div>
                <div className="ph1-l w-50-l relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="input w-100 mb2"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={submitting}
                  />
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  rows={8}
                  cols={80}
                  className="textarea w-100"
                  value={formState.message}
                  onChange={handleChange}
                  disabled={submitting}
                />
                <label htmlFor="message" className="label">
                  Your message
                </label>
              </div>
              <div className="tc">
                <button
                  type="submit"
                  className="btn w-100 w-auto-ns raise"
                  disabled={submitting}
                >
                  Submit
                </button>
              </div>
              {error && (
                <div>
                  <p className={cn(styles.error, "mb0 mt2 b tc")}>{error}</p>
                </div>
              )}
            </form>
          </>
        )}
      </article>
    </div>
  );
}
