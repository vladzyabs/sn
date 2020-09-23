import React from 'react'
import {findIconDefinition, IconDefinition, IconLookup} from '@fortawesome/fontawesome-svg-core'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

library.add(fas);

type IconPrefixType = 'fas' | 'fab' | 'far' | 'fal' | 'fad'

export const iconsPrefix = {
   fas: 'fas',
};
export const iconsName = {
   user: 'user',
   users: 'users',
   comments: 'comments',
   newspaper: 'newspaper',
   music: 'music',
   cogs: 'cogs',
   paperPlane: 'paper-plane',
   frown: 'frown',
   heart: 'heart',
   pen: 'pen',
   signInAlt: 'sign-in-alt',
   signOutAlt: 'sign-out-alt',
   chevronRight: 'chevron-right',
   chevronLeft: 'chevron-left',
};

type IconProps = {
   prefix: any
   iconName: any
   size: 'xs' | 'lg' | 'sm' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x' | undefined
}

function Icon(props: IconProps) {
   const setLookup: IconLookup = {prefix: props.prefix, iconName: props.iconName};
   const setIconDefinition: IconDefinition = findIconDefinition(setLookup);

   return (
      <FontAwesomeIcon icon={setIconDefinition} size={props.size}/>
   )
}

export default Icon
