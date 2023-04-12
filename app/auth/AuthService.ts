import { supabase } from "@/lib/supabaseClient"

async function signUp() {
    const { data, error } = await supabase.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
    })
}

async function signIn() {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: 'example@email.com',
        password: 'example-password',
    })
}

async function signOut() {
    const { error } = await supabase.auth.signOut()
}