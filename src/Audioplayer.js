import react, { Component } from "react"
import song from "./audio.mp3"
import ReactDOM from "react-dom"

class Audioplayer extends Component {
    state = {
        audio: new Audio(song),
        isPlaying: false,
    }
    playPause = () => {
        let isPlaying = this.state.isPlaying

        if (isPlaying) {
            this.state.audio.pause()
        } else {
            this.state.audio.play()
        }
        this.setState({ isPlaying: !isPlaying })
    }

    render() {
        return (
            <div className="Audioplayer">
                <p>
                    {this.state.isPlaying
                        ? "song is playing"
                        : "song is paused"}
                </p>
                <button onClick={this.playPause}>Play | Pause</button>
            </div>
        )
    }
}

export default Audioplayer
