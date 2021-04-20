import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Task from './Task';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Tasks({tasks})
{
    const handleSelect = (e,{tasks}) =>
{
    console.log(e);
    if(e==="Pending")
    {
        tasks && tasks.map((task) => <Task task={task} key={task.id} filter={e}/>)
    }
    else if(e==="Completed")
    {
        tasks && tasks.map((task) => <Task task={task} key={task.id} filter="Completed"/>)
    }
    else
    {
        tasks && tasks.map((task) => <Task task={task} key={task.id} filter="All"/>)
    }
}

    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3">
                    <DropdownButton
                            alignLeft
                            title=""
                            id="dropdown-menu-align-right"
                            onSelect={handleSelect}
                            className="p-1"
                            >
                            <Dropdown.Item eventKey="All">All</Dropdown.Item>
                            <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                            <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                    </DropdownButton>
                    </div>
                    <div className="col-sm-12 col-md-6 offset-md-3">
                        <table className="table table-primary text-center">
                            <thead className="text-info">
                                <tr>
                                    <th scope="col">Tasks</th>
                                    <th scope="col">Added on</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                            {tasks && tasks.map((task) => <Task task={task} key={task.id}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = (state) => {
    const tasks = state.firestore.ordered.tasks;
    return {
      tasks: tasks,
      uid: state.firebase.auth.uid
    };
  };
  export default compose(
    connect(mapStateToProps),
    firestoreConnect((ownProps) => [
      {
        collection: "tasks",
        where: ["authorId", "==", ownProps.uid],
        orderBy: ["date", "desc"],
      },
    ])
  )(Tasks);