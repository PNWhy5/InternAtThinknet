import React, { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery, gql, useLazyQuery, useMutation } from '@apollo/client';
import SeatPicker from "react-seat-picker"
import { Row, Col, Modal, List, Layout, Image, Button, Typography, Space, Card, Divider } from 'antd';
import navbar from '../components/navbar'

const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

const rawseatlayout = [
  [
    {id: 'A1', number: 1 },{id: 'A2', number: 2 },{id: 'A3', number: 3 },{id: 'A4', number: 4 },{id: 'A5', number: 5 },
    {id: 'A6', number: 6 },{id: 'A7', number: 7 },{id: 'A8', number: 8 },{id: 'A9', number: 9 },{id: 'A10', number: 10 }
  ],
  [
    {id: 'B1', number: 1 },{id: 'B2', number: 2 },{id: 'B3', number: 3 },{id: 'B4', number: 4 },{id: 'B5', number: 5 },
    {id: 'B6', number: 6 },{id: 'B7', number: 7 },{id: 'B8', number: 8 },{id: 'B9', number: 9 },{id: 'B10', number: 10 }
  ],
  [
    {id: 'C1', number: 1 },{id: 'C2', number: 2 },{id: 'C3', number: 3 },{id: 'C4', number: 4 },{id: 'C5', number: 5 },
    {id: 'C6', number: 6 },{id: 'C7', number: 7 },{id: 'C8', number: 8 },{id: 'C9', number: 9 },{id: 'C10', number: 10 }
  ],
  [
    {id: 'D1', number: 1 },{id: 'D2', number: 2 },{id: 'D3', number: 3 },{id: 'D4', number: 4 },{id: 'D5', number: 5 },
    {id: 'D6', number: 6 },{id: 'D7', number: 7 },{id: 'D8', number: 8 },{id: 'D9', number: 9 },{id: 'D10', number: 10 }
  ],
  [
    {id: 'E1', number: 1 },{id: 'E2', number: 2 },{id: 'E3', number: 3 },{id: 'E4', number: 4 },{id: 'E5', number: 5 },
    {id: 'E6', number: 6 },{id: 'E7', number: 7 },{id: 'E8', number: 8 },{id: 'E9', number: 9 },{id: 'E10', number: 10 }
  ],
  [
    {id: 'F1', number: 1 },{id: 'F2', number: 2 },{id: 'F3', number: 3 },{id: 'F4', number: 4 },{id: 'F5', number: 5 },
    {id: 'F6', number: 6 },{id: 'F7', number: 7 },{id: 'F8', number: 8 },{id: 'F9', number: 9 },{id: 'F10', number: 10 }
  ],
  [
    {id: 'G1', number: 1 },{id: 'G2', number: 2 },{id: 'G3', number: 3 },{id: 'G4', number: 4 },{id: 'G5', number: 5 },
    {id: 'G6', number: 6 },{id: 'G7', number: 7 },{id: 'G8', number: 8 },{id: 'G9', number: 9 },{id: 'G10', number: 10 }
  ],
  [
    {id: 'H1', number: 1 },{id: 'H2', number: 2 },{id: 'H3', number: 3 },{id: 'H4', number: 4 },{id: 'H5', number: 5 },
    {id: 'H6', number: 6 },{id: 'H7', number: 7 },{id: 'H8', number: 8 },{id: 'H9', number: 9 },{id: 'H10', number: 10 }
  ],
  [
    {id: 'I1', number: 1 },{id: 'I2', number: 2 },{id: 'I3', number: 3 },{id: 'I4', number: 4 },{id: 'I5', number: 5 },
    {id: 'I6', number: 6 },{id: 'I7', number: 7 },{id: 'I8', number: 8 },{id: 'I9', number: 9 },{id: 'I10', number: 10 }
  ],
  [
    {id: 'J1', number: 1 },{id: 'J2', number: 2 },{id: 'J3', number: 3 },{id: 'J4', number: 4 },{id: 'J5', number: 5 },
    {id: 'J6', number: 6 },{id: 'J7', number: 7 },{id: 'J8', number: 8 },{id: 'J9', number: 9 },{id: 'J10', number: 10 }
  ],
  [

  ],
  [
    {id: 'L1', number: 1 },{id: 'L2', number: 2 },{id: 'L3', number: 3 },{id: 'L4', number: 4 },{id: 'L5', number: 5 },
    {id: 'L6', number: 6 },{id: 'L7', number: 7 },{id: 'L8', number: 8 },{id: 'L9', number: 9 },{id: 'L10', number: 10 }
  ],
  [
    {id: 'M1', number: 1 },{id: 'M2', number: 2 },{id: 'M3', number: 3 },{id: 'M4', number: 4 },{id: 'M5', number: 5 },
    {id: 'M6', number: 6 },{id: 'M7', number: 7 },{id: 'M8', number: 8 },{id: 'M9', number: 9 },{id: 'M10', number: 10 }
  ],
  [
    {id: 'N1', number: 1 },{id: 'N2', number: 2 },{id: 'N3', number: 3 },{id: 'N4', number: 4 },{id: 'N5', number: 5 },
    {id: 'N6', number: 6 },{id: 'N7', number: 7 },{id: 'N8', number: 8 },{id: 'N9', number: 9 },{id: 'N10', number: 10 }
  ],
  
]

