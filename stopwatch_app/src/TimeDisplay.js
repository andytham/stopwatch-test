import React from 'react';

class TimeDisplay extends React.Component {

  render(){

    return(
      <div>
        {Number(this.props.currentTime / 10).toFixed(1)} seconds
      </div>
    )
  }
}

export default TimeDisplay;
