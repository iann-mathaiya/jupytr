'use client'
import CreatePost from "./components/AddPost"

export default function Home() {
  return (
    <main className="px-20 flex items-center justify-center">
      {/* <h1 className="text-2xl font-bold">
        Hello world!
      </h1> */}
      <CreatePost />
    </main>
  )
}