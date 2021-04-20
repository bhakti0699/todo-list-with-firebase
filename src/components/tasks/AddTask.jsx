import React,{Component} from 'react';
import { connect } from 'react-redux';
import {addTask} from '../../actions/taskActions';
import {toast} from 'react-toastify';

class AddTask extends Component
{
    state={
        task:"",
        checked:false
    }

    handleChnage = (e) =>
    {
        this.setState({
            [e.target.id]:e.target.value,
        });
    }
    handleSubmit = (e) =>
    {
        if(this.state.task!=="")
        {
        e.preventDefault();
        this.props.addTask(this.state);
        document.getElementById("addTaskForm").reset();
        this.setState({
            task:'',
        })
        console.log(this.state);
        }
        else
        {
            e.preventDefault();
            toast.error("task is empty");
        }
    }
    render()
    {
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3">
                        <form
                            onSubmit={this.handleSubmit}
                            id="addTaskForm">
                        <legend><h4 className="p-2 mt-4 text-primary">Add Task</h4></legend>
                            <div className="m-2">
                                <input 
                                    type="text" 
                                    className="form-control p-2" 
                                    placeholder="Enter Your Task:" 
                                    name="task" 
                                    id="task" 
                                    onChange={this.handleChnage} />
                            </div>
                            <div className="text-center m-2">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary p-2" 
                                    id="signin" 
                                    name="signin">
                                Add</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

const mapDispatchToProps = dispatch => 
{
    return {
        addTask: task => dispatch(addTask(task))
    };
};
export default connect(null,mapDispatchToProps)(AddTask);