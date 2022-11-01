const REST_API_KEY = "4d25ed5cdc352b736fb6ea9ef35066bd";
const REDIRECT_URI = "https://care-yojung.com/oauth/callback/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

