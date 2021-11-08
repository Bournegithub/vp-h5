import Cookies from 'js-cookie';

const languageKey = 'language';
export const getLanguage = () => Cookies.get(languageKey) || 'zh';
export const setLanguage = language => Cookies.set(languageKey, language);