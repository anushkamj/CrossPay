import { useEffect, useMemo, useState } from 'react'
import CharacterStage from './components/CharacterStage'
import { characters } from './data/characters'
import './App.css'

const rate = 820

const featureHighlights = [
  {
    icon: 'shield',
    title: 'Smart FX timing',
    detail: 'We auto-lock favorable rates before payout hits.',
    why: 'Why it matters: your team keeps more of each cycle.',
  },
  {
    icon: 'globe',
    title: 'Compliance handled',
    detail: 'KYC / AML + tax reporting bundled per jurisdiction.',
    why: 'Why it matters: No more local legal scramble.',
  },
  {
    icon: 'lightning',
    title: 'Transparent fees',
    detail: 'See mid-market, CrossPay fee, and final take-home live.',
    why: 'Why it matters: trust is built in every conversion.',
  },
]

const walletDetails = {
  usd: 'ACH + Fedwire + instant card loads. Share USD instructions instantly.',
  gbp: 'GBP Faster Payments & SEPA. HMRC-ready statements on tap.',
  inr: 'UPI + IMPS delivery, automatic FIRC proofs, RBI-compliant.',
}

const flowSteps = [
  { number: '01', title: 'Collect salary', detail: 'Employers, DAOs, and PSPs send USD/EUR/USDC with unique references.' },
  { number: '02', title: 'Optimize FX', detail: 'Neon slider splits instant vs optimised conversions + hedges.' },
  { number: '03', title: 'Disburse locally', detail: 'Buckets move to bank, cards, and savings destinations automatically.' },
  { number: '04', title: 'Automate obligations', detail: 'Taxes, benefits, and top-ups handled without manual instructions.' },
]

const cities = [
  { flag: '🇬🇧', label: 'London payroll hub' },
  { flag: '🇳🇬', label: 'Lagos payouts live' },
  { flag: '🇮🇳', label: 'Bengaluru UPI ready' },
  { flag: '🇺🇸', label: 'New York employers' },
  { flag: '🇪🇺', label: 'Berlin contractors' },
  { flag: '🇵🇭', label: 'Manila freelancers' },
]

