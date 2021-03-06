import React, { useState,useEffect,useRef,Fragment } from 'react';
import { Redirect, Link,withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import LinearLoader from './../loaders/LinearLoader';
import queryString from 'query-string';

const useStyles = makeStyles((theme)=>({
    registerContainer:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position:'relative',
        padding:'1.3em',
        border:'1px solid lightgray',
        borderRadius:'10px',
        width:'40%',
        minWidth:'300px',
        maxWidth:'450px',
        textAlign:'center'
    },
    formInput:{
        border: '0',
        margin: '0',
        padding: '0',
        position: 'relative',
        minWidth: '0',
        verticalAlign: 'top',
        display:'block',
        flex:'none',
        color:'black',
        marginBottom:'30px'
    },
    formTitle:{
        fontSize:'1.3em'
    },
    logInSection:{
        marginTop:'1.5em'
    }
}));
const Register = ({auth,register,history,location}) => {
    if(auth.isAuthenticated){
        return <Redirect push to="/"/>
    }
    const isInitialMount = useRef(true); //when the component is initially mounted set useRef to true
    const [formErrors,setFormErrors] = useState({
        name:'',
        email:'',
        password:'',
        rePassword:''
    })
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        rePassword:'' 
    });
    useEffect(()=>{
        if (isInitialMount.current) {
            //set the component as mounted
            isInitialMount.current = false;
         }else{validate()}},[formData])//as soon as form Input changes validate the input 

    const {name,email,password,rePassword} = formData;

    const validate = ()=>{
            let errors = {name:'',password:'',rePassword:'',email:''}
            if(name.length > 0&& name.length < 3){
                errors.name = 'Name should be at least 3 characters long';
            }  
            else{
                errors.name = ''
            }
            if(password.length > 0 && password.length < 8){
                errors.password = 'Password should be at least 8 characters long'
            }
            else{
                errors.password = ''
            }
            if(password.length > 0 && rePassword.length > 0 && password !== rePassword){
                errors.rePassword = 'Passwords do not match';
            }
            else{
                errors.rePassword = ''
            }
            setFormErrors(errors)
    }

    const onInputChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value}); 
    }

    const registerUser = async (e)=>{
        e.preventDefault();
        let query = queryString.parse(location.search)
        let ifFromOrder = false;
        if(query.confirm_order){
            ifFromOrder = true
        }
        try{
            await register({name,email,password},ifFromOrder)
            ifFromOrder ? history.push('/confirm_order') : history.push('/')
        }
        catch(err){
            console.log(err)
        }
    }

    const isValidated = !Object.values(formErrors).some(x => (x !== null && x !== ''));

    const classes = useStyles();
    return (
            <Fragment>
                <LinearLoader loading={auth.loading}/>
                <div className={classes.registerContainer}>
                    <p className={classes.formTitle}>Create Account</p>
                    <hr/>
                    <form onSubmit={(e)=>registerUser(e)} autoComplete="off">
                    <TextField fullWidth={true} error={formErrors.name.length > 0?true:false} className={classes.formInput} id="name" required name="name" label="Name" variant="outlined" onChange={(e)=>onInputChange(e)}  helperText={formErrors.name} autoComplete="name"/>
                    <TextField type="email" fullWidth={true} error={ formErrors.email.length > 0?true:false } className={classes.formInput}  id="email" required name="email" label="Email" variant="outlined" onChange={(e)=>onInputChange(e)} value={email} helperText={formErrors.email} autoComplete="email"/>
                    <TextField type="password" fullWidth={true} error={ formErrors.password.length > 0?true:false } className={classes.formInput} required id="password" name="password" label="Password" variant="outlined" onChange={(e)=>onInputChange(e)} value={password} helperText={formErrors.password} autoComplete="new-password"/>
                    <TextField type="password" fullWidth={true} error = { formErrors.rePassword.length > 0?true:false }className={classes.formInput} required id="rePassword" name="rePassword" label="Confirm Password" variant="outlined" onChange={(e)=>onInputChange(e)} value={rePassword} helperText={formErrors.rePassword} autoComplete="off"/>
                    <Button disabled={!isValidated} variant="contained" fullWidth={true} color="primary" type="submit">Create Account</Button>
                    </form>
                <div className={classes.logInSection}>
                        Already have an account? 
                        <Link to="/login"> Login</Link>
                    </div>
                </div>
            </Fragment>
            );
}


Register.propTypes = {
    auth:PropTypes.object.isRequired,
    register:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{register})(withRouter(Register));

