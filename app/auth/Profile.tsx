"use client"
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { Menu, Transition } from '@headlessui/react'
// import Image from 'next/image'
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}


async function signOut() {
    const { error } = await supabase.auth.signOut()

    console.log('loggin out');

    const session = await supabase.auth.getSession()

}

const user = supabase.auth.getUser()

console.log(user);


// type User = { image: string }

export default function Profile() {

    const [user, setUser] = useState(null)

    // useEffect(() => {
    //     const session = supabase.auth.getSession()
    //     setUser(session?.data)
    //     const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
    //         switch (event) {
    //             case "SIGNED_IN":
    //                 setUser(session?.user)
    //                 break
    //             case "SIGNED_OUT":
    //                 setUser(null)
    //                 break
    //             default:
    //                 break
    //         }
    //     })

    //     return () => {
    //         authListener.subscription.unsubscribe()
    //     }

    // }, [])

    return (
        <div className='absolute inset-y-0 right-0 flex items-center space-x-2 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>

            <Menu as="div" className="relative ml-3">
                <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        {/* <Image 
                        priority
                        width={8}
                        height={8} 
                        // src={image}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="rounded-full"
                        alt='user proile picture'
                    /> */}
                        <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                        />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Your Profile
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link
                                    href="#"
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                >
                                    Settings
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    type='button'
                                    onClick={() => signOut()}
                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-red-700')}
                                >
                                    Sign out
                                </button>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Transition>
            </Menu>

            <button
                type="button"
                onClick={() => signOut()}
                className="rounded-full p-1 text-gray-400 hover:text-red-600"
            >
                <span className="sr-only">Sign Out</span>
                <ArrowRightOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
    )
}