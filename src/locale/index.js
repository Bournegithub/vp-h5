import { createI18n } from 'vue-i18n';
import { Locale } from 'vant';
import { getLanguage, setLanguage } from '@utils/cookie';
import enUS from 'vant/lib/locale/lang/en-US';
import zhCN from 'vant/lib/locale/lang/zh-CN';
import enLocale from '@assets/lang/en_us.js';
import zhLocale from '@assets/lang/zh_cn.js';

// 设置默认语言
setLanguage('zh');

const messages = {
  en: {
    ...enUS,
    ...enLocale,
  },
  zh: {
    ...zhCN,
    ...zhLocale,
  },
};
export const getLocale = () => {
  const cookieLanguage = getLanguage();
  if (cookieLanguage) {
    return cookieLanguage;
  }
  const language = navigator.language.toLowerCase();
  const locales = Object.keys(messages);
  locales.forEach((item) => {
    if (item.includes(language)) {
      setLanguage(item);
      return item;
    }
    setLanguage('zh');
    return 'zh';
  });
};

// 更新vant组件库本身的语言变化，支持国际化
export const vantLocales = (lang) => {
  if (lang === 'en') {
    Locale.use(lang, enUS);
  } else if (lang === 'zh') {
    Locale.use(lang, zhCN);
  }
};

vantLocales(getLocale());

const i18n = createI18n({
  locale: getLocale(),
  messages: messages,
  globalInjection: true, // 挂载到全局
});

export default i18n;
