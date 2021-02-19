import React from "react";
import { connect } from "react-redux";
import {mediumcount,adultscount,totalcount} from "../../Actions";

const Adults = props => {
  const {dispatch,medium,adults,count} = props;
  function decrement() {
    dispatch(mediumcount(medium - 1))
    dispatch(adultscount(adults  - 1))
    dispatch(totalcount(count - 200))
  }
  function increment() {
    dispatch(mediumcount(medium + 1))
    dispatch(adultscount(adults  + 1))
    dispatch(totalcount(count + 200))
  }


  return (
    <>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<lable>Medium</lable>
      <button onClick={decrement} className={count <= 200 || medium === 1? "least" : "dec"} disabled={count <= 200 || medium <= 1} id="dec2" >-</button>
      {medium}
      <button onClick={increment} className={count >= 1000 ? "most" : "inc"} disabled={count >= 1000 || medium >= 5} id="inc2">+</button><br/>
    </>
  );
};
export default connect(store => store)(Adults);
