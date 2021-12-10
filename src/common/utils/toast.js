import { Toast } from 'vant';

const toast = (message, duration = 1000) => {
  Toast({
    message, duration
  });
}
export default toast;
