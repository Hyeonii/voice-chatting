'use client';

import { useEffect } from "react";

export default function client() {

    useEffect(() => {
        console.log('This is CSR page!')
    }, [])
    
    return (
        <div>client</div>
    )
}
