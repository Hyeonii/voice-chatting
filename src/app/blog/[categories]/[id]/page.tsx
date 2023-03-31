import React from 'react'

interface ParamsType {
    params: {
        categories: string;
        id: string;
    }
}

export default function blog({params}: ParamsType) {
    const {categories, id} = params;
    return (
        <h1>Blog / {categories} / {id}</h1>
    )
}
