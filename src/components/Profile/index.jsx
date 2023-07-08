const Profile = (props) => {

    return <div>
        <h1> Profile:- </h1>

        <div id="profile" >
            <div> Name:- {props.student.name} </div>
            <div> Email:- {props.student.email} </div>
        </div>

    </div>

}

export default Profile