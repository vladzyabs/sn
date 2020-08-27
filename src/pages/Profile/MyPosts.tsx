import React from 'react'
import style from './Profile.module.scss'
import Icon, {iconsName, iconsPrefix} from '../../components/Icon/Icon'
import Post from './Post'
import {PostsType} from '../../redux/profilePage/profileType'
import {reduxForm, InjectedFormProps, Field} from 'redux-form'
import {maxLength, required} from '../../utils/validation/validators'
import Textarea from '../../components/common/Textarea/Textarea'

type PropsMyPostsType = {
   posts: PostsType[]
   addPost: (value: string) => void
   addLike: (id: string) => void
}

function MyPost(props: PropsMyPostsType) {

   const addPost = (formData: any) => {
      props.addPost(formData.newPostBody)
   }

   return (
      <div className={style.myPosts}>

         <div className={style.addPosts}>
            <span>New post:</span>
            <AddPostReduxForm onSubmit={addPost}/>
         </div>

         <div className={style.postsItems}>

            {
               props.posts.map(post => <Post key={post.id} post={post} addLike={props.addLike}/>)
            }

         </div>
      </div>
   )
}

// form add post -----------------------------------------------------------------------------------------------------
const maxLengthField10 = maxLength(10)

function AddPost(props: {} & InjectedFormProps) {
   return (
      <form onSubmit={props.handleSubmit}>
         <Field className={style.textarea}
                name={'newPostBody'}
                component={Textarea}
                placeholder={'Enter your post'}
                validate={[required, maxLengthField10]}/>
         <button className={style.button}>
            Send<Icon prefix={iconsPrefix.fas} iconName={iconsName.paperPlane} size={'sm'}/>
         </button>
      </form>
   )
}

const AddPostReduxForm = reduxForm<{}>({
   form: 'profileAddPost',
})(AddPost)

// -------------------------------------------------------------------------------------------------------------------

export default MyPost
