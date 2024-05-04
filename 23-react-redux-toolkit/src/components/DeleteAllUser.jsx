import React from "react";
import styled from 'styled-components';
// import { removeAllUsers } from "../redux-store/slices/UserSlice";
import { removeAllUsers} from "../redux-store/actions"; //now import from actions
import { useDispatch } from "react-redux";


const DeleteAllUser = () => {

  const dispatch = useDispatch(); // initialize the useDispatch hook 

  const deleteUsers = () => {
    dispatch(removeAllUsers())
  }
  return <Wrapper>
    <button className="btn clear-btn" onClick={deleteUsers}>Clear All User</button>
  </Wrapper>
};



const Wrapper = styled.section`
.clear-btn {
  text-transform: capitalize;
  background-color: #db338a;
  margin-top:2rem;
}
`

export default DeleteAllUser;