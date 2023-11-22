import {Component} from 'react'
import "./index.css"

class SubscribeButton extends Component {
    state = {isSubscribed: true, text:"Subscribe"}

     changeButton = () => {
        // const {isSubscribed} = this.state 
        // if (isSubscribed === true) {
        //     this.setState(prevState => 
        //         ({isSubscribed: false, text: "Subscribed"})
        //         )
        //     const {text} = this.state
        //     return text
        // }
        // else {
        //     this.setState(prevState => 
        //         ({isSubscribed: true, text:"Subscribe"})
        //         )
        //     const {text} = this.state
        //     return text 
        // }
        this.setState(prevState => 
                ({isSubscribed: !prevState.isSubscribed})
            )
    }
    getButtonText = () => {
        const {isSubscribed} = this.state 
        const text = isSubscribed ? "subscribe" : "Subscribed"

        return text 
    }
    render(){
        const text = this.getButtonText()
        return (
            <div className="subscribe-container">
                <h1 className="heading">Welcome</h1>
                <p className="description">Thank you! Happy Learning</p>
                <div>
                    <button onClick={this.changeButton}>{text}</button>
                </div>
            </div>
        )
    }
}

export default SubscribeButton
