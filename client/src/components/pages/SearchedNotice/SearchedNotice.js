//import styles from './SearchedNotice.module.scss'
import { useParams } from 'react-router';


const SearchedNotice = () => {
  // const allNotices = []
  // let searchvalue

  // let searchedNotices = [];
  // for(let notice of allNotices){
  //   if(notice.title.includes(searchvalue)){
  //     searchedNotices.push(notice);
  //   }
  // }
  const  {phase}  = useParams();  
  
  return (
    <div className='min-vh-100'>
      <h2>Searched notices</h2>
      <p>{phase}</p>
    </div>
  );
};

export default SearchedNotice;