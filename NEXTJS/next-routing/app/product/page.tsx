import Link from "next/link"

export default function Product() {
    return (
        <>
            <Link href="/">Home</Link>
            <br/>
            <Link href="/product/1">Product One</Link>
            <br/>
            <Link href="/product/2">Product Two</Link>
            <br/>
            <Link href="/product/3">Product Three</Link>
        </>
    )
}