export const API_URL = process.env.NODE_ENV === 'production' 
  ? '/api' 
  : 'http://localhost:3030/api';

  export const IMGS_URL = (process.env.NODE_ENV === 'production') 
  ? '/api/uploads/' 
  : 'http://localhost:3030/api/uploads/';