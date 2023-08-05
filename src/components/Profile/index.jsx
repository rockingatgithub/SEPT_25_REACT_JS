import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { UserContext } from '../../context'
const Profile = (props) => {

    return <div>
        <h1> Profile:- </h1>

        <div id="profile" >
            <div> Name:- {props.main.user.name} </div>
            <div> Email:- {props.main.user.email} </div>
        </div>

        <UpdateForm user={props.main.user} />

    </div>

}

const mapStateToProps = state => {
    return { main: state }
}

export default connect(mapStateToProps)(Profile)

const UpdateForm = (props) => {

    const [newName, setNewName] = useState('')

    const onFormSubmit = async event => {
        event.preventDefault()

        const response = await fetch('http://localhost:8000/student/' + props.user.user._id, {
            method: 'PUT',
            body: JSON.stringify({
                name: newName,
                token: Cookies.get('user')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status === 200) {
            const parsedResponse = await response.json()
            // props.setStudent(parsedResponse.data)
            console.log(parsedResponse)
        }

    }

    return <><h1>Update Form:- </h1>
            <Form onSubmit={onFormSubmit} >
                <Form.Group>
                    <Form.Label> Current Name </Form.Label>
                    <Form.Control value={props.user.name} disabled />
                </Form.Group>
                <Form.Group>
                    <Form.Label> New Name </Form.Label>
                    <Form.Control value={newName} onChange={event => setNewName(event.target.value)} />
                </Form.Group>

                <Button type='submit'>Submit</Button>
            </Form>
            <UserContext.Consumer>
                {value =><div>
                    <div>Name:- {value.name} </div>
                    <div>Version:- {value.version}</div>
                </div>  } 
            </UserContext.Consumer>
        </>

}