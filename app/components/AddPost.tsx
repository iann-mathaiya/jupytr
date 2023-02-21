"use client"

import { useState } from "react"

export default function CreatePost() {

    const [title, setTitle] = useState("")

    return (
        <form>
            <textarea 
                name="title" 
                value={title} 
                placeholder="What's on your mind?"
                onChange={(e) => setTitle(e.target.value)}>
            </textarea>
        </form>
    )
}