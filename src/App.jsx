import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import './App.css'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
)

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession()
    setIsLoggedIn(!!session)
  }

  const handleSignUp = async () => {
    const { error } = await supabase.auth.signUp({ email, password })
    if (!error) setIsLoggedIn(true)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Launchbase</h1>
        <p>AI-powered brand generation SaaS</p>
      </header>
      <main className="app-main">
        {!isLoggedIn ? (
          <div className="auth-form">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        ) : (
          <div className="dashboard">
            <h2>Welcome to Launchbase</h2>
            <p>Generate your brand in minutes</p>
          </div>
        )}
      </main>
    </div>
  )
}
