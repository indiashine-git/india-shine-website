import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Privacy Policy — India-Shine Business Support Services" };

const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SiteNav brandHref="/" brandMark="I" brandLabel="India-Shine" links={NAV_LINKS} />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-extrabold">Privacy Policy</h1>
        <p className="mb-8 text-sm text-[var(--text-muted)]">Last updated: August 2026</p>
        <div className="space-y-6 text-[15px] leading-relaxed text-[var(--text)]">
          <p>India-Shine Business Support Services (&quot;we&quot;, &quot;us&quot;) operates WATU and related products. This page explains what we collect and how we use it.</p>
          <div>
            <h3 className="mb-2 text-lg font-bold">What we collect</h3>
            <p>Account details you provide at signup (name, email), and data you send through the products you use, for WATU this includes WhatsApp Business Account credentials you connect, and the contacts/messages/conversations your team handles inside the product.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">How we use it</h3>
            <p>Solely to operate the product you&apos;re using: authenticating you, routing WhatsApp messages through your connected number, and running the automations/workflows you configure. We do not sell your data.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">WhatsApp Business data</h3>
            <p>When you connect a WhatsApp Business Account via Meta&apos;s Embedded Signup or manual API credentials, we store the resulting access token (encrypted at rest) and the phone number/account identifiers needed to send and receive messages on your behalf, through Meta&apos;s WhatsApp Cloud API.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Data retention</h3>
            <p>Data is retained for as long as your account is active. You can request deletion by contacting us below.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Contact</h3>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:info@india-shine.com" className="text-[var(--accent)]">info@india-shine.com</a>
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
