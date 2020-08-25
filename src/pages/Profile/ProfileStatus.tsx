import React, {ChangeEvent, KeyboardEvent} from 'react'
import Icon, {iconsName, iconsPrefix} from '../../components/Icon/Icon'
import styles from './Profile.module.scss'

type ProfileStatusPropsType = {
   status: string
   updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {
   state = {
      editMode: false,
      status: this.props.status,
   }

   componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
      if (prevProps.status !== this.props.status) {
         this.setState({
            status: this.props.status,
         })
      }
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
      this.props.updateStatus(this.state.status)
   }

   changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState(
         {
            status: e.currentTarget.value,
         },
      )
   }

   pressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.charCode === 13) {
         this.offEditMode()
      }
   }

   render() {
      return (
         <div className={styles.status}>
            {
               this.state.editMode
                  ?
                  <input type="text" value={this.state.status} onKeyPress={this.pressEnter} onChange={this.changeStatus}
                         onBlur={this.offEditMode} autoFocus/>
                  :
                  <div>
                     <span onDoubleClick={this.onEditMode} className={styles.statusOffEditMode}>{this.props.status || 'Enter status'}</span>
                     <span className={styles.statusIcon}>
                        <Icon size={'xs'} prefix={iconsPrefix.fas} iconName={iconsName.pen}/>
                     </span>
                  </div>
            }
         </div>
      )
   }
}

export default ProfileStatus
