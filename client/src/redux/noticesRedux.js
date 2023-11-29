import { API_URL } from '../config'
import { setLoading } from './isLoadingRedux';

//selectors
export const getAllNotices = ({ notices }) => notices;
export const getNoticeById = ({ notices }, noticeId) => notices.find(notice => notice.id === noticeId);

// actions
const createActionName = actionName => `app/notices/${actionName}`;
const LOAD_NOTICES = createActionName('LOAD_NOTICES');
const UPDATE_NOTICE = createActionName('UPDATE_NOTICE');
const ADD_NOTICE = createActionName('ADD_NOTICE');
const REMOVE_NOTICE = createActionName('REMOVE_NOTICE');

// action creators
export const loadNotices = payload => ({type: LOAD_NOTICES, payload});
export const updateNotice = payload => ({type: UPDATE_NOTICE, payload});
export const addNotice = payload => ({type: ADD_NOTICE, payload});
export const removeNotice = payload => ({type: REMOVE_NOTICE, payload});

export const fetchNotices = () => {
  return(dispatch) => {
    dispatch(setLoading(true))
    fetch(`${API_URL}/ads`)
      .then(res => res.json())
      .then(notices => {
        dispatch(setLoading(false)) 
        dispatch(loadNotices(notices))});
  };
};

export const updateNoticeRequest = ( notice ) => {
  return(dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...notice,
      }),
    };
    
    fetch(`${API_URL}/ads/${notice.id}`, options)
      .then(() => {dispatch(updateNotice(notice, notice.id))});
  };
};

export const addNoticeRequest = notice => {
  return(dispatch) => {
    const options = {
      method: 'POST',
    
      headers: {
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify(
        notice
      )
    };
    
    fetch(`${API_URL}/ads`, options)
      .then(() => {dispatch(addNotice(notice))})
      .then(() => {dispatch(fetchNotices())})
  };
};

export const removeNoticeRequest = notice => {
	return dispatch => {
		const options = {
			method: 'DELETE',
		}

		fetch(`${API_URL}/ads/${notice.id}`, options)
      .then(() => {dispatch(removeNotice(notice.id))})
	};
};

const noticesReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_NOTICES:
      return [...action.payload];
    case UPDATE_NOTICE:
      return statePart.map(notice => (notice.id === action.payload.id ? { ...notice, ...action.payload } : notice));
    case ADD_NOTICE:
      return [...statePart, { ...action.payload }];
    case REMOVE_NOTICE:
      return statePart.filter(notice => notice.id !== action.payload);
    default:
      return statePart;
  };
};

export default noticesReducer;