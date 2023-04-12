import CreatePost from "./components/AddPost"
import { supabase } from "@/lib/supabaseClient"

export default async function Home() {

  const {data: posts} = await supabase.from('Posts').select()


  return (
    <main className="px-20">

      {/* <CreatePost /> */}
      <ul>{posts?.map(post => <li key={post.id}>{post.title}</li> )}</ul>

    </main>
  )
}