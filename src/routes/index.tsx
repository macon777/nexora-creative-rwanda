import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Printer,
  Palette,
  Camera,
  Cpu,
  Shirt,
  Flag,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  PenTool,
  Coffee,
  Trophy,
  Gift,
  Sticker,
  BookOpen,
  Menu,
  X,
  Plus,
  Minus,
} from "lucide-react";


import logo from "@/assets/nexora-logo.jpg.asset.json";
import heroPrint from "@/assets/hero-print.jpg";
import workBranding from "@/assets/work-branding.jpg";
import workPhoto from "@/assets/work-photo.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexora Creatives — Printing, Branding & Photography in Kigali" },
      {
        name: "description",
        content:
          "Kigali's trusted destination for professional printing, photography, design and branding. Same-day print, large format, signage and full brand identity.",
      },
      { property: "og:title", content: "Nexora Creatives — Printing & Branding, Kigali" },
      {
        property: "og:description",
        content:
          "Professional printing, photography, design and branding in Kigali, Rwanda.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: logo.url },
      { name: "twitter:image", content: logo.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Nexora Creatives",
          description:
            "Professional printing, photography, design and branding in Kigali, Rwanda.",
          telephone: "+250788279682",
          email: "nexoracreativesltd@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "KN 87 St",
            addressLocality: "Kigali",
            addressCountry: "RW",
          },
        }),
      },
    ],
  }),
});

const CATEGORIES = ["All", "Print", "Branding", "Merch", "Media"] as const;
type Category = (typeof CATEGORIES)[number];

const services: {
  icon: typeof Printer;
  title: string;
  desc: string;
  cat: Exclude<Category, "All">;
}[] = [
  {
    icon: Printer,
    title: "Digital & Offset Printing",
    desc: "Business cards, flyers, brochures, books, invoices and receipt books — crisp colour, fast turnaround.",
    cat: "Print",
  },
  {
    icon: Flag,
    title: "Large Format & Signage",
    desc: "Banners, roll-ups, backdrops, billboards, window graphics and branded shop fronts.",
    cat: "Print",
  },
  {
    icon: PenTool,
    title: "Graphics Design",
    desc: "Posters, social media kits, menus, magazines and layout design by our in-house designers.",
    cat: "Branding",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    desc: "Logos, brand guidelines, packaging and complete identity systems for print and screen.",
    cat: "Branding",
  },
  {
    icon: Shirt,
    title: "T-Shirt Printing",
    desc: "DTF, screen and vinyl printing on t-shirts, polos, hoodies and caps — single pieces or bulk teamwear.",
    cat: "Merch",
  },
  {
    icon: Coffee,
    title: "Mug Printing",
    desc: "Photo mugs, magic mugs, water bottles and flasks sublimated with your photo, logo or message.",
    cat: "Merch",
  },
  {
    icon: Trophy,
    title: "Awards & Trophies",
    desc: "Engraved acrylic, crystal and wooden awards, medals, plaques and certificates for any ceremony.",
    cat: "Merch",
  },
  {
    icon: Gift,
    title: "Corporate Gifts",
    desc: "Branded pens, notebooks, tote bags, umbrellas, keyholders and full welcome-kit packaging.",
    cat: "Merch",
  },
  {
    icon: Sticker,
    title: "Stickers & Labels",
    desc: "Die-cut stickers, product labels, vehicle branding and waterproof outdoor decals.",
    cat: "Print",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    desc: "Events, portraits, product shoots and promo video — captured and edited in house.",
    cat: "Media",
  },
  {
    icon: Cpu,
    title: "Electronics & ID Solutions",
    desc: "ID cards, badges, lamination, plus supply and setup of everyday office electronics.",
    cat: "Media",
  },
  {
    icon: BookOpen,
    title: "Books & Binding",
    desc: "Company profiles, reports, dissertations and wedding programmes — printed, bound and finished.",
    cat: "Print",
  },
];

