"use strict";


window.WebViewJavascriptBridge = (callback)=>{
    var is_app=(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1)||(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/));
    if(!is_app) return;
    if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
    if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
}

//js调用oc的方法  callHandler(方法名与APP端保持一致)  大括号内是传递参数的方式
// window.WebViewJavascriptBridge.callHandler('callHandler',{}, function(response) {

// });

// 原生调用Js的方法，并且有返回函数   callHeandler(方法名与app端保持一致)  data（IOS传过来的数据）
//    bridge.registerHandler('callHandler', function(data, responseCallback) {
                        
//    //js回调函数返回数据
//     var responseData = { 'Javascript Says':'I am Js, CallBack Now!!!!!' }
//     responseCallback(responseData,data)

//      })

