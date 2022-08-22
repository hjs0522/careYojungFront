import Recentlist from "../components/Recentlist";
import Popularlist from "../components/Popularlist";
import Themelist from "../components/Themelist";
import Pageup from "../components/Pageup";
import styled from "styled-components";
import { Loader,Segment,Dimmer,Image } from 'semantic-ui-react';

const 강서구 = [{'name': '강서해누리재가복지센터', 'photo': 0}, {'name': '드림재가노인복지센터', 'photo': 'AeJbb3cOIl6j5vMO6uMzxWnyMYrggmG7KlGUIZKAJNHyLZrqOBcw4x1_ai-L3WTggTGif-Z8EcjWSNXEuZXbr4HPuL9RZgyA7IOZZ8KYk1S9lXu1ADflotD9pJq7Mx8oMno_1jj3t2YWnp-x5EL4GUnARoKhDnKSDNs-UXmLUcH_hgck6MQf'}, {'늘푸른재가방문요양센터': 0}, {'name': '힐링재가센터', 'photo': 0}, {'name': '다정한재가노인복지센터', 'photo': 0}, {'name': '""(AA+1)""나눔방문요양센터', 'photo': 'AeJbb3cj4fk__SByWFlUUnyubclczJ1yrXR76a66mW9e9JALgsN_XDkp0-hiVAcX3qzPQBl2X3ARGN-Sfwy3z0eUsLgm_9krtktoO2OVd03m43e4U0ghtw7gaoBaWUcaXcUtM4XqZrrutmN4pMn7HjlMLhQi-UzGiMy0-IoFYtKjDW8jVNql'}, {'name': '(주)롱라이프그린케어 강서재가노인복지센터', 'photo': 'AeJbb3cQO5A7lFvHbTwlorK9ydDyObk9tmXmaB7aq9sLeURpXQ5LX56GzKreJPn3b7ZcReMnZ9eshuF2NVCq1EXDh7oGXxnPxWPlJPMzM685h_josSScI84zGgWrcojDBZkE6IfiKOp1sD-Bk06_RKL37Bwt3bpbwtEZ___iya9AZJWZGFxQ'}, {'name': '솔요양원', 'photo': 0}, {'name': '천사어르신재가복지센터', 'photo': 0}, {'name': '한양실버복지센터', 'photo': 0}, {'name': '굿모닝재가복지센터', 'photo': 0}, {'name': '태영재가복지센터', 'photo': 'AeJbb3cJmcirco95EPBbs7JvCYGrOcBgtbLbcTa9k2MfkCID1KfhEx6x5rpb1Iiqm-mhK5AW7TIW0BfwBA_AX07IY0EO-W8gVRFhfT4mx4jJfO8OQexxGnuPOniSbhvE3kpxKUhqWKCOoD6686-AAd6cTHw_e1HjoP1b-z3hCzmZFH0cEtc-'}, {'name': '굿모닝재가복지센터', 'photo': 0}, {'name': '효누리재가복지센터', 'photo': 0}, {'name': '강서스마일재가센터', 'photo': 'AeJbb3c5YUMwl0ITntaFQfLR9uxmZwED1CeAtwNyql3a_GOmrFhHwX1IPrGfYdEKYWZ7BDdwQEawq8KjaYyHay-9vebdDuKDRdfYJgQqozxJNAA8Y6rYwfboAwexI2f9NtteH7QNek2wZPZ4EwS4qMpIXDAllQOI8uLWr3UhdxyZOruAN7M5'}, {'강서사랑재가노인복지센터': 0}, {'강서사랑재가노인복지센터': 0}, {'효사랑재가복지센터': 0}, {'name': '가족처럼재가노인복지센터', 'photo': 0}, {'name': '강서데이케어센터', 'photo': 0}, {'name': '서울재가어르신방문요양센터', 'photo': 0}, {'name': '백년친구재가방문요양센터', 'photo': 'AeJbb3fAzBPBbReqkG2dCQ9I2NS46n3gO-ndlSC_dk0BEnApCL9Wb4zvfcz5ALGZtKf8olMg85OMUAXr2uwKhmGVhYhayL3ATCCCluq-n0Nfjoca02BOa1F9c3VFsvW26FNC4e-ezi_GG_zRHGm3DHz4iO-QtIzMloR2W8U7-zEfW9i-WsRe'}, {'name': '한양실버복지센터', 'photo': 0}, {'name': '이레실버사랑복지센터', 'photo': 'AeJbb3fiJqi7XHS2knEVQ--rXria5RjMzKKeEAfPCMwDXQqrzVhAsTfNIqSVLFX73SH9YqBz6i_cTVuGKWWpdZwsH5_A0mWG0lNjtmXA4xZA7n7wX4GrsKK-ilQGbvkNIoYWxsxh4OTNPxHYpJmPFxR4SgPGFs-0oYe4K3AgA7iwF3FEBy0T'}, {'name': '강서실버요양원', 'photo': 'AeJbb3dzJg8vQzZcU0fpC065ByV6xOSdMDniwtpc1HZ5pFkW39cC6bBp4kaebOem7YGrG_tcr9sc4jBXcYn2Q-MfA_hY134rOtbvOldZmVAtdX51FmxTmm2CaJBIKqqacjJowsSSylTKarM-jjF9iZrQ9myoYTKlcD-i0sonZ1EKZmecVZ3l'}, {'name': '다복요양원', 'photo': 'AeJbb3eUK2Cpjss5DHmhf_mbCEu1GJmifUIg5g5Xlk6mLReV0YctuWGsrzJmvCcffQXMy9PQgyC_nSQBS7JtlBRH66IOQac_FHTHR9Yt81S69JQbQxm_ws0Ag6J5fC0bTXrvdHSsB9vGfSAB8ER4eO6864BZWS6KVSxD0WkkkL5Jk9P14XNJ'}, {'name': '사랑나눔재가복지센터', 'photo': 0}, {'name': '나누리재가노인복지센터', 'photo': 0}, {'name': '햇살요양원', 'photo': 0}, {'한빛재가복지센터': 0}, {'name': '강서샬롬데이케어센터', 'photo': 0}, {'name': '동진재가복지센터', 'photo': 0}, {'name': '종려나무재가장기요양기관', 'photo': 0}, {'name': '강서스마일재가센터', 'photo': 'AeJbb3eN96k1YCynZCMUPmEiiFH6y5YLyxJeAjpX5OpVexUuqF7fVWZTSuk6foFp-g1cLg_tdUjML2h4Qao8oCOUcdugtKB1h6s6lsIl31K9GyDt2UrZV-Z5Vt-L_LbZgI06cVyuH5lu7PfEOrQNY-6WzyhyO75suAbhpGpNFvbnJTgg4OW-'}, {'name': '서울시니어스타워(주)', 'photo': 0}, {'""(A)""+1+연세경로센터': 0}, {'name': '사랑나눔재가복지센터', 'photo': 0}, {'name': '봄 연세데이케어센터', 'photo': 'AeJbb3d2TEC-36xaqfk5hTaPlafohb3AEHXYZ--XmSUPvm4CDhlTLSwUGGKTA_SlqjL38Wa31e6usoQO2GwvQVpj074Z-fjnHL_rrd8Dc5VMLyow86mZhurOH7vY3Vx6_TvdfUv_k7-Pkv5VHsrhMaZsglotBOo-zH-2EajThZ-TWhhQW9Ux'}, {'name': '스마일홈케어', 'photo': 0}, {'name': '서울시사회서비스원 강서종합재가센터', 'photo': 0}, {'name': '신명재가노인복지센터', 'photo': 0}, {'name': '새빛재가노인복지센터', 'photo': 0}, {'name': '건강백세재가복지센터', 'photo': 'AeJbb3eoWoI11_RZDuIhSH2J6fMu_pZWNyKgOZoY4F4xR_IrONYSWVBksX0hAHic9G40qKptuQ6XCxODAkUi5c4e6H0R51dLfhayxZAQIs9EOoMtB6uadEBV6HqIebFxWXGylWiRVnCNd1EaEFVsmM2fcWOWZ_OIbIIqz7ZIISI5OBQfk9dh'}, {'강서미소짓는방문요양센터': 0}, {'name': 'A+효담라이프케어 강서데이케어센터', 'photo': 'AeJbb3fUEKRGMCQkYKoYFJPrNuvLFJlSnpWpdUd92KxMb2RwaMHlDbugfG7FwWMFg5wCTVHZOYkTkxYviNqkB313F1KB4VLO5KZbljZvXfSmakUvQXYbWKheSz583vilyrpveSFKbMg1r4m5H7uyGy0ho7FQrHcZGEymgZt77EYBcM29X3fp'}, {'name': '가나홈시니어재가복지센터', 'photo': 'AeJbb3fwr-TwNrYM-sNwQKaCwTSs3g_vQcxEGbT72EGlZDGrSY5pw7WjqgJrZi9dHZrIRafM-TaAnAW92EUkSdL9hzLf3qG6GNkGZbshybVoi9A7A-Olwk45HFhfV6XHgZdaUV8VJWHXftlwkc37Jc2Je29ctEoWuOgKXDdUkgttLufwwNhM'}, {'최고재가장기요양기관': 0}, {'기쁨재가복지센터': 0}, {'name': '케어콜요양원', 'photo': 0}, {'name': '가가의료기', 'photo': 0}, {'훼미피아데이케어센터': 0}, {'name': '더드림재가복지센터', 'photo': 'AeJbb3f-gJbTja4FMKye-dW_I8vpMz0vAZi8OFOyRG2hyU6vR8yFnsuC8U-Z5imIGeEpGB2CJNcdmi6mVnSouUGdPVcguBnNlvzT4UCvpV-MhozV2vO3jgc39Q_wfNG_VuCEb3Ubyadi6xa5Y4MfQI4lr6GjSjslNkySf504xo1ECHg9RmCh'}, {'name': '새빛재가노인복지센터', 'photo': 0}, {'name': '피스케어재가요양보호센터', 'photo': 0}, {'평강노인복지센터': 0}, {'name': '종려나무재가장기요양기관', 'photo': 0}, {'name': '강서실버데이케어센터', 'photo': 0}, {'name': '가족사랑재가케어 온맘터치 강서1호점', 'photo': 0}, {'name': '드림재가노인복지센터', 'photo': 'AeJbb3dbdvOqUPc2Y0gK5UURt2kLrgf8kfngx4UhyIJkAQ_P1jPxI2UyGPd97XcQMleVtrYZ5bJGl7ZiEKQ3kzDC7ZuReAdaXkR0O79YKSidAbYg3k-7y_jFOWYG4fqWm_80uEyRfBMe-TDdaufs5qRYsiqlpulCEYycA3bwCn4zZGW89gQY'}, {'name': '로뎀흥순재가복지센터', 'photo': 0}, {'name': '강서재가노인지원센터', 'photo': 0}, {'name': "'온누리'재가복지센터", 'photo': 0}, {'name': '우리누리재가노인복지센터', 'photo': 0}, {'name': '피스케어재가요양보호센터', 'photo': 0}, {'name': '푸르미재가요양복지센터', 'photo': 0}, {'강서구립 봉제산데이케어센터': 0}, {'name': '케세라(주)', 'photo': 0}, {'name': '(주)휠로피아', 'photo': 0}, {'평강노인복지센터': 0}, {'name': '엘림재가센터', 'photo': 'AeJbb3d2E41_1dBi2P3bB2UVcIwyOS-MUDtIlNGSNEGndhQD1NE6xgD1_MYIN0NlTg45Ng6ejPDYTfcUM4dryqtPiM_q3UuLc9_YbPrfDtG6-dBZpZCiYyJJO-Dx1Om3YeVgPZd4L6bf4z8Xcj-wqt0v8GqGnwMpRBus_QcrgeQxdEw7-_ay'}, {'name': '강서누리재가복지센터', 'photo': 0}, {'한가람요양원': 0}, {'name': '부모사랑복지센터', 'photo': 0}, {'스마일재가복지센터': 0}, {'name': '감동재가복지센터', 'photo': 'AeJbb3cpuyXsxW3HIhKI5Rhe1lE4nUi6JWfs9sb5pGFBwZTFWVXN8DczptW-HuU2zZXLWhjRv1HWaslisrchNUT7-K96UxcmFmbpNBAgtdBiehAgCbC6kiTCu8Dx1eqemHUQwwLT_PpjzhfYoPEMMDyZ8ijFrOr65ah9s8Pc2qFv-Z4O9715'}, {'요안나요양원': 0}, {'name': '누리재가복지센터', 'photo': 0}, {'name': '강서엔젤홈케어복지센터', 'photo': 0}, {'기쁨재가복지센터': 0}, {'name': '아리아케어 방문요양 강서 방화센터', 'photo': 'AeJbb3e3e-8EViM_1STYQ4Rz4wAD5_LF8xux1nd7_p-wyCprvBFhTiXjfTFRQ9Dp7fWVn8G7alvQxdcoiiDPfGbDJukZ0VOmF5vQRLd9ZfjTvOpj0ubGA1qsOQs_2zxpQwcs0Hx8zQEgTU_jkbMNWgRBCSEOSB73DKwwuxr7fGlPLgBr_64w'}, {'name': '봄날강서요양원', 'photo': 0}, {'name': '나누리재가노인복지센터', 'photo': 0}, {'name': '감사방문요양센터', 'photo': 'AeJbb3f_X3tCCJz9P8lDMnYdoUTdW9NWonT6Ruk4QwejNFzAo0fuOg9VRpd6tpLKXY_Jqz9TIS_Nh91g6ro5ujHViTqpf2BNyK2gXsbZoo2hyRqOvxV5xuwPyrBReg9LpHsNAoUzbdIy0ETSTSiVt5obMyMXrtFOliTWXhX72s4ISVcY5k0W'}, {'name': '섬김요양재가센터', 'photo': 0}, {'name': '아름다운은빛재가노인복지센터', 'photo': 'AeJbb3fjywzP92S4PQlTue5cKECTt6xbB3-LxMTc2udlnaIhU5j0YotgMoG3sZkrOxMH_kQHS1kVLGanceH11eD1FStp3jQvEsW_x_wdDXxt4_ItyWol26Z-jlvaTKWk5aGjpId0_oem3v4QY31kM3viUyZmvgV0fcFT_Fkuo9XEiAXz1245'}, {'name': '다누리 재가복지센터', 'photo': 'AeJbb3d6KviG60-i7elGBGBpwuhIRAS0FFhK1BMl4eZ6T6qOI2dZqOwjWwON0uwoanrLy-82wYy_Ma9yS1AjS1vCJaZYKEoWdR03QsVDZ_U0KyIN1MgjsWooWEkhE-4GvkbzbtD6Y9pDpZuoWfWnpWI217aLlkxQig96vUi3KoYELaXb-V7x'}, {'name': '강서재가노인지원센터', 'photo': 0}, {'name': '신까치의료기', 'photo': 0}, {'name': '99팔팔재가노인복지센터', 'photo': 0}, {'name': '사랑모아데이케어센터', 'photo': 0}, {'name': '상록홈케어센터', 'photo': 'AeJbb3dKqZ96UQ87m96RA-Ez92xaTHOa3MNOhPrMHu1Q7gZGt8v6ima7kVskzGSn503WPyLmZbAM0NBzFgh3XeShFlJxzys5CguUodob_XxbyYf1mXc5k9GrDr8pcvYMS3Nb7Q49cwes-tbbU3XD5YHNGboooR-n3TVTpntOgnSDQiuqtMRI'}, {'세란의료기기': 0}, {'노후평안재가복지센터': 0}, {'name': '사회적협동조합 강서나눔돌봄재가센터', 'photo': 'AeJbb3dqWsXLWku7Q7kGR036C_D95yNCjwO6OM4VtgI6IP4IXH4tvv7vYQ9UovnTmMdnNSxnULdY4hmTWQXu6ogUtXQce64kxE1x0ND7qEE2-_T6jctVLsUd6wOfWkhLpB3biu_FpCDdGakSVyjpmTWUF5hHOrLYDd9HogiqWIQyExPQGRAy'}, {'name': '행복나눔방문요양복지센터', 'photo': 0}, {'name': '한서재가복지센터', 'photo': 0}, {'name': '가가호호방문요양센터', 'photo': 'AeJbb3eZBsyRrdmKc2vLLmpQO3hugniETPdD2ohnWIPOwEQqed1MTu1WfJJ4ACYxtXRnWmq-8T98E7MXu0K4cIsGpjHssD1Y-98sHViq2A8PtQpTFcEXIrNIUNtiuP22_cLd80CvmVCXddB1H4woFw5MSi6h0Il-aQYoygyJPruPTZ3vKpt1'}, {'name': '마리스데이케어', 'photo': 0}, {'name': '푸른솔 재가복지센터', 'photo': 'AeJbb3dwRER6pcEEZES7hAktxqfubq9XeIQ_xwBu9hLfzy5oF7uTBA6caRuMzORqFyHQ9DDFH7-IUWBjF49AwXdb4nxX9ax9GTv3Zo_LBS02zC5yQ9kra17ygliWjSOZpz_73qz3Lfo_asYSP0Yem_eo5o7jh1SpBfQKPr6QFQcFRp5iAu1B'}, {'name': '천사가족재가복지센터', 'photo': 0}]