const steps = [
  { n: "01", t: "Tell us the job", d: "Send your files or just the idea on WhatsApp." },
  { n: "02", t: "We design & proof", d: "You approve a digital proof before anything prints." },
  { n: "03", t: "Print & deliver", d: "Produced in Kigali and delivered where you need it." },
];

const faqs = [
  {
    q: "How fast can you print?",
    a: "Most small jobs — business cards, flyers, mugs, t-shirts — are ready the same day or within 24 hours. Large format and bulk orders usually take 2 to 3 days.",
  },
  {
    q: "Do you design if I don't have artwork?",
    a: "Yes. Our graphics design team can create the artwork from scratch, or clean up what you already have, before printing.",
  },
  {
    q: "What is the minimum order?",
    a: "There is no minimum for mugs, t-shirts, awards or business cards. We print one piece just as happily as a thousand.",
  },
  {
    q: "Do you deliver in Kigali?",
    a: "We deliver anywhere in Kigali and ship upcountry through the bus courier services on request.",
  },
];

const WHATSAPP = "https://wa.me/250788279682";

const NAV = [
  ["Services", "#services"],
  ["Work", "#work"],
  ["Process", "#process"],
  ["Quote", "#quote"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cat, setCat] = useState<Category>("All");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState("Digital & Offset Printing");

  const shown = useMemo(
    () => (cat === "All" ? services : services.filter((s) => s.cat === cat)),
    [cat],
  );

  function pickService(title: string) {
    setSelectedService(title);
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logo.url}
              alt="Nexora Creatives logo"
              width={40}
              height={40}
              className="h-9 w-9 rounded-md object-cover"
            />
            <span className="font-display text-sm tracking-[0.28em] uppercase">Nexora</span>
          </a>
          <nav className="hidden items-center gap-7 text-xs tracking-[0.18em] uppercase text-muted-foreground lg:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="transition-colors hover:text-foreground">
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#quote" className="btn-ink hidden sm:inline-flex">
              Get a quote
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
            {NAV.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-xs tracking-[0.2em] uppercase text-muted-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_1fr] md:py-28">
          <div>
            <p className="rule-label">Kigali, Rwanda</p>
            <h1 className="font-display mt-6 text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Printed with
              <br />
              precision.
              <br />
              <span className="text-accent">Designed</span> with care.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Nexora Creatives is Kigali's trusted destination for professional printing,
              photography, design and branding — from a single business card to a full
              shop-front rebrand.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn-ink">
                Chat on WhatsApp
              </a>
              <a href="#services" className="btn-outline">
                See our services
              </a>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["24h", "Rush jobs"],
                ["500+", "Brands served"],
                ["100%", "Proof first"],
              ].map(([k, v]) => (
                <div key={v}>
                  <dt className="font-display text-2xl">{k}</dt>
                  <dd className="mt-1 text-xs tracking-wider uppercase text-muted-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-secondary/5" />
            <img
              src={heroPrint}
              alt="Large format printing press producing colour brochures"
              width={1400}
              height={1000}
              className="w-full rounded-xl object-cover shadow-hard"
            />
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="border-y border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-2 px-5 py-4 text-[11px] tracking-[0.3em] uppercase">
          <span>Printing</span>
          <span className="text-accent">/</span>
          <span>Branding</span>
          <span className="text-accent">/</span>
          <span>Electronics</span>
          <span className="text-accent">/</span>
          <span>Photography &amp; Videography</span>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="rule-label">What we do</p>
        <h2 className="font-display mt-5 max-w-2xl text-4xl tracking-tight md:text-5xl">
          Every service under one roof
        </h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              className={
                c === cat
                  ? "rounded-full bg-secondary px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-secondary-foreground"
                  : "rounded-full border border-border px-4 py-2 text-[11px] tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => (
            <button
              key={s.title}
              type="button"
              onClick={() => pickService(s.title)}
              className="group bg-background p-8 text-left transition-colors hover:bg-secondary hover:text-secondary-foreground"
            >
              <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-display mt-6 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-secondary-foreground/70">
                {s.desc}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-[11px] tracking-[0.18em] uppercase text-accent">
                Request quote <ArrowUpRight className="h-3 w-3" />
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20 md:py-28">
          <p className="rule-label">Selected work</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-border bg-background">
              <img
                src={workBranding}
                alt="Branded stationery, business cards and packaging set"
                loading="lazy"
                width={1000}
                height={1000}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="flex items-center justify-between p-6">
                <span className="font-display text-lg">Brand identity kits</span>
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-border bg-background">
              <img
                src={workPhoto}
                alt="Photographer shooting a portrait in studio"
                loading="lazy"
                width={1000}
                height={1000}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="flex items-center justify-between p-6">
                <span className="font-display text-lg">Commercial photography</span>
                <ArrowUpRight className="h-4 w-4 text-accent" />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <p className="rule-label">How it works</p>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-secondary pt-6">
              <span className="font-display text-sm text-accent">{s.n}</span>
              <h3 className="font-display mt-3 text-2xl">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote builder */}
      <section id="quote" className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[1fr_1.1fr] md:py-28">
          <div>
            <p className="rule-label">Instant quote</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight md:text-5xl">
              Build your order,
              <br />
              send it in one tap.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Pick the service, tell us how many and any details. We open WhatsApp with your
              request already written — you just press send.
            </p>
          </div>
          <QuoteForm service={selectedService} onServiceChange={setSelectedService} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-20 md:py-28">
        <p className="rule-label">Questions</p>
        <h2 className="font-display mt-5 text-4xl tracking-tight md:text-5xl">Good to know</h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg">{f.q}</span>
                {openFaq === i ? (
                  <Minus className="h-4 w-4 shrink-0 text-accent" />
                ) : (
                  <Plus className="h-4 w-4 shrink-0 text-accent" />
                )}
              </button>
              {openFaq === i && (
                <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>


      {/* Contact */}
      <section id="contact" className="bg-secondary text-secondary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <div>
            <p className="rule-label text-secondary-foreground/60">Get in touch</p>
            <h2 className="font-display mt-5 text-4xl tracking-tight md:text-5xl">
              Let's print something
              <br />
              worth keeping.
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-secondary-foreground/70">
              Send your artwork or your idea. We reply fast, quote clearly and never print
              without your approval.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-invert mt-8 inline-flex"
            >
              Message us on WhatsApp
            </a>
          </div>
          <ul className="grid gap-px overflow-hidden rounded-xl bg-secondary-foreground/15">
            {[
              { icon: MessageCircle, label: "WhatsApp", value: "+250 788 279 682", href: WHATSAPP },
              { icon: Phone, label: "Call", value: "0788 279 682", href: "tel:+250788279682" },
              {
                icon: Mail,
                label: "Email",
                value: "nexoracreativesltd@gmail.com",
                href: "mailto:nexoracreativesltd@gmail.com",
              },
              { icon: MapPin, label: "Studio", value: "KN 87 St, Kigali, Rwanda" },
            ].map((c) => {
              const inner = (
                <span className="flex items-center gap-4 bg-secondary px-6 py-6">
                  <c.icon className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.5} />
                  <span>
                    <span className="block text-[11px] tracking-[0.2em] uppercase text-secondary-foreground/50">
                      {c.label}
                    </span>
                    <span className="mt-1 block text-base">{c.value}</span>
                  </span>
                </span>
              );
              return (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="block transition-opacity hover:opacity-80"
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-xs text-muted-foreground sm:flex-row">
          <div className="flex items-center gap-3">
            <img
              src={logo.url}
              alt=""
              width={28}
              height={28}
              loading="lazy"
              className="h-7 w-7 rounded object-cover"
            />
            <span>© {new Date().getFullYear()} Nexora Creatives Ltd</span>
          </div>
          <a
            href="https://instagram.com/nexora_visuals_"
            target="_blank"
            rel="noreferrer"
            className="tracking-[0.2em] uppercase transition-colors hover:text-foreground"
          >
            @nexora_visuals_
          </a>
        </div>
      </footer>
    </div>
  );
}
