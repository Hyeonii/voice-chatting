import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <h3>Whisper test page</h3>
            <Link href="/whisper">Let's start</Link>
        </div>
    )
}
