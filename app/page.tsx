'use client'
import { useState } from 'react'
import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function Home() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'Priya Sharma', location: 'Bangalore', likes: 234, caption: 'ನಮಸ್ಕಾರ! BharatConnect ಗೆ ಸ್ವಾಗತ! IN' },
    { id: 2, user: 'Rahul Verma', location: 'Mumbai', likes: 512, caption: "India's own social media is here! 🔥" },
    { id: 3, user: 'Anand Yadav', location: 'Karnataka', likes: 999, caption: 'ನಾವು ಮಾಡಿದ್ದೇವೆ! Jai Hind!' },
  ])
  const [newPost, setNewPost] = useState('')

  const handlePost = () => {
    if(!newPost.trim()) return
    const newData = {
      id: posts.length + 1,
      user: 'You',
      location: 'Bangalore',
      likes: 0,
      caption: newPost
    }
    setPosts([newData,...posts])
    setNewPost('')
    console.log('New Post:', newPost)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">IN BharatConnect</h1>
          <Link href="/login" className="px-4 py-1.5 bg-blue-500 text-white rounded-full font-semibold">Log in</Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        <div className="md:col-span-2 space-y-4">

          {/* ✅ NEW POST BOX - ಇದೇ ಹೊಸದು! */}
          <div className="bg-white border rounded-lg p-4 shadow-sm">
            <h2 className="font-bold mb-2">Create Post ✍️</h2>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="ಏನನ್ನಾದರೂ ಬರೆಯಿರಿ... What's on your mind?"
              className="w-full border rounded-lg p-3 h-24"
            />
            <button
              onClick={handlePost}
              className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg font-bold hover:bg-blue-600"
            >
              Post ಮಾಡಿ 🚀
            </button>
          </div>

          {/* Users */}
          <div className="bg-white border rounded-lg p-4 flex gap-4 overflow-x-auto">
            {['You','Priya','Rahul','Amit','Sneha'].map((name) => (
              <div key={name} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">{name[0]}</div>
                <span className="text-xs mt-1">{name}</span>
              </div>
            ))}
          </div>

          {/* Posts */}
          {posts.map((post) => (
            <div key={post.id} className="bg-white border rounded-lg p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold">{post.user}</p>
                  <p className="text-xs text-gray-500">{post.location}</p>
                </div>
                <p className="text-sm">❤️ {post.likes} likes</p>
              </div>
              <p className="mt-3">{post.caption}</p>
              <div className="mt-3 bg-gray-100 h-64 rounded-lg flex items-center justify-center text-4xl font-bold">IN</div>
            </div>
          ))}
        </div>

        <div className="bg-white border rounded-lg p-4 h-fit">
          <p className="font-bold">Status</p>
          <p className="text-sm mt-2 text-green-600">✅ Supabase Connected!</p>
          <p className="text-xs mt-1">zwpqhrnhsbequgownbqh.supabase.co</p>
          <p className="mt-3 bg-green-100 p-2 rounded text-sm">PHASE 2 Done! ✅<br/>Next: Real Posts!</p>
        </div>
      </div>
    </div>
  )
}