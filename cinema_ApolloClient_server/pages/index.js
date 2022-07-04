import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQuery, gql } from '@apollo/client';
import { List, Layout, Image, Typography } from 'antd';
import navbar from '../components/navbar'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const getShowtimeList = gql`
  query{
    getShowtimeList{
      data{
        _id
        Movie_id
        Theater_id
        Time
        Date
      }
    }
  }
`;

const getShowtimeByDate = gql`
  query($Date: String!){
    getShowtimeByDate(Date: $Date){
      data{
        Name
        Description
        Length 
        Picture 
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


const index = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const UserLogin = useSelector((state) => state.user.Username)
  const { loading,error,data } = useQuery(getShowtimeList);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const MovieName = (ID) => {
    const { data } = useQuery(getMovieByID,{variables:{_id : ID}})
    return data?.getMovieByID?.data.Name
  }
  const MovieDescription = (ID) => {
    const { data } = useQuery(getMovieByID,{variables:{_id : ID}})
    return data?.getMovieByID?.data.Description
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
  const MoviePicture = (ID) => {
    const { data } = useQuery(getMovieByID,{variables:{_id : ID}})
    return data?.getMovieByID?.data.Picture
  }
  
  const TheaterName = (ID) => {
    const { data } = useQuery(getTheaterByID,{variables:{_id : ID}})
    return data?.getTheaterByID?.data.Name
  }


  const Showtimedata = data?.getShowtimeList?.data.slice()
  Showtimedata.sort(function(a,b){
    const aDate = a.Date.split("/")
    const aDay = parseInt(aDate[0])
    const aMonth = parseInt(aDate[1])
    const aYear = parseInt(aDate[2])
    const bDate = b.Date.split("/")
    const bDay = parseInt(bDate[0])
    const bMonth = parseInt(bDate[1])
    const bYear = parseInt(bDate[2])
    const aTime = a.Time.split(":")
    const aH = parseInt(aTime[0])
    const aM = parseInt(aTime[1])
    const aS = parseInt(aTime[2])
    const bTime = b.Time.split(":")
    const bH = parseInt(bTime[0])
    const bM = parseInt(bTime[1])
    const bS = parseInt(bTime[2])
    if(aYear < bYear){
      return -1
    }
    else if(aYear > bYear){
      return 1
    }
    else if(aMonth < bMonth){
      return -1
    }
    else if(aMonth > bMonth){
      return 1
    }
    else if(aDay < bDay){
      return -1
    }
    else if(aDay > bDay){
      return 1
    }
    else if(aH < bH){
      return -1
    }
    else if(aH > bH){
      return 1
    }
    else if(aM < bM){
      return -1
    }
    else if(aM > bM){
      return 1
    }
    else if(aS < bS){
      return -1
    }
    else if(aS > bS){
      return 1
    }
    else {
      return 0
    }

 })

  const onClickMovie = async (value) => {
    new Promise((resolve, reject) => {
      dispatch({ type: "RESERVED", Showtime_id: value  })
    })
    .then(router.push('/ReservedSeat'))
  } 

  return (
    <Layout className="layout">
      {navbar(UserLogin)}
      <Header style={{ backgroundColor: "#fafafa",padding: '50px 200px' }}>
        <Title align="center" >Showtimes</Title>
      </Header>
      <Content style={{ backgroundColor: "#fafafa",padding: '0px 200px' }}>
        <List
        itemLayout="vertical"
        bordered
        dataSource={Showtimedata}
        renderItem={(item) => (
          <List.Item
            style={{ border: '1px solid rgba(140, 140, 140, 0.35)', cursor: "pointer"}}
            extra={
              <Image
                width={100}
                alt="Preview"
                src={MoviePicture(item.Movie_id)}
              />
            }
            onClick={() => {onClickMovie(item._id)}}>
            <List.Item.Meta
              title={MovieName(item.Movie_id)}/>
              <p style={{
                  height: '100%',
                  borderRight: 0,
                }}>
                <b>Theater : {TheaterName(item.Theater_id)}</b><br/>
                Summary : {MovieDescription(item.Movie_id)}<br/>
                {MovieLength(item.Movie_id)}<br/>
                Time : {item.Time}<br/>
                Date : {item.Date}
              </p>
          </List.Item>)}
        />
      </Content>
      <Footer>
      </Footer>
    </Layout>
  )
}

export default index