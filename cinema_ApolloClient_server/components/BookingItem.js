import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, gql, useLazyQuery } from '@apollo/client';
import { Row, Col, List, Layout, Image, Button, Typography, Space, Card } from 'antd';

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

const BookingItem = ({Reference_code}) => {
    const { data: ReservedSeatData } = useQuery(getReservedSeatByID,{variables:{_id : Reference_code}})
    const { data: ShowtimeData } = useQuery(getShowtimeByID,{variables:{_id : ReservedSeatData?.getReservedSeatByID?.data?.Showtime_id}})
    const { data: MovieData } = useQuery(getMovieByID,{variables:{_id : ShowtimeData?.getShowtimeByID?.data?.Movie_id}})
    const { data: TheaterData } = useQuery(getTheaterByID,{variables:{_id : ShowtimeData?.getShowtimeByID?.data?.Theater_id}})
    
    const hour = Math.floor((MovieData?.getMovieByID?.data.Length)/60)
    const min = (MovieData?.getMovieByID?.data.Length%60)
    const Length = ''
    if(hour == 0){
        if(min == 0 | min == 1){
            Length = `${min} min`
        } else {
            Length = `${min} mins`
        }   
    }
    else if(min == 0 | min == 1){
        Length = `${hour} hours ${min} min`
    }
    else{
        Length = `${hour} hours ${min} mins`
    }
        
     return  <Row>
            <Col span={12}>
              <Typography.Title level={4}>Ticket Detail :</Typography.Title>
              <div><b>Seat Number : </b>{ReservedSeatData?.getReservedSeatByID?.data?.Number}</div>
              <div><b>Seat Type : </b>{ReservedSeatData?.getReservedSeatByID?.data?.Type}</div>
              <div><b>ShowTime : </b>{ShowtimeData?.getShowtimeByID?.data?.Time}</div>
              <div><b>Date : </b>{ShowtimeData?.getShowtimeByID?.data?.Date}</div>
              <div><b>Theater : </b>{TheaterData?.getTheaterByID?.data?.Name}</div>
            </Col>
            <Col span={6}>
              <Typography.Title level={4}>Movie Detail :</Typography.Title>
              <div><b>Movie : </b>{MovieData?.getMovieByID?.data?.Name}</div>
              <div><b>Description : </b>{MovieData?.getMovieByID?.data?.Description}</div>
              <div><b>Length : </b>{Length}</div>
            </Col>
            <Col span={6}>
              <Image
                width={155}
                alt="Preview"
                src={MovieData?.getMovieByID?.data?.Picture}
              />
            </Col>
            </Row>
}

export default BookingItem