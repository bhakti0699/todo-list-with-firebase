import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DeleteIcon from '@material-ui/icons/Delete';
import red from "@material-ui/core/colors/red";
import moment from 'moment';
import { removeTask } from '../../actions/taskActions';
import { toggleChecked } from '../../actions/taskActions';
import {connect} from 'react-redux';
import Check from './Check';

const Task = ({task,removeTask,toggleChecked,filter}) =>
{
    if(filter==="Pending")
    {
        alert("pending");
    }
    else if(filter==="Completed")
    {
        alert("complete");
    }
    else
    {
        alert("all");
    }
    const handleRemove = task =>
    {
        removeTask(task);
    };

    const handleChecked = (task) => 
    {
        toggleChecked(task);
    };
    return(
        <>
            <tr>
                {task.checked===false ? (<th>{task.task}</th>): (<th style={{textDecorationLine:'line-through'}}>{task.task}</th>)}
                <td>{moment(task.date.toDate()).calendar()}</td>
                <td><Check onClick={()=> handleChecked(task)} checked={task.checked}/></td>
                <td><span style={{cursor:"pointer"}}
                onClick={()=>handleRemove(task)}><DeleteIcon style={{ color: red[500] }}/></span></td>
            </tr>
        </>
    );
}

const mapDispatchToProps = dispatch =>
{
    return{
        removeTask: (task) =>dispatch(removeTask(task)),
        toggleChecked: (task) => dispatch(toggleChecked(task)),
    }
}
export default connect(null,mapDispatchToProps)(Task);