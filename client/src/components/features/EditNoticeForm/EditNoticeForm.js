import { updateNoticeRequest } from "../../../redux/noticesRedux";
import { getNoticeById } from "../../../redux/noticesRedux";
import { useNavigate, Navigate } from "react-router-dom";
import NoticeForm from "../NoticeForm/NoticeForm";
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const EditNoticeForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const  {id}  = useParams();
  const noticeData = useSelector(state => getNoticeById(state, id));

  const handleSubmit = notice => {
    dispatch(updateNoticeRequest(notice));
    navigate('/');
  };
  if (!noticeData) return <Navigate to="/" />;
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
    />
  );
};

export default EditNoticeForm;