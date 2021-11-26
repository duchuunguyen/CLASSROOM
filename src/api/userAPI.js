import axiosClient from "../axiosClient"
import authHeader from "./auth-header";
const userAPI = {
    signUp: (param) =>{
        const url = "/auth/signup";
        return axiosClient.post(
            url,
            {
                username: param.username,
                password: param.password,
                email: param.email,
            }
        );
    },
    signIn: (param) => {
        const url = "/auth/signin";
        return(axiosClient.post(
        url,
        {
            username: param.username,
            password: param.password,
        }
        ).then(function(response) {
            return response;
        }).catch(function(error) {
            return error;
        })
        );
    },
}
export default userAPI