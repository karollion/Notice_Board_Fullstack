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
    <div className='min-vh-100'>
      <h2 className='my-4' >Notice page</h2>
      <Row>
        <Col>
          <div className={styles.imageBox}>
            <img 
              className={styles.image}
              alt={'profile'}
              src={ IMGS_URL + notice.picture } />
          </div>
        </Col>
        <Col>
          <h3>{notice.title}</h3>
          <h3>{notice.date}</h3>
          <h3>{notice.price}</h3>
          <p>{notice.location}</p>
          <p>{notice.seller}</p>
          <p>{notice.content}</p>
          {user === notice.seller && (
          <Row>
            <Col>
              <Button variant="primary" as={Link} to={"/notice/editNotice/" + notice.id}>Edit</Button>
            </Col>
            <Col>
              <Button variant="danger" as={Link} to={"/notice/deleteNotice/" + notice.id}>Delete</Button>
            </Col>
          </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default Notice;