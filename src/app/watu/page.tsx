import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Bot } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Reveal } from "@/components/reveal";
import { PullQuote } from "@/components/pull-quote";
import { FeatureSpotlight } from "@/components/feature-spotlight";

export const metadata: Metadata = {
  title: "WATU — WhatsApp CRM by India-Shine",
  description:
    "WATU is a WhatsApp CRM built on Meta's official Cloud API — shared inbox, contacts, pipelines, broadcasts, automations and AI agents, with your WhatsApp Business Account under your own Meta Business Manager.",
};

const NAV_LINKS = [
  { href: "#problem", label: "Why WATU" },
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

function ChatMockup() {
  return (
    <div className="w-full max-w-[380px] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-lg)]">
      <div className="flex gap-1.5 border-b border-[var(--border)] px-4 py-3">
        <span className="size-2.5 rounded-full bg-[var(--border)]" />
        <span className="size-2.5 rounded-full bg-[var(--border)]" />
        <span className="size-2.5 rounded-full bg-[var(--border)]" />
      </div>
      <div className="flex">
        <div className="w-[110px] border-r border-[var(--border)] bg-[var(--bg-alt)] p-3">
          {["Inbox", "Contacts", "Pipelines"].map((r, i) => (
            <div key={r} className={`mb-1 rounded-md px-2 py-1.5 text-[10px] font-semibold ${i === 0 ? "bg-[var(--accent)]/12 text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>{r}</div>
          ))}
        </div>
        <div className="flex-1 space-y-2 p-4">
          <div className="max-w-[80%] rounded-xl border border-[var(--border)] bg-[var(--bg-alt)] px-3 py-2 text-[11px] text-[var(--text-muted)]">Hi, I&apos;d like to know about pricing.</div>
          <div className="ml-auto max-w-[80%] rounded-xl bg-[var(--accent)] px-3 py-2 text-[11px] text-white">Sure! Sending our plans now.</div>
        </div>
      </div>
    </div>
  );
}

function KanbanMockup() {
  const cols = [
    { name: "New", color: "bg-amber-400", items: 3 },
    { name: "Qualified", color: "bg-[var(--accent)]", items: 2 },
    { name: "Won", color: "bg-emerald-500", items: 4 },
  ];
  return (
    <div className="flex w-full max-w-[400px] gap-3">
      {cols.map((c) => (
        <div key={c.name} className="flex-1 rounded-xl border border-[var(--border)] bg-[var(--card)] p-2.5 shadow-[var(--shadow-lg)]">
          <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold text-[var(--text-muted)]">
            <span className={`size-1.5 rounded-full ${c.color}`} /> {c.name}
          </div>
          {Array.from({ length: c.items }).map((_, i) => (
            <div key={i} className="mb-1.5 h-6 rounded-md bg-[var(--bg-alt)]" />
          ))}
        </div>
      ))}
    </div>
  );
}

function BroadcastMockup() {
  return (
    <div className="w-full max-w-[380px] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-lg)]">
      <div className="mb-3 flex items-center justify-between text-[11px] font-bold text-[var(--text-muted)]">
        <span>Diwali Offer — Template</span>
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-600">Sent</span>
      </div>
      <div className="grid grid-cols-3 gap-2 text-center">
        {[["1,204", "Sent"], ["1,180", "Delivered"], ["942", "Read"]].map(([n, l]) => (
          <div key={l} className="rounded-lg bg-[var(--bg-alt)] py-3">
            <div className="text-base font-extrabold">{n}</div>
            <div className="text-[10px] text-[var(--text-muted)]">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationMockup() {
  return (
    <div className="w-full max-w-[360px] space-y-2">
      {["Trigger: keyword \"price\"", "Action: send catalog template", "Action: tag as \"pricing-interested\""].map((s, i) => (
        <div key={s} className="flex items-center gap-2.5 rounded-xl border border-[var(--border)] bg-[var(--card)] px-3.5 py-2.5 text-[11.5px] font-semibold shadow-sm">
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[10px] text-white">{i + 1}</span>
          {s}
        </div>
      ))}
    </div>
  );
}

function WithPins({ children, pins }: { children: ReactNode; pins: { label: string; className: string }[] }) {
  return (
    <div className="relative">
      {children}
      {pins.map((p, i) => (
        <span
          key={p.label}
          className={`absolute z-10 flex items-center gap-1.5 rounded-full bg-[var(--card)] py-1 pl-1 pr-2.5 text-[11px] font-bold shadow-[var(--shadow-lg)] ${p.className}`}
        >
          <span className={`size-4 rounded-full bg-gradient-to-br ${i % 2 === 0 ? "from-[var(--accent)] to-[var(--coral)]" : "from-[var(--amber)] to-[var(--coral)]"}`} />
          {p.label}
        </span>
      ))}
    </div>
  );
}

const FEATURE_TABS = [
  {
    key: "inbox",
    label: "Inbox",
    title: "One inbox, your whole team",
    body: "Every WhatsApp conversation lands in one place, visible to your whole team. Assign a chat to the right person, leave an internal note only your team can see, and never lose a thread because someone was offline.",
    cta: "Explore inbox",
    visual: <WithPins pins={[{ label: "Aisha", className: "-right-2 top-6" }]}><ChatMockup /></WithPins>,
  },
  {
    key: "contacts",
    label: "Contacts",
    title: "A real record for every customer",
    body: "Every person who messages you gets a real contact record, not just a phone number in a chat list: custom fields, tags, and full conversation history, built up automatically.",
    cta: "Explore contacts",
    visual: (
      <WithPins pins={[{ label: "Marco", className: "-left-3 top-2" }]}>
        <div className="flex w-full max-w-[300px] flex-col gap-2">
          {["Priya Sharma · Lead", "Marco Silva · Customer", "Aisha Khan · Trial"].map((n) => (
            <div key={n} className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-3 shadow-sm">
              <span className="size-8 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--coral)]" />
              <span className="text-[12.5px] font-semibold">{n}</span>
            </div>
          ))}
        </div>
      </WithPins>
    ),
  },
  {
    key: "pipelines",
    label: "Pipelines",
    title: "Sales visibility for a channel that usually has none",
    body: "Track a deal from first message to close without ever leaving the conversation. Move a contact through stages, see where every lead actually is.",
    cta: "Explore pipelines",
    visual: <KanbanMockup />,
  },
  {
    key: "broadcasts",
    label: "Broadcasts",
    title: "Reach everyone, without leaving anyone behind",
    body: "Send an approved WhatsApp template to a segmented list, at scale, and watch delivery in real time, no more forwarding a message to a hundred people one at a time.",
    cta: "Explore broadcasts",
    visual: <BroadcastMockup />,
  },
  {
    key: "automations",
    label: "Automations",
    title: "The reply your team was typing anyway, sent automatically",
    body: "Set up rules visually, no code, no developer required. Trigger a reply on a keyword, tag a contact automatically, hand a conversation off to a human when the bot hits its limit.",
    cta: "Explore automations",
    visual: <AutomationMockup />,
  },
  {
    key: "ai",
    label: "AI Agents",
    title: "First response in seconds",
    body: "Let an AI agent handle first-line replies and common questions, trained on your own knowledge base, with a human always one click away when it's out of its depth.",
    cta: "Explore AI agents",
    visual: (
      <WithPins pins={[{ label: "Priya", className: "-bottom-2 -right-2" }]}>
        <div className="flex w-full max-w-[340px] items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-lg)]">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--coral)] text-white">
            <Bot size={22} />
          </span>
          <div>
            <div className="text-[13px] font-bold">AI Agent — drafting reply</div>
            <div className="mt-1 h-2 w-40 animate-pulse rounded-full bg-[var(--bg-alt)]" />
          </div>
        </div>
      </WithPins>
    ),
  },
];

export default function WatuPage() {
  return (
    <>
      <SiteNav brandHref="/watu" brandMark="W" brandLabel="WATU by India-Shine" links={NAV_LINKS} />

      <section className="dotted-bg relative overflow-hidden pt-24 text-center">
        <div className="pointer-events-none absolute -inset-x-10 -top-40 h-[620px] bg-[image:var(--hero-gradient)] opacity-[0.14] blur-[60px] dark:opacity-[0.28]" />
        <div className="relative mx-auto max-w-4xl px-6">
          <span className="mb-7 inline-block rounded-full bg-[var(--accent)]/12 px-4 py-1.5 text-xs font-bold tracking-wider text-[var(--accent)] uppercase">
            WhatsApp CRM, built on Meta&apos;s Cloud API
          </span>
          <h1 className="mb-6 text-[42px] font-extrabold leading-[0.98] tracking-tight md:text-7xl lg:text-[76px]">
            Your team&apos;s WhatsApp,
            <br />
            <span className="gradient-text">run like a real business.</span>
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-[var(--text-muted)]">
            WATU turns a single WhatsApp Business number into a shared inbox, a sales pipeline, and an automation
            engine, connected directly to Meta&apos;s official Cloud API under your own WhatsApp Business Account.
          </p>
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            <a
              href="https://calendly.com/india-shine/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-xl bg-[image:var(--hero-gradient)] px-6 py-3.5 text-[15.5px] font-bold text-white shadow-[0_10px_30px_-8px_rgba(124,58,237,0.55)] transition-transform hover:-translate-y-0.5"
            >
              Book a discovery call
            </a>
            <Link href="#problem" className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-[15.5px] font-bold hover:border-[var(--accent)]">
              Why we built it
            </Link>
          </div>
        </div>
        <div className="relative mx-auto mb-4 max-w-2xl px-6">
          <Reveal><ChatMockup /></Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-14">
        <Reveal>
          <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[["1", "Shared inbox for the whole team"], ["0", "Messages routed through a third party"], ["100%", "Meta Cloud API, direct"], ["∞", "Automations you control"]].map(([n, l]) => (
              <div key={l}>
                <div className="gradient-text text-4xl font-extrabold md:text-5xl">{n}</div>
                <div className="mt-2.5 text-[13px] text-[var(--text-muted)]">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <section id="problem" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto mb-13 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">WhatsApp works. Managing it as a team doesn&apos;t.</h2>
          <p className="text-[var(--text-muted)]">Most businesses that grow past one person on WhatsApp hit the same wall.</p>
        </Reveal>
        <Reveal className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="mb-3.5 inline-block rounded-full bg-[#f59e0b]/16 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-700">The problem</span>
            <h3 className="mb-3.5 text-xl font-bold">One phone, one inbox, no visibility</h3>
            <ul className="space-y-2 text-[15px] text-[var(--text-muted)]">
              <li>Everyone shares one login, or worse, one phone gets passed around.</li>
              <li>There&apos;s no record of who replied to what, or when a lead went cold.</li>
              <li>Follow-ups get missed because nothing tracks where a conversation is in your sales process.</li>
              <li>Sending updates to hundreds of customers means manually forwarding messages one by one.</li>
            </ul>
          </div>
          <div>
            <span className="mb-3.5 inline-block rounded-full bg-[var(--accent)]/14 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[var(--accent)]">Our approach</span>
            <h3 className="mb-3.5 text-xl font-bold">Treat WhatsApp like the primary channel it already is</h3>
            <ul className="space-y-2 text-[15px] text-[var(--text-muted)]">
              <li>A real shared inbox with assignment, internal notes, and full history.</li>
              <li>Pipelines and contact records that update from the conversation itself.</li>
              <li>Approved-template broadcasts to segmented audiences, tracked end to end.</li>
              <li>A visual automation builder so replies, tags, and hand-offs happen without a human typing the same thing twice.</li>
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Feature carousel — Miro-style horizontal scroll */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto mb-13 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">Everything your team needs</h2>
          <p className="text-[var(--text-muted)]">Six systems that work off the same conversation, the same contact, the same source of truth.</p>
        </Reveal>
        <FeatureSpotlight tabs={FEATURE_TABS} />
      </section>

      <div className="mx-auto max-w-4xl px-6 pb-20">
        <PullQuote>
          WhatsApp is already your <span className="gradient-text">most-used channel.</span> It&apos;s time your CRM
          treated it that way.
        </PullQuote>
      </div>

      <section id="how" className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto mb-13 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">How it works</h2>
          <p className="text-[var(--text-muted)]">From an existing WhatsApp Business number to a working shared inbox, in three steps.</p>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            ["Connect your number", "Link an existing WhatsApp Business number through Meta's official Embedded Signup, no manual API wrangling required."],
            ["Invite your team", "Add teammates with roles (admin, agent, or viewer) and everyone sees the same shared inbox from day one."],
            ["Set up your first automation", "Build a reply rule, a pipeline stage, or a broadcast segment, and let the system carry the routine work."],
          ].map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="mb-3.5 flex size-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">{i + 1}</div>
              <h4 className="mb-2 text-base font-bold">{title}</h4>
              <p className="text-[14.5px] text-[var(--text-muted)]">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="mx-auto mb-13 max-w-xl text-center">
          <h2 className="mb-3.5 text-3xl font-extrabold tracking-tight md:text-[44px]">Your customers are on WhatsApp. WATU is how you run it like a business.</h2>
          <p className="text-[var(--text-muted)]">Most WhatsApp CRM tools bolt on a generic reseller layer between you and your customers. WATU is the system that makes WhatsApp actually work for your team, end to end.</p>
        </Reveal>
        <Reveal className="grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3.5 text-xl font-bold">One platform, every problem solved</h3>
            <p className="text-[15px] text-[var(--text-muted)]">The inbox, the pipeline, the automations, the broadcasts, the AI agent, all of it is WATU. You don&apos;t stitch together five tools. We built the system so your team just works.</p>
          </div>
          <div>
            <h3 className="mb-3.5 text-xl font-bold">Built directly on Meta&apos;s Cloud API</h3>
            <p className="text-[15px] text-[var(--text-muted)]">WATU connects your WhatsApp Business Account straight to Meta, registered under your own Meta Business Manager, not a shared reseller pool. That&apos;s the foundation WATU is engineered on: your number, protected, running on the system we built to make it work.</p>
          </div>
        </Reveal>
      </section>

      <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
        <Reveal className="mx-auto mb-13 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-[44px]">Frequently asked</h2>
        </Reveal>
        <div className="divide-y divide-[var(--border)]">
          {[
            ["Do I need a Meta Business Verified account?", "You need a WhatsApp Business Account on Meta's Cloud API. We walk you through connecting it, whether you already have one set up or are starting fresh."],
            ["Can my whole team use one WhatsApp number?", "Yes, that's the whole point. WATU gives every teammate their own login while all of them work from the same shared inbox on one WhatsApp Business number."],
            ["Does WATU store our customers' messages?", "Message data is stored on infrastructure we operate for you, not routed through a third-party reseller's black box. See our Privacy Policy for the full detail."],
            ["Do I need my own servers to run this?", "No. WATU is a SaaS product, India-Shine operates and maintains all the infrastructure. Your WhatsApp Business Account stays registered under your own Meta Business Manager."],
            ["How long does setup actually take?", "Most teams are live within a day. Connect your number, invite your team, and you're working from a shared inbox, no weeks-long onboarding."],
            ["What happens to our existing WhatsApp number?", "You keep it. WATU connects to the number you already use, your customers never see a change, and you don't lose your message history or your quality rating."],
            ["Can I try WATU before committing?", "Yes. Book a discovery call and we'll walk through your actual workflow, then set you up with a working inbox so you can see it running on your own number before you decide anything."],
            ["What does support actually look like?", "You get a direct line to the team that builds WATU, not a ticket queue. Most issues get a real answer the same day."],
          ].map(([q, a]) => (
            <details key={q} className="group py-4.5">
              <summary className="flex cursor-pointer list-none items-center justify-between text-[15.5px] font-semibold">
                {q}
                <span className="text-lg text-[var(--text-muted)] group-open:hidden">+</span>
                <span className="hidden text-lg text-[var(--text-muted)] group-open:inline">−</span>
              </summary>
              <p className="mt-3 max-w-xl text-[14.5px] text-[var(--text-muted)]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div
            className="rounded-[20px] border border-[var(--border)] p-12 text-center"
            style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 14%, var(--bg-alt)), var(--bg-alt))" }}
          >
            <h2 className="mb-2.5 text-2xl font-extrabold md:text-[28px]">Not sure if WATU fits how your team works?</h2>
            <p className="mx-auto mb-6 max-w-lg text-[15.5px] text-[var(--text-muted)]">
              Book a free 30-minute discovery call. We&apos;ll walk through your actual WhatsApp workflow and tell
              you honestly whether WATU solves it.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="https://calendly.com/india-shine/30min" target="_blank" rel="noreferrer noopener" className="rounded-xl bg-[image:var(--hero-gradient)] px-6 py-3.5 text-[15.5px] font-bold text-white">
                Book a discovery call
              </a>
              <a href="mailto:info@india-shine.com?subject=WATU%20access" className="rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-3.5 text-[15.5px] font-bold hover:border-[var(--accent)]">
                Request access instead
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter
        blurb="WATU is a WhatsApp CRM built on Meta's official Cloud API, operated by India-Shine Business Support Services."
        columns={[
          { heading: "Product", links: [
            { href: "/watu#problem", label: "Why WATU" },
            { href: "/watu#features", label: "Features" },
            { href: "/watu#how", label: "How it works" },
            { href: "/watu#faq", label: "FAQ" },
          ]},
          { heading: "Company", links: [
            { href: "/", label: "India-Shine" },
          ]},
          { heading: "Get started", links: [
            { href: "https://calendly.com/india-shine/30min", label: "Book a discovery call", external: true },
          ]},
        ]}
      />
    </>
  );
}
