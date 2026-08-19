import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Data Deletion — India-Shine Business Support Services" };

const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function DataDeletion() {
  return (
    <>
      <SiteNav brandHref="/" brandLabel="India-Shine" links={NAV_LINKS} />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-extrabold">Data Deletion</h1>
        <p className="mb-8 text-sm text-[var(--text-muted)]">Last updated: August 2026</p>
        <div className="space-y-6 text-[15px] leading-relaxed text-[var(--text)]">
          <p>
            You can request deletion of your personal data and account information from WATU and any other
            India-Shine product at any time. This page explains what gets deleted, how, and how long it takes.
          </p>

          <div>
            <h3 className="mb-2 text-lg font-bold">If you are a WATU Customer</h3>
            <p>
              Go to <span className="font-medium">Settings → Account</span> inside WATU and select{" "}
              <span className="font-medium">Delete account</span>, or email us at the address below with the subject
              line &quot;Delete my account&quot; from the email registered to your account. We&apos;ll confirm the request and
              then permanently delete your account profile, connected WhatsApp Business Account credentials, and all
              associated contacts, conversations, and message history within 30 days.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">If you are a Contact messaged through WATU</h3>
            <p>
              If a business has messaged you using WATU and you want your data (messages, phone number, name)
              removed from their account, contact that business directly first — they own that data as our Customer.
              If you&apos;re unable to reach them, email us at the address below with the phone number in question and
              we&apos;ll assist in removing it from our systems within 30 days.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">What gets deleted</h3>
            <p>
              Account credentials, WhatsApp access tokens, contact records, message history, notes, tags, and any
              uploaded media tied to the account. Billing records required for tax/legal compliance are retained
              separately for the period required by law, and are not used for any other purpose.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">Timeline</h3>
            <p>
              We confirm every deletion request within 7 business days and complete the deletion within 30 days of
              confirmation.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">Request deletion</h3>
            <p>
              Email{" "}
              <a href="mailto:info@india-shine.com?subject=Delete%20my%20account" className="text-[var(--accent)]">
                info@india-shine.com
              </a>
              {" "}or call{" "}
              <a href="tel:+919893049006" className="text-[var(--accent)]">+91 98930 49006</a>.
            </p>
          </div>
        </div>
      </section>
      <SiteFooter
        blurb="A technology company building practical SaaS products, starting with WATU, a WhatsApp CRM."
        columns={[{ heading: "Product", links: [{ href: "/watu", label: "WATU" }] }]}
      />
    </>
  );
}
