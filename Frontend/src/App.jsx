import { useEffect, useMemo, useState } from 'react'
import CharacterStage from './components/CharacterStage'
import { characters } from './data/characters'
import './App.css'

const rate = 820

const walletDetails = {
  usd: 'ACH + wire details, domestic routing, instant card loads.',
  gbp: 'Faster Payments + SEPA, optional plastic debit, HMRC ready.',
  inr: 'UPI + IMPS delivery, automatic FIRC proofs, RBI compliant.',
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
      <header className="site-header">
        <nav className="nav">
          <a href="#top" className="brand">
            CrossPay
          </a>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#wallet">Wallet</a>
            </li>
            <li>
              <a href="#flow">Flow</a>
            </li>
            <li>
              <a href="#characters">Characters</a>
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
          <div className="hero-copy">
            <p className="eyebrow">Cross-border salary stack</p>
            <h1>Global salaries that feel local—instantly.</h1>
            <p className="lead">
              CrossPay handles FX, fees, compliance, and delivery so your teams can
              earn in one country and live in another without the chaos.
            </p>
            <div className="hero-cta">
              <button className="primary">Get early access</button>
              <button className="ghost">Talk to us</button>
            </div>
            <div className="stats">
              <div>
                <span>$4.2B</span>
                <p>processed seamlessly</p>
              </div>
              <div>
                <span>120+</span>
                <p>destination countries</p>
              </div>
              <div>
                <span>&lt;35s</span>
                <p>average settlement time</p>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="wallet-card float-card">
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
            <div className="globe-card float-card delay">
              <p>Turn payouts on across the globe</p>
              <div className="globe-grid">
                <span>🇬🇧 London</span>
                <span>🇳🇬 Lagos</span>
                <span>🇮🇳 Bengaluru</span>
                <span>🇺🇸 New York</span>
                <span>🇪🇺 Berlin</span>
                <span>🇵🇭 Manila</span>
              </div>
            </div>
          </div>
        </section>

        <CharacterStage characters={characters} />

        <section className="section" id="features">
          <div className="section-heading">
            <p className="eyebrow">Why CrossPay</p>
            <h2>Enterprise-grade rails, consumer-level clarity.</h2>
            <p>
              CrossPay abstracts the mess of currencies, banking partners, and
              compliance into a single elegant salary wallet.
            </p>
          </div>
          <div className="grid grid-3">
            <article className="card">
              <h3>Smart FX timing</h3>
              <p>
                We watch market moves and auto-lock favorable rates so your people
                don&apos;t lose money between payday and payout.
              </p>
            </article>
            <article className="card">
              <h3>Compliance handled</h3>
              <p>
                KYC, AML, tax disclosures: handled in every jurisdiction so your
                team can move quickly with confidence.
              </p>
            </article>
            <article className="card">
              <h3>Transparent fees</h3>
              <p>
                No double spreads or surprise deductions. See the exact fee before
                committing and share receipts automatically.
              </p>
            </article>
          </div>
        </section>

        <section className="section" id="flow">
          <div className="section-heading">
            <p className="eyebrow">Flow</p>
            <h2>How salary moves through CrossPay</h2>
          </div>
          <div className="flow">
            <div className="flow-step">
              <span>01</span>
              <h4>Collect salary</h4>
              <p>Receive payroll in USD, EUR, or crypto from employers or DAOs.</p>
            </div>
            <div className="flow-step">
              <span>02</span>
              <h4>Optimize FX</h4>
              <p>CrossPay executes hedged conversions with bank-grade liquidity.</p>
            </div>
            <div className="flow-step">
              <span>03</span>
              <h4>Disburse locally</h4>
              <p>Funds hit local accounts or cards in seconds with local proof.</p>
            </div>
            <div className="flow-step">
              <span>04</span>
              <h4>Automate obligations</h4>
              <p>We auto-pay taxes, benefits, and saving rules so pay feels native.</p>
            </div>
          </div>
        </section>

        <section className="section split" id="wallet">
          <div>
            <p className="eyebrow">Salary wallet</p>
            <h2>Control every currency from one pane of glass.</h2>
            <p>
              Toggle between wallets, freeze cards, schedule payouts, and share
              compliant statements with employers in a click.
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
          <div className="calculator">
            <div className="calc-header">
              <p>FX preview</p>
              <strong>Live mid-market + 0.35% fee</strong>
            </div>
            <div className="calc-body">
              <label htmlFor="salaryRange">Salary amount</label>
              <input
                type="range"
                id="salaryRange"
                min="2000"
                max="15000"
                value={salary}
                onChange={(event) => setSalary(Number(event.target.value))}
              />
              <div className="calc-values">
                <div>
                  <p>Origin (USD)</p>
                  <h3>${converted.origin.toLocaleString()}</h3>
                </div>
                <div>
                  <p>Local take-home (NGN)</p>
                  <h3>₦{converted.local.toLocaleString()}</h3>
                </div>
              </div>
              <p className="calc-foot">
                Fees ${converted.fee.toFixed(2)} · rate guaranteed for 24h once locked.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="section-heading">
            <p className="eyebrow">Proof</p>
            <h2>Teams that live on CrossPay</h2>
          </div>
          <div className="grid grid-2">
            <article className="testimonial">
              <p>
                “I pay a US team and live in Nairobi. CrossPay is the first wallet
                that actually made both worlds click with instant FX transparency.”
              </p>
              <div>
                <strong>Jason · Fractional CFO</strong>
                <span>Supports teams in 5 countries</span>
              </div>
            </article>
            <article className="testimonial">
              <p>
                “My DAO contributors are everywhere. Instead of juggling exchanges
                and local banks, I just send USDC in and CrossPay handles local
                delivery + compliance receipts.”
              </p>
              <div>
                <strong>Maya · Ops at Layer3 DAO</strong>
                <span>200+ contributors</span>
              </div>
            </article>
          </div>
        </section>

        <section className="section cta" id="ctaSection">
          <div>
            <p className="eyebrow">Ready?</p>
            <h2>Turn global salaries into a local superpower.</h2>
            <p>
              Join the private beta to automate FX, payroll, and compliance across
              borders.
            </p>
          </div>
          <div className="cta-actions">
            <input type="email" placeholder="Work email" />
            <button className="primary">Join waitlist</button>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} CrossPay · Global salary wallet</div>
        <div className="footer-links">
          <a href="#">Security</a>
          <a href="#">Legal</a>
          <a href="#">Support</a>
        </div>
      </footer>
    </div>
  )
}

export default App
