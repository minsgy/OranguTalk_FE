import { atom } from 'recoil';

export const userState = atom({
  key: 'userState',
  default: {
    username: '오랑이',
    avatar: '',
  },
});
