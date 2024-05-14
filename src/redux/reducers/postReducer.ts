import { Action } from 'redux';

import { Post } from '../../types';

const defaultState: Post[] = [
  {
      'id': 1,
      'title': 'Заголовок поста',
      'content': 'Описание поста Описание поста Описание поста Описание поста Описание поста Описание поста Описание поста',
      'createdAt': '2024-05-03T12:39:46.724Z',
      'tags': [
          {
              'id': 1,
              'name': '#test'
          }
      ],
      'author': {
          'id': 1,
          'login': 'vitalik',
          'avatarUrl': null,
          'createdAt': '2024-05-03T12:39:46.680Z'
      }
  }
];
const postReducer = (state = defaultState, action: Action): Post[] => {
  switch (action.type) {
    default: 
      return state;
  }
};

export default postReducer;