import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { Button} from 'antd';

function test(props) {
    const router = useRouter()
    const [number, setNumber] = useState(0);
    const [useranswer, setAnswer] = useState({});
    const [Qanswer, setQAnswer] = useState({});


    let numtest = props.data.length;
    let numchoice = props.data[number].choice.length;

    const dispatch = useDispatch()

    const addans = useCallback((ans) => dispatch({ type: 'ADDANSWER',answer: ans }),[dispatch])
    const addQans = useCallback((Qans) => dispatch({ type: 'ADDQANSWER',Qanswer: Qans }),[dispatch])
    const upQnum = useCallback((num) => dispatch({ type: 'UPDATEQNUM',Qnum: num }),[dispatch])

    //Handle click and button
    const handleClickNext = (event) => {
        setNumber(number + 1)
        let testname = 'test'+number
        var ele = document.getElementsByName(testname);
        for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
      }
    
    const handleClickPrev = (event) => {
        setNumber(number -1)
        let testname = 'test'+number
        var ele = document.getElementsByName(testname);
        for(var i=0;i<ele.length;i++)
        ele[i].checked = false;
      }
    const handleClickfinish = (event) => {
        addans(useranswer)
        addQans(Qanswer)
        upQnum(numchoice)
        router.push('/result')
      }

    const handleClickInput = (event) => {
        Qanswer[event.target.name] = props.data[number].answerId
        useranswer[event.target.name] = event.target.value
        setAnswer({...useranswer});
        setQAnswer({...Qanswer});
        console.log(useranswer)
        
      }
    
    //check input after change page
    const checkanswer = (testname,value) => {
        if(testname in useranswer){
            if(value == useranswer[testname]){
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }

    //Display question and choice
    const printchoice = ()=>{
        let post = [];
        let testname = 'test'+number
        for(let i = 0; i < numchoice; i++){
            let inputname = 'no'+number+'c'+props.data[number].choice[i].id
            post.push(<input type="radio" id={inputname} name={testname} value={i+1} onClick={handleClickInput} checked = {checkanswer(testname,i+1)} defaultChecked = {false}/>)
            post.push(<label>{props.data[number].choice[i].text}</label>)
            post.push(<br/>)
        }
        return post
    }

    //Display button (Next,Prec,Finish)
    const backbutton = ()=>{
        if(number > 0){
            return <Button type="primary" onClick={handleClickPrev}>ย้อนกลับ</Button>
        } else {
            return(<Button type="primary" style={{ background: "gray", borderColor: "white" }}>ย้อนกลับ</Button>)
        }
     }

    const nextbutton = ()=>{
        if(number < numtest - 1){
            return(<Button type="primary" onClick={handleClickNext}>ถัดไป</Button>)
        } else {
            return(<Button type="primary" onClick={handleClickfinish} style={{ background: "green", borderColor: "white" }}>finish</Button>)
        }
    }

    return (
        <div>
            <div>
                <span >โปรแกรมข้อสอบออนไลน์</span>
                <span style={{textAlign: "right", float: 'right'}}>{props.user.userName}      </span>
            </div>
            <hr/>
            <br />
            <div style={{ textAlign: "center" }}>{props.data[number].name}</div>
            <br />
            <form>
                <div style={{ textAlign: "center" }}>{printchoice()} </div>              
            </form>
            <div style={{ textAlign: "center" }}>
                {backbutton()}   
                {nextbutton()}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {

    const data = require('/src/json_reactXnext.json')
    return {
      props: { data }, 
    }
  }

export default connect(state=>state)(test);