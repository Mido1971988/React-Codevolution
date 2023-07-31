"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()
  const btnHandler = ()=>{
    router.push("./product")
  }
  return (
    <>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      <br/>
      <Link href="/product">Products</Link>
      <br/>
      <button onClick={btnHandler}>Place Order</button>
      <br/>
      <Link href="/users">Users List</Link>
      <br/>
      <Link href="/posts">Posts List</Link>
    </>
  ) 
}
