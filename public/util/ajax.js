


let ajax = (options) => {
  // alert(options.url)
  xhr.open('get', options.url)
  xhr.send()
  // console.log('--------options----------------', options)
  // //创建一个ajax对象
  // var xhr = new XMLHttpRequest() || new ActiveXObject('Microsoft,XMLHTTP')
  // //数据的处理 {a:1,b:2} a=1&b=2;
  // var str = ''
  // for (var key in options.data) {
  //   str += '&' + key + '=' + options.data[key]
  // }
  // str = str.slice(1)
  // if (options.type == 'get') {
  //   var url = options.url + '?' + str
  //   xhr.open('get', url)
  //   xhr.send()
  // } else if (options.type == 'post') {
  //   xhr.open('post', options.url)
  //   xhr.setRequestHeader(
  //     'content-type',
  //     'application/x-www-form-urlencoded'
  //   )
  //   xhr.send(str)
  // }
  // //监听
  // xhr.onreadystatechange = function () {

  //   if (xhr.responseText) {
  //     var d = JSON.parse(xhr.responseText)
  //   } else {



  //   }

  //   //当请求成功的时候
  //   if (xhr.readyState == 4 && xhr.status == 200) {
  //     //将请求的数据传递给成功回调函数
  //     options.success && options.success(d)
  //   } else if (xhr.status != 200) {
  //     //当失败的时候将服务器的状态传递给失败的回调函数
  //     options.error && options.error(d)
  //   }
  // }
}