const arr = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  key : 0,
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cOIl6j5vMO6uMzxWnyMYrggmG7KlGUIZKAJNHyLZrqOBcw4x1_ai-L3WTggTGif-Z8EcjWSNXEuZXbr4HPuL9RZgyA7IOZZ8KYk1S9lXu1ADflotD9pJq7Mx8oMno_1jj3t2YWnp-x5EL4GUnARoKhDnKSDNs-UXmLUcH_hgck6MQf&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY"

},{
  key : 1,
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=AeJbb3cayxFQm6v8cfU5Hr9NlKD8ako-T8qf13jypcV20NjKrLFaKdfarP39wqQDdj1Do1PVbmcGeXMdxum-fc4Ho8BIwOws4asxlyBk5waI4Dfwu0HnlnJg9EkKGsd-ZfdG9o0_iVEPSz-6GgZ6CZyiSekLGAoi1xmdHWal4kKtzzrpnMzx&key=AIzaSyDY5tTtaA7BBeKxnL1hhcZQfXotxBJL4dY"
},{
  key : 2,
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMjJfNTIg/MDAxNjE2MzkxMzA0NDc4.RCSz6incoT1YQqMFLw56c-S7YrB5_tgIchXWEiL3qrcg.RE8SV1h8C4FSAFh4271numvCyPmspekAFg2oivqGdf4g.JPEG.samson1278/batch_프리미엄요양원11.jpg?type=w800"
},{
  key : 3,
  name : "저런 ",
  ShortLoc : "서울 마포구",
  img : "https://cdn.docdocdoc.co.kr/news/photo/201411/164531_56485_0530.jpg"
},{
  key : 4,
  name : "배고프다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 5,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 6,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 7,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]

const arr1 = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  key : 0,
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgD6oZRl8LFmTsecrXbocSOvOaeXheB50PtAS9Hfnjsiy_FYkZ_oc7_xUqD5cx3wJfjO4&usqp=CAU"

},{
  key : 1,
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKzWYxCJCcHB1rVb_LlxOU9yTf4eizP7MwPJgRHp2uyY_f451YtuhapXzcXzza6y4r9yc&usqp=CAU"
},{
  key : 2,
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7YcX7nbMEQfcZYM6Ur8EaXlKmo_8nQh462A&usqp=CAU"
},{
  key : 3,
  name : "저런 ",
  ShortLoc : "서울 마포구",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYZOorVYRbIQDQ5Bq3osKP9SOxDqUIC1KQTs19J2pesZYpkDzLFGzXuMGB9RplQhWtkp8&usqp=CAU"
},{
  key : 4,
  name : "배고프다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 5,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 6,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
},{
  key : 7,
  name : "반값습니다",
  ShortLoc : "서울 마포구",
  img : "https://react.semantic-ui.com/images/wireframe/image.png"
}]

const arr2 = [{ //원래는 메인페이지에서 최근본시설, 인기있는시설, 테마별 시설을 가져와서 뿌려줌. 현재는 가상의 데이터 사용
  key : 0,
  name : "서울요양시설",
  ShortLoc : "서울 마포구",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxr4MyaNSJNNLUpXBFdXwYo1gApDKfS0bKWQ&usqp=CAU"

},{
  key : 1,
  name : "부산요양시설",
  ShortLoc : "",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDYSwwIviStNi_5og0-J6lWnuLe70cu7XfuA&usqp=CAU"
},{
  key : 2,
  name : "강릉요양시설",
  ShortLoc : "강원도 강릉시",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAULsQdX4LIfRCSE43QvEYf1sUMTdhVYdAvg&usqp=CAU"
}]

const StyledMainpage = styled.div`
  padding-top:150px;
  padding-bottom:150px;
  overflow-y:auto;
`

function Mainpage(){
  console.log(강서구[2])
  return (    
    <StyledMainpage>
      <Recentlist arr={arr}/>
      <Popularlist arr={arr1}/>
      <Themelist arr={arr2} />
      <Pageup />
    </StyledMainpage>
  )
}

export default Mainpage;

