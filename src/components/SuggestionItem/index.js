import {Component} from 'react'

import './index.css'

class SuggestionItem extends Component {
  onArrowClick = () => {
    const {suggestionItem, onClickArrow} = this.props
    const {suggestion, id} = suggestionItem
    onClickArrow(suggestion, id)
  }

  render() {
    const {suggestionItem} = this.props
    const {suggestion} = suggestionItem
    return (
      <li className="li_container">
        <p className="suggestion">{suggestion}</p>
        <img
          onClick={this.onArrowClick}
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </li>
    )
  }
}

export default SuggestionItem
