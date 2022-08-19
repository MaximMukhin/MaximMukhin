import React from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledPostListItem } from '../styled/postList/StyledPostListItem';

const PostItem = ({ postItemProps, removePost, indexPost }) => {

  return (
    <StyledPostListItem>

      <div>
        <p>{indexPost + 1} title: {postItemProps.title.toUpperCase()}</p>
        <br />
        <p>body: {postItemProps.body}</p>
      </div>

      <Button
        style={{ minWidth: '120px', maxHeight: '40px', marginLeft: '20px' }}
        color="error"
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={() => removePost(indexPost)}
      >
        Удалить
      </Button>
    </StyledPostListItem>
  );
};

export default PostItem;