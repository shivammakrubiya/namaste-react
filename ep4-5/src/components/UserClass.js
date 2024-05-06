import React from "react"
import { USER_API } from "../utils/constants";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            userInfo: {
                name: "Dummy",
                location: "Dummy Location"
            }
        }
        // console.log(this.props.name + " Child Constructor");
    }
    async componentDidMount() {
        // console.log(this.props.name + " Child Component Did Mount");

        // API Calls
        const res = await fetch(USER_API)
        const json = await res.json();
        this.setState({
            userInfo: {
                name: json[0]?.name,
                location: json[0]?.address.city
            }
        })

        //* Reasin for using set interval for clean up
        // this.data = 90000909
        // this.timer = setInterval(() => {
        //     console.log("REACT FOR A REASON");
        // }, 1000)
    }

    //* Calls when props/state changes
    componentDidUpdate() {
        // console.log("Component Did Update");
    }

    //* componentWillUnmount - Calls when component will unmount from the DOM ( When we change the route)
    componentWillUnmount() {
        // console.log("Component Will Unmount");

        //* Clear the interval
        // clearInterval(this.timer)
    }
    render() {
        // console.log(this.props.name + " Child Render");
        const { name, location } = this.state.userInfo
        return (
            <div className="user-card">
                {/* <h1>Count : {count}</h1>
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Count Inrcease</button> */}
                <h2>Name : {name}</h2>
                <h3>location : {location}</h3>
                <h3>Contact : @shiva111</h3>
            </div>
        )
    }
}

export default UserClass;