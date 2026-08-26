"use client";

import { CheckIcon } from "@phosphor-icons/react/dist/csr/Check";
import { CopyIcon } from "@phosphor-icons/react/dist/csr/Copy";
import { WarningCircleIcon } from "@phosphor-icons/react/dist/csr/WarningCircle";
import { useEffect, useRef, useState } from "react";

const FEEDBACK_DURATION_MS = 2000;

type CopyStatus = "idle" | "copied" | "error";

export default function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) {
        clearTimeout(feedbackTimer.current);
      }
    };
  }, []);

  const showFeedback = (nextStatus: CopyStatus) => {
    setStatus(nextStatus);

    if (feedbackTimer.current) {
      clearTimeout(feedbackTimer.current);
    }

    feedbackTimer.current = setTimeout(() => {
      setStatus("idle");
      feedbackTimer.current = null;
    }, FEEDBACK_DURATION_MS);
  };

  const handleCopy = async () => {
    if (!navigator.clipboard?.writeText) {
      showFeedback("error");
      return;
    }

    try {
      await navigator.clipboard.writeText(email);
      showFeedback("copied");
    } catch {
      showFeedback("error");
    }
  };

  const feedbackMessage =
    status === "copied"
      ? "Copied"
      : status === "error"
        ? "Copy failed"
        : "Copy email address";

  return (
    <button
      type="button"
      className="email-copy-button"
      onClick={handleCopy}
      aria-label={`Copy ${email} to clipboard`}
    >
      <span className="truncate">{email}</span>
      <span className="email-copy-status" aria-hidden="true">
        {status === "copied" ? (
          <CheckIcon weight="bold" size={16} />
        ) : status === "error" ? (
          <WarningCircleIcon weight="bold" size={16} />
        ) : (
          <CopyIcon weight="bold" size={16} />
        )}
        {status !== "idle" && <span>{feedbackMessage}</span>}
      </span>
      <span className="sr-only" aria-live="polite">
        {status === "idle" ? "" : feedbackMessage}
      </span>
    </button>
  );
}
