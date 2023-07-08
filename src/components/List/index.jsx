import { useState } from "react";
import './list.module.css';

const UserForm = () => {


    const [counter, setCounter] = useState(0)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [studentList, setStudentList] = useState([])


    const incrementHandler = () => {
        setCounter(counter + 1)
    }

    const decrementHandler = () => {
        setCounter(counter - 1)
    }

    const submitHandler = event => {

        event.preventDefault()

        const student = {
            name,
            email,
            password
        }

        setStudentList( prevStudentList => [...prevStudentList, student] )

    }

    return <div>
        <button onClick={incrementHandler} > Inc </button>
        <span> Counter:- {counter} </span>
        <button onClick={decrementHandler} > Dec </button>

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

        <h3> Students List:- </h3>
        <UsersList students={studentList} />
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