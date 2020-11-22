import React, { useEffect, useState } from 'react';
import { ipcRenderer } from 'electron';
import { GetStaticProps } from 'next';
import { Button, Collapse, Form, InputNumber } from 'antd';

const { Panel } = Collapse;
const { useForm, Item } = Form;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

function spendingLoyalty() {
    const [form] = useForm();
    return (
        <Form form={form} onFinish={console.log}>
            <div style={{ margin: 20 }}>
                <Item name="amountPerPoint" label="Amount Per Point" rules={[{ required: true }]}>
                    <InputNumber style={{ width: 200 }} precision={2} decimalSeparator={","} />
                </Item>
                <Button type="primary" htmlType="submit">Save</Button>
            </div>
        </Form>
    );
}

function cashRebate() {
    const [form] = useForm();
    return (
        <Form {...layout} form={form}>

        </Form>
    );
}

export default function Loyalty() {
    const [active, setActive] = useState<string | string[]>('');

    useEffect(() => {
        ipcRenderer.send("getMember", {});
    });

    return (
        <Collapse activeKey={active} onChange={setActive} bordered={false} accordion={true}>
            <Panel key="spending-loyalty" header="Spending Loyalty">
                {spendingLoyalty()}
            </Panel>
            <Panel key="cash-rebate" header="Cash Rebate">
                {cashRebate()}
            </Panel>
        </Collapse>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            title: 'Loyast Admin - Loyalty',
        }
    };
}