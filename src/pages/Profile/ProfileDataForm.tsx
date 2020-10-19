import React from 'react'

function ProfileDataForm() {
   return (
      <div>
         <input type="text"/>
         <input type="text"/>
         <input type="text"/>
         <input type="text"/>
         <button>Send</button>
      </div>
   )
}

export default React.memo(ProfileDataForm)
