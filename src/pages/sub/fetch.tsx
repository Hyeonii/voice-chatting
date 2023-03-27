import { useEffect, useState } from 'react'

export default function Fetch() {
    const [user, setUser] = useState<{name: null | string}>({name: null});

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + 'api/hello')
            .then(type => type.json())
            .then(res => {
                setUser(res);
            })
    }, [])

    return (
        <div>
            <h1>/pages/sub/index.tsx</h1>
            <span>{user?.name || ''}</span>
            <ul>
                <li><a href="/">/pages/index.tsx</a></li>
            </ul>
        </div>
    )
}
