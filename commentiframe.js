/**
 * huanqiu.config
 */
document.domain = 'huanqiu.com';
(function(){

    var jsSrc = document.getElementById("commentJs").src;

    //appid
    var appid = getUrlCs(jsSrc,"appid") || null;
    if(!appid){
        var appidArr = ["cms|e8fcff106c8f","zhuanti|e8fcff106c8f","cmspic|e8fcff106c8f","survey|e8fcff106c8f","sarons|5365386dfd0a","saronscms|5365386dfd0a","saronszt|5365386dfd0a","hqsb|GHif1mbXiH"];
        var app = getUrlCs(jsSrc,"app");
        for(var i=0;i<appidArr.length;i++){
            if(app === appidArr[i].split("|")[0]){
                appid = appidArr[i].split("|")[1];
                break;
            }
        }
    }

    //sourceid
    var sourceid = getUrlCs(jsSrc,"sourceid") || null;
    if(!sourceid){
        var aid = getUrlCs(jsSrc,"aid");
        var type = getUrlCs(jsSrc,"type");
        var sourceidArr = ["cms|0","cmspic|100000000","zhuanti|200000000","survey|300000000","sarons|400000000","saronscms|500000000","saronscmsLxImg|600000000","saronscmsLy|700000000","saronscmsLyImg|800000000","saronszt|900000000"];
        for(var j=0;j<sourceidArr.length;j++){
            if(type === sourceidArr[j].split("|")[0]){
                if(parseInt(aid)){
                    sourceid = parseInt(aid) + parseInt(sourceidArr[j].split("|")[1]);
                }else{
                    sourceid = aid + parseInt(sourceidArr[j].split("|")[1]);
                }
                break;
            }
        }
    }

    //sitename
    var sitename = encodeURI('环球网');

    //载入基础文件
    //插入appid的div
    var appidDiv = document.createElement('div');
    appidDiv.id = 'HQ_' + appid;
    var $commentJsParent = document.getElementById("commentJs").parentNode;
    $commentJsParent.appendChild(appidDiv);

    //载入hqTieBasis.js
    include_js('https://himg2.huanqiu.cn/js/hqTieBasis.js?sourceid='+ sourceid +'&appid=' + appid + '&sitename=' + sitename,"hqTieJs");

})();

//加载JS
function include_js(file,id){
    var h = document.getElementsByTagName('head')[0] || document.head || document.documentElement;
    var js = document.createElement('script');
    js.type = 'text/javascript';
    js.id = id || "";
    js.charset = 'utf-8';
    js.src = file;
    h.insertBefore(js,h.lastChild);

    if (!/*@cc_on!@*/0) {
        //if not IE Firefox、Safari3.1+、Opera9.6+
        js.onload = function () {
            addJs();
        }
    } else {
        //IE6、IE7
        js.onreadystatechange = function () {
            if (js.readyState == 'loaded' || js.readyState == 'complete') {
                addJs();
            }
        }
    }
    return false;
}

//加载基础文件后，载入其他资源文件
function addJs(){
    var huanqiuTieUid = new Date().valueOf();
    var huanqiuTieRequestId = "&_" + (++huanqiuTieUid).toString(36);
    var jsSrc = document.getElementById("commentJs").src;
    var h = document.getElementsByTagName('head')[0] || document.head || document.documentElement;
    var m = document.createElement('script');
    var c = document.createElement("link");
    m.type = 'text/javascript';
    m.charset = 'utf-8';
    c.rel = "stylesheet";
    c.type = "text/css";
    c.href = 'https://himg2.huanqiu.cn/css/tieStyles.css';
    m.src = 'https://himg2.huanqiu.cn/js/hqTie_PC.js';
    h.appendChild(c);
    h.insertBefore(m,h.lastChild);
}

//URL中获取参数
function getUrlCs(url,e){
    var val = "";
    if(url.indexOf("?") > -1){
        var en = url.split("?")[1];
        var wn = en.split("&");
        for(var i=0;i<wn.length;i++){
            if(wn[i].split("=")[0] === e){
                val = wn[i].split("=")[1];
                break;
            }
        }
    }
    return val;
}