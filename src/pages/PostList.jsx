import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { todosState } from '../atoms/todos'
import Navigation from '../components/Navigation'
import PostItem from '../components/postItem/PostItem'
import { StyledPost } from '../components/styled/postList/StyledPost'
import { copyDeep } from '../utils/copyDeep'
import { Button, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const PostList = () => {

   const [valueInputTitle, setValueInputTitle] = useState('')
   const [valueInputBody, setValueInputBody] = useState('')
   const [postItems, setPostItems] = useRecoilState(todosState)

   //  console.log(postItems);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=4&_page=1')
         .then((res) => {
            res.json().then((data) => {
               //console.log(data);
               setPostItems(data)
            })
         })
   }, [setPostItems])

   /*    useEffect(() => {
         fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => console.log(json))
      }, [setTodoItems]) */

   const removePost = (indexPost) => {
      const remove = copyDeep(postItems)
      remove.splice(indexPost, 1)
      setPostItems(remove)
   }

   const addPost = () => {
      if (valueInputTitle !== '' && valueInputBody !== '') {
         const post = {
            userId: 3,
            id: Math.random(),
            title: valueInputTitle,
            body: valueInputBody,
         }
         setPostItems([...postItems, post])
         setValueInputTitle('')
         setValueInputBody('')

      }
   }

   return (
      <div>
         <Navigation />
         <h3 style={{ textAlign: 'center' }}>Post - Component</h3>

         <div style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 5px 0 5px',

         }}
         >
            <TextField
               style={{ marginTop: '15px' }}
               id="outlined-basic"
               label="Title"
               variant="outlined"
               color="info"
               size="small"
               value={valueInputTitle}
               onChange={event => setValueInputTitle(event.target.value)}
            />
            <TextField
               style={{ marginTop: '15px' }}
               id="outlined-basic"
               label="Body"
               variant="outlined"
               color="info"
               size="small"
               value={valueInputBody}
               onChange={event => setValueInputBody(event.target.value)}
            />

            {valueInputTitle !== '' && valueInputBody !== ''
               ? <Button
                  style={{ margin: '16px 0 14px 0' }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={addPost}
               >
                  Добавить пост
               </Button>

               : <Button
                  style={{ margin: '16px 0 14px 0' }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  disabled
               >
                  Добавить пост
               </Button>

            }

         </div>

         {postItems.length !== 0
            ? <StyledPost >
               {postItems.map((postItem, indexPost) => (
                  <PostItem
                     key={postItem.id}
                     postItemProps={postItem}
                     removePost={removePost}
                     indexPost={indexPost}
                  />
               ))}
            </StyledPost>

            : <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
         }


      </div>
   )
}

export default PostList