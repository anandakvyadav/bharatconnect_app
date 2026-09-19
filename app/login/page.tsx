'use client'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSignup = async () => {
    setMsg('Creating account...')
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) setMsg('❌ Error: ' + error.message)
    else setMsg('✅ Account Created! Now Click Log in!')
  }

  const handleLogin = async () => {
    setMsg('Logging in...')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setMsg('❌ Error: ' + error.message)
    else {
      setMsg('✅ Login Success! Welcome to BharatConnect!')
      setTimeout(() => { window.location.href = '/' }, 1000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white border rounded-xl p-8 w-full max-w-sm shadow-sm">
        <h1 className="text-3xl font-bold text-center mb-2">🇮🇳 BharatConnect</h1>
        <p className="text-center text-gray-500 text-sm mb-6">India's Own Social Media</p>
        
        <input
          className="w-full border rounded-lg px-3 py-2.5 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-full border rounded-lg px-3 py-2.5 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Password"
          value={password}
          onChange={e=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin} className="w-full bg-blue-500 text-white py-2.5 rounded-lg font-semibold mb-2 hover:bg-blue-600">
          Log in
        </button>
        <button onClick={handleSignup} className="w-full border py-2.5 rounded-lg font-semibold hover:bg-gray-50">
          Sign up
        </button>

        {msg && <p className="text-xs text-center mt-4 p-3 bg-gray-100 rounded-lg">{msg}</p>}
      </div>
    </div>
  )
}