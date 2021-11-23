import Cookies from 'js-cookie';

const languageKey = 'language';
export const getLanguage = () => Cookies.get(languageKey);
export const setLanguage = language => Cookies.set(languageKey, language);
// export const setLocal = (key, val, type) => {
//   if (type)
// }
