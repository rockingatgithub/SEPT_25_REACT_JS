import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Cookie from 'js-cookie'
import classes from './list.module.css';
// import  {Button}  from "react-bootstrap";
import  Button  from "react-bootstrap/Button";


const UserForm = (props) => {

    const params = useParams()
    console.log(params)

    const [counter, setCounter] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    

    const signupHandler = async event => {

        event.preventDefault()

        const student = {
            name,
            email,
            password
        }

        const studentResponse = await fetch('http://localhost:8000/student', {

            method: "POST",
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        if(studentResponse.status === 200){
            const parsedResponse = await studentResponse.json()
            props.setStudent(parsedResponse.data)
            navigate('/profile')
        }
        

    }

    const signinHandler = async event => {

        event.preventDefault()

        const student = {
            email,
            password
        }

        const studentResponse = await fetch('http://localhost:8000/auth', {

            method: "POST",
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        if(studentResponse.status === 200){
            const parsedResponse = await studentResponse.json()
            props.setStudent(parsedResponse.user)
            Cookie.set('user', parsedResponse.token)
            navigate('/profile')
        }
        

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