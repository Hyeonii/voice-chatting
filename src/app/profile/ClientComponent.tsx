'use client';

import React from 'react'

export default function clientComponent({children}: {
    children: React.ReactNode
}) {
    return (
        <div>{children}</div>
    )
}