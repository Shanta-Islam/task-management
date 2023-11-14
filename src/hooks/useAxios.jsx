import axios from 'axios';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthProvider';

const instance = axios.create({
    baseURL: 'https://studynest-server.vercel.app',
    withCredentials: true,
})

const useAxios = ()=>{
    // const {logout} = useContext(AuthContext);
    // instance.interceptors.response.use(function (response) {
        
    //     return response;
    //   }, function (error) {
       
    //     if(error.response.status === 401 || error.response.status === 403){
        // logout();
    // }
    //   });
    return instance;
}
export default useAxios;