import React, { Fragment, useState } from 'react';
import { GetStaticProps } from 'next';
import { Modal } from 'antd';


export default function Qrcode() {
    const [user, setUser] = useState('');
    return (
        <Fragment>
            <Modal
                title="User Loyalty"
                width={250}
                visible={false && user === ''}
                closable={false}
                centered={true}
                footer={null}
            >
                {
                    // ask phone number and display data
                }
            </Modal>
        </Fragment>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            title: 'Loyast - User Loyalty',
        }
    };
}