import { updateNoticeRequest } from "../../../redux/noticesRedux";
import { getNoticeById } from "../../../redux/noticesRedux";
import { useNavigate, Navigate } from "react-router-dom";
import NoticeForm from "../NoticeForm/NoticeForm";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/usersRedux';

const EditNoticeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(getUser);

  const  {id}  = useParams();
  const noticeData = useSelector(state => getNoticeById(state, id));

  const title = 'Edit notice'

  const handleSubmit = notice => {
    dispatch(updateNoticeRequest(notice));
    navigate('/');
  };
  if (!noticeData) return <Navigate to="/" />;
  if (user === noticeData.seller) {
    return (
      <NoticeForm
        action={handleSubmit} 
        actionText='Edit notice' 
        title={noticeData.title}
        content={noticeData.content}
        date={noticeData.date}
        picture={noticeData.picture}
        price={noticeData.price}
        location={noticeData.location}
        seller={noticeData.seller}
        pageTitle={title}
      />
    );
  } else {
    return (
      <div className='col-12 col-sm-3 mx-auto'>
        <p className="my-4">Only seller can edit notice</p>
      </div>
    )
  }
};

export default EditNoticeForm;