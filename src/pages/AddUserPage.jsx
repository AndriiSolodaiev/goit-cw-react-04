import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { addUser } from 'redux/users/usersSlice';
import { useDispatch } from 'react-redux/es/exports';
export const Add = () => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerInput = e => {
    if (e.target.name === 'name') {
      setUserName(e.target.value);
    } else if (e.target.name === 'age') {
      setUserAge(e.target.value);
    }
    return;
  };
  const handlerSubmit = e => {
    e.preventDefault();
    const user = {
      name: userName,
      age: userAge,
      id: nanoid(),
      status: 'offline',
    };
    dispatch(addUser(user));
    navigate('/');
  };
  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Name
        <input type="text" name="name" onChange={handlerInput} />
      </label>
      <label>
        Age
        <input type="number" name="age" onChange={handlerInput} />
      </label>
      <button>Save</button>
    </form>
  );
};
