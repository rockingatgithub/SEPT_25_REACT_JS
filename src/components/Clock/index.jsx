import { useEffect, useState } from "react"

const Clock = (props) => {

    const [time, setTime] = useState('')

    useEffect( () => {

        const intervalId = setInterval(() => {

            const date = new Date()
            const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
            setTime(time)
            console.log(time)

        }, 1000)

        return () => {  clearInterval(intervalId)  }

    }, [] )

    return <div>
        <h3> Clock </h3>

        <div>
            Time:- {time}
        </div>
    </div>

}

export default Clock;