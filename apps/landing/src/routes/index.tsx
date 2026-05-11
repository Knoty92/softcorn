import { For, createSignal, onMount } from "solid-js";

const services = [
  { title: "Web Development", desc: "Full-stack web applications — Solid.js, React, Node. Fast, scalable, production-ready." },
  { title: "Mobile Apps", desc: "Cross-platform mobile solutions. Native feel, one codebase." },
  { title: "UI/UX Design", desc: "Clean, functional interfaces. Design that serves the user, not the portfolio." },
  { title: "API & Backend", desc: "REST, GraphQL, real-time systems. Architecture that scales." },
  { title: "DevOps & Infra", desc: "CI/CD, Docker, cloud infrastructure. Your code, deployed." },
  { title: "Consulting", desc: "Architecture review, code audit, technical strategy. No bullshit." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We listen, ask the right questions, define scope." },
  { step: "02", title: "Architecture", desc: "Solid foundation. Tech stack, system design, data flow." },
  { step: "03", title: "Build", desc: "Iterative development. Transparent, tested, documented." },
  { step: "04", title: "Ship", desc: "Deploy, monitor, iterate. Your product, live." },
];

const tech = ["Solid.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind", "Vercel", "Cloudflare", "Supabase"];

export default function Home() {
  const [scrolled, setScrolled] = createSignal(false);

  onMount(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  return (
    <main class="min-h-screen bg-surface-50 text-surface-700 bg-dots">
      {/* Nav */}
      <nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled() ? "bg-white/80 backdrop-blur-xl border-b border-surface-200" : "bg-transparent"}`}>
        <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2.5">
            <div class="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center">
              <span class="text-amber-600 font-bold text-xs font-mono">Sc</span>
            </div>
            <span class="font-semibold text-surface-900 tracking-tight">Softcorn</span>
          </div>
          <div class="flex items-center gap-8 text-sm">
            <a href="#services" class="text-surface-500 hover:text-surface-900 transition-colors">Services</a>
            <a href="#process" class="text-surface-500 hover:text-surface-900 transition-colors">Process</a>
            <a href="#contact" class="px-4 py-2 rounded-lg bg-amber-500 text-white hover:bg-amber-600 transition-all text-sm font-medium">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section class="min-h-screen flex items-center justify-center px-6 pt-16">
        <div class="text-center max-w-3xl">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-medium mb-8">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            Digital Studio · est. 2026
          </div>
          <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-surface-900 mb-6">
            We build.{" "}
            <span class="text-amber-500">You grow.</span>
          </h1>
          <p class="text-lg md:text-xl text-surface-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Software studio that turns ideas into products. Web, mobile, backend — 
            from concept to deployment. Clean code, clean design, no bullshit.
          </p>
          <div class="flex items-center justify-center gap-4">
            <a href="#contact" class="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors text-sm">Start a project</a>
            <a href="#services" class="px-6 py-3 rounded-xl border border-surface-300 text-surface-600 font-medium hover:border-surface-400 transition-all text-sm">What we do</a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="mb-16">
            <span class="text-amber-500 text-sm font-mono font-medium">// services</span>
            <h2 class="text-3xl md:text-4xl font-bold text-surface-900 mt-3">What we build</h2>
            <p class="text-surface-500 mt-2 max-w-xl">Full-stack software studio. We take your idea from zero to production.</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <For each={services}>
              {(s) => (
                <div class="group p-6 rounded-xl border border-surface-200 bg-white hover:border-amber-300 hover:shadow-sm transition-all duration-300">
                  <div class="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                    <span class="text-amber-600 text-xs font-mono">&gt;</span>
                  </div>
                  <h3 class="text-surface-900 font-semibold mb-2">{s.title}</h3>
                  <p class="text-surface-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" class="py-24 px-6">
        <div class="max-w-4xl mx-auto">
          <div class="mb-16">
            <span class="text-amber-500 text-sm font-mono font-medium">// process</span>
            <h2 class="text-3xl md:text-4xl font-bold text-surface-900 mt-3">How we work</h2>
            <p class="text-surface-500 mt-2 max-w-xl">Simple, transparent process. No micromanagement, no surprises.</p>
          </div>
          <div class="grid md:grid-cols-2 gap-6">
            <For each={process}>
              {(p) => (
                <div class="flex gap-5 p-6 rounded-xl border border-surface-200 bg-white">
                  <span class="text-amber-500 font-mono text-lg font-bold shrink-0 w-8">{p.step}</span>
                  <div>
                    <h3 class="text-surface-900 font-semibold mb-1.5">{p.title}</h3>
                    <p class="text-surface-500 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section class="py-24 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <span class="text-amber-500 text-sm font-mono font-medium">// stack</span>
          <h2 class="text-3xl md:text-4xl font-bold text-surface-900 mt-3 mb-4">Modern tech, proven tools</h2>
          <p class="text-surface-500 mb-10 max-w-xl mx-auto">We use whatever gets the job done. No framework religion.</p>
          <div class="flex flex-wrap justify-center gap-3">
            <For each={tech}>
              {(t) => (
                <span class="px-4 py-2 rounded-lg bg-white border border-surface-200 text-surface-600 text-sm font-medium hover:border-amber-300 transition-colors">
                  {t}
                </span>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" class="py-24 px-6">
        <div class="max-w-3xl mx-auto text-center">
          <span class="text-amber-500 text-sm font-mono font-medium">// contact</span>
          <h2 class="text-3xl md:text-4xl font-bold text-surface-900 mt-3 mb-4">Let's build something</h2>
          <p class="text-surface-500 mb-10 max-w-lg mx-auto">
            Have a project in mind? Drop us a message. We'll get back to you within 24 hours.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <a href="mailto:hello@softcorn.com" class="px-6 py-3 rounded-xl bg-amber-500 text-white font-medium hover:bg-amber-600 transition-colors text-sm">
              hello@softcorn.com
            </a>
            <span class="text-surface-400 text-sm">or</span>
            <a href="https://github.com/softcorn" class="px-6 py-3 rounded-xl border border-surface-300 text-surface-600 font-medium hover:border-surface-400 transition-all text-sm">
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="border-t border-surface-200 py-8 px-6">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div class="flex items-center gap-2.5">
            <div class="w-6 h-6 rounded bg-amber-50 border border-amber-200 flex items-center justify-center">
              <span class="text-amber-600 font-bold text-[10px] font-mono">Sc</span>
            </div>
            <span class="text-surface-500 text-sm">Softcorn</span>
          </div>
          <div class="flex items-center gap-4 text-xs text-surface-400">
            <span>© 2026 Softcorn</span>
            <span>·</span>
            <span>We build. You grow.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
