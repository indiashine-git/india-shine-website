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
          <p>
            India-Shine Business Support Services (&quot;India-Shine&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates WATU and
            related products (the &quot;Services&quot;). This policy explains what personal data we collect, why we collect
            it, how it&apos;s used, and the choices you have. By using the Services, you agree to the collection and use
            of information as described here.
          </p>

          <div>
            <h3 className="mb-2 text-lg font-bold">1. Who this applies to</h3>
            <p>
              This policy covers two groups of people: (a) the businesses and individual users who register for and
              operate a WATU account (&quot;Customers&quot;), and (b) the end-customers a Customer messages through WATU on
              WhatsApp (&quot;Contacts&quot;). Section 4 explains what we collect about Contacts and why.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">2. Information we collect from Customers</h3>
            <p>
              Account details you give us at signup — name, email address, password (stored hashed, never in plain
              text), business name, and phone number. Billing details when you subscribe to a paid plan, handled by
              our payment processor; we do not store full card numbers. Usage data such as login times, feature
              usage, and device/browser information, collected automatically to keep the Services secure and working
              correctly.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">3. WhatsApp Business data</h3>
            <p>
              When you connect a WhatsApp Business Account to WATU (via Meta&apos;s Embedded Signup or manual API
              credentials), we store the resulting access token (encrypted at rest), and the phone number and
              account identifiers needed to send and receive messages on your behalf through Meta&apos;s WhatsApp
              Business Platform. We use this solely to operate the messaging features you&apos;ve configured — sending,
              receiving, and routing WhatsApp messages, and running the automations, broadcasts, and workflows you
              set up. We do not use this access for any purpose beyond running your account, and we do not sell it.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">4. Information about your Contacts</h3>
            <p>
              WATU stores the WhatsApp messages, phone numbers, names, and any notes/tags your team adds for the
              people you message (your Contacts) — this is the core data your inbox and CRM run on. This data belongs
              to you as the Customer; we process it as a service provider on your behalf, not for our own purposes.
              You are responsible for having a lawful basis (e.g. consent, an existing business relationship) to
              message your Contacts, per Meta&apos;s WhatsApp Business Messaging Policy and applicable law.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">5. How we use information</h3>
            <p>
              To provide, maintain, and secure the Services; to authenticate you and prevent fraud/abuse; to send
              you service notices (billing, security alerts, product updates you can opt out of); to provide
              customer support; and to improve reliability and performance. We do not sell personal data, and we do
              not use your WhatsApp conversation content to train any third-party AI model without your explicit
              opt-in.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">6. When we share information</h3>
            <p>
              With Meta, as the operator of the WhatsApp Business Platform — every message you send/receive through
              WATU necessarily passes through Meta&apos;s infrastructure, governed by Meta&apos;s own Privacy Policy and
              WhatsApp Business API terms. With infrastructure and payment sub-processors who help us run the
              Services (hosting, database, email delivery, payment processing) under confidentiality obligations. If
              required by law, court order, or to protect the rights, safety, or property of India-Shine, our
              Customers, or the public. We do not share personal data with third parties for their own marketing
              purposes.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">7. Cookies</h3>
            <p>
              We use essential cookies to keep you signed in and to remember basic preferences (like light/dark
              theme). We do not use third-party advertising or tracking cookies on the Services.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">8. Data retention</h3>
            <p>
              We retain Customer account data and Contact/message data for as long as your account is active, and
              for a reasonable period after closure to comply with legal, tax, and dispute-resolution obligations.
              You can request deletion at any time — see Section 10.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">9. Security</h3>
            <p>
              We use encryption in transit (TLS) and at rest for sensitive credentials such as WhatsApp access
              tokens, role-based access controls, and regular backups. No method of transmission or storage is 100%
              secure; we work to protect your data but cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">10. Your rights</h3>
            <p>
              You can access, correct, export, or request deletion of your personal data by writing to us at the
              email below. Customers can also delete Contact data directly within the product. We will respond to
              verified requests within a reasonable time, subject to any exceptions required by law (e.g. records we
              must keep for tax or fraud-prevention purposes).
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">11. Children&apos;s privacy</h3>
            <p>
              The Services are intended for business use by adults (18+). We do not knowingly collect personal data
              from children. If you believe a child has provided us data, contact us and we will delete it.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">12. Changes to this policy</h3>
            <p>
              We may update this policy as the Services evolve. Material changes will be reflected by updating the
              &quot;Last updated&quot; date above, and, where appropriate, by direct notice to Customers.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">13. Contact &amp; grievance officer</h3>
            <p>
              Questions, requests, or complaints about this policy or how your data is handled:{" "}
              <a href="mailto:info@india-shine.com" className="text-[var(--accent)]">info@india-shine.com</a>
              {" "}or{" "}
              <a href="tel:+919893049006" className="text-[var(--accent)]">+91 98930 49006</a>. We aim to
              acknowledge all requests within 7 business days.
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
