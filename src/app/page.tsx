import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  ShieldCheck,
  Zap,
  Layers,
  Headset,
  Rocket,
  Code2,
  Smartphone,
  GitBranch,
  Target,
  Sparkles,
  MessageSquare,
  Bot,
  Share2,
} from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { PhotoStats } from "@/components/photo-stats";
import { ImageStory } from "@/components/image-story";
import { PullQuote } from "@/components/pull-quote";

const NAV_LINKS = [
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#why", label: "Why us" },
  { href: "#contact", label: "Contact" },
];

const SERVICES = [
  { icon: Code2, title: "Web Development", body: "Marketing sites, web apps, and internal tools, built to be maintained, not thrown away in a year." },
  { icon: Smartphone, title: "Mobile App Development", body: "iOS and Android apps for teams that need their product in their customers' pockets, not just a browser tab." },
  { icon: GitBranch, title: "Business Workflow Automation", body: "The manual steps your team repeats every day, mapped and automated so people spend time on work that actually needs a human." },
  { icon: Target, title: "Marketing Automation", body: "Campaigns, segmentation, and follow-ups that run themselves, across WhatsApp, email, and the channels your customers actually use." },
  { icon: Sparkles, title: "AI-Powered Solutions", body: "AI agents and copilots built on your own data, wired into the tools your team already uses, not a generic chatbot bolted on top." },
  { icon: MessageSquare, title: "CRM Development", body: "Custom CRM systems shaped around your actual sales process, not a generic pipeline you have to bend your business to fit." },
  { icon: Bot, title: "AI-Powered Chatbots", body: "Chatbots that actually answer from your knowledge base and hand off to a human the moment they're out of their depth, not a scripted decision tree." },
  { icon: Layers, title: "Custom Software", body: "Purpose-built systems for the parts of your business no off-the-shelf tool fits, designed around your actual workflow, not the other way round." },
  { icon: Sparkles, title: "AI Implementation", body: "Taking AI from a demo to something running in production: the right model, the right guardrails, wired into the tools your team already uses." },
];

const WHY_US = [
  { icon: Globe2, title: "A global client base, a personal working relationship", body: "We work with teams across the US, UK, Sri Lanka, and Brazil, in addition to India. Different time zones, same direct line to the people building your product." },
  { icon: ShieldCheck, title: "You own your data", body: "Your customer conversations and data belong to you. We build the systems that protect them, not hand them off to a black box." },
  { icon: Zap, title: "Fast to ship, fast to fix", body: "Small team, direct line to the people building the product. Feature requests and bugs don't disappear into a backlog for a quarter." },
  { icon: Layers, title: "No lock-in, ever", body: "Your number, your data, your customers. We build systems that work for you, not ones that trap you." },
  { icon: Headset, title: "Direct support, not a ticket queue", body: "You reach a person who can actually make a change, not a first-line responder reading from a script." },
  { icon: Rocket, title: "We use what we build", body: "Our own team runs on the same products we sell you. If it's not good enough for us, it's not good enough to ship." },
];

