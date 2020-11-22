import React from 'react';
import { GetStaticProps } from 'next';
import { Collapse } from 'antd';
import { MemberRepository } from '../models';

const { Panel } = Collapse;

export default function Loyalty() {
    return (
        <Collapse bordered={false} accordion={true}>
            <Panel key="spending-loyalty" header="Spending Loyalty">
                <p>test</p>
            </Panel>
            <Panel key="cash-rebate" header="Cash Rebate">
                <p>test</p>
            </Panel>
        </Collapse>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    MemberRepository.findAll().then(console.log).catch(console.log);
    return {
        props: {
            title: 'Loyast Admin - Loyalty',
        }
    };
}