import { saveAs } from 'file-saver';

// 要求服务端下载统一返回流文件
const download = (blob, name) => {
  saveAs(blob, name);
};

export default download;
