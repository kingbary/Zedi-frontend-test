import { Link } from 'react-router-dom';
import styles from './homepage.module.css';
import { useGetAllUsersByNumQuery } from '../../redux/services';
import { useState } from 'react';

export default function HomePage() {
  const [num, setNum] = useState(1)
  const { data, isLoading } = useGetAllUsersByNumQuery(num);

  return (
    <div className='flex f-column gap align-y'>
      {isLoading && <h1 className='loading'>loading</h1>}
      <h1>Zedi Frontend Test</h1>
      <h2 className={`c-pad b-radius ${styles.h2}`}>All Users</h2>
      <table className={`b-radius`}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Country</th>
            <th>Email Address</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.results?.map((user) => (
            <tr key={user.email}>
              <td>
                <Link to={`user/${num}/${user.name.first}_${user.name.last}`}>
                  {user.name.title} {user.name.first} {user.name.last}{' '}
                </Link>
              </td>
              <td>{user.location.country}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <hr />
      <div className={`flex gap b-radius c-pad ${styles.margin}`}>
        <span className={styles.margins} onClick={() => setNum(1)}>1 </span>
        <span className={styles.margins} onClick={() => setNum(2)}>2 </span>
        <span className={styles.margins} onClick={() => setNum(3)}>3 </span>
        <span className={styles.margins} onClick={() => setNum(4)}>4 </span>
        <span className={styles.margins} onClick={() => setNum(5)}>5 </span>
      </div>
    </div>
  );
}
