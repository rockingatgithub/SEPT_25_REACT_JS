import Cookies from 'js-cookie'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Profile = (props) => {

    const [newName, setNewName] = useState('')

    const onFormSubmit = async event => {
        event.preventDefault()

        const response = await fetch('http://localhost:8000/student/'+ props.student._id, {
            method: 'PUT',
            body: JSON.stringify({
                name: newName,
                token: Cookies.get('user')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if(response.status === 200) {
            const parsedResponse = await response.json()
            props.setStudent(parsedResponse.data)
            console.log(parsedResponse)
        }

    }

    return <div>
        <h1> Profile:- </h1>

        <div id="profile" >
            <div> Name:- {props.student.name} </div>
            <div> Email:- {props.student.email} </div>

            Update Form:- 
            <Form onSubmit={onFormSubmit} >
            <Form.Group>
                    <Form.Label> Current Name </Form.Label>
                    <Form.Control value={props.student.name} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label> New Name </Form.Label>
                    <Form.Control value={newName} onChange={ event => setNewName(event.target.value)  } />
                </Form.Group>

                <Button type='submit'>Submit</Button>
            </Form>

        </div>

    </div>

}

export default Profile