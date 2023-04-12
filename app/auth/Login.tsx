'use client'

// import { signIn } from "next-auth/react"
import { supabase } from "@/lib/supabaseClient" 

async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
    })  
}

export default function Login() {
    return (
        <li>
            <button type="button" onClick={() => signInWithGoogle()} className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700">
                Sign In
            </button>
        </li>
    )
}