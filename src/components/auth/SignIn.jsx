import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { signIn } from '../../actions/authActions';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class SignIn extends Component
{
    state={
        email:"",
        password:"",
    }

    handleChnage = (e) =>
    {
        this.setState({
            [e.target.id]:e.target.value,
        });
    }
    handleSubmit = (e) =>
    {
        e.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }
    render()
    {
        const { uid } = this.props;
        if(uid) return <Redirect to="/"/>
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 offset-md-3 p-4">
                        <form
                            onSubmit={this.handleSubmit}>
                        <legend><h4 className="p-2 text-primary">Sign In</h4></legend>
                            <div>
                                <input 
                                    type="email" 
                                    className="form-control p-2 m-2" 
                                    placeholder="Enter Email" 
                                    name="email" 
                                    id="email" 
                                    onChange={this.handleChnage} />
                                <input 
                                    type="password" 
                                    className="form-control p-2 m-2" 
                                    placeholder="Enter Password" 
                                    name="password" 
                                    id="password" 
                                    onChange={this.handleChnage} />
                            </div>
                            <div className="text-center">
                                <button 
                                    type="submit" 
                                    className="btn btn-primary p-2 m-2" 
                                    id="signin" 
                                    name="signin">
                                Sign In</button>
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
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    const uid = state.firebase.auth.uid;
    return {
      uid: uid,
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(SignIn);