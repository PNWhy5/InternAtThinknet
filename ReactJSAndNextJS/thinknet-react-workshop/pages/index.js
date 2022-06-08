import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Button,Input } from 'antd';

function Home(props) {
  const router = useRouter()
  const [textSearch, setTextSearch] = useState('');

  const dispatch = useDispatch()
  const ADDUSER = useCallback((name) => dispatch({ type: "ADDNAME", userName: name  }),[dispatch])

  const handleChangeText = (event) => {
    setTextSearch(event.target.value)
  }

  const handleClickTest = (event) => {
    if(textSearch != ''){
      ADDUSER(textSearch)
      router.push('/test')
    }
  }
  return (
    <div>
      <div>
        <span >โปรแกรมข้อสอบออนไลน์</span>
        <span style={{textAlign: "right", float: 'right'}}>{props.user.userName}       </span>
      </div>
      <hr/>
      <br/>
      <div style={{textAlign: "center"}} >
        <Input placeholder='กรอกชื่อ' value={textSearch} onChange={handleChangeText} style={{ width: "10%" }}/>
      </div>
      <br/>
      <div style={{textAlign: "center"}} >
        <Button type="primary" onClick={handleClickTest} style={{textAlign: "center"}}>
          เริ่มทำข้อสอบ
        </Button>
      </div>
    </div>
  )
}

export default connect(state=>state)(Home);
