import axios from 'axios';
import { useEffect } from 'react';

// axios instance
const instance = axios.create({
  baseURL: 'http://localhost:8080/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

const AxiosInterceptor = ({ children }) => {
  useEffect(() => {
    const resInterceptor = (response) => {
      console.log('resInterceptor');
      return response;
    };

    const errInterceptor = (error) => {
      console.error(error);
      console.log('errInterceptor');
      if (error.response.status === 401) {
        //redirect logic here
      }

      return Promise.reject();
    };

    const interceptor = instance.interceptors.response.use(
      resInterceptor,
      errInterceptor
    );

    return () => instance.interceptors.response.eject(interceptor);
  }, []);

  return children;
};

export default instance;
export { AxiosInterceptor };
