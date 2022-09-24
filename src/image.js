import react from 'react'

export default class image extends react.Component{
  render(){
    return (      
        <img src= {this.props.source}/>
      );
  }
}
