import {toast} from 'react-toastify';
const taskReducer = (state = {}, action) => 
{
    switch(action.type)
    {
        case "ADD_TASK":
            {
                toast.success("Added a task");
                return state
            }
        case "ADD_TASK_ERR":
            {
                toast.error("An error occurred");
                return state
            }
        case "REMOVE_TASK":
            {
                toast.warn("Removed task");
                return state
            }
        case "REMOVE_TASK_ERR":
            {
                toast.error("An error occurred in removed task");
                return state
            }
        case "TOGGLE_CHECKED": 
        {
            toast.info("A task status changed...");
            return state;
        }
        case "TOGGLE_CHECKED_ERR": {
            toast.error("A task status change error occured...");
            return state;
            }
        default:return state
    }
}
export default taskReducer