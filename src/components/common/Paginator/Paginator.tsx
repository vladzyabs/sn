import React from 'react'
import classes from './Paginator.module.scss'
import cn from 'classnames'
import Icon, {iconsName, iconsPrefix} from '../../Icon/Icon'

type PaginatorPropsType = {
   totalItemsCount: number
   pageSize: number
   currentPage: number
   onPageChanged: (p: number) => void
   portionSize: number
}

const Paginator = (props: PaginatorPropsType) => {

   const pagesCount = Math.ceil(props.totalItemsCount / props.pageSize)
   const pages = []
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }
   const portionCount = Math.ceil(pagesCount / props.portionSize)
   const [portionNumber, setPortionNumber] = React.useState<number>(1)
   const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
   const rightPortionPageNumber = portionNumber * props.portionSize

   return (
      <div className={classes.wrapper}>

         <button onClick={() => setPortionNumber(1)}
                 disabled={portionNumber <= 1}
                 className={classes.item}>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.chevronLeft} size={'xs'}/>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.chevronLeft} size={'xs'}/>
         </button>
         <button onClick={() => setPortionNumber(portionNumber - 1)}
                 disabled={portionNumber <= 1}
                 className={classes.item}>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.chevronLeft} size={'xs'}/>
         </button>

         {
            pages
               .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
               .map(p => {
                  return <span key={p}
                               onClick={() => props.onPageChanged(p)}
                               className={cn({
                                     [classes.currentPage]: props.currentPage === p,
                                  },
                                  classes.item)}>{p}</span>
               })
         }

         <button onClick={() => setPortionNumber(portionNumber + 1)}
                 disabled={portionCount <= portionNumber}
                 className={classes.item}>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.chevronRight} size={'xs'}/>
         </button>
         <button onClick={() => setPortionNumber(portionCount)}
                        disabled={portionCount <= portionNumber}
                        className={classes.item}>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.chevronRight} size={'xs'}/>
            <Icon prefix={iconsPrefix.fas} iconName={iconsName.chevronRight} size={'xs'}/>
         </button>
      </div>
   )
}

export default Paginator
