/* 

let url = 'http://www.toutiao.com'

url = encodeURIComponent(url)
console.log(url)

url = encodeURIComponent(url)
console.log(url) */

/* 
let url = 'http%253A%252F%252Fwww.toutiao.com'

url = decodeURIComponent(url)
console.log(url)

url = decodeURIComponent(url)
console.log(url) */
/* 
let url = 'http://www.baidu.com'

let url1 = decodeURIComponent(url);

console.log('解码前：',url)
console.log('解码后：',url1) */

var targetUrl = 'http%252525253A%252525252F%252525252Fwww.baidu.com%252525253Ft%252525253D123';
function decodeUrl(targetUrl) {
    if (decodeURIComponent(targetUrl) === targetUrl) {
        return targetUrl;
    } else {
        return arguments.callee(decodeURIComponent(targetUrl));
    }
}
console.log('解码一个被编码过N次的url => '+decodeUrl(targetUrl));



