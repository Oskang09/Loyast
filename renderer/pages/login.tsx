import React from 'react';
import { GetStaticProps } from 'next';

export default function Loyalty() {
    return <div>login</div>
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            title: 'Loyast Admin - Login',
        }
    };
}