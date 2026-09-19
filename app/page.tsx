'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [posts] = useState([
    { id: 1, user: 'Priya Sharma', location: 'Bangalore', likes: 234, caption: 'ನಮಸ್ಕಾರ! BharatConnect ಗೆ ಸ್ವಾಗತ! 🇮🇳' },
    { id: 2, user: 'Rahul Verma', location: 'Mumbai', likes: 512, caption: 'India\'s own social media is here! 🔥' },
    { id: 3, user: 'Anand Yadav', location: 'Karnataka', likes: 999, caption: 'ನಾವು ಮಾಡಿದ್ದೇವೆ! Jai Hind!' },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">🇮🇳 BharatConnect</h1>
          <Link href="/login" className="px-4 py-1.5 bg-blue-500 text-white rounded-full font-semibold">Log in</Link>
        </div>
      </header>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="md:col-span-2 space-y-4">
          <div className="bg-white border rounded-lg p-4 flex gap-4 overflow-x-auto">
            {['You','Priya','Rahul','Amit','Sneha'].map(name => (
              <div key={name} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center font-bold">{name[0]}</div>
                </div>
                <span className="text-xs mt-1">{name}</span>
              </div>
            ))}
          </div>
          {posts.map(post => (
            <div key={post.id} className="bg-white border rounded-lg overflow-hidden">
              <div className="p-3 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-green-500 flex items-center justify-center text-white font-bold">{post.user[0]}</div>
                <div>
                  <p className="font-semibold text-sm">{post.user}</p>
                  <p className="text-xs text-gray-500">{post.location}</p>
                </div>
              </div>
              <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <span className="text-6xl">🇮🇳</span>
              </div>
              <div className="p-3">
                <p className="font-semibold text-sm">{post.likes} likes</p>
                <p className="text-sm mt-1"><span className="font-semibold">{post.user}</span> {post.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          <div className="bg-white border rounded-lg p-4">
            <h3 className="font-bold mb-3">Status</h3>
            <p className="text-sm text-green-600 font-semibold">✅ Supabase Connected!</p>
            <p className="text-xs text-gray-500 mt-2">zwpqhrnhsbequgownbqh.supabase.co</p>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm font-semibold">PHASE 1 Done! ✅</p>
              <p className="text-xs mt-1">Next: Login Page!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}