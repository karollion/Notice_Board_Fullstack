import { Routes, Route } from 'react-router-dom';
import { isUserLoginedIn } from './redux/usersRedux';
import { fetchNotices } from './redux/noticesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Container from './components/common/container/Container';
import NavBar from './components/views/NavBar/NavBar';
import Footer from './components/views/Footer/Footer';

// Import pages
import Home from './components/pages/Home/Home';
import AddNotice from './components/pages/AddNotice/AddNotice';
import EditNotice from './components/pages/EditNotice/EditNotice';
import DeleteNotice from './components/pages/DeleteNotice/DeleteNotice';
import Notice from './components/pages/Notice/Notice';
import SearchedNotice from './components/pages/SearchedNotice/SearchedNotice';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import Logout from './components/pages/Logout/Logout';
import WrongPage from './components/pages/WrongPage/WrongPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(isUserLoginedIn()), [dispatch]);
  useEffect(() => dispatch(fetchNotices()), [dispatch]);

  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notice/:id" element={<Notice/>} />
          <Route path="/notice/addNotice" element={<AddNotice/>} />
          <Route path="/notice/editNotice/:id" element={<EditNotice/>} />
          <Route path="/notice/deleteNotice/:id" element={<DeleteNotice/>} />
          <Route path="/searchedNotice/:phase" element={<SearchedNotice/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="*" element={<WrongPage/>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
