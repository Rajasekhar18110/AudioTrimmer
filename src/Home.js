import react, { Component } from "react"
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    useHistory,
} from "react-router-dom"
import Audioplayer from "./Audioplayer"

function Home() {
    return (
        <div className="Home">
            <Link to="./Audioplayer">
                <button type="button">Upload</button>
            </Link>
        </div>
    )
}

export default Home
