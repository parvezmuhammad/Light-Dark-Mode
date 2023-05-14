import {Component} from 'react'
import './index.css'
// Write your code here
class LightDarkMode extends Component {
  state = {isLightmode: false}

  changingColor = () => {
    this.setState(prevState => ({
      isLightmode: !prevState.isLightmode,
    }))
  }

  getButtonText = () => {
    const {isLightmode} = this.state
    return isLightmode ? 'Dark Mode' : 'Light Mode'
  }

  getColor = () => {
    const {isLightmode} = this.state
    return isLightmode
  }

  render() {
    const buttonText = this.getButtonText()
    const background = this.getColor()
    return (
      <div className="lightdarkmode-container">
        <div
          // here background represents the value of a key(backgroundColor)
          style={{backgroundColor: background ? 'white' : 'black'}}
          className="lightdarkmode-inside-container"
        >
          <h1 style={{color: background ? 'black' : 'white'}}>
            Click to change the mode
          </h1>
          <button
            className="lightmode-button"
            type="button"
            onClick={this.changingColor}
          >
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
