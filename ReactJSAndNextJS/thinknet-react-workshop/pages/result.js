import React, { useState, useCallback} from 'react';
import { connect } from 'react-redux'

function result(props) {
    const pass = Math.floor(0.8*props.question.Qnum);
    const score = 0
    const checkresult = () => {
        let arrayofQ = Object.values(props.question.Qanswer)
        let arrayofA = Object.values(props.user.answer)
        for(let i = 0; i < arrayofA.length; i++){
            if(arrayofQ[i] == arrayofA[i]){
                score++
            }
        }
        if(score > pass){
            return(<div style={{textAlign: "center"}}>you pass</div>)
        } else {
            return(<div style={{textAlign: "center"}}>you fail</div>)
        }
    }
    return (
        <div>
            <div>
                <span >โปรแกรมข้อสอบออนไลน์</span>
                <span style={{textAlign: "right", float: 'right'}}>{props.user.userName}      </span>
            </div>
            <hr/>
            <div style={{textAlign: "center"}}><b>Result</b></div>
            {checkresult()}
            <div style={{textAlign: "center"}}><b>{props.user.userName}'s score :</b> {score}</div>
        </div>
    );
}

export async function getServerSideProps(context) {

    const data = require('/src/json_reactXnext.json')
    return {
      props: { data }, 
    }
  }

export default connect(state=>state)(result);