import React from 'react'
import { getVisitor } from './../../Utils/ApiCalls'
import './VisitorCount.scss'

interface State {
  visitorNumber: number | null
}

class VisitorCount extends React.Component<unknown, State> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      visitorNumber: null,
    }
  }

  async componentDidMount() {
    try {
      const visitorNumber = await getVisitor()
      this.setState({ visitorNumber })
    } catch (error) {
      console.error(`An error has occurred: ${error}`)
    }
  }

  render() {
    return (
      <div className="visitors">
        {this.state.visitorNumber !== null ? (
          <p>{this.state.visitorNumber}</p>
        ) : (
          <p>0</p>
        )}
      </div>
    )
  }
}

export default VisitorCount
