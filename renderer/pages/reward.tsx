import React from 'react';
import { GetStaticProps } from 'next';
import { Avatar, List, Divider, Button, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const ButtonBar = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

const Paginator = styled(Pagination)`
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Container = styled.div`
    margin-right: 50px;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export default function Reward() {
    return (
        <Container>
            <ButtonBar>
                <Button type="primary" icon={<PlusOutlined />}>
                    Create
                </Button>
            </ButtonBar>
            <Divider orientation="left">
                Rewards
            </Divider>
            <Paginator pageSize={10} total={50} />
            <List
                itemLayout="horizontal"
                dataSource={[0, 1, 2, 23, 2, 1, 1, 1, 31]}
                renderItem={
                    (item) => (
                        <List.Item
                            extra={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        >
                            <List.Item.Meta
                                title={<a href="https://ant.design">{"test"}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )
                }
            />
            <Paginator pageSize={10} total={50} />
        </Container>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            title: 'Loyast Admin - Reward',
        }
    };
}