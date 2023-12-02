import styles from './Notice.module.scss'
import { getNoticeById } from "../../../redux/noticesRedux";
import { Navigate, Link } from "react-router-dom";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';
import { Button, Row, Col } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';

const Notice = () => {
  const user = useSelector(getUser);

  const  {id}  = useParams();
  const notice = useSelector(state => getNoticeById(state, id));

  if (!notice) return <Navigate to="/" />;
  return (
    <div className='min-vh-100 px-4'>
      <h2 className='my-4' >Notice page</h2>
      <Row>
        <Col xs='12' md='6' lg='6' className='p-3 border rounded'>
          <div className={styles.imageBox}>
            <img 
              className={styles.image}
              alt={'profile'}
              src={ IMGS_URL + notice.picture } />
          </div>
        </Col>
        <Col xs='12' md='6' lg='6' className='p-3'>
          <h3>{notice.title}</h3>
          <p>{notice.date}</p>
          <p>{notice.price}</p>
          <p>{notice.location}</p>
          <p>{notice.seller}</p>
          <p>{notice.content}</p>
          {user === notice.seller && (
          <Row className="d-flex justify-content-center">
            <Col>
              <Button className="w-100 p-3" variant="primary" as={Link} to={"/notice/editNotice/" + notice._id}>Edit</Button>
            </Col>
            <Col>
              <Button className="w-100 p-3" variant="danger" as={Link} to={"/notice/deleteNotice/" + notice._id}>Delete</Button>
            </Col>
          </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Notice;