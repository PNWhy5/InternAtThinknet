import React, { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { Row, Col, Input, Layout, Image, Typography, Alert, Space, Card } from 'antd';
import navbar from '../components/navbar'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;
const { Search } = Input;

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


const ReferenceCode = () => {
  const UserLogin = useSelector((state) => state.user.Username)
  const [Incorrect, setIncorrect] = useState(0);
  const [ReferenceCode, setReferenceCode] = useState('');
  const [getBooking, { loading,error,data }] = useLazyQuery(getBookingByReference_code);
  const CheckInput = async (data, value) => {
    if(data?.getBookingByReference_code?.data){
      setIncorrect(0)
      setReferenceCode(value)
      console.log(data?.getBookingByReference_code?.data)
    } else {
      setIncorrect(1)
      setReferenceCode('')
    }
  } 

  const onSearch = async (value) => {
    await getBooking({ variables: { Reference_code: value },onCompleted: (data) => {CheckInput(data,value)}}) 
  }

  const MovieByID = (ID) => {
    const { data } = useQuery(getMovieByID,{variables:{_id : ID}})
    return data?.getMovieByID?.data
  }
  
  const MovieLength = (ID) => {
    const { data } = useQuery(getMovieByID,{variables:{_id : ID}})
    const hour = Math.floor((data?.getMovieByID?.data.Length)/60)
    const min = (data?.getMovieByID?.data.Length%60)
    if(hour == 0){
      if(min == 0 | min == 1){
        return `${min} min`
      }
      return `${min} mins`
    }
    if(min == 0 | min == 1){
      return `${hour} hours ${min} min`
    }
    return `${hour} hours ${min} mins`
  }
  
  const TheaterName = (ID) => {
    const { data } = useQuery(getTheaterByID,{variables:{_id : ID}})
    return data?.getTheaterByID?.data.Name
  }

  const ShowtimeID = (ID) => {
    const { data } = useQuery(getShowtimeByID,{variables:{_id : ID}})
    return data?.getShowtimeByID?.data
  }

  const ReservedSeatID = (ID) => {
    const { data } = useQuery(getReservedSeatByID,{variables:{_id : ID}})
    return data?.getReservedSeatByID?.data
  }
  
  const AlertInput = (check) => {
    if(check){
      return <Alert message="Incorrect Reference Code" type="error" showIcon />
    }
  }
  const BookingItem = (ReferenceCode) => {
    if(ReferenceCode){
      const ReservedSeat_id = data?.getBookingByReference_code?.data.Reference_code
      const Username = data?.getBookingByReference_code?.data.Username
      const ReservedSeat = ReservedSeatID(ReferenceCode)
      const Showtime = ShowtimeID(ReservedSeat?.Showtime_id)
      const Movie = MovieByID(Showtime?.Movie_id)
      const Movielength = MovieLength(Showtime?.Movie_id)
      const Theater = TheaterName(Showtime?.Theater_id)
      const title = `Your Ticket Code : ${ReservedSeat_id}`
      return<Card title= {title} style={{ width: '100%' }}>
              <Row>
              <Col span={12}>
                <Typography.Title level={4}>Ticket Detail :</Typography.Title>
                <div><b>Owner Username : </b>{Username}</div>
                <div><b>Seat Number : </b>{ReservedSeat?.Number}</div>
                <div><b>Seat Type : </b>{ReservedSeat?.Type}</div>
                <div><b>ShowTime : </b>{Showtime?.Time}</div>
                <div><b>Date : </b>{Showtime?.Date}</div>
                <div><b>Theater : </b>{Theater}</div>
              </Col>
              <Col span={6}>
                <Typography.Title level={4}>Movie Detail :</Typography.Title>
                <div><b>Movie : </b>{Movie?.Name}</div>
                <div><b>Description : </b>{Movie?.Description}</div>
                <div><b>Length : </b>{Movielength}</div>
              </Col>
              <Col span={6}>
                <Image
                  width={155}
                  alt="Preview"
                  src={Movie?.Picture}
                />
              </Col>
              </Row>
            </Card>
    } else {
      ReservedSeatID('')
      ShowtimeID('')
      MovieByID('')
      MovieLength('')
      TheaterName('')
    }
  }
  return (
    <Layout className="layout">
      {navbar(UserLogin)}
      <Header style={{ backgroundColor: "#fafafa",padding: '50px 200px' }}>
        <Title align="center" >Reference Code</Title>
      </Header>
      <Space direction="vertical">
          <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          style = {{backgroundColor: "#fafafa", padding: '0px 400px' }}
          />
      <Content style={{ backgroundColor: "#fafafa",padding: '0px 200px' }}>
        {BookingItem(ReferenceCode)}
        {AlertInput(Incorrect)}
      </Content>
      <Footer>
      </Footer>
      </Space>
    </Layout>
  )
}

export default ReferenceCode