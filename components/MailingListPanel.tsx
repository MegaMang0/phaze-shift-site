"use client";
import { useState } from "react";
import "./MailingListPanel.css";

type Status = "idle" | "loading" | "success" | "error";

export default function MailingListPanel() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [shake, setShake] = useState(false);

  function triggerShake() {
    setShake(true);
    setTimeout(() => setShake(false), 400);
  }

  async function handleSubmit() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      triggerShake();
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setEmail("");
      } else {
        setErrorMsg(data.error || "Something went wrong. Try again.");
        setStatus("error");
        triggerShake();
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
      triggerShake();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSubmit();
  }

  return (
    <>
      {/* Floating Button */}
      <button
        className="mailing-float-btn"
        onClick={() => setOpen((o) => !o)}
        aria-label="Stay Updated"
      >
        {open ? "✕  CLOSE" : "▶  STAY UPDATED"}
      </button>

      {/* Slide-up Panel */}
      <div className={`mailing-panel ${open ? "mailing-panel--open" : ""}`}>
        <div className="mailing-panel__inner">

          <div className="mailing-panel__header">
            <span className="mailing-panel__tag">// TRANSMISSION</span>
            <h2 className="mailing-panel__title">STAY IN THE LOOP</h2>
            <p className="mailing-panel__sub">
              Be the first to know when the demo goes public, the Kickstarter launches, and more.
              No spam. Ever.
            </p>
          </div>

          {status === "success" ? (
            <div className="mailing-panel__success">
              <span className="mailing-panel__success-icon">✔</span>
              <p>You&apos;re in. Transmission received.</p>
            </div>
          ) : (
            <div className="mailing-panel__form">
              <input
                className={`mailing-panel__input ${shake ? "mailing-panel__input--shake" : ""}`}
                type="email"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={status === "loading"}
                aria-label="Email address"
              />
              <button
                className="mailing-panel__submit"
                onClick={handleSubmit}
                disabled={status === "loading"}
              >
                {status === "loading" ? "SENDING..." : "SUBSCRIBE"}
              </button>
              {errorMsg && (
                <p className="mailing-panel__error">{errorMsg}</p>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Backdrop (closes panel on click) */}
      {open && (
        <div
          className="mailing-panel__backdrop"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}
    </>
  );
}
