import React from 'react'

// const getCode = require('../utils/readFile.js')

export class ReadBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: ''
    }
  }
  componentDidMount() {
    fetch('http://localhost:3003', {
      method: 'GET',
      mode: 'CORS',
      headers: {
        'Content-Type': 'application/text',
      }
    })
      .then(res => res.text())
      .then(data => this.setState({ code: data }))
  }

  render() {
    const { code } = this.state
    console.log(code)
    return (
      <div style={{backgroundColor: 'white', color: 'black'}}>
        {code}
      </div>
    )
  }
}