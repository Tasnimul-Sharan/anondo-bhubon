import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FiArrowRight, FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import {
  portalAuth,
  portalConfigured,
  portalRequest,
} from "@/lib/portal/browser";
import { Field } from "./PortalForms";
import styles from "./Portal.module.css";

export default function PortalLogin({ allowPreview, reset = false }) {
  const router = useRouter();
  const [forgot, setForgot] = useState(false);
  const [visible, setVisible] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [recoveryReady, setRecoveryReady] = useState(false);
  const configured = portalConfigured();
  useEffect(() => {
    if (!reset || !configured) return;
    let alive = true;
    const auth = portalAuth().auth;
    const {
      data: { subscription },
    } = auth.onAuthStateChange((event, session) => {
      if (
        alive &&
        session &&
        ["PASSWORD_RECOVERY", "SIGNED_IN", "INITIAL_SESSION"].includes(event)
      )
        setRecoveryReady(true);
    });
    auth.getSession().then(({ data: { session } }) => {
      if (alive) setRecoveryReady(Boolean(session));
    });
    return () => {
      alive = false;
      subscription.unsubscribe();
    };
  }, [reset, configured]);
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    const values = Object.fromEntries(new FormData(event.currentTarget));
    setBusy(true);
    setError("");
    setMessage("");
    try {
      const auth = portalAuth().auth;
      if (reset) {
        if (values.password !== values.confirm)
          throw new Error("Your passwords do not match.");
        const result = await auth.updateUser({ password: values.password });
        if (result.error)
          throw new Error(
            "Could not set your password. Request a new invitation or reset link and try again.",
          );
      } else if (forgot) {
        const result = await auth.resetPasswordForEmail(values.email, {
          redirectTo: `${window.location.origin}/portal/reset-password`,
        });
        if (result.error)
          throw new Error(
            "Could not request a reset email. Please try again shortly.",
          );
        setMessage(
          "If an account exists for this email, you will receive a password reset link shortly.",
        );
        return;
      } else {
        const result = await auth.signInWithPassword({
          email: values.email,
          password: values.password,
        });
        if (result.error)
          throw new Error(
            "We could not sign you in. Check your email and password and try again.",
          );
      }
      const session = await portalRequest("session");
      router.replace(session.role === "admin" ? "/admin" : "/portal");
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }
  return (
    <main className={styles.login}>
      <Head>
        <title>
          {`${reset ? "Set Your Password" : "Client Login"} | Anondo Bhubon`}
        </title>
        <meta name="robots" content="noindex,nofollow,noarchive" />
        <meta name="referrer" content="no-referrer" />
      </Head>
      <div className={styles.loginImage}>
        <Image
          src="/villa/luxury-villas.jpg"
          alt="Anondo Bhubon luxury villa architectural render"
          fill
          priority
          sizes="50vw"
        />
        <div className={styles.loginCaption}>
          <h2>
            Your home.
            <br />Every step closer.
          </h2>
          <p>
            Anondo Bhubon
            <br />
            Near Purbachal, Bangladesh
          </p>
        </div>
      </div>
      <div className={styles.loginMain}>
        <Link href="/" className={styles.brand} aria-label="Anondo Bhubon home">
          <Image
            src="/anondo-bhubon-updated-logo.png"
            alt="Anondo Bhubon"
            fill
            sizes="360px"
            priority
            className={styles.brandLogo}
          />
        </Link>
        <h1>
          {reset
            ? "Make yourself at home."
            : forgot
              ? "Reset your password."
              : "Welcome to Anondo Bhubon."}
        </h1>
        <p>
          {reset
            ? "Choose a secure password for your Anondo Bhubon account."
            : forgot
              ? "Enter the email address connected to your account."
              : "Sign in for your property progress, photographs and updates from the project team."}
        </p>
        {!configured && (
          <p className={styles.notice} role="status">
            Owner access is being prepared. Please contact the project team for
            assistance.
          </p>
        )}
        {reset && configured && !recoveryReady && (
          <p className={styles.notice}>
            Open the invitation or password reset link from your email to
            continue.
          </p>
        )}
        <form onSubmit={submit}>
          {!reset && (
            <Field
              label="Email address"
              type="email"
              name="email"
              required
              maxLength={254}
              autoComplete="email"
              placeholder="you@example.com"
            />
          )}
          {!forgot && (
            <Field label={reset ? "New password" : "Password"}>
              {(id) => (
                <div className={styles.passwordField}>
                  <input
                    id={id}
                    type={visible ? "text" : "password"}
                    name="password"
                    required
                    minLength={reset ? 12 : 1}
                    maxLength={128}
                    autoComplete={reset ? "new-password" : "current-password"}
                  />
                  <button
                    type="button"
                    className={styles.iconButton}
                    onClick={() => setVisible((v) => !v)}
                    aria-label={visible ? "Hide password" : "Show password"}
                  >
                    {visible ? <FiEyeOff /> : <FiEye />}
                  </button>
                </div>
              )}
            </Field>
          )}
          {reset && (
            <Field
              label="Confirm password"
              type="password"
              name="confirm"
              required
              minLength={12}
              maxLength={128}
              autoComplete="new-password"
            />
          )}
          {reset && <p className={styles.muted}>Use at least 12 characters.</p>}
          {error && (
            <p role="alert" className={styles.error}>
              {error}
            </p>
          )}
          {message && (
            <p role="status" className={styles.notice}>
              {message}
            </p>
          )}
          <button
            className={styles.primaryButton}
            type="submit"
            disabled={busy || !configured || (reset && !recoveryReady)}
          >
            <FiLock />
            {busy
              ? "Please wait..."
              : reset
                ? "Set password & continue"
                : forgot
                  ? "Send reset link"
                  : "Sign in"}
            <FiArrowRight />
          </button>
        </form>
        <div className={styles.loginLinks}>
          {reset ? (
            <Link href="/login">Back to sign in</Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                setForgot((v) => !v);
                setMessage("");
                setError("");
              }}
            >
              {forgot ? "Back to sign in" : "Forgot password?"}
            </button>
          )}
          <Link href="/contact">Contact project team</Link>
        </div>
        {allowPreview && (
          <div className={styles.previewLinks}>
            <Link href="/admin?preview=1">
              Preview administration <FiArrowRight />
            </Link>
            <Link href="/portal?preview=1">
              Preview owner portal <FiArrowRight />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
