import { Routes, Route } from 'react-router-dom';
import Container from './components/common/container/Container';
import WrongPage from './components/pages/WrongPage/WrongPage';
import NavBar from './components/views/NavBar/NavBar';
import Home from './components/pages/Home/Home';
import AddNotice from './components/pages/AddNotice/AddNotice';
import EditNotice from './components/pages/EditNotice/EditNotice';
import Notice from './components/pages/Notice/Notice';
import SearchedNotice from './components/pages/SearchedNotice/SearchedNotice';
import Login from './components/pages/Login/Login';
import SignUp from './components/pages/SignUp/SignUp';
import Footer from './components/views/Footer/Footer';
import { fetchNotices } from './redux/noticesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchNotices()), [dispatch]);

  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notice/:id" element={<Notice/>} />
          <Route path="/addNotice" element={<AddNotice/>} />
          <Route path="/editNotice/:id" element={<EditNotice/>} />
          <Route path="/searchedNotice/:phase" element={<SearchedNotice/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="*" element={<WrongPage/>} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
