
import React, { // eslint-disable-line no-unused-vars
  Component
} from 'react'

export default class AsyncImage extends Component {

    constructor(props) {
      super(props)
      this.state = { 
        loaded: this.props.loaded
       }
    }

    _onLoad = () => {
      this.setState(() => ({ loaded: true }))
    }

    render() {
      return (
        <figure>
          {this.state.loaded ? 
          <img
            src={this.props.src}
            alt='img'
            onLoad={this._onLoad} /> :
            <p>Loading</p>
          }
        </figure>
      )
    }
  

  }