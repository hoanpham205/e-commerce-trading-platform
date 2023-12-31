export const API_BASE_URL ='https://localhost:8080';
export const ACCESS_TOKEN='accessToken';

export const OAUTH2_REDIRECT_URL ='https://localhost:3000/oauth2/redirect';

export const GOOGLE_AUTH_URL = API_BASE_URL+'/oauth2/authorize/google?redirect_uri='+ OAUTH2_REDIRECT_UR;
export const FACEBOOK_AUTH_URL = API_BASE_URL+'/oauth2/authorize/facebook?redirect_uri='+ OAUTH2_REDIRECT_URL;
export const GITHUB_AUTH_URL = API_BASE_URL+'/oauth2/authorize/github?redirect_uri='+ OAUTH2_REDIRECT_URI;