const VIP_id = [
  'L1','L2','L3','L4','L5','L6','L7','L8','L9','L10',
  'M1','M2','M3','M4','M5','M6','M7','M8','M9','M10',
  'N1','N2','N3','N4','N5','N6','N7','N8','N9','N10',
]

const createReservedSeat = gql`
  mutation($input: CreateReservedSeatInput!) {
    createReservedSeat(input: $input) {
      data {
        _id
        Number
        Type
      }
    }
  }
`
const createBooking = gql`
  mutation($input: CreateBookingInput!) {
    createBooking(input: $input) {
      data {
        _id
        Username
        Reference_code
      }
    }
  }
`

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

const getReservedSeatByShowtimeID = gql`
    query($input: FindReservedSeatByShowtime_idInput!){
      getReservedSeatByShowtimeID(input: $input){
            data{
                _id
                Number
                Type
            }
        }
    }
`
const SeatNumber = []
const ReservedSeat = () => {
    const router = useRouter()
    const [SeatNumberLength, setSeatNumberLength] = useState(0);
    const [SeatNumberVipLength, setSeatNumberVipLength] = useState(0);
    const [AllSeatNumber, setAllSeatNumber] = useState([]);
    const [SeatPrice, setSeatPrice] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);  
    const [seatlayout,setseatlayout] = useState()

    const UserLogin = useSelector((state) => state.user.Username)
    const Showtime_id = useSelector((state) => state.showtime.Showtime_id)

    const [createReserve, { data: createReserveData}] = useMutation(createReservedSeat,
      {onCompleted: (createReserveData) => {CheckCreatedReserve(createReserveData)}});
    const [createBook, { data: createBookingData}] = useMutation(createBooking,
        {onCompleted: (createBookingData) => {CheckCreatedBooking(createBookingData)}});

    const { data: queryReservedSeatData } = useQuery(getReservedSeatByShowtimeID,{variables:{input : {Showtime_id: Showtime_id}},fetchPolicy: 'network-only'})
      console.log('Usequery211',queryReservedSeatData?.getReservedSeatByShowtimeID?.data)
    const CheckCreatedReserve = (data2) => {
      const Reference_code = data2?.createReservedSeat?.data._id
      if(Reference_code){
        createBook({ variables: { input: {Username: UserLogin, Reference_code: Reference_code} } ,awaitRefetchQueries: true})
      }else{
        console.log("Error Reserve")
      }
    }

    const CheckCreatedBooking = (data3) => {
      if(data3?.createBooking?.data.Username){
        console.log('All complete')
        router.push('/Profile')
      }else{
        console.log("Error Booking")
      }
    }

    //Modal//
    async function showModal(){
      console.log(Showtime_id)
      console.log(AllSeatNumber[0])
      const Total = SeatNumberLength+SeatNumberVipLength
      if(UserLogin && Total !== 0){
        const Type = ''
        const num = 0
        for(let i = 0; i < Total; i++,num++){
        if(VIP_id.includes(AllSeatNumber[i])){
              Type = 'VIP'
            } else {
              Type = 'Normal'
            }
            console.log(Type)
        await createReserve({ variables: { input : {Showtime_id: Showtime_id, Number: AllSeatNumber[i], Type: Type} } ,
              awaitRefetchQueries: true})
        }
        console.log('Buy')
      } else if(!UserLogin){
        setIsModalVisible(true);
      }
    };

    const handleSignIn = () => {
      setIsModalVisible(false);
      router.push('/SignIn')
    };

    const handleCancel = () => {
      setIsModalVisible(false);
    };

    //Movie///////////////
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
    //Theater///////////////
    const TheaterName = (ID) => {
        const { data } = useQuery(getTheaterByID,{variables:{_id : ID}})
        return data?.getTheaterByID?.data.Name
    }
    //Showtime///////////////
    const ShowtimeID = (ID) => {
        const { data } = useQuery(getShowtimeByID,{variables:{_id : ID}})
        return data?.getShowtimeByID?.data
    }
    //ReservedSeat///////////////
    function ReservedSeatID(ID){
        const { data } = useQuery(getReservedSeatByID,{variables:{_id : ID}})
        return data?.getReservedSeatByID?.data
    }

    const getReservedShowtimeID = (ShowtimeID) =>{
      const { data } = useQuery(getReservedSeatByShowtimeID,{variables:{input : {Showtime_id: ShowtimeID}},pollInterval: 1500,})
      return data?.getReservedSeatByShowtimeID?.data
    }

  //Hook/////////////////
  const Showtime = ShowtimeID(Showtime_id)
  const Movie = MovieByID(Showtime?.Movie_id)

  //Extra////////////////
  const MovieItem = (Showtime_id) => {
    const Showtime = ShowtimeID(Showtime_id)
    const Movie = MovieByID(Showtime?.Movie_id)
    const Movielength = MovieLength(Showtime?.Movie_id)
    const Theater = TheaterName(Showtime?.Theater_id)
    return<Card style={{ width: '900px' }}>
            <Row>
            <Col span={8}>
              <Typography.Title level={4}>Showtime Detail :</Typography.Title>
              <div><b>ShowTime : </b>{Showtime?.Time}</div>
              <div><b>Date : </b>{Showtime?.Date}</div>
              <div><b>Theater : </b>{Theater}</div>
            </Col>
            <Col span={8}>
              <Typography.Title level={4}>Movie Detail :</Typography.Title>
              <div><b>Movie : </b>{Movie?.Name}</div>
              <div><b>Description : </b>{Movie?.Description}</div>
              <div><b>Length : </b>{Movielength}</div>
            </Col>
            <Col span={8}>
              <Image
                width={155}
                alt="Preview"
                src={Movie?.Picture}
              />
            </Col>
            </Row>
          </Card>
  }

  //Setting reserved seat
  const SeatVacant = async () => {
    setseatlayout()
    const Reserved = queryReservedSeatData?.getReservedSeatByShowtimeID?.data
    console.log('Use function')
    console.log(Reserved)
    const temp = await Reserved?.slice()
    const ArrayOfNumberReserved = []
    for(let i = 0; i < temp?.length;i++){
      ArrayOfNumberReserved.push(temp[i].Number)
    }
    let count = 0
    //const tempseatlayout = [...rawseatlayout]
    const tempseatlayout = JSON.parse(JSON.stringify(rawseatlayout))
    console.log('tempseatlayout',tempseatlayout)
    for(let j = 0; j < rawseatlayout?.length;j++){
      for(let k = 0; k < rawseatlayout[j]?.length;k++){
        for(let l = 0; l < ArrayOfNumberReserved?.length; l++ ){
          if(ArrayOfNumberReserved[l] == rawseatlayout[j][k]?.id){
            count++
            tempseatlayout[j][k].isReserved = true
          }
        }
      }
    }
    setseatlayout(tempseatlayout)
    console.log(seatlayout)
  }
  
  useEffect(()=>{
    console.log('Second Use effect')
    setseatlayout()
  },[])

  useEffect(()=>{
    console.log('UseEffect',queryReservedSeatData?.getReservedSeatByShowtimeID?.data)
    if(queryReservedSeatData?.getReservedSeatByShowtimeID?.data){
      SeatVacant()
    }
  },[queryReservedSeatData?.getReservedSeatByShowtimeID?.data])

  const addSeatCallback = async ({ row, number, id }, addCb) => {
    await setAllSeatNumber(prevArray => [...prevArray, id])
    console.log(`Added2 seat ${number}, row ${row}, id ${id}`);
    const newTooltip = `tooltip for id-${id} added by callback`;
    addCb(row, number, id, newTooltip);
    if(VIP_id.includes(id)){
      setSeatNumberVipLength(SeatNumberVipLength+1)
      setSeatPrice(SeatPrice+500)
    } else {
      setSeatNumberLength(SeatNumberLength+1)
      setSeatPrice(SeatPrice+300)
    }
    await console.log(AllSeatNumber)
  };

  const removeSeatCallback = async ({ row, number, id }, removeCb) => {
    SeatNumber = AllSeatNumber
    SeatNumber.splice(SeatNumber.indexOf(id), 1)
    console.log(`Removed2 seat ${number}, row ${row}, id ${id}`);
    const newTooltip = ["A", "B", "C"].includes(row) ? null : "";
    removeCb(row, number, newTooltip);
    if(VIP_id.includes(id)){
      setSeatNumberVipLength(SeatNumberVipLength-1)
      setSeatPrice(SeatPrice-500)
    } else {
      setSeatNumberLength(SeatNumberLength-1)
      setSeatPrice(SeatPrice-300)
    }
    await setAllSeatNumber(SeatNumber)
    console.log(AllSeatNumber)
  };
  return (
    <Layout className="layout">
      {navbar(UserLogin)}
      <Header style={{ backgroundColor: "#fafafa",padding: '50px 200px' }}>
        <Title align="center" >{Movie?.Name}</Title>
      </Header>
      <Content style={{ backgroundColor: "#fafafa",padding: '0px 200px' }}>
        <Space direction="vertical">
          {MovieItem(Showtime_id)}
          <div align="center"><b>Screen</b></div>
          {console.log('seatlayout',seatlayout)}
          {(seatlayout) && 
          <SeatPicker rows={seatlayout||[]} 
                      addSeatCallback={addSeatCallback}
                      removeSeatCallback={removeSeatCallback}
                      alpha 
                      maxReservableSeats={130}
                      visible />
          }
          <br/>
          <Divider></Divider>
          <div>Normal Seat : {SeatNumberLength}  Vip Seat : {SeatNumberVipLength}</div>
          <div>TotalSeat : {SeatNumberLength + SeatNumberVipLength}</div>
          <div>Total Price : {SeatPrice} Bath</div><br/>
          <Button type="primary" onClick={showModal}>Buy</Button>
          <br/>
          <Modal title="Warning" visible={isModalVisible} 
          footer={[
            <Button key="back" onClick={handleCancel}>
            Return
            </Button>,
            <Button type="primary" onClick={handleSignIn}>
            Sign In
            </Button>,
          ]}>
          <p>Please, Sign in before purchase</p>
          </Modal>
          <Divider></Divider>
        </Space>
      </Content>
      <Footer>
      </Footer>
    </Layout>
  )
}

export default ReservedSeat