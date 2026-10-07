import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const asset = (name: string) => `/assets/${name}`

function App() {
  const words = ['Cosmic', 'Magical', 'Greater']
  const [wordIndex, setWordIndex] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setWordIndex((index) => (index + 1) % words.length), 2400)
    return () => window.clearInterval(timer)
  }, [])
  return (
    <main className="cosmos" aria-labelledby="coming-title">
      <div className="veil" />
      <header className="brand" aria-label="Trikal Darshi">
        <img src={asset('figma-trikal-logo.png')} alt="Trikal Darshi" />
      </header>
      <section className="hero">
        <div className="copy">
          <h1 id="coming-title"><span className="line line-one">Something</span><span className="line line-two gold-word" aria-live="polite" key={words[wordIndex]}>{words[wordIndex]}</span><span className="line line-three">Is Coming</span></h1>
        </div>
      </section>
      <p className="copyright">© 2026 Trikal Darshi. All rights reserved.</p>
      <aside className="powered" aria-label="Powered by Amyreil">
        <span>Powered by</span><img src={asset('figma-amyreil-wordmark.png')} alt="Amyreil" />
      </aside>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
