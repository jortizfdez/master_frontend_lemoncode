import * as React from "react";
import getGamingAvg from "./gameScoring";

export class AverageComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      scores: [90, 75, 60, 99, 94, 30],
      average: 0
    };
  }

  componentDidMount() {
    this.setState({ average: getGamingAvg(this.state.scores) });
  }

  render() {
    return (
      <div>
        <span>Players average: {this.state.average}</span>
      </div>
    );
  }
}
