import { useNavigate, useParams } from 'react-router-dom';
import { useGetAllUsersByNumQuery } from '../../redux/services';
import styles from './user.module.css';

export default function UserPage() {
  const { name, num } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetAllUsersByNumQuery(num);

  const user = data?.results?.find((profile) => {
    return name === [profile.name.first, profile.name.last].join('_');
  });

  const dob = user?.dob?.date?.split('T')[0].split('-').reverse().join('-');

  return (
    <div className="flex f-column gap align-y">
      <h1>User Profile</h1>
      <big onClick={() => navigate(-1)}>Home {'>'}</big>
      {isLoading && <h1 className="loading">loading</h1>}
      <div className={`flex f-column gap align-y ${styles.profile}`}>
        <img
          className={styles.img}
          src={user?.picture?.large}
          alt={[user?.name?.first, user?.name?.last].join(' ')}
        />
        <h2>{[user?.name?.first, user?.name?.last].join(' ')}</h2>
        <div>
          <h3 className="flex gap s-btw">
            Country: <span>{user?.email}</span>
          </h3>
          <h3 className="flex gap s-btw">
            Email: <span>{user?.phone}</span>
          </h3>
          <h3 className="flex gap s-btw">
            City: <span>{user?.location?.city}</span>
          </h3>
          <h3 className="flex gap s-btw">
            Date of Birth: <span>{dob}</span>
          </h3>
          <h3 className="flex gap s-btw">
            Nationality: <span>{user?.location?.country}</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
