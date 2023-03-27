import { useRouter } from 'next/router';

export default function About() {
    const router = useRouter();
    const id = Number(router.query.id);

    return (
        <div>
            <h1>/pages/sub/{id}.tsx</h1>
            <h1>Parameter id : {id}</h1>
            <ul>
                <li><a href="/">/pages/index.tsx</a></li>
            </ul>
        </div>
    )
}
