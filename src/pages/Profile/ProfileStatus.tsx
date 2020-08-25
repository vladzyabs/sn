import React from 'react'

type ProfileStatusPropsType = {
   status: string
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
   state = {
      editMode: false,
   }

   onEditMode = () => {
      this.setState(
         {
            editMode: true,
         },
      )
   }

   offEditMode = () => {
      this.setState(
         {
            editMode: false,
         },
      )
   }

   render() {
      return (
         <div>
            {
               this.state.editMode
                  ? <input type="text" value={this.props.status} onChange={x => x} onBlur={this.offEditMode} autoFocus/>
                  : <span onDoubleClick={this.onEditMode}>{this.props.status}</span>
            }
         </div>
      )
   }
}

export default ProfileStatus
