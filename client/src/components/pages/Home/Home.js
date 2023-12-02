//import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllNotices } from '../../../redux/noticesRedux';
import SearchForm from '../../features/SearchForm/SearchForm';
import AlNotices from '../../features/AlNotices/AlNotices';

const Home = () => {
  const notices = useSelector(state => getAllNotices(state));
  const isLoading = useSelector(state => getIsLoading(state));

  return (
    <div className='min-vh-100'>
      <SearchForm />
      {notices.length === 0 && !isLoading && <p>No notices</p>}
      {isLoading && <Spinner animation='border' variant='primary' />}
      {!isLoading && <AlNotices />}
    </div>
  );
};

export default Home;