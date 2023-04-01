import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    const {searchInput} = this.state
    this.setState({searchInput: event.target.value})
  }

  onClickArrow = (suggestion, id) => {
    const {searchInput} = this.state
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="home">
        <div className="container">
          <img
            className="google_logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="suggestions_cont">
            <div className="input_cont">
              <img
                className="search_icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                type="search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
                className="search_input"
                placeholder="Search Google"
              />
            </div>
            <ul className="ul_container">
              {searchResults.map(eachItem => (
                <SuggestionItem
                  onClickArrow={this.onClickArrow}
                  suggestionItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
