import { toast } from 'react-toastify';

const authReducer = (state = {},action)=>
{
    switch(action.type)
    {
        case "SIGN_IN":
            {
                toast("Welcome Back..");
                return state;
            }
        case "SIGN_IN_ERR":
            {
                toast.error("Sign in error..");
                return state;
            }
        case "SIGN_UP":
            {
                toast("Welcome...");
                return state;
            }
        case "SIGN_UP_ERR":
            {
                toast.error("Sign Up error..");
                return state;
            }
        case "SIGN_OUT":
            {
                toast("Sign out");
                return state;
            }
        default: 
            return state
    }
}

export default authReducer;