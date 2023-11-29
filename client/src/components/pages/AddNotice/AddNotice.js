//import styles from './AddNotice.module.scss'
import AddNoticeForm from '../../features/AddNoticeForm/AddNoticeForm';
import { Row, Col } from "react-bootstrap";

const AddNotice = () => {
  return (
    <Row className='justify-content-center'>
      <Col xs='12' md='8' lg='8' className='mb-4 '>
        <h2>Add notice</h2>
        <AddNoticeForm />
      </Col>
    </Row>
  );
};

export default AddNotice;