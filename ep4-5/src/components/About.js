import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
class About extends Component {
    constructor(props) {
        super(props)
        // console.log("Parent Constructor");
    }
    componentDidMount() {
        // console.log("Parent Component Did Mount");
    }
    render() {
        // console.log("Parent Render");
        return ((
            <div>
                <h1>About</h1>
                <h3>This is demo.</h3>
                <UserClass name={"first"} city={"Surat (class)"} />
            </div>
        ))
    }
}

export default About;