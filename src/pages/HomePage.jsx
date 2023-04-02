import { useSelector } from 'react-redux/es/exports';
import { getUsers } from 'redux/users/usersSelector';
import { changeStatus, deleteUser } from '../redux/users/usersSlice';
import { useDispatch } from 'react-redux/es/exports';

export const Home = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  console.log(users);

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>Age</th>
          <th>Status</th>
          <th>To Delete</th>
        </tr>
      </thead>
      <tbody>
        {users.map(({ name, age, id, status }, index) => (
          <tr key={id}>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>
              <span onClick={() => dispatch(changeStatus(id))}>{status}</span>
            </td>
            <td>
              <button onClick={() => dispatch(deleteUser(id))}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
