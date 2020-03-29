# Bsbridge
## js调用oc的方法  callHandler(方法名与APP端保持一致)  大括号内是传递参数的方式
  window.WebViewJavascriptBridge.callHandler('callHandler',{}, function(response) {

  });

## 原生调用Js的方法，并且有返回函数   callHeandler(方法名与app端保持一致)  data（IOS传过来的数据）
  bridge.registerHandler('callHandler', function(data, responseCallback) {
   var responseData = { 'Javascript Says':'I am Js, CallBack Now!!!!!' }
   responseCallback(responseData,data)

  })
