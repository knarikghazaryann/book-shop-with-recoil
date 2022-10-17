import { atom } from 'recoil';

const bookPrice = atom({
    key: 'selectedBookPrice',
    default: 0
})

const bookCount = atom({
    key: 'selectedBookCount',
    default: 0
})

const userMoney = atom({
    key: 'userMoney',
    default: 500
})

export {bookPrice, bookCount, userMoney};