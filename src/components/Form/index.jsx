import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Cookie from 'js-cookie'
import classes from './list.module.css';
// import  {Button}  from "react-bootstrap";
import  Button  from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { signinFunction, signupFunction } from "../../actions";


const UserForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    

    const signupHandler = async event => {
        event.preventDefault()
        const student = {
            name,
            email,
            password
        }
        dispatch(signupFunction(student, navigate))
    }

    const signinHandler = async event => {
        event.preventDefault()
        const student = {
            email,
            password
        }
        dispatch(signinFunction(student, navigate))
    }

    const submitHandler = props.signup ? signupHandler : signinHandler

    return <div>

        {props.signup ? <h1>Signup Form</h1> :  <h1> Signin Form </h1>}

        <Form onSubmit={submitHandler} >

            {props.signup ? <Form.Group>
                <Form.Label htmlFor='name' >Name:-</Form.Label>
                <Form.Control type="text"
                    id='name' name='name'
                    value={name}
                    onChange={(event) => setName(event.target.value) }
                     />
            </Form.Group> : null}

            <Form.Group>
                <Form.Label htmlFor='email' >Email:-</Form.Label>
                <Form.Control type="email"
                    id='email' name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='password'>Password:-</Form.Label>
                <Form.Control type="password"
                    id='password' name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />
            </Form.Group>

            <Button type='submit' className={classes.formButton} > Submit </Button>

        </Form>

    </div>

}

export default UserForm