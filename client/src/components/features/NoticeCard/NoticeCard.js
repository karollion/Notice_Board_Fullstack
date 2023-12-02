import styles from './NoticeCard.module.scss';
import { Link } from 'react-router-dom';
import { Card, Col, Button } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';

const NoticeCard = ({ notice }) => {

  return (
    <Col xs='12' md='6' lg='4' className='mb-4'>
      <Card className='p-3'>
        <div className={styles.imageBox}>
          <img 
            className={styles.image}
            alt={'profile'}
            src={ IMGS_URL + notice.picture } />
        </div>
        <p className='mt-3'><span className='fw-bold'>{notice.title}</span></p>
        <p className='mt-3'>{notice.location}</p>
        
        <Button variant="primary" as={Link} to={"/notice/" + notice._id}>Read more</Button>
      </Card>
    </Col>
  );
};

export default NoticeCard;