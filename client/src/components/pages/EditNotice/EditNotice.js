//import styles from './EditNotice.module.scss'
import EditNoticeForm from '../../features/EditNoticeForm/EditNoticeForm';
import { Row, Col } from "react-bootstrap";

const EditNotice = () => {
  return (
    <Row className='justify-content-center'>
        <Col xs='12' md='8' lg='8' className='mb-4 '>
          <h2>Edit notice page</h2>
          <EditNoticeForm />
        </Col>
      </Row>
  );
};

export default EditNotice;