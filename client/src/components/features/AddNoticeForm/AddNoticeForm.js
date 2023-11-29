import { useDispatch } from 'react-redux';
import { addNotice } from '../../../redux/noticesRedux';
import { useNavigate } from "react-router-dom";
import NoticeForm from '../NoticeForm/NoticeForm';

const AddNoticeForm = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = notice => {
    dispatch(addNotice(notice));
    navigate('/');
  };
 
  return (
    <NoticeForm action={handleSubmit} actionText='Add notice' />
  );
};

export default AddNoticeForm;