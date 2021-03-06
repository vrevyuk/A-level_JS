import React, { useEffect } from 'react';
import CGoodsList from '../components/GoodsList';

export default function PageCategory({
    match: {
        params: { _id },
    },
    getData,
}) {
    useEffect(() => (getData(_id), undefined), [_id]);
    return (
        <>
            <h1>Категория {_id}</h1>
            <CGoodsList />
        </>
    );
}
