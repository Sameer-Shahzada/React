import React from "react";
import DeleteAllUser from './DeleteAllUser';
import { fakeUserData } from "../api";
import {useDispatch} from 'react-redux'
import { addUser } from "../redux-store/slices/UserSlice";    // import action creater to dispatch from redux-store
import { removeUser } from "../redux-store/slices/UserSlice";
import Displayuser from "./Displayuser";
import styled from "styled-components";

const UserDetails = () => {
  const dispatch = useDispatch(); // initialize the useDispatch hook here
  // create a function to add new user
  const addNewUser = (payload) => {
    // console.log(payload);   // we can write name instead of payload its comes from fake api
    dispatch(addUser(payload))
  }
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn"
          onClick={() => addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
         <Displayuser />
        </ul>
        <hr />
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;