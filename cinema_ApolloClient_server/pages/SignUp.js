import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useMutation, useQuery, gql } from '@apollo/client';
import { Modal, Input, Button, Checkbox, Form, Layout, Typography, Alert, Spin  } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import navbar from '../components/navbar'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const createUserMutation = gql`
  mutation($input: CreateUserInput!) {
    createUser(input: $input) {
      data {
        Username
      }
    }
  }
`
const getUserByUsername = gql`
  query($Username: String!) {
    getByUsername(Username: $Username) {
      createdAt
    }
  }
`

const SignUp = () => {
  const [create, { loading: mutationLoading, error: mutationError , data}] = useMutation(createUserMutation,
    {onCompleted: (data) => {CheckCreated(data)}});

  const router = useRouter()

  const CheckCreated = (data) => {
    if(data?.createUser?.data.Username){
      router.push('/SignIn')
    }else{
      console.log("Already havs this Username")
    }
  }

  const handleClickSignIn = (event) => {
    router.push('/SignIn')
  }

  const onFinish = async (values) => {
    await create({ variables: { input: values } ,awaitRefetchQueries: true}) 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout className="layout">
      {navbar()}
      <Header style={{ backgroundColor: "#fafafa",padding: '50px 200px' }}>
        <Title align="center" >Sign Up</Title>
      </Header>
      <Content style={{ backgroundColor: "#fafafa",padding: '0px 200px' }}>
        <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="Username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}>
          <a onClick={handleClickSignIn}>Already have an account?</a>
          {mutationLoading && <Spin tip="Loading..." />}
          {mutationError && <Alert message="Error" type="error" showIcon />}
          {data && <Alert message="The Username was already taken" type="error" showIcon />}
        </Form.Item>
      </Form>
      </Content>
      <Footer>
        
      </Footer>
    </Layout>
  )
}

export default SignUp