export default function Home() {
  return (
    <>
      <SiteNav brandHref="/" brandMark="I" brandLabel="India-Shine" links={NAV_LINKS} />

      {/* Hero */}
      <section className="dotted-bg relative overflow-hidden pt-32 text-center">
        <div className="pointer-events-none absolute -inset-x-10 -top-40 h-[620px] bg-[image:var(--hero-gradient)] opacity-[0.14] blur-[60px] dark:opacity-[0.28]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <span className="mb-7 inline-block rounded-full bg-[var(--accent)]/12 px-4 py-1.5 text-xs font-bold tracking-wider text-[var(--accent)] uppercase">
            India-Shine Business Support Services
          </span>
          <h1 className="mb-6 text-[42px] font-extrabold leading-[0.98] tracking-tight md:text-7xl lg:text-[84px]">
            We build software
            <br />
            that <span className="gradient-text">runs real
            <br />
            businesses.</span>
          </h1>
          <p className="mx-auto mb-12 max-w-xl text-lg text-[var(--text-muted)]">
            A technology company that ships products, not pitch decks. We build the tools we&apos;d want to run our
            own business on, then put them in the hands of teams that need them, wherever in the world they&apos;re
            based.
          </p>
          <div className="mb-4 flex flex-wrap justify-center gap-3">
            <a
              href="https://calendly.com/india-shine/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl bg-[image:var(--hero-gradient)] px-6 py-3.5 text-[15.5px] font-bold text-white shadow-[0_10px_30px_-8px_rgba(124,58,237,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Book a discovery call
            </a>
            <Link
              href="#products"
              className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-[15.5px] font-bold hover:border-[var(--accent)]"
            >
              See our products
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mt-12 max-w-5xl">
          <Reveal>
            <div className="relative aspect-[16/8] overflow-hidden rounded-t-[24px] shadow-[var(--shadow-lg)]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop"
                alt="A small team working together around a laptop"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" style={{ backgroundImage: "linear-gradient(180deg, transparent 60%, var(--bg) 100%)" }} />
              <div className="absolute left-6 top-6 flex items-center gap-1.5 rounded-full bg-[var(--card)] py-1 pl-1 pr-3 text-xs font-semibold shadow-[var(--shadow-lg)]">
                <span className="size-5 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--coral)]" />
                Aisha
              </div>
              <div className="absolute right-10 top-16 flex items-center gap-1.5 rounded-full bg-[var(--card)] py-1 pl-1 pr-3 text-xs font-semibold shadow-[var(--shadow-lg)]">
                <span className="size-5 rounded-full bg-gradient-to-br from-[var(--amber)] to-[var(--coral)]" />
                Marco
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Marquee items={["UNITED STATES", "UNITED KINGDOM", "SRI LANKA", "BRAZIL", "INDIA"]} />

      {/* Approach */}
      <section id="approach" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">Our approach</h2>
          <p className="text-[var(--text-muted)]">Most software gets built for a demo. We build for what happens after someone actually signs up.</p>
        </Reveal>
        <Reveal className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3.5 inline-block rounded-full bg-[#f59e0b]/16 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700">What we see</span>
            <h3 className="mb-3.5 text-xl font-bold">Enterprise software built for buyers, not users</h3>
            <p className="text-[15px] text-[var(--text-muted)]">A lot of business software is sold to whoever signs the check, not built for the person who has to use it every day. It ships with a hundred features nobody asked for, a support ticket queue instead of a real answer, and a price tag that assumes you&apos;re a Fortune 500 company.</p>
          </div>
          <div>
            <span className="mb-3.5 inline-block rounded-full bg-[var(--accent)]/14 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">What we do instead</span>
            <h3 className="mb-3.5 text-xl font-bold">Build small, ship real, stay close to the people using it</h3>
            <p className="text-[15px] text-[var(--text-muted)]">We start with one problem worth solving properly, build it for the team actually doing the work, and keep iterating based on what breaks in production, not what looks good on a roadmap slide. We run our own products before we ask anyone else to trust them.</p>
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <PullQuote>
          We don&apos;t build software to sell software. We build it because{" "}
          <span className="gradient-text italic">we needed it first.</span>
        </PullQuote>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <ImageStory
          src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1200&auto=format&fit=crop"
          alt="Someone messaging a business on WhatsApp from their phone"
          title="Built for the channel your customers already use"
          body="Your customers aren't waiting for you to email them back. They're on WhatsApp, right now, expecting a real answer. We build for that reality first, not as an afterthought bolted onto a generic CRM."
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-20">
        <PhotoStats
          stats={[
            { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop", alt: "Team working together", num: "5", label: "Countries we actively support" },
            { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop", alt: "Team meeting", num: "0", label: "Conversations lost between your team" },
            { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop", alt: "Close up of code on laptop", num: "100%", label: "Built and run by our own team" },
          ]}
        />
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">What we do</h2>
          <p className="text-[var(--text-muted)]">Beyond WATU, we take on custom work for teams that need software built around how they actually operate.</p>
        </Reveal>
        <div className="grid gap-6 gap-y-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/35">
                <div className="mb-4 flex size-10 items-center justify-center rounded-[10px] bg-[var(--accent)]/12 text-[var(--accent)]">
                  <s.icon size={20} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Flagship products */}
      <section id="products" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">Our flagship products</h2>
          <p className="text-[var(--text-muted)]">What we&apos;ve built and run in production ourselves.</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Link
              href="/watu"
              className="flex h-full flex-col gap-6 rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-lg)] transition-transform hover:-translate-y-1"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--coral)] text-xl font-extrabold text-white">
                W
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-bold">WATU — WhatsApp CRM</h3>
                <p className="mb-3.5 text-[14.5px] text-[var(--text-muted)]">
                  A WhatsApp CRM built for your team and your customers: shared inbox, contacts, sales pipelines,
                  broadcasts, no-code automations, and AI agents.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Shared Inbox", "Pipelines", "Automations", "Broadcasts", "AI Agents"].map((p) => (
                    <span key={p} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-6 rounded-[18px] border border-[var(--border)] bg-[var(--card)] p-7 shadow-[var(--shadow-lg)]">
              <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--mint,#14b8a6)] to-[var(--accent)] text-xl font-extrabold text-white">
                F
              </div>
              <div>
                <h3 className="mb-1.5 text-lg font-bold">FlowIQ — AI Workflow Automation</h3>
                <p className="mb-3.5 text-[14.5px] text-[var(--text-muted)]">
                  The workflow automation engine we build for clients: maps your team&apos;s manual steps and
                  automates them, from lead routing to internal approvals.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Visual builder", "AI-assisted rules", "Integrations"].map((p) => (
                    <span key={p} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Upcoming products */}
      <section id="upcoming" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">Upcoming products</h2>
          <p className="text-[var(--text-muted)]">What we&apos;re building next.</p>
        </Reveal>
        <div className="grid gap-6 gap-y-6 md:grid-cols-3">
          {[
            { icon: Share2, name: "Buzzr", sub: "Social Media Automation", body: "Plan, schedule, and manage content across social channels from one place, built with the same directness as everything else we ship." },
            { icon: MessageSquare, name: "OneBox", sub: "Unified inbox", body: "One inbox for every message: social media (Facebook, Instagram), WhatsApp, Telegram, and more, all in a single shared view." },
            { icon: Target, name: "PulseReach", sub: "Marketing Automation Platform", body: "A standalone tool for campaigns, segmentation, and journeys that run themselves, the product version of the service we already offer today." },
          ].map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div className="h-full rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <div className="mb-4 flex size-10 items-center justify-center rounded-[10px] bg-[var(--accent)]/12 text-[var(--accent)]">
                  <p.icon size={20} />
                </div>
                <span className="mb-2.5 inline-block rounded-full border border-[var(--border)] px-2.5 py-1 text-xs text-[var(--text-muted)]">Coming soon</span>
                <h3 className="mb-1 text-[17px] font-bold">{p.name}</h3>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">{p.sub}</p>
                <p className="text-sm text-[var(--text-muted)]">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal className="mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">Why work with us</h2>
          <p className="text-[var(--text-muted)]">Six things that make us different from a typical software vendor.</p>
        </Reveal>
        <div className="grid gap-6 gap-y-6 md:grid-cols-3">
          {WHY_US.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-[14px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <div className="mb-4 flex size-10 items-center justify-center rounded-[10px] bg-[var(--accent)]/12 text-[var(--accent)]">
                  <s.icon size={20} />
                </div>
                <h3 className="mb-2 text-[17px] font-bold">{s.title}</h3>
                <p className="text-sm text-[var(--text-muted)]">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">About us</h2>
          <p className="text-[var(--text-muted)]">
            India-Shine Business Support Services is a technology company building practical SaaS tools, starting
            with WATU, a WhatsApp CRM. We&apos;re small on purpose: small enough that every product decision is made
            by someone who&apos;s actually used the software, and every support request reaches someone who can fix
            it. Our clients span multiple continents and time zones, from small teams in Sri Lanka to businesses in
            the US, UK, and Brazil.
          </p>
        </Reveal>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
        <Reveal>
          <div
            className="rounded-[20px] border border-[var(--border)] p-12 text-center"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, var(--bg-alt)), var(--bg-alt))" }}
          >
            <h2 className="mb-2.5 text-2xl font-extrabold md:text-[28px]">Not sure where to start?</h2>
            <p className="mx-auto mb-6 max-w-lg text-[15.5px] text-[var(--text-muted)]">
              Book a free 30-minute discovery call. Tell us what you&apos;re dealing with and we&apos;ll tell you
              honestly whether we can help, and how.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://calendly.com/india-shine/30min"
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-xl bg-[image:var(--hero-gradient)] px-6 py-3.5 text-[15.5px] font-bold text-white shadow-[0_10px_30px_-8px_rgba(124,58,237,0.55)]"
              >
                Book a discovery call
              </a>
              <a
                href="mailto:info@india-shine.com"
                className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-[15.5px] font-bold hover:border-[var(--accent)]"
              >
                Or email us instead
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter
        blurb="A technology company building practical SaaS products, starting with WATU, a WhatsApp CRM. Based in India, working with teams across the US, UK, Sri Lanka, and Brazil."
        columns={[
          { heading: "Company", links: [
            { href: "/#approach", label: "Approach" },
            { href: "/#services", label: "Services" },
            { href: "/#why", label: "Why us" },
            { href: "/#about", label: "About" },
          ]},
          { heading: "Products", links: [
            { href: "/watu", label: "WATU" },
            { href: "/#upcoming", label: "Upcoming products" },
          ]},
          { heading: "Get started", links: [
            { href: "https://calendly.com/india-shine/30min", label: "Book a discovery call", external: true },
            { href: "mailto:info@india-shine.com", label: "Email us", external: true },
          ]},
        ]}
      />
    </>
  );
}
