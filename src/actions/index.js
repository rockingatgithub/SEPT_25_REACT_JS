// rules to be discussed....
// 1. Actions must return plain JS objects.
// 2. Actions must be a pure function.

export const signupFunction = (student, navigate) => {

    return async (dispatch, getState) => {

        const studentResponse = await fetch('http://localhost:8000/student', {

            method: "POST",
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        if (studentResponse.status === 200) {
            const parsedResponse = await studentResponse.json()
            navigate('/profile')

            dispatch({ type: 'SIGNUP', data: parsedResponse.data })
        }
    
    }

}

export const signinFunction = (student, navigate) => {

    return async (dispatch, getState) => {

        const studentResponse = await fetch('http://localhost:8000/auth', {

            method: "POST",
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }

        })
        if(studentResponse.status === 200){
            const parsedResponse = await studentResponse.json()
            navigate('/profile')
            console.log("the getState func...", getState())
            dispatch({ type: 'SIGNIN', data: parsedResponse.user })
            
        }
    
    }

}

export const incrementCounter= num => {
    return { type: 'INC_COUNTER', data: num }
}

export const decrementCounter = num => {
    return { type: 'DEC_COUNTER', data: num }
}