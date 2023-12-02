import { useNavigate } from "react-router-dom";
import { addNoticeRequest } from '../../../redux/noticesRedux';
import NoticeForm from '../NoticeForm/NoticeForm';
import { getUser } from '../../../redux/usersRedux';
import { useSelector, useDispatch } from 'react-redux';

const AddNoticeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  const title = 'Add notice'

  const handleSubmit = notice => {
    dispatch(addNoticeRequest(notice));
    navigate('/');
  };
  if (user) {
    return (
      <NoticeForm action={handleSubmit} pageTitle={title} actionText='Add notice' />
    );
  } else {
    return (
      <div className='col-12 col-sm-3 mx-auto'>
        <p className="my-4">Only logged user can add notice</p>
      </div>
    )
  }
};

export default AddNoticeForm;