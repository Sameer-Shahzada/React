import {React } from 'react'
import { useSelector , useDispatch } from 'react-redux';
import styled from "styled-components";
import { MdDeleteForever } from 'react-icons/md';
import { removeUser } from '../redux-store/slices/UserSlice';

/**
 *  useSelector - It allows you to extract data from the Redux store state and subscribe to changes in that data.
 *  How useSelector works 
 *      1- Accessing Data from the Redux Store:
 *          - In a React component, you can use the useSelector hook to access specific data from the Redux store. 
 *            It takes a function as an argument that receives the entire Redux store state and returns 
 *            the specific piece of data you want to extract. 
 *      2- Subscribing to Changes:
 *          - When the data you're selecting using useSelector changes in the Redux store, 
 *            your component will automatically re-render with the updated data. 
 *            This is because the useSelector hook establishes a subscription to the selected 
 *            part of the Redux store.
 */
const Displayuser = () => {
    const data = useSelector((state) => {
        return state.users;
    })
   console.log('data - ' , data);   // Access fakeuserapi data in an array

    const dispatch = useDispatch();     // Initialize the useDispatch hook 

const deleteUser = (id) => {
    dispatch(removeUser(id))
}

    return (
        <>
            <Wrapper>
                {
                    data.map((user, id) => {
                        return (
                            <li key={id}>
                                {user}  {user}  <MdDeleteForever/>  {user}
                                <button className='btn-delete' onClick={()=> deleteUser(id)}>
                                    <MdDeleteForever className='delete-icon' />
                                </button>
                            </li>

                        )
                    })
                }
            </Wrapper>
        </>

    )
}
const Wrapper = styled.section`
  li {
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding:1rem;
    border-bottom: 1px solid #eee;

    &:first-child {
        border-top: 1px solid #eee;
    }
  }
`;

export default Displayuser;