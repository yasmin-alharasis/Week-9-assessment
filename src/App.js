import React from 'react';
import './App.css'
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';

class App extends React.Component{
  state={
    username:''
  }
  handleChange=e=>{
    this.setState({
      username:e.target.value
    })

  }
  render(){
    return(
    <div>
      <div className='container'>
     
        <UserInput username={this.state.username} onChange={this.handleChange}/>
        <UserOutput Key={Math.random()} username={this.state.username}/>
      </div>
       <div className='container'>
     
       <UserInput username={this.state.username} onChange={this.handleChange}/>
       <UserOutput Key={Math.random()} username={this.state.username}/>
     </div>
      <div className='container'>
     
      <UserInput username={'this.state.username'} onChange={this.handleChange}/>
      <UserOutput Key={Math.random()} username={this.state.username}/>
    </div>
    </div>
    )
  }
}

export default App;
