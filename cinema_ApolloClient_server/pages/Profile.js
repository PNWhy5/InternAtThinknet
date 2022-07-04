import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, gql, } from '@apollo/client';
import { List, Layout, Image, Button, Typography, Space, Card } from 'antd';
import navbar from '../components/navbar'
import BookingItem from '../components/BookingItem';

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const getBookingByReference_code = gql`
  query($Reference_code: String!){
    getBookingByReference_code(Reference_code: $Reference_code){
      data{
        Username
        Reference_code
      }
    }
  }
`

const getReservedSeatByID = gql`
  query($_id: ID!){
    getReservedSeatByID(_id: $_id){
      data{
        Showtime_id
        Number
        Type
        createdAt
      }
    }
  }
`

const getShowtimeByID = gql`
  query($_id: ID!){
    getShowtimeByID(_id: $_id){
      data{
        Movie_id
        Theater_id
        Time
        Date
      }
    }
  }
`;

const getMovieByID = gql`
  query($_id: ID!){
    getMovieByID(_id: $_id){
      data{
        Name
        Description
        Length 
        Picture 
      }
    }
  }
`;

const getTheaterByID = gql`
  query($_id: ID!){
    getTheaterByID(_id: $_id){
      data{
        Name 
      }
    }
  }
`;

const getUserByUsername = gql`
  query($Username: String!){
    getUserByUsername(Username: $Username){
      data{
        Username 
        createdAt
      }
    }
  }
`;

const getBookingByUsername = gql`
    query($input: FindBookingByUsernameInput!){
        getBookingByUsername(input: $input){
            data{
                Reference_code
            }
        }
    }
`

const Profile = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const UserLogin = useSelector((state) => state.user.Username)

    //User///////////////
    const UsernameData = (Username) => {
        const { data } = useQuery(getUserByUsername,{variables:{Username : Username}})
        return data?.getUserByUsername?.data
    }

    //Booking///////////////
    const BookingReferenceCodeByUsername = (Username) => {
        const { data } = useQuery(getBookingByUsername,{variables:{input : {Username}}})
        return data?.getBookingByUsername?.data
    }
    
    const UserData = UsernameData(UserLogin)
    const BookingData = BookingReferenceCodeByUsername(UserLogin)
    const titileListname = (Reference_Code) =>{
        return `Ticket Reference Code : ${Reference_Code}`
    }

    const LogOffHandle = async () =>{
        await dispatch({ type: "LOGIN", Username: ''  })
        router.push('/')
    };

  return (
    <Layout className="layout">
      {navbar(UserLogin)}
      <Header style={{ backgroundColor: "#fafafa",padding: '50px 200px' }}>
        <Title align="center" >{UserLogin}'s profile</Title>
      </Header>
      <Content style={{ backgroundColor: "#fafafa",padding: '0px 200px' }}>
        <Space direction="vertical">
        <Card title="User detail" style={{ width: '1000px', border: '1px solid rgba(140, 140, 140, 0.35)'}}>
            Username : {UserData?.Username}
            <br/>
            Created Date : {UserData?.createdAt}
            <br/>
            <Button onClick={LogOffHandle}>Log off</Button>
        </Card>
            <List
            itemLayout="vertical"
            bordered
            dataSource={BookingData}
            renderItem={(item) => (
            <List.Item
                style={{ border: '1px solid rgba(140, 140, 140, 0.35)',}}>
                <List.Item.Meta
                title={titileListname(item.Reference_code)}/>
                <p style={{
                    height: '100%',
                    borderRight: '1px',
                    }}>
                    <BookingItem Reference_code={item.Reference_code}/>
                </p>
            </List.Item>
            )}
            />
        </Space>
      </Content>
      <Footer>
      </Footer>
    </Layout>
  )
}

export default Profile