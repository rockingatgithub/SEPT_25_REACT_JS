import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
const Profile = (props) => {

    const [newName, setNewName] = useState('')

    const onFormSubmit = async event => {
        event.preventDefault()

        const response = await fetch('http://localhost:8000/student/'+ props.main.user._id, {
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
            // props.setStudent(parsedResponse.data)
            console.log(parsedResponse)
        }

    }

    return <div>
        <h1> Profile:- </h1>

        <div id="profile" >
            <div> Name:- {props.main.user.name} </div>
            <div> Email:- {props.main.user.email} </div>

            Update Form:- 
            <Form onSubmit={onFormSubmit} >
            <Form.Group>
                    <Form.Label> Current Name </Form.Label>
                    <Form.Control value={props.main.user.name} disabled />
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

const mapStateToProps = state => {
    return { main: state }
}

export default connect(mapStateToProps)(Profile)