function Icon({ name }) {
  switch (name) {
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M12 3l8 3v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-3z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'globe':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 12h18M12 3c3 4 3 14 0 18-3-4-3-14 0-18z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'lightning':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <path d="M13 2L5 13h6l-1 9 8-11h-6l1-9z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'wallet':
      return (
        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
          <rect x="3" y="6" width="18" height="12" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="12" r="1.5" fill="currentColor" />
        </svg>
      )
    default:
      return null
  }
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('crosspay-theme') || 'dark')
  const [walletTab, setWalletTab] = useState('usd')
  const [salary, setSalary] = useState(6000)

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('crosspay-theme', theme)
  }, [theme])

  const converted = useMemo(() => {
    const fee = salary * 0.0035
    const net = salary - fee
    return {
      origin: salary,
      local: Math.round(net * rate),
      fee,
    }
  }, [salary])

  return (
    <div className="site">
      <div className="nebula" />
      <header className="site-header">
        <nav className="nav">
          <a href="#top" className="brand">
            CrossPay
          </a>
          <ul>
            <li>
              <a href="#features">FEATURES</a>
            </li>
            <span className="nav-sep">|</span>
            <li>
              <a href="#wallet">WALLET</a>
            </li>
            <span className="nav-sep">|</span>
            <li>
              <a href="#flow">FLOW</a>
            </li>
            <span className="nav-sep">|</span>
            <li>
              <a href="#characters">CHARACTERS</a>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              className={`theme-toggle ${theme === 'light' ? 'is-light' : ''}`}
              type="button"
              aria-pressed={theme === 'light'}
              aria-label="Toggle color theme"
              onClick={() => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}
            >
              <span className="sun">☀</span>
              <span className="moon">☾</span>
              <span className="thumb" />
            </button>
            <div className="nav-cta">
              <button className="ghost">Log in</button>
              <button className="primary">Join waitlist</button>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow">CROSS-BORDER SALARY STACK</p>
            <h1>Global salaries. Local superpowers.</h1>
            <p className="lead">
              CrossPay absorbs FX, compliance, and delivery complexity. Salary feels instant, transparent,
              and fully automated for teams who work globally and live locally.
            </p>
            <div className="hero-cta">
              <button className="primary ripple">Get early access</button>
              <button className="ghost">Talk to us</button>
            </div>
            <div className="stats">
              <div>
                <span>$4.2B</span>
                <p>Processed seamlessly</p>
              </div>
              <div>
                <span>120+</span>
                <p>Destination countries</p>
              </div>
              <div>
                <span>&lt;35s</span>
                <p>Average settlement time</p>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="wallet-card glass-card">
              <div className="wallet-card__header">
                <span>Multi-currency balance</span>
                <span className="status">Live</span>
              </div>
              <div className="balance">
                <p>Total balance</p>
                <h2>$12,480.32</h2>
                <p className="sub">Updated realtime</p>
              </div>
              <div className="currency-list">
                <div>
                  <p>US Dollar</p>
                  <span>USD 6,580.12</span>
                </div>
                <div>
                  <p>GBP Wallet</p>
                  <span>GBP 3,240.76</span>
                </div>
                <div>
                  <p>NGN Wallet</p>
                  <span>NGN 2,659,844</span>
                </div>
              </div>
              <div className="card-footer">
                <p>Upcoming salary</p>
                <strong>₹ 312,000 arriving Friday</strong>
              </div>
            </div>
            <div className="globe-card glass-card delay">
              <p>Global cities ready</p>
              <div className="globe-grid">
                {cities.map((city) => (
                  <span key={city.label}>
                    {city.flag} {city.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CharacterStage characters={characters} />

        <section className="section" id="features">
          <div className="section-heading">
            <p className="eyebrow">WHY IT MATTERS</p>
            <h2>Enterprise rails with playful clarity.</h2>
            <p className="subhead">
              Minimal UI, powerful exports, and automation primitives so CrossPay feels like the Zerodha console for salaries.
            </p>
          </div>
          <div className="grid grid-3">
            {featureHighlights.map((item) => (
              <article className="card glass-card lift" key={item.title}>
                <div className="icon-pill">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <small>{item.why}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="section flow-section" id="flow">
          <div className="section-heading">
            <p className="eyebrow">FLOW</p>
            <h2>Every salary move plotted.</h2>
            <p className="subhead">A neon timeline spells out exactly what happens between payroll file and local take-home.</p>
          </div>
          <div className="flow-timeline">
            {flowSteps.map((step, index) => (
              <div className="flow-step" key={step.title}>
                <div className="flow-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.detail}</p>
                <span>Step {index + 1}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section split" id="wallet">
          <div className="wallet-copy">
            <p className="eyebrow">SALARY WALLET</p>
            <h2>Control each currency like a pro terminal.</h2>
            <p className="subhead">
              Wallet tabs, quick FX allocation, and instant statements. Everything is exportable and backed by glowing micro-interactions.
            </p>
            <div className="wallet-tabs">
              {Object.keys(walletDetails).map((key) => (
                <button
                  key={key}
                  className={`tab ${walletTab === key ? 'active' : ''}`}
                  type="button"
                  onClick={() => setWalletTab(key)}
                >
                  {key.toUpperCase()}
                </button>
              ))}
            </div>
            <ul className="wallet-details">
              {Object.entries(walletDetails).map(([key, value]) => (
                <li key={key} className={walletTab === key ? 'active' : ''}>
                  {value}
                </li>
              ))}
            </ul>
          </div>
          <div className="calculator glass-card">
            <div className="calc-header">
              <p>FX Preview</p>
              <strong>Mid + 0.35% fee · neon slider</strong>
            </div>
            <div className="calc-body">
              <label htmlFor="salaryRange">Salary amount</label>
              <input
                type="range"
                id="salaryRange"
                className="neon-range"
                min="2000"
                max="15000"
                value={salary}
                onChange={(event) => setSalary(Number(event.target.value))}
              />
              <div className="calc-values">
                <div className="pill">
                  <p>Origin</p>
                  <h3>${converted.origin.toLocaleString()}</h3>
                </div>
                <div className="pill accent">
                  <p>Local take-home</p>
                  <h3>₦{converted.local.toLocaleString()}</h3>
                </div>
              </div>
              <p className="calc-foot">
                Fees ${converted.fee.toFixed(2)} · neon lock pulses when rate is guaranteed.
              </p>
            </div>
          </div>
        </section>

        <section className="section testimonials" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">PROOF</p>
            <h2>Teams that live on CrossPay.</h2>
            <p className="subhead">Short stories, instant conviction.</p>
          </div>
          <div className="grid grid-2">
            <article className="testimonial glass-card lift">
              <p>
                “I pay a US team and live in Nairobi. CrossPay is the first wallet that makes FX transparent and receipts auditor-ready.”
              </p>
              <div>
                <strong>Jason · Fractional CFO</strong>
                <span>Supports teams in 5 countries</span>
              </div>
            </article>
            <article className="testimonial glass-card lift">
              <p>
                “My DAO contributors are everywhere. I just send USDC in and CrossPay runs local delivery + compliance proof.”
              </p>
              <div>
                <strong>Maya · Ops at Layer3 DAO</strong>
                <span>200+ contributors</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section cta glass-card" id="ctaSection">
          <div>
            <p className="eyebrow">READY?</p>
            <h2>Turn global salaries into a local superpower.</h2>
            <p className="subhead">Join the private beta, wire in payroll, and watch CrossPay automate everything.</p>
          </div>
          <div className="cta-actions">
            <input type="email" placeholder="Work email" />
            <button className="primary ripple">Join waitlist</button>
          </div>
        </section>
      </main>

      <footer className="site-footer glass-card">
        <div className="footer-brand">
          <div className="mascot">🦊</div>
          <div>
            <strong>CrossPay</strong>
            <p>Pixel-serious wallet for global salaries.</p>
          </div>
        </div>
        <div className="footer-grid">
          <div>
            <h5>Product</h5>
            <a href="#wallet">Wallet</a>
            <a href="#flow">Automation</a>
            <a href="#features">Console</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="#">Compliance</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <div>
            <h5>Company</h5>
            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="mailto:hey@crosspay.global">hey@crosspay.global</a>
            <a href="#">X / Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
        <p className="footer-note">© {new Date().getFullYear()} CrossPay · Built with glass + neon energy.</p>
      </footer>
    </div>
  )
}

export default App
