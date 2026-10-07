import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const asset = (name: string) => `/assets/${name}`

function App() {
  return (
    <main className="cosmos" aria-labelledby="coming-title">
      <div className="veil" />
      <header className="brand" aria-label="Trikal Darshi">
        <img src={asset('trikal-darshi.png')} alt="Trikal Darshi" />
      </header>
      <section className="hero">
        <img className="wheel" src={asset('wheel.png')} alt="" aria-hidden="true" />
        <div className="copy">
          <h1 id="coming-title"><span className="line line-one">Something Cosmic</span><span className="line line-two">Is Coming</span></h1>
        </div>
      </section>
      <p className="copyright">© 2026 Trikal Darshi. All rights reserved.</p>
      <aside className="powered" aria-label="Powered by Amyreil">
        <span>Powered by</span><img src={asset('amyreil.png')} alt="Amyreil" />
      </aside>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>)
