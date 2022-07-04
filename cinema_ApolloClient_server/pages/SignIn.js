import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useMutation, useQuery, gql, useLazyQuery } from '@apollo/client';
import { Modal, Input, Button, Checkbox, Form, Layout, Typography, Alert, Spin } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import navbar from '../components/navbar'
import useSelection from 'antd/lib/table/hooks/useSelection';
import { render } from 'react-dom';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const { confirm } = Modal;

const getUserByUsernamePassword = gql`
  query($input: FindUserByUsernamePasswordInput!) {
    getUserByUsernamePassword(input: $input) {
      httpCode
      message
    }
  }
`

const SignIn = (props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const [firsttime, setfirsttime] = useState(0);
  const [getByUP, { loading,error,data }] = useLazyQuery(getUserByUsernamePassword);
  const CheckInput = async (data, values) => {
    if(data?.getUserByUsernamePassword?.httpCode){
      await dispatch({ type: "LOGIN", Username: values.Username  })
      router.push('/')
    } else {
      setfirsttime(1)
    }
  } 

  const onFinish = async (values) => {
    await getByUP({ variables: { input: values },onCompleted: (data) => {CheckInput(data,values)}}) 
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleClickSignUp = (event) => {
    router.push('/SignUp')
  }

  const AlertInput = (check) => {
    if(check){
      return <Alert message="Incorrect username and/or password" type="error" showIcon />
    }
  }
  return (
    <Layout className="layout">
      {navbar()}
      <Header style={{ backgroundColor: "#fafafa",padding: '50px 200px' }}>
        <Title align="center" >Sign In</Title>
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
          <a onClick={handleClickSignUp}>Want to register?</a>
          {loading && <Spin tip="Loading..." />}
          {error && <Alert message="Error" type="error" showIcon />}
          {AlertInput(firsttime)}
        </Form.Item>
      </Form>
      </Content>
      <Footer>
        
      </Footer>
    </Layout>
  )
}

export default SignIn