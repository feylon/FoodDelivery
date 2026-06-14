// Agar 'window' mavjud bo'lmasa, demak kod Docker serverida (Node.js) ishlayapti, 
// shuning uchun ichki tarmoqdagi 'api:2000' ga murojaat qilamiz.
// Aks holda, mijoz brauzerida ishlayotgan bo'ladi va 'localhost:2000' ga yuzlanadi.

const isServer = typeof window === 'undefined';
const apiBaseUrl = isServer ? 'http://api:2000/' : 'http://localhost:2000/';

const config = {
    apiBaseUrl: apiBaseUrl
};

export default config;