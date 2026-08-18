import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = { title: "Terms of Usage — India-Shine Business Support Services" };

const NAV_LINKS = [
  { href: "/#products", label: "Products" },
  { href: "/#contact", label: "Contact" },
];

export default function TermsOfUsage() {
  return (
    <>
      <SiteNav brandHref="/" brandMark="I" brandLabel="India-Shine" links={NAV_LINKS} />
      <section className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-extrabold">Terms of Usage</h1>
        <p className="mb-8 text-sm text-[var(--text-muted)]">Last updated: August 2026</p>
        <div className="space-y-6 text-[15px] leading-relaxed text-[var(--text)]">
          <p>These terms govern your use of products operated by India-Shine Business Support Services, including WATU.</p>
          <div>
            <h3 className="mb-2 text-lg font-bold">Use of the service</h3>
            <p>You agree to use our products only for lawful purposes, and in compliance with Meta&apos;s WhatsApp Business Messaging Policy where applicable, including obtaining proper consent from recipients before messaging them.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Your account</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">WhatsApp connection</h3>
            <p>When you connect a WhatsApp Business Account, you confirm you have authority to do so on behalf of that business, and that messages sent through the product comply with Meta&apos;s policies.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Availability</h3>
            <p>We aim for high availability but do not guarantee uninterrupted service. Scheduled maintenance will be communicated where possible.</p>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-bold">Contact</h3>
            <p>
              Questions about these terms:{" "}
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
