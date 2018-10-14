import React from 'react'

export class ReadBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fileName: '',
      code: ''
    }
  }
  // componentDidMount() {
  //   fetch('http://localhost:3003', {
  //     method: 'GET',
  //     mode: 'CORS',
  //     headers: {
  //       'Content-Type': 'application/text',
  //     }
  //   })
  //     .then(res => res.text())
  //     .then(data => this.setState({ code: data }))
  // }

  submitFileName() {
    const { fileName } = this.state
    console.log(fileName)
    fetch('http://localhost:3003/get-code', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pathToFile: fileName
      })
    }).then(res => res.text())
    .then(data => this.setState({ code: data }))
  }

  render() {
    const { code } = this.state
    // console.log(code)
    return (
      <div >
        <input type="text" onChange={(e) => this.setState({ fileName: e.target.value})}/>
        <button onClick={this.submitFileName.bind(this)}>Submit</button>
        <div style={{backgroundColor: 'white', color: 'black'}}>
          {code}
        </div>
      </div>
    )
  }
}