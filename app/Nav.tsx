import Link from "next/link"
import Login from "./auth/Login"
import Profile from "./auth/Profile"
import { supabase } from "@/lib/supabaseClient"

export default async function Nav() {

    const {data, error} = await supabase.auth.getSession()

    console.log(data.session);
    

    return (
        <div className="flex">
            <nav className="w-screen px-12 mb-10 py-2 flex items-center justify-between">
                <div>
                    <Link href={"/"}>
                        <img
                            className="block h-10 w-auto lg:hidden"
                            src="/jupytr.png"
                            alt="jupytr"
                        />
                    </Link>
                    <Link href={"/"}>
                        <img
                            className="hidden h-12 w-auto lg:block"
                            src="/jupytr.png"
                            alt="jupytr"
                        />
                    </Link>
                </div>

                <ul className="flex items-center gap-6">
                    { !data?.session === null && <Login /> || <Profile />  }
                    {/* { data?.session &&  <Profile /> || "" } */}
                    {/* {data?.session ? <Profile /> : <Login />} */}
                </ul>

            </nav>
        </div>
    )
}