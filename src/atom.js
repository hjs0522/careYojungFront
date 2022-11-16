import { atom } from "recoil";
import {recoilPersist} from 'recoil-persist';
import {serviceOptions,gradeOptions,orderOptions} from './searchOptions';

const {persistAtom} = recoilPersist();

export const loginState = atom({
    key: 'loginState',
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const keywordState = atom({
    key: 'keywordState',
    default:"",
    effects_UNSTABLE: [persistAtom],
})

export const serviceState = atom({
    key: 'serviceState',
    default: serviceOptions[0].key,
    effects_UNSTABLE: [persistAtom],
})

export const gradeState = atom({
    key: 'gradeState',
    default: gradeOptions[0].key,
    effects_UNSTABLE: [persistAtom],
})

export const orderState = atom({
    key: 'orderState',
    default: orderOptions[0].key,
    effects_UNSTABLE: [persistAtom],
})