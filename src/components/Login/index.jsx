import React from 'react'
class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isListVisible: true,
            counter: 0,
            users: [],
            name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount = () => {

        console.log("Mounting")

    }

    componentDidUpdate = () => {
        console.log("Updating!")
    }

    nameChangeHandler = (event) => {
        this.setState({ name: event.target.value })
    }
    emailChangeHandler = (event) => {
        this.setState({ email: event.target.value })
    }
    passwordChangeHandler = (event) => {
        this.setState({ password: event.target.value })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()
        const { name, email, password, users } = this.state

        const user = {
            name: name,
            email: email,
            password: password
        }

        this.setState({ users: [...users, user] })

    }

    showListHandler = () => {

        this.setState(
            state => ({ isListVisible: !state.isListVisible }),
            () => console.log(this.state.isListVisible)
        )
    }

    increaseCounter = () => {
        this.setState(state => ({ counter: state.counter + 1 }))
        this.setState(state => ({ counter: state.counter + 1 }))
        this.setState(state => ({ counter: state.counter + 4 }))
    }

    decreaseCounter = () => {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {

        const { name, email, password, isListVisible, users } = this.state

        return <div className='form'>
            <h3> Login Form </h3>

            {/* <div>
                <button onClick={this.increaseCounter}> Inc </button>
                <span> Counter:- {this.state.counter}  </span>
                <button onClick={this.decreaseCounter} > Dec </button>
            </div> */}


            <form onSubmit={this.formSubmitHandler}>

                <div>
                    <label htmlFor='name' >Name:-</label>
                    <input type="text"
                        id='name' name='name'
                        value={name}
                        onChange={this.nameChangeHandler} />
                </div>

                <div>
                    <label htmlFor='email' >Email:-</label>
                    <input type="email"
                        id='email' name='email'
                        value={email}
                        onChange={this.emailChangeHandler} />
                </div>

                <div>
                    <label htmlFor='password'>Password:-</label>
                    <input type="password"
                        id='password' name='password'
                        value={password}
                        onChange={this.passwordChangeHandler} />
                </div>

                <button type='submit' > Submit </button>

            </form>

            <button onClick={this.showListHandler} > Show/Hide List </button>
            {isListVisible && <UsersList users={users} heading="Users List" />}

        </div>

    }

}

export default Login


class UsersList extends React.Component {

    componentWillUnmount = () => {
        console.log("Unmounting!")
    }

    render() {

        return <ul>
            {this.props.users.map((user) => <li>
                Name:-<span>{user.name}</span>
                <br />
                Email:-<span>{user.email}</span>
            </li>)}
        </ul>

    }

}