import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { useMutation, useQuery, gql } from '@apollo/client';
import { Modal, Row, Col, List, Avatar, Button, Layout, Image } from 'antd';
import { Typography } from 'antd';
import { UserOutlined } from '@ant-design/icons';
const { Title, Text, Link  } = Typography;

const { Header } = Layout;

const navbar = (UserLogin) => {
    const router = useRouter()
    const ProfileUser = (username) => {
        if(!username){
            return <a onClick={handleClickSignInUp}>
                Sign in
                &nbsp;
                <UserOutlined />
            </a>
        }
        else{
            return <a onClick={handleClickProfile}>
                {username}
                &nbsp;
                <UserOutlined />
            </a>
        }
    }
    const handleClickHome = (event) => {
        router.push('/')
      }
    const handleClickReferenceCode = (event) => {
        router.push('/ReferenceCode')
      }
    const handleClickSignInUp = (event) => {
        router.push('/SignIn')
      }
    const handleClickProfile = (event) => {
        router.push('/Profile')
      }
    return (
        <Header>
            <span style={{color:"#fafafa" }} >
                <a onClick={handleClickHome}>
                    Home
                </a> 
            </span>
            &nbsp;&nbsp;&nbsp;
            <span style={{color:"#fafafa" }} >
                <a onClick={handleClickReferenceCode}>
                    Reference Code
                </a>
            </span>
            <span style={{color:"#fafafa", float: 'right'}} >
                {ProfileUser(UserLogin)}
            </span>
        </Header>
    )
}

export default navbar