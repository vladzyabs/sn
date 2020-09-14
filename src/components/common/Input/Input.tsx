import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react'

export type InputPropsType = {
   input: any
   meta: any
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

function Input(props: InputPropsType) {

   const {input, meta, ...restProps} = props

   const styles = {
      textareaError: {
         border: meta.touched && meta.error ? 'solid 1px red' : '',
      },
      textError: {
         color: 'red',
      },
   }

   return (
      <div>
         <input {...input} {...restProps} style={styles.textareaError}/>
         {meta.touched && meta.error && <span style={styles.textError}>{meta.error}</span>}
      </div>
   )
}

export default React.memo(Input)
