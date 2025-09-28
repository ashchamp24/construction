
import React, { useState } from 'react'

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const nav = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="#top" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white grid place-items-center font-bold">F</div>
              <span className="font-semibold tracking-tight">Foundry Construction</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {nav.map(n => (
                <a key={n.href} href={n.href} className="text-sm/6 text-neutral-700 hover:text-neutral-900">{n.label}</a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm/6 hover:bg-neutral-100">Get a quote</a>
            </nav>
            <button onClick={() => setMobileOpen(v => !v)} className="md:hidden inline-flex items-center justify-center rounded-xl border border-neutral-300 p-2">
              <span className="sr-only">Toggle menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-neutral-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-2">
              {nav.map(n => (
                <a key={n.href} href={n.href} onClick={() => setMobileOpen(false)} className="py-2 text-sm/6 text-neutral-800">{n.label}</a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl border border-neutral-300 px-4 py-2 text-sm/6 hover:bg-neutral-100">Get a quote</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(70%_60%_at_50%_0%,#e5e5e5,transparent)]"/>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">Design • Build • Renovate</h1>
              <p className="mt-4 text-neutral-700 max-w-prose">We deliver high‑quality residential and commercial construction across London—extensions, loft conversions, refurbishments, and full design‑and‑build projects with transparent pricing and guaranteed timelines.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#contact" className="rounded-2xl bg-neutral-900 px-5 py-3 text-white text-sm/6 hover:bg-black">Request a quote</a>
                <a href="#projects" className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm/6 hover:bg-neutral-100">See our work</a>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
                {[{k:'10+',v:'years experience'},{k:'100+',v:'projects delivered'},{k:'4.9★',v:'client rating'}].map(i => (
                  <div key={i.k} className="rounded-2xl border border-neutral-200 p-4">
                    <dt className="text-2xl font-semibold">{i.k}</dt>
                    <dd className="text-sm text-neutral-600">{i.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl border border-neutral-200 bg-white">
                <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c8e1?q=80&w=1600&auto=format&fit=crop" alt="Featured project" className="h-full w-full object-cover"/>
              </div>
              <div className="hidden sm:flex absolute -bottom-6 -left-6 rounded-2xl bg-white shadow-xl border border-neutral-200 p-4 gap-4 items-center">
                <div className="h-10 w-10 rounded-lg bg-neutral-900 text-white grid place-items-center text-xs font-semibold">FMB</div>
                <div>
                  <p className="text-sm font-medium">Fully insured & accredited</p>
                  <p className="text-xs text-neutral-600">NHBC • FMB • TrustMark</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Our services</h2>
              <p className="mt-2 max-w-prose text-neutral-700">From initial concept to the final handover, we manage every stage with rigorous quality control and clear communication.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm/6 hover:bg-neutral-100">Get a free site visit</a>
          </div>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {title:'Extensions & Conversions',desc:'Rear and side returns, lofts, garage conversions—planning to completion.'},
              {title:'Refurbishments',desc:'Kitchens, bathrooms, full‑house refits with meticulous finish.'},
              {title:'Design & Build',desc:'Architects, structural, SAP, and building control—one coordinated team.'},
              {title:'Commercial Fit‑Out',desc:'Cat A/B, offices, retail, and light industrial spaces.'},
              {title:'Planned Maintenance',desc:'Landlords & HMOs—EPC/EICR coordination, fire systems, and upgrades.'},
              {title:'Project Management',desc:'Programmes, budgets, and transparent reporting each week.'},
            ].map(s => (
              <div key={s.title} className="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="h-10 w-10 rounded-xl bg-neutral-900 text-white grid place-items-center">🏗️</div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{s.desc}</p>
                <a href="#contact" className="mt-4 inline-block text-sm font-medium underline decoration-neutral-300 underline-offset-4 group-hover:decoration-neutral-800">Enquire →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Selected projects</h2>
              <p className="mt-2 max-w-prose text-neutral-700">A snapshot of recent work in London. Full case studies available on request.</p>
            </div>
            <a href="#contact" className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm/6 hover:bg-neutral-100">Request case studies</a>
          </div>
          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <article key={i} className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-1502005229762-cf1b2da7c8e1?q=80&w=1600&auto=format&fit=crop`} alt="Project" className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"/>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">Project #{i}</h3>
                  <p className="mt-1 text-sm text-neutral-600">Full‑house refurbishment • London</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-20 bg-white border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">How we work</h2>
          <ol className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {t:'1. Site visit', d:'Free consultation to scope requirements and budget.'},
              {t:'2. Design', d:'Architectural drawings, structural calcs, and approvals.'},
              {t:'3. Build', d:'Programme‑led delivery with weekly progress reports.'},
              {t:'4. Handover', d:'Snagging, warranties, and aftercare support.'},
            ].map(p => (
              <li key={p.t} className="rounded-2xl border border-neutral-200 p-6 bg-neutral-50">
                <p className="font-medium">{p.t}</p>
                <p className="mt-1 text-sm text-neutral-700">{p.d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Built on trust</h2>
          <p className="mt-3 text-neutral-700">We’re a London‑based team of builders, project managers, and designers. Health & safety, tidy sites, and clear communication are non‑negotiables. We carry full public liability insurance and work with accredited trades only.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {['NHBC','FMB','TrustMark','Gas Safe','NIC EIC'].map(b => (
              <span key={b} className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm shadow-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">Get a free quote</h2>
              <p className="mt-2 text-neutral-700">Tell us about your project and we’ll come back with an estimate and timeline.</p>
              <ul className="mt-6 space-y-2 text-sm text-neutral-700">
                <li className="flex items-center gap-2">📧 info@foundry‑construction.co.uk</li>
                <li className="flex items-center gap-2">📞 020 7123 4567</li>
                <li className="flex items-center gap-2">📍 London</li>
              </ul>
            </div>
            <form name="contact" method="POST" data-netlify="true" className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Name</label>
                  <input name="name" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Jane Doe"/>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input name="email" type="email" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="jane@example.com"/>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Project type</label>
                  <select name="type" className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900">
                    <option>Extension / Loft</option>
                    <option>Refurbishment</option>
                    <option>New build</option>
                    <option>Commercial fit‑out</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Message</label>
                  <textarea name="message" rows={5} className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Tell us about your scope, timeline, and budget..."/>
                </div>
              </div>
              <button className="mt-4 w-full rounded-2xl bg-neutral-900 px-5 py-3 text-white text-sm/6 hover:bg-black">Send enquiry</button>
              <p className="mt-3 text-xs text-neutral-500">By submitting, you agree to our terms. We’ll never share your details.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-neutral-900 text-white grid place-items-center font-bold">F</div>
              <div>
                <p className="font-semibold">Foundry Construction</p>
                <p className="text-xs text-neutral-600">© {new Date().getFullYear()} All rights reserved.</p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-neutral-700">
              <a href="#services" className="hover:text-neutral-900">Services</a>
              <a href="#projects" className="hover:text-neutral-900">Projects</a>
              <a href="#process" className="hover:text-neutral-900">Process</a>
              <a href="#about" className="hover:text-neutral-900">About</a>
              <a href="#contact" className="hover:text-neutral-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
