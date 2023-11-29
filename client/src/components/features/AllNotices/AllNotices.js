import { useSelector } from 'react-redux';
import { getAllNotices } from '../../../redux/noticesRedux';
import NoticeCard from '../NoticeCard/NoticeCard';
import { Row } from 'react-bootstrap';

const AllTables = () => {
  const notices = useSelector(getAllNotices);

    return (
      <Row className='py-4'>
        {notices.map(notice => (
          <NoticeCard key={notice.id} notice={notice}  />
        ))}
      </Row>
    );
};

export default AllTables;