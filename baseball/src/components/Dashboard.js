import React from 'react';

const Dashboard = (props) => {
  // let { hit, strike, foul, ball } = props
  return (
    <div className="controls">
      <button type="button" onClick={props.strike}>Strike</button>
      <button type="button" onClick={props.ball}>Ball</button>
      <button type="button" onClick={props.foul}>Foul</button>
      <button type="button" onClick={props.hit}>Hit</button>
    </div>    
  )
}

export default Dashboard;