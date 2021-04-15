import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Task from './Task';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase'; 

const Tasks = ({tasks}) =>
{
    return(
        <>
            <div className="container">
                <div className="row">
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
                            {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
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