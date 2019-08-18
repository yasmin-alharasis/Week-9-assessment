import React from 'react'

class UserOutput extends React.Component{
    render(props){
        return(
            <div className='paragraph'>
                <p> UserName: {this.props.username}</p>
                <p>this is an output component </p>
            </div>

        )
    }
}
export default UserOutput;