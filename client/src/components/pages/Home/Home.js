//import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { getIsLoading } from '../../../redux/isLoadingRedux';
import { getAllNotices } from '../../../redux/noticesRedux';
import SearchForm from '../../features/SearchForm copy/SearchForm';

const Home = () => {
  const notices = useSelector(state => getAllNotices(state));
  const isLoading = useSelector(state => getIsLoading(state));

  return (
    <div >
      <SearchForm />
      <div className='d-flex justify-content-between mt-4 mb-4'>
        
        <h2>All Notices</h2>
        <Button variant="outline-info" as={Link} to={`/searchedNotice/${"blablabla"}`}>Search</Button>
      </div>
      {notices.length === 0 && !isLoading && <p>No notices</p>}
      {isLoading && <Spinner animation='border' variant='primary' />}
      {!isLoading && <p>Notices</p>}
    </div>
  );
};

export default Home;