import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";
import './list.module.css';

const UserForm = (props) => {


    const [counter, setCounter] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    

    const submitHandler = async event => {

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

    return <div>

        <form onSubmit={submitHandler} >

            <div>
                <label htmlFor='name' >Name:-</label>
                <input type="text"
                    id='name' name='name'
                    value={name}
                    onChange={(event) => setName(event.target.value) }
                     />
            </div>

            <div>
                <label htmlFor='email' >Email:-</label>
                <input type="email"
                    id='email' name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)} />
            </div>

            <div>
                <label htmlFor='password'>Password:-</label>
                <input type="password"
                    id='password' name='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} />
            </div>

            <button type='submit' > Submit </button>

        </form>

    </div>

}

export default UserForm


const UsersList = props => {

    console.log(props)

    return <ul>
        { props.students.map( student => <li>
            <table className="student-table">
                <tr>
                    <td>{student.name}</td>
                    <td>{student.email}</td> 
                    <td>{student.password}</td>
                </tr>
            </table>
        </li> ) }
    </ul>

}