
const Footer = () => {
  
  function getDate() {
    const today = new Date();
    const year = today.getFullYear();
    return `${year}`;
  }

    return (
        <p className='text-center text-secondary'>Copyright &copy; NoticeBoardApp {getDate()}</p>
    );
};

export default Footer;