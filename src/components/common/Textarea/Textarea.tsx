import React, {DetailedHTMLProps, TextareaHTMLAttributes} from 'react'

export type TextareaPropsType = {
   input: any
   meta: any
} & DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

function Textarea(props: TextareaPropsType) {

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
         <textarea {...input} {...restProps} style={styles.textareaError}/>
         {meta.touched && meta.error && <span style={styles.textError}>{meta.error}</span>}
      </div>
   )
}

export default Textarea
