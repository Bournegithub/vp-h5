<template>
  <div class="example-download-page">
    <div class="download-content">
      <van-button @click="fileDownload">下载测试</van-button>
    </div>
  </div>
</template>

<script>
import download from '@utils/download';

export default {
  setup() {
    const base64ToBlob = (urlData) => {
      let arr = urlData.split(',');
      let mime = arr[0].match(/:(.*?);/)[1] || type;
      // 去掉url的头，并转化为byte
      let bytes = window.atob(arr[1]);
      // 处理异常,将ascii码小于0的转换为大于0
      let ab = new ArrayBuffer(bytes.length);
      // 生成视图（直接针对内存）：8位无符号整数，长度1个字节
      let ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], {
        type: mime,
      });
    };
    const txtString = 'data:text/plain;base64,VGVzdCBkb3dubG9hZA==';
    const zipString = 'data:application/zip;base64,UEsDBBQACAAIAEx3g1MAAAAAAAAAAAAAAAARABAAdGVzdF9kb3dubG9hZC50eHRVWAwA89apYRDAqWH1ARQAC0ktLlFIyS/Py8lPTAEAUEsHCNfOHXEPAAAADQAAAFBLAwQKAAAAAACChINTAAAAAAAAAAAAAAAACQAQAF9fTUFDT1NYL1VYDADz1qlh89apYfUBFABQSwMEFAAIAAgATHeDUwAAAAAAAAAAAAAAABwAEABfX01BQ09TWC8uX3Rlc3RfZG93bmxvYWQudHh0VVgMAPPWqWEQwKlh9QEUAGNgFWNnYGJg8E1MVvAPVohQgAKQGAMnEBsxMDCGAGkgn7GNgSjgGBISBGGBdDByABl1aEqYoeKiDAziyfm5eokFBTmpeiGpFSWuecn5KZl56RD9skBCgIFBCqEmJ7G4pLQ4NSUlsSRVOSAYao8ukIhkYDBHqMtNLUkEqkm0yvZ18UlMSs2JzzVOyilJKTdOzUrOKc9LqirPqEpONasozzQBaq7QzU1M1i3OzC3QTc7IzEstTrU2Ms26ujIRZPyGBx1SIPpTmmBKpPuLX5cNbRd0xbqGikx/E7brXOfR/0d0dzCu/sRg3lE82YjV6Jfxmoxr2fzaae6rcnsqP0heVLnzrTm3Iopvv/lE09mOT3//2bN1p2buzycWbD/PPdlWKScEAFBLBwi5N+RrIwEAAIYBAABQSwECFQMUAAgACABMd4NT184dcQ8AAAANAAAAEQAMAAAAAAAAAABAtoEAAAAAdGVzdF9kb3dubG9hZC50eHRVWAgA89apYRDAqWFQSwECFQMKAAAAAACChINTAAAAAAAAAAAAAAAACQAMAAAAAAAAAABA/UFeAAAAX19NQUNPU1gvVVgIAPPWqWHz1qlhUEsBAhUDFAAIAAgATHeDU7k35GsjAQAAhgEAABwADAAAAAAAAAAAQLaBlQAAAF9fTUFDT1NYLy5fdGVzdF9kb3dubG9hZC50eHRVWAgA89apYRDAqWFQSwUGAAAAAAMAAwDkAAAAEgIAAAAA';
    const fileDownload = () => {
      // blobString模拟服务端返回的流文件,实际使用时服务端会直接返回文件流
      const blob = base64ToBlob(zipString);
      // const blob = base64toBlob(blobString, {type: 'text/plain;charset=utf-8'});
      download(blob);
    };
    return {
      fileDownload,
    };
  },
}
</script>