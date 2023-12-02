//import styles from './DeleteNotice.module.scss'
import { Alert, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router';
import { removeNoticeRequest, getNoticeById } from "../../../redux/noticesRedux";
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';

const DeleteNotice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  {id}  = useParams();
  const notice = useSelector(state => getNoticeById(state, id));
  const user = useSelector(getUser);

  const handleAction = e => {
    e.preventDefault();
    dispatch(removeNoticeRequest(id));
    navigate('/');
  };

  if (user === notice.seller) {
  return (
    <div className='col-12 col-sm-3 mx-auto min-vh-100'>
      <h2>Delete</h2>
      <Alert variant='danger'>
          <Alert.Heading>Are you sure?</Alert.Heading>
          <p>Do you want to permanently delete this notice?</p>
      </Alert>
      <Row className="d-flex justify-content-center">
        <Col>
          <Button className="w-100 p-3" variant="secondary" as={Link} to={"/notice/" + id}>NO</Button>
        </Col>
        <Col>
          <Button className="w-100 p-3" variant="danger" onClick={handleAction}>YES</Button>
        </Col>
      </Row>
    </div>
  );
  } else {
    return (
      <div className='col-12 col-sm-3 mx-auto'>
        <p className="my-4">Only seller can delete notice</p>
      </div>
    )
  }
};

export default DeleteNotice;