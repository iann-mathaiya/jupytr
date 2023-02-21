'use client'
import CreatePost from "./components/AddPost"

export default function Home() {
  return (
    <main className="px-20">
      {/* <h1 className="text-2xl font-bold">
        Hello world!
      </h1> */}
      <CreatePost />
    </main>
  )
}