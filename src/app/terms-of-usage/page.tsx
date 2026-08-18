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
          <p>
            These Terms of Usage (&quot;Terms&quot;) govern your access to and use of WATU and related products operated by
            India-Shine Business Support Services (&quot;India-Shine&quot;, &quot;we&quot;, &quot;us&quot;). By creating an account or using the
            Services, you agree to these Terms. If you don&apos;t agree, don&apos;t use the Services.
          </p>

          <div>
            <h3 className="mb-2 text-lg font-bold">1. Eligibility</h3>
            <p>
              You must be at least 18 years old and able to form a binding contract to use the Services. If you use
              the Services on behalf of a business, you confirm you have the authority to bind that business to
              these Terms.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">2. Your account</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all
              activity that happens under your account. Tell us immediately if you suspect unauthorized access.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">3. WhatsApp connection &amp; messaging compliance</h3>
            <p>
              When you connect a WhatsApp Business Account, you confirm you have authority to do so on behalf of
              that business. You are solely responsible for obtaining proper consent (opt-in) from every recipient
              before messaging them, and for the content of every message you send, in compliance with Meta&apos;s
              WhatsApp Business Messaging Policy, WhatsApp Commerce Policy, and all applicable law (including
              India&apos;s DLT/TRAI regulations where relevant). We may suspend or terminate access for accounts that
              send unsolicited messages, spam, or otherwise violate Meta&apos;s policies — Meta itself may also
              independently restrict or ban a phone number for policy violations, outside our control.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">4. Acceptable use</h3>
            <p>
              You agree not to: use the Services for any unlawful purpose; send spam, phishing, or deceptive
              messages; upload malware or attempt to disrupt or gain unauthorized access to the Services; scrape or
              systematically extract data from the Services; impersonate any person or entity; or use the Services
              to message people who have not consented to being contacted by you.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">5. Your content</h3>
            <p>
              You retain ownership of the data you put into WATU — your contacts, messages, notes, and configured
              automations. You grant us a limited license to host, process, and transmit that data solely to provide
              the Services to you. We do not use your content for our own marketing or to train third-party AI
              models without your explicit opt-in.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">6. Fees &amp; payment</h3>
            <p>
              Paid plans are billed in advance on a recurring basis until cancelled. You authorize us (and our
              payment processor) to charge your chosen payment method for the applicable fees. Prices may change
              with notice before your next billing cycle.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">7. Cancellation &amp; termination</h3>
            <p>
              You can cancel your subscription at any time from your account settings; cancellation takes effect at
              the end of the current billing period. We may suspend or terminate your access if you materially
              breach these Terms, misuse the Services, or violate Meta&apos;s WhatsApp policies, with notice where
              practicable.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">8. Availability</h3>
            <p>
              We aim for high availability but do not guarantee uninterrupted or error-free service. Scheduled
              maintenance will be communicated where possible. The Services also depend on the availability of
              Meta&apos;s WhatsApp Business Platform, which is outside our control.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">9. Intellectual property</h3>
            <p>
              The Services, including their software, design, and branding, are owned by India-Shine and protected
              by applicable intellectual property laws. We grant you a limited, non-exclusive, non-transferable
              license to use the Services for your internal business purposes only.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">10. Disclaimers &amp; limitation of liability</h3>
            <p>
              The Services are provided &quot;as is&quot;. To the maximum extent permitted by law, India-Shine is not liable
              for indirect, incidental, or consequential damages, including message delivery failures or account
              restrictions imposed by Meta, arising from your use of the Services.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">11. Governing law</h3>
            <p>
              These Terms are governed by the laws of India, and any disputes will be subject to the exclusive
              jurisdiction of the courts of India.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">12. Changes to these Terms</h3>
            <p>
              We may update these Terms from time to time. Material changes will be reflected by updating the &quot;Last
              updated&quot; date above, and, where appropriate, by direct notice to Customers.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-lg font-bold">13. Contact</h3>
            <p>
              Questions about these Terms:{" "}
              <a href="mailto:info@india-shine.com" className="text-[var(--accent)]">info@india-shine.com</a>
              {" "}or{" "}
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
