import React, { FC } from 'react'
import { PostItem } from './PostItem/PostItem';
import { Post } from '../type';
import { useModalContext } from '../contexts/ModalContext/ModalContext';

interface IPostList {
  posts: Post[]
}

export const PostList: FC<IPostList> = ({ posts }) => {
  return (
    <div>{posts.map((post) =>
      <PostItem {...post} key={post.id}/>
    )}</div>
  )
}