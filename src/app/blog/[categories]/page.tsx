import React from 'react'

interface ParamsType {
    params: {
        categories: string
    }
}

export default function blog({params}: ParamsType) {
    const {categories} = params;
    
    return (
        <h1>Blog / {categories}</h1>
    )
}
