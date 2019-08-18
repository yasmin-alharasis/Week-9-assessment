import React from 'react'

class UserInput extends React.Component{
   
    render(props){
        return(
            <div className='input'>
            <input type='text' placeholder='username' onChange={this.props.onChange}/>
            </div>
        );
    }
}
export default UserInput;