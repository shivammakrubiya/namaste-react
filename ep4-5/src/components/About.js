import UserContext from "../utils/UserContext";
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
                <h1 className="font-bold m-4 text-2xl">About</h1>
                <h3 className="font-bold m-4 text-lg">This is demo.</h3>
                {/* Accessing UserContext */}
                <UserContext.Consumer>
                    {({ loggedInUserName }) => <h1 className="font-bold p-2">User Nane : - {loggedInUserName}</h1>}
                </UserContext.Consumer>
                <UserClass name={"first"} city={"Surat (class)"} />
            </div>
        ))
    }
}

export default About;