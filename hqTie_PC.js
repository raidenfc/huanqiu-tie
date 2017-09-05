//继承
var TIE = new HUANQIU_TIE();
extend(TIE,HUANQIU_TIE);

//登陆
TIE.userLogin = function(){
    var avatar = window.frames['HQ_dataPedal'].cookieGet("avatar");
    var nickname = window.frames['HQ_dataPedal'].cookieGet("nickname");
    var uid = window.frames['HQ_dataPedal'].cookieGet("uid");
    var openID = window.frames['HQ_dataPedal'].cookieGet("openid");
    var $login = this.$("#huanqiu-tiePost .operating-inner .login");
    var $logined = this.$("#huanqiu-tiePost .logined");
    var $myAvatar = this.$("#huanqiu-tiePost .my-avatar")[0];

    //获取cookie成功 登陆成功
    if(uid && openID && avatar && nickname){
        this.hide($login);
        var t = this;
        $logined.forEach(function(e){
            var html = '<div class="user-con hover-style" onmouseover="userCon(this,\'show\');" onmouseout="userCon(this,\'hide\');">';
            html += '<div class="user-name">';
            html += '<a href="javascript:void(0);">' + nickname + '</a>';
            html += '<div class="sign-icon"></div>';
            html += '</div><ul><li>';
            html += '<a data-uid="' + uid + '" href="javascript:void(0);" class="logined-user-tie">我的跟贴</a>';
            html += '</li><li>';
            html += '<a class="switch-accounts" href="javascript:void(0);">切换帐号</a>';
            html += '</li></ul></div>';

            if(t.openPlatform){
                html += '<div class="share-to">';
            }else{
                html += '<div class="share-to" style="display: none;">';
            }

            html += '<span class="sx">|</span>';
            html += '<label><input type="checkbox">分享到&nbsp;</label>';
            html += '<span class="social-login k-m">';
            html += t.openPlatform;
            html += '</span></div>';

            e.innerHTML = html;
            var uin = new Date().valueOf();
            var requestId = "?_" + (++uin).toString(36);
            $myAvatar.setAttribute("src",avatar + requestId);
            t.removeClass($myAvatar,"no-login");
        });
    }else{
        //登陆失败
        $logined.forEach(function(e){
            e.innerHTML = "";
        });
        this.show($login);
    }
};

//获取分享JS
TIE.getShareJs = function(){
    //var t = this;
    //if(!t.m){
    //    setTimeout(function(){
    //        if(t.$("#bdshare_js").length){
    //            t.remove(t.$("#bdshare_js")[0]);
    //            t.remove(t.$("#bdshell_js")[0]);
    //        }
    //
    //        var bdshare_js = document.createElement("script");
    //        var bdshell_js = document.createElement("script");
    //        var uid = new Date().valueOf();
    //        bdshare_js.id = "bdshare_js";
    //        bdshare_js.id = "bdshare_js";
    //        bdshell_js.id = "bdshell_js";
    //        document.body.appendChild(bdshare_js);
    //        document.body.appendChild(bdshell_js);
    //        t.$("#bdshare_js")[0].setAttribute("data","type=tools");
    //        t.$("#bdshell_js")[0].src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?_=" + (++uid).toString(36);
    //    },50);
    //}
};

//点击回复 出现回复框
TIE.replyAppend = function(e){
    var $dom = e.parentNode.parentNode.parentNode.parentNode;
    var replyUser = $dom.children[1].children[0].children[1].children[0];
    var sHtml = "";

    //是否登陆
    this.userLogin();
    var uid = this.cookieUtil.get("uid");
    var openID = this.cookieUtil.get("openid");
    var avatar = this.cookieUtil.get("avatar");
    var nickname = this.cookieUtil.get("nickname");
    if(uid && openID && avatar && nickname){
        sHtml += '<div class="user-con hover-style" onmouseover="userCon(this,\'show\');" onmouseout="userCon(this,\'hide\');">';
        sHtml += '<div class="user-name">';
        sHtml += '<a href="javascript:void(0);">' + nickname + '</a>';
        sHtml += '<div class="sign-icon"></div>';
        sHtml += '</div><ul><li>';
        sHtml += '<a data-uid="' + uid + '" href="javascript:void(0);" class="logined-user-tie">我的跟贴</a>';
        sHtml += '</li><li>';
        sHtml += '<a class="switch-accounts" href="javascript:void(0);">切换帐号</a>';
        sHtml += '</li></ul></div>';

        if(this.openPlatform){
            sHtml += '<div class="share-to">';
        }else{
            sHtml += '<div class="share-to" style="display: none;">';
        }

        sHtml += '<span class="sx">|</span>';
        sHtml += '<label><input type="checkbox">分享到&nbsp;</label>';
        sHtml += '<span class="social-login k-m">';
        sHtml += this.openPlatform;
        sHtml += '</span></div>';
    }

    if(!TIE.hasClass($dom,"reply-z-index")){
        var $tieBox = this.$(".tie-box");
        for(var i=0;i<$tieBox.length;i++){
            this.removeClass($tieBox[i],"reply-z-index");
            if(this.hasClass($tieBox[i].children[1].children[3],"add-panel")){
                this.remove($tieBox[i].children[1].children[3]);
            }
        }

        //add
        var html = '';
        html += '<div class="post-textarea-inner">';
        html += '<div class="post-textarea">';
        html += '<div class="post-textarea-inner">';
        html += '<textarea placeholder="回复：' + replyUser.innerHTML + '" onkeyup="TIE.chackTextarea(this,500);" onblur="TIE.clearChackTextarea();" autocomplete="off" name="postTextarea" class="tie-textarea-box"></textarea>';
        html += '</div>';
        html += '<div class="operating-inner clearfix">';
        var sn = sHtml === "" ? "" : " hidden";
        html += '<div class="login' + sn + '"><a class="user-login" href="javascript:void(0);">登录</a><span class="sx"> | </span><a href="' + this.registerUrl + '" target="_blank">注册</a></div>';
        html += '<div class="logined">' + sHtml + '</div>';
        html += '<a href="javascript:void(0);" data-type="disabled" class="release-tie disabled reply-tips">发表</a>';
        html += '</div></div>';
        html += '</div>';

        TIE.addClass($dom,"reply-z-index");
        var addPanel = document.createElement("div");
        addPanel.className = "posting-panel-inner add-panel";
        addPanel.id = "huanqiu-tiePost";
        addPanel.innerHTML = html;
        this.insertAfter(addPanel,$dom.children[1].children[2]);
        var $textarea = $dom.children[1].children[3].children[0].children[0].children[0].children[0];
        $textarea.focus();

        //ctrl + enter
        TIE.bind($textarea,"keyup",function(event){
            var evt = (event) ? event : ((window.event) ? window.event : "");
            var code = evt.keyCode ? evt.keyCode : evt.which;
            if(code == 13 && event.ctrlKey){
                this.parentNode.parentNode.children[1].children[2].click();
            }
        });

        if(this.hasClass($dom.parentNode.parentNode,"hot-tie-inner")){
            var $childrenList = this.$(".hot-tie-inner .children-list");
            for(var j=0;j<$childrenList.length;j++){
                this.remove($childrenList[j]);
            }
        }

        //获取回复列表
        if(parseInt($dom.attributes["data-reply"].nodeValue) > 0 && this.hasClass($dom.parentNode.parentNode,"hot-tie-inner") && !this.hasClass($dom.children[1].lastChild,"children-list")){
            TIE.getReplyList($dom.attributes["data-id"].nodeValue,"1",$dom,"1");
        }

    }else{
        //remove
        if(this.hasClass($dom.parentNode.parentNode,"hot-tie-inner")){
            this.remove($dom.children[1].lastChild);
        }
        this.remove($dom.children[1].children[3]);
        TIE.removeClass($dom,"reply-z-index");
    }
};

//更多页获取个人信息
TIE.morePageUserInfo = function(uid){
    var t = this;
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX,
        callback : "comment_user_count",
        data : "a=comment&m=comment_user_count&appid=" + t.appid + "&uid=" + uid,
        success : function(json){
            if(json.msg === "success"){
                var uin = new Date().valueOf();
                var requestId = "?_" + (++uin).toString(36);
                var infoHtml = '<div class="box-inner my-info-inner">';
                infoHtml += '<div class="inner-tit">';
                infoHtml += '<div class="tit">我的信息</div>';
                infoHtml += '<div class="tit-shadow"></div>';
                infoHtml += '<a href="http://i.huanqiu.com/logout" class="quit">退出</a></div>';
                infoHtml += '<div class="con">';
                infoHtml += '<div class="avatar"><img src="' + (json.data.avatar === "https://images.huanqiu.com/ucavatar/noavatar_small.jpg" ? "https://images.huanqiu.com/ucavatar/noavatar_big.jpg" : (json.data.avatar.replace("_avatar_small","_avatar_middle") + requestId)) + '"></div>';
                infoHtml += '<div class="info"><dl>';
                infoHtml += '<dt>' + json.data.nickname;

                if(json.data.nickname.indexOf('ID_') > -1 || json.data.nickname.indexOf('环球网友_') > -1){
                    infoHtml += '<a href="http://i.huanqiu.com/settings" target="_blank">修改昵称</a>';
                }

                infoHtml += '</dt>';
                infoHtml += '<dd><a class="user-name" data-uid="' + json.data.uid + '" href="javascript:void(0);">跟帖&nbsp;' + json.data.n_comment + '</a><span class="sx">|</span>';
                infoHtml += '<a class="user-name" data-uid="' + json.data.uid + '" href="javascript:void(0);">回复&nbsp;' + json.data.n_reply + '</a>';
                infoHtml += '</dd></dl></div></div></div>';

                if(t.$(".my-info-inner").length){
                    t.remove(t.$(".my-info-inner")[0]);
                }
                t.insertHTML(t.$(".main .other-inner")[0],"afterBegin",infoHtml);
            }
        }
    });
};

//弹出登录框
TIE.popupLogin = function(str){
    var tit = str ? str : "登录";
    var html = "";
    html += '<div id="loginInner" class="login-inner ui_animated ui_fadeInUp">';
    html += '<div class="login-header">';
    html += '<strong>' + tit + '</strong>';
    html += '<a class="close" id="closeLoginPopup" href="javascript:void(0);"></a>';
    html += '</div>';
    html += '<div class="login-content show-sing">';

    //实名认证提醒
    html += '<div class="real-tips hidden">';
    html += '<div class="tips-inner">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</div>';
    html += '<div class="btn-inner"><a class="binding-btn" target="_blank" href="https://i.huanqiu.com/account_complete/">绑定帐号</a><a class="no-binding" href="javascript:void(0);">暂不绑定</a></div>';
    html += '</div>';

    if(this.loginType.sso_enabled === 1){
        html += '<div class="sing-login-inner">';
        html += '<div class="w-in"><label for="loginName">账 号：</label><input id="loginName" class="login-name" type="text" name="loginName"></div>';
        html += '<div class="w-in"><label for="loginPassword">密 码：</label><input id="loginPassword" class="login-password" type="password" name="loginPassword"></div>';
        html += '<a id="singLoginBtn" class="logo-link-btn" href="javascript:void(0);">登录</a>';
        html += '<a class="f-password-link" href="' + this.registerUrl + '" target="_blank">立即注册</a>';
        html += '</div>';
    }

    html += '<div>';
    html += '社交账号登录：';
    html += '<span class="social-login social-max">';

    for(var i=0;i<this.loginType.open_platform.length;i++){
        if(this.loginType.open_platform[i] === "qq"){
            html += '<a href="javascript:void(0);" class="qq-login"></a>';
        }
        else if(this.loginType.open_platform[i] === "sina"){
            html += '<a href="javascript:void(0);" class="weibo-login"></a>';
        }
        else if(this.loginType.open_platform[i] === "baidu"){
            html += '<a href="javascript:void(0);" class="baidu-login"></a>';
        }
        else if(this.loginType.open_platform[i] === "weixin"){
            html += '<a href="javascript:void(0);" class="weixin-login"></a>';
        }
        else if(this.loginType.open_platform[i] === "renren"){
            html += '<a href="javascript:void(0);" class="renren-login"></a>';
        }
    }

    html += '</span>';
    html += '</div></div></div></div>';
    html += '<div id="loginPopupBgfif" class="bgfif"></div>';

    var huanqiuPopup = document.createElement("div");
    huanqiuPopup.id = "huanqiu-popup";
    huanqiuPopup.className = "huanqiu-popup-inner";
    huanqiuPopup.innerHTML = html;
    this.$("#huanqiu-tieInner")[0].appendChild(huanqiuPopup);
    this.$("#loginName")[0].focus();

    var t = this;
    setTimeout(function(){
        t.removeClass(t.$("#loginInner")[0],"ui_fadeInUp");
    },200);

    //关闭实名认证提醒
    this.$("#loginInner .real-tips .no-binding")[0].onclick = function(){
        var $huanqiuPopup = t.$("#huanqiu-popup")[0];
        t.addClass(t.$("#loginInner")[0],"ui_fadeOutDown");
        setTimeout(function(){
            t.remove($huanqiuPopup);
        },100);
    };

    //关闭
    this.$("#huanqiu-popup #closeLoginPopup")[0].onclick = function(){
        var $huanqiuPopup = this.parentNode.parentNode.parentNode;
        t.addClass(t.$("#loginInner")[0],"ui_fadeOutDown");
        setTimeout(function(){
            t.remove($huanqiuPopup);
        },100);
    };

    //回车登陆
    this.bind(this.$("#loginName")[0],"keyup",function(event){
        var evt = (event) ? event : ((window.event) ? window.event : "");
        var code = evt.keyCode ? evt.keyCode : evt.which;
        if(code == 13){
            t.$("#singLoginBtn")[0].click();
        }
    });
    this.bind(this.$("#loginPassword")[0],"keyup",function(event){
        var evt = (event) ? event : ((window.event) ? window.event : "");
        var code = evt.keyCode ? evt.keyCode : evt.which;
        if(code == 13){
            t.$("#singLoginBtn")[0].click();
        }
    });
};

//分享内容字数截取
TIE.shareText = function(text){
    var newText = ' 精彩评论：“';
    if(text.length > 50){
        newText += text.substring(0,50) + '...”' + '（分享自 @' + this.siteName + '）';
    }else{
        newText += text + '”' + '（分享自 @' + this.siteName + '）';
    }
    return newText;
};

//创建分享HTML
TIE.shareHtml = function(text){
    var tit = window.document.title || "";
    var url = window.location;
    var html = '';
    var ex = '【' + tit + '】 ' + this.shareText(text); //用于微博

    html += '<div id="bdshare" class="share-inner bdshare_t get-codes-bdshare" data="" data-t="\'url\':' + url + ',\'text\':' + tit + '">';
    html += '<div class="inner">';
    html += '<a onmouseover="TIE.shareAttr(this);" title="分享到QQ空间" data-t="desc:' + this.shareText(text) + '" class="bds_qzone"></a>';
    html += '<a onmouseover="TIE.shareAttr(this);" title="分享到新浪微博" data-t="text:' + ex + '" class="bds_tsina"></a>';
    html += '<a onmouseover="TIE.shareAttr(this);" title="分享到腾讯微博" data-t="text:' + ex + '" class="bds_tqq"></a>';
    html += '<a onmouseover="TIE.shareAttr(this);" title="分享到人人网" data-t="desc:' + this.shareText(text) + '" class="bds_renren"></a>';
    html += '</div>';
    html += '<div class="triangle-border tb-border"></div>';
    html += '<div class="triangle-border tb-background"></div>';
    html += '</div>';
    return html;
};

//分享内容ATTR变化
TIE.shareAttr = function(e){
    var $shareInner = e.parentNode.parentNode;
    var data = $shareInner.attributes["data-t"].nodeValue;
    var thisData = e.attributes["data-t"].nodeValue;
    $shareInner.attributes["data"].nodeValue = "{" + data + "," + thisData + "}";
};

//用户个人帖子窗口 - 我的跟帖
TIE.userIndexTie = function(uid,page,tips){
    var msgDg = new Date().valueOf();
    var meUid = this.cookieUtil.get("uid");
    var t = this;
    t.loading(1);
    SWITCH = false;
    var hc = meUid === uid ? "" : "/async";
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX + hc,
        callback : "comment_user",
        data : "a=comment&m=comment_user&n=20&p=" + page + "&uid=" + uid + "&appid=" + t.appid,
        success : function(json){
            var html = '';
            if(json.msg === "success"){
                //跟帖总数量
                var totalNum = parseInt(json.data.n_comment);
                //跟帖剩余数量
                var surplusNum = 0;
                if(tips){
                    html += '<div id="huanqiu-userIndex" class="ui_animated ui_fadeInUp">';
                    html += '<div class="user-info-inner">';
                    html += '<img class="avatar" src="' + (json.data.user.avatar ? json.data.user.avatar + "?&_" + (++msgDg).toString(36) : "https://images.huanqiu.com/ucavatar/noavatar_big.jpg") + '" data-uid="' + json.data.user.uid + '">';
                    html += '<div class="km-inner">';
                    html += '<div class="user-tie"><var>' + json.data.n_comment + '</var>&nbsp;条跟帖，<var>' + json.data.n_reply + '</var>&nbsp;条回复</div>';
                    html += '<div class="user-tit"><strong>' + json.data.user.nickname + '</strong> 的跟帖</div>';
                    html += '</div></div>';
                    html += '<div class="tie-list-tab">';
                    html += '<div class="nav">';
                    html += '<ul>';

                    if(meUid === uid){
                        html += '<li class="active"><a class="user-index-popup-tie" href="javascript:void(0);">我的跟帖</a></li>';
                        html += '<li><a class="user-index-popup-reply" href="javascript:void(0);">回复我的</a></li>';
                    }else{
                        html += '<li class="active"><a class="user-index-popup-tie" href="javascript:void(0);">他的跟帖</a></li>';
                    }

                    html += '</ul></div>';
                    html += '<div class="tie-list"><ul>';
                }

                for(var i=0;i<json.data.list.length;i++){
                    var os = json.data.list[i].os === "pc" ? "网友" : "手机网友";
                    html += '<li class="tie-box" data-id="' + json.data.list[i]._id + '">';
                    html += '<div class="user-content">';
                    html += '<div class="tie-header">';

                    if(json.data.list[i].status != 1){
                        html += '<div class="post-time">审核中</div>';
                    }else{
                        html += '<div class="post-time">' + t.returnGtime(json.data.list[i].ctime) + '</div>';
                    }

                    html += '<div class="user-info">';
                    html += '<a class="user-name-index" href="javascript:void(0);" data-uid="' + json.data.list[i].uid + '">' + json.data.user.nickname + '</a>';
                    html += '<span class="ip-location">' + (json.data.list[i].loc ? (json.data.list[i].loc + os) : ("未知领域" + os)) + '</span>';
                    html += '</div></div>';
                    html += '<div class="tie-content">';

                    //是否有原帖
                    if(json.data.list[i].at){
                        os = json.data.list[i].at.os === "pc" ? "网友" : "手机网友";
                        html += '<div class="original-tie-inner">';
                        html += '<div class="tie-header">';
                        html += '<div class="user-info">';
                        html += '<div class="post-time">' + t.returnGtime(json.data.list[i].at.ctime) + '</div>';
                        html += '<a class="user-name-index" href="javascript:void(0);" data-uid="' + json.data.list[i].at.uid + '">' + json.data.list[i].at.nickname + '</a>';
                        html += '<span class="ip-location">' + (json.data.list[i].at.loc ? (json.data.list[i].at.loc + os) : ("未知领域" + os)) + '</span>';
                        html += '</div></div>';
                        html += '<div class="tie-content">' + json.data.list[i].at.contet + '</div></div>';
                        html += '<a href="javascript:void(0);" class="reply-user-name"><em>@</em>' + json.data.list[i].at.nickname + '</a>';
                        html += json.data.list[i].content;
                    }else{
                        html += json.data.list[i].content;
                    }

                    html += '</div>';
                    html += '<div class="tie-footer">';
                    html += '<span class="origin-title">';
                    html += '来自：<a href="' + json.data.list[i].source.url + '" target="_blank" title="' + json.data.list[i].source.title + '">' + json.data.list[i].source.title + '</a>';
                    html += '</span>';
                    html += '</div></div></li>';

                }
                t.remove(t.$("#ajaxLoadingGif")[0]);
                if(tips){
                    html += '</ul></div></div><a class="close" href="javascript:void(0);" title="关闭"></a></div><div id="loginPopupBgfif" class="bgfif"></div>';
                    //有翻页
                    if(totalNum > json.data.list.length){
                        //记录剩余数量
                        surplusNum = totalNum - json.data.list.length;
                    }

                    var childrenList = document.createElement("div");
                    childrenList.id = "huanqiuUserIndexInner";
                    childrenList.innerHTML = html;

                    t.$("#huanqiu-tieInner")[0].appendChild(childrenList);
                    t.$("#huanqiu-userIndex")[0].setAttribute("data-surplusnum",surplusNum);
                    setTimeout(function(){
                        t.removeClass(t.$("#huanqiu-userIndex")[0],"ui_fadeInUp");
                    },200);

                    //绑定事件
                    t.$("#huanqiu-userIndex .close")[0].onclick = function(){
                        t.addClass(t.$("#huanqiu-userIndex")[0],"ui_fadeOutDown");
                        setTimeout(function(){
                            t.remove(t.$("#huanqiuUserIndexInner")[0]);
                        },100);
                    };

                    if(totalNum > json.data.list.length){
                        t.userPopupOnscroll(page,uid);
                    }
                }else{
                    //追加
                    var $huanqiuUserIndex = t.$("#huanqiu-userIndex")[0];
                    var $childrenList = $huanqiuUserIndex.children[1].children[1].children[0];
                    t.insertHTML($childrenList,"beforeEnd",html);

                    if(page === "1"){
                        $huanqiuUserIndex.setAttribute("data-surplusnum",json.data.n_comment);
                    }

                    //剩余数量计算
                    if(parseInt($huanqiuUserIndex.attributes["data-surplusnum"].nodeValue) > json.data.list.length){
                        var surplus = parseInt($huanqiuUserIndex.attributes["data-surplusnum"].nodeValue) - json.data.list.length;
                        $huanqiuUserIndex.setAttribute("data-surplusnum",surplus);
                        t.userPopupOnscroll(page,uid);
                    }else{
                        $huanqiuUserIndex.setAttribute("data-surplusnum","");
                        t.$("#huanqiu-userIndex .tie-list")[0].onscroll = null;
                    }
                }
                SWITCH = true;

            }
            else if(json.msg === "empty"){
                t.hqAlert('您还木有发表过跟帖，赶紧侃侃一下 : )');
            }
            else{
                t.$("#huanqiu-userIndex")[0].children[1].children[1].children[0].innerHTML = "";
            }
            t.loading(0);
        }
    });
};

//用户个人帖子窗口 - 回复我的
TIE.myPopupReply = function(page,uid,tips){
    var t = this;
    SWITCH = false;
    t.loading(1);
    var _uid = uid || "";
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX,
        callback : "at_me",
        data : "a=comment&m=at_me&uid=" + _uid + "&n=20&p=" + page + "&appid=" + t.appid,
        success : function(json){
            if(json.msg === "success"){
                //跟帖总数量
                var totalNum = parseInt(json.data.n_total);
                //跟帖剩余数量
                var surplusNum = 0;
                var html = '';
                for(var i=0;i<json.data.list.length;i++){
                    var os = json.data.list[i].os === "pc" ? "网友" : "手机网友";
                    html += '<li class="tie-box" data-id="' + json.data.list[i]._id + '">';
                    html += '<div class="user-content">';
                    html += '<div class="tie-header">';
                    html += '<div class="post-time">' + t.returnGtime(json.data.list[i].ctime) + '</div>';
                    html += '<div class="user-info">';
                    html += '<a class="user-name-index" href="javascript:void(0);" data-uid="' + json.data.list[i].user.uid + '">' + json.data.list[i].user.nickname + '</a>';
                    html += '<span class="ip-location">' + (json.data.list[i].loc ? (json.data.list[i].loc + os) : ("未知领域" + os)) + '</span>';
                    html += '</div></div>';
                    html += '<div class="tie-content">';

                    //是否有原帖
                    if(json.data.list[i].at){
                        os = json.data.list[i].at.os === "pc" ? "网友" : "手机网友";
                        html += '<div class="original-tie-inner">';
                        html += '<div class="tie-header">';
                        html += '<div class="user-info">';
                        html += '<div class="post-time">' + t.returnGtime(json.data.list[i].at.ctime) + '</div>';
                        html += '<a class="user-name-index" href="javascript:void(0);" data-uid="' + json.data.list[i].at.uid + '">' + json.data.me.nickname + '</a>';
                        html += '<span class="ip-location">' + (json.data.list[i].at.loc ? (json.data.list[i].at.loc + os) : ("未知领域" + os)) + '</span>';
                        html += '</div></div>';
                        html += '<div class="tie-content">' + json.data.list[i].at.content + '</div></div>';
                        html += '<a href="javascript:void(0);" class="reply-user-name"><em>@</em>' + json.data.me.nickname + '</a>';
                        html += json.data.list[i].content;
                    }else{
                        html += json.data.list[i].content;
                    }

                    html += '</div>';
                    html += '<div class="tie-footer">';
                    html += '<span class="origin-title">';
                    html += '来自：<a href="' + json.data.list[i].source.url + '" target="_blank" title="' + json.data.list[i].source.title + '">' + json.data.list[i].source.title + '</a>';
                    html += '</span>';
                    html += '</div></div></li>';
                }

                var $huanqiuUserIndex = t.$("#huanqiu-userIndex")[0];
                var $childrenList = $huanqiuUserIndex.children[1].children[1].children[0];
                if(tips){
                    $childrenList.innerHTML = "";
                }
                t.insertHTML($childrenList,"beforeEnd",html);

                if(tips){
                    //记录总数
                    $huanqiuUserIndex.setAttribute("data-surplusnum",totalNum);
                }

                //追加
                if(parseInt($huanqiuUserIndex.attributes["data-surplusnum"].nodeValue) > json.data.list.length){
                    //记录剩余数量
                    surplusNum = parseInt($huanqiuUserIndex.attributes["data-surplusnum"].nodeValue) - json.data.list.length;
                    $huanqiuUserIndex.setAttribute("data-surplusnum",surplusNum);

                    //绑定事件
                    t.userPopupOnscroll(page);

                }else{
                    $huanqiuUserIndex.setAttribute("data-surplusnum","");
                    t.$("#huanqiu-userIndex .tie-list")[0].onscroll = null;
                }

                SWITCH = true;
            }else{
                t.$("#huanqiu-userIndex")[0].children[1].children[1].children[0].innerHTML = "";
            }
            t.loading(0);
        }
    });
};

//个人窗口滚动翻页事件
TIE.userPopupOnscroll = function(page,uid){
    this.$("#huanqiu-userIndex .tie-list")[0].onscroll = function(){
        var scrollTop = this.scrollTop;
        var listHeight;
        if(navigator.userAgent.indexOf("MSIE")!=-1){ //IE6-8
            listHeight = TIE.$("#huanqiu-userIndex .tie-list ul")[0].offsetHeight;
        }else{
            listHeight = TIE.$("#huanqiu-userIndex .tie-list ul")[0].clientHeight;
        }

        //判断是否在当前窗口内，载入剩下的数据
        if(scrollTop + 420 >= listHeight){
            if(SWITCH){
                if(uid){
                    TIE.userIndexTie(uid,parseInt(page) + 1);
                }else{
                    TIE.myPopupReply(parseInt(page) + 1);
                }
            }
        }
    };
};

//获取排行榜
TIE.getRank = function(){
    var t = this;
    this.jsonp({
        time : 10000,
        url : "https://commentn.huanqiu.com/assets/rank/" + t.appid + "/" + t.channel + ".js?",
        callback : "HQ_COMMENT_RANK_CALLBACK",
        data : "",
        success : function(json){
            var html = '<div class="inner-tit"><div class="tit">热帖排行</div><div class="tit-shadow"></div></div><div class="con"><ul>';
            for(var i=0;i<json.length;i++){
                html += '<li class="' + (i < 3 ? "top-3" : "") + '">';
                html += '<div class="num">' + (i + 1) + '</div>';
                html += '<div class="value">';
                html += '<a href="' + json[i].url + '" target="_blank" title="' + json[i].title + '">' + json[i].title + '</a>';
                html += '<span>（' + json[i].count + '人参与）</span>';
                html += '</div></li>';
            }
            html += '</ul></div>';
            t.insertHTML(t.$(".main .other-inner .hot-ranking-inner")[0],"afterBegin",html);
            setTimeout(function(){
                TIE.$(".hot-ranking-inner .con li").forEach(function(e){
                    e.onmouseover = function(){
                        TIE.addClass(e,"hover");
                    };
                    e.onmouseout = function(){
                        TIE.removeClass(e,"hover");
                    };
                });
            },10);
        }
    });
};

//提示alert
TIE.hqAlert = function(str){
    var html = '';
    var t = this;
    html += '<div id="alertInner" class="login-inner hqAlert ui_animated ui_fadeInUp">';
    html += '<div class="login-header">';
    html += '<a class="close" id="closeLoginPopup" href="javascript:void(0);"></a>';
    html += '</div>';
    html += '<div class="login-content show-sing">';
    html += str;
    html += '<div>';
    html += '</div></div></div></div>';
    html += '<div id="loginPopupBgfif" class="bgfif"></div>';

    var huanqiuPopup = document.createElement("div");
    huanqiuPopup.id = "huanqiu-popup";
    huanqiuPopup.className = "huanqiu-popup-inner";
    huanqiuPopup.innerHTML = html;
    t.$("#huanqiu-tieInner")[0].appendChild(huanqiuPopup);

    setTimeout(function(){
        t.removeClass(t.$("#alertInner")[0],"ui_fadeInUp");
    },200);

    //关闭
    t.$("#alertInner #closeLoginPopup")[0].onclick = function(){
        var $huanqiuPopup = this.parentNode.parentNode.parentNode;
        t.addClass(t.$("#alertInner")[0],"ui_fadeOutDown");
        setTimeout(function(){
            t.remove($huanqiuPopup);
        },100);
    };
};

//获取基本信息 基础框架pc
TIE.getBaseInfo = function(){
    var t = this;
    this.jsonp({
        time : 10000,
        url : HUANQIU_AJAX + "/async",
        callback : "source_info",
        data : "a=comment&m=source_info&appid=" + t.appid + "&sourceid=" + t.sourceid + "&url=" + t.url + "&title=" + t.title + "&os=" + t.os,
        success : function(json){
            if(json.code === 22000){

                //sid
                t.sid = json.data._id;

                //获取最热跟帖
                if(parseInt(json.data.n_comment) > 5){
                    var hotTieInner = document.createElement("div");
                    hotTieInner.className = "tie-inner-box hot-tie-inner";
                    t.$("#huanqiu-tieList")[0].appendChild(hotTieInner);
                    t.getHotTieList();
                }

                //获取最新跟帖
                if(parseInt(json.data.n_comment) > 0){
                    t.getNewTieList(1,15,"1");
                }

                //记录登录种类
                t.loginType = json.data.site;

                //文章二级域名
                t.channel = json.data.channel === "www.huanqiu.com" ? "mixdata" : json.data.channel;

                //单点登陆url
                t.ssoUrl = json.data.site.sso_login;

                //单点登陆 注册url
                t.registerUrl = json.data.site.sso_register;

                //输出登陆种类到最顶端的发帖框
                var html = '';
                for(var i=0;i<t.loginType.open_platform.length;i++){
                    if(t.loginType.open_platform[i] === "qq"){
                        html += '<a href="javascript:void(0);" class="qq-login"></a>';
                    }
                    else if(t.loginType.open_platform[i] === "sina"){
                        html += '<a href="javascript:void(0);" class="weibo-login"></a>';
                    }
                    else if(t.loginType.open_platform[i] === "baidu"){
                        html += '<a href="javascript:void(0);" class="baidu-login"></a>';
                    }
                    else if(t.loginType.open_platform[i] === "weixin"){
                        html += '<a href="javascript:void(0);" class="weixin-login"></a>';
                    }
                    else if(t.loginType.open_platform[i] === "renren"){
                        html += '<a href="javascript:void(0);" class="renren-login"></a>';
                    }
                }
                t.openPlatform = html || null;
                t.insertHTML(t.$("#huanqiu-tiePost .login")[0],"beforeEnd",'<span class="sx"> | </span><span>社交账号登录：</span><span class="social-login">' + html + '</span>');

                //记录单点登录网站的标示
                t.source = json.data.site.site_source;

                //最新跟帖总数量
                t.huanqiuTieInner.setAttribute("data-newtienum",json.data.n_comment);

                //id
                t.$("body")[0].setAttribute("data-id","");
                t.$("body")[0].setAttribute("data-pid","");

                //总数量
                t.allNumSupport = parseInt(json.data.n_comment) + parseInt(json.data.n_reply) > 0 ? parseInt(json.data.n_comment) + parseInt(json.data.n_reply) + parseInt(json.data.n_active) : parseInt(json.data.n_comment) + parseInt(json.data.n_reply);                
                if(parseInt(json.data.n_comment) === 0){
                    //当主贴被删除，无内容时
                    t.$("#huanqiu-tiePost .participate")[0].innerHTML = '<var>0</var>&nbsp;人参与，<var>0</var>&nbsp;条跟帖';
                }else{
                    t.$("#huanqiu-tiePost .participate")[0].innerHTML = '<var>' + t.allNumSupport + '</var>&nbsp;人参与，<var>' + (parseInt(json.data.n_comment) + parseInt(json.data.n_reply)) + '</var>&nbsp;条跟帖';
                }

                //文章页头部总数量 & 锚点连接
                if(t.$("#msgNumBottom").length && t.allNumSupport > 0){
                    t.$("#msgNumBottom")[0].innerHTML = '<a href="#thread">' + t.allNumSupport + '</a>';
                }
                if(t.$("#msgNumTop").length && t.allNumSupport > 0){
                    t.$("#msgNumTop")[0].innerHTML = '<a href="#thread">' + t.allNumSupport + '</a>';
                }
                if(t.$(".summaryNew .join em a").length){
                    t.$(".summaryNew .join em a")[0].href = "#thread";
                }

                //判断用户是否登陆
                var timer = setInterval(function(){
                    if(window.frames['HQ_dataPedal'].canAccess){
                        clearInterval(timer);
                        t.judgeUserLogin();
                    }
                },60);

                //获取排行榜
                if(t.morePage){
                    t.getRank();
                }
            }
        }
    });
};

//绑定事件并初始化
TIE.init = function(){

    //载入HTML框架

    //是否HTTPS
    var http_dataPedal = ('https:' == document.location.protocol ? false : true) ? "http://" : "https://";
    var huanqiuTieHTML = '<div id="huanqiu-tieInner"><div id="huanqiu-tiePost" class="posting-panel-inner"><div class="tit-inner"><span class="participate"></span> <strong>网友跟帖</strong> <a href="https://i.huanqiu.com/agreement" target="_blank">请遵守《用户条款及隐私协议》</a></div><div class="post-textarea-inner clearfix"><div class="avatar"><img class="my-avatar no-login" src="https://himg2.huanqiu.cn/images/avatar.png"></div><div class="post-textarea"><div class="post-textarea-inner"><textarea onkeyup="TIE.chackTextarea(this,500)" onblur="TIE.clearChackTextarea()" autocomplete="off" name="postTextarea" id="tieTextareaMax" class="tie-textarea-box"></textarea><div class="tips">理性思考&nbsp;文明跟帖</div></div><div class="operating-inner clearfix"><div class="login"><a class="user-login" href="javascript:void(0);">登录环球网</a></div><div class="logined"></div><a href="javascript:void(0);" data-type="disabled" class="release-tie disabled">发表</a></div></div></div></div><div id="huanqiu-tieList"></div></div><iframe style="display:none;" id="HQ_dataPedal" name="HQ_dataPedal" src="' + http_dataPedal + 'commentn.huanqiu.com/assets/HQ_dataPedal.v2.html"></iframe>';
    document.getElementById("HQ_" + TIE.appid).innerHTML = huanqiuTieHTML;

    //dom
    TIE.huanqiuTieInner = TIE.$("#huanqiu-tieInner")[0];

    //发帖编辑器事件
    var $tieTextareaMax = TIE.$(TIE.dom + " #tieTextareaMax")[0];
    $tieTextareaMax.onfocus = function(){
        TIE.addClass(this,"write-box");
    };
    $tieTextareaMax.onblur = function(){
        if(this.value === ""){
            TIE.removeClass(this,"write-box");
        }
    };
    TIE.bind($tieTextareaMax,"keyup",function(event){
        var evt = (event) ? event : ((window.event) ? window.event : "");
        var code = evt.keyCode ? evt.keyCode : evt.which;
        if(code == 13 && event.ctrlKey){
            $tieTextareaMax.parentNode.parentNode.children[1].children[2].click();
        }
    });

    //事件冒泡，处理临时加入的元素事件
    TIE.bind(TIE.$("body")[0],"click",function(event){
        var o = event ? event : window.event;
        var element = o.target || o.srcElement;
        var $li;

        //支持 +1
        if(TIE.hasClass(element,"tie-support")){
            TIE.addSupport(element);
            TIE.addRelease(element);
        }

        else if(TIE.hasClass(element.parentNode,"tie-support")){
            TIE.addSupport(element.parentNode);
            TIE.addRelease(element.parentNode);
        }

        //弹窗登陆框
        else if(TIE.hasClass(element,"user-login") || TIE.hasClass(element,"no-login") || TIE.hasClass(element,"switch-accounts")){
            TIE.popupLogin();
        }

        //第三方登陆
        else if(TIE.hasClass(element,"qq-login") && !TIE.hasClass(element.parentNode,"k-m")){
            window.open("https://commentn.huanqiu.com/api?a=userinfo&m=openLogin&client_id=dfd343&platfrom=qq&parenturl=" + TIE.url , "_blank" , "width=750, height=580");
        }
        else if(TIE.hasClass(element,"weibo-login") && !TIE.hasClass(element.parentNode,"k-m")){
            window.open("https://commentn.huanqiu.com/api?a=userinfo&m=openLogin&platfrom=sina&parenturl=" + TIE.url , "_blank" , "width=750, height=580");
        }
        else if(TIE.hasClass(element,"baidu-login") && !TIE.hasClass(element.parentNode,"k-m")){

        }
        else if(TIE.hasClass(element,"weixin-login") && !TIE.hasClass(element.parentNode,"k-m")){
            window.open("https://commentn.huanqiu.com/api?a=userinfo&m=openLogin&platfrom=weixin&parenturl=" + TIE.url , "_blank" , "width=750, height=580");
        }
        else if(TIE.hasClass(element,"renren-login") && !TIE.hasClass(element.parentNode,"k-m")){
            window.open("https://commentn.huanqiu.com/api?a=userinfo&m=openLogin&platfrom=renren&parenturl=" + TIE.url , "_blank" , "width=750, height=580");
        }

        //点击回复
        else if(TIE.hasClass(element,"tie-reply")){
            //出现回复框 获取回复列表
            TIE.replyAppend(element);
        }

        //最新跟帖 获取下一页
        else if(TIE.hasClass(element,"get-more-list") || TIE.hasClass(element.parentNode,"get-more-list")){
            var newPage = parseInt(TIE.$("#huanqiu-tieList .new-tie-inner")[0].attributes["data-newtiepage"].nodeValue) + 1;
            TIE.getNewTieList(newPage);
            TIE.loading(1);
        }

        //回复列表 获取下一页
        else if(TIE.hasClass(element,"get-more-reply-list")){
            $li = element.parentNode.parentNode.parentNode;
            TIE.getReplyList($li.attributes["data-id"].nodeValue,parseInt($li.attributes["data-replypage"].nodeValue) + 1,$li);
        }

        else if(TIE.hasClass(element.parentNode,"get-more-reply-list")){
            $li = element.parentNode.parentNode.parentNode.parentNode;
            TIE.getReplyList($li.attributes["data-id"].nodeValue,parseInt($li.attributes["data-replypage"].nodeValue) + 1,$li);
        }

        //发帖
        else if(TIE.hasClass(element,"release-tie")){
            var bs = TIE.hasClass(element,"reply-tips") ? "bs" : null;
            TIE.addNewTie(element,bs);
        }

        //用户个人帖子弹窗
        else if(TIE.hasClass(element,"reply-user-name") || TIE.hasClass(element,"user-avatar-img") || TIE.hasClass(element,"user-name") || TIE.hasClass(element,"logined-user-tie")){
            if(element.attributes["data-uid"].nodeValue){
                TIE.userIndexTie(element.attributes["data-uid"].nodeValue,"1","tips");
            }
        }

        //用户个人帖子弹窗 - 我的跟帖 第一页开始
        else if(TIE.hasClass(element,"user-index-popup-tie")){
            TIE.removeClass(TIE.$("#huanqiu-userIndex .nav li"),"active");
            TIE.addClass(element.parentNode,"active");
            TIE.$("#huanqiu-userIndex .tie-list ul")[0].innerHTML = "";
            var dataUid = TIE.$("#huanqiu-userIndex")[0].children[0].children[0].attributes["data-uid"].nodeValue;
            if(dataUid){
                TIE.userIndexTie(dataUid,"1");
            }
        }

        //用户个人帖子弹窗 - 回复我的 第一页开始
        else if(TIE.hasClass(element,"user-index-popup-reply")){
            TIE.removeClass(TIE.$("#huanqiu-userIndex .nav li"),"active");
            TIE.addClass(element.parentNode,"active");
            TIE.myPopupReply("1",TIE.$("#huanqiu-userIndex")[0].children[0].children[0].attributes["data-uid"].nodeValue,"tips");
        }

        //关闭弹窗
        else if(element.id === "loginPopupBgfif"){
            TIE.addClass(TIE.$("#huanqiu-userIndex")[0],"ui_fadeOutDown");
            TIE.addClass(TIE.$("#alertInner")[0],"ui_fadeOutDown");
            TIE.addClass(TIE.$("#loginInner")[0],"ui_fadeOutDown");

            setTimeout(function(){
                TIE.remove(TIE.$("#huanqiuUserIndexInner")[0]);
                TIE.$(".huanqiu-popup-inner").forEach(function(e){
                    TIE.remove(e);
                });
            },100);
        }

        //单点登陆
        else if(element.id === "singLoginBtn"){
            TIE.ssoLogin(TIE.$("#huanqiu-tieInner #loginName")[0].value,TIE.$("#huanqiu-tieInner #loginPassword")[0].value);
        }

    });

    //创建大框架
    TIE.getBaseInfo();
};

//分享显示隐藏
function tieShare(e,type){
    if(type === "show"){
        TIE.show(e.children[0]);
    }else{
        TIE.hide(e.children[0]);
    }
}

//我的菜单
function userCon(e,type){
    if(type === "show"){
        TIE.removeClass(e,"hover-style");
    }else{
        TIE.addClass(e,"hover-style");
    }
}

//触发
(function(window){
    var hostArr = ["qf.huanqiu.com","c.huanqiu.com","saronscms.huanqiu.com"];

    if(!TIE.inArray(hostArr,window.location.host)){
        if (TIE.ieSys() == 8.0 || TIE.ieSys() == 7.0 || TIE.ieSys() == 6.0){
            setTimeout(function(){
                TIE.init();
            },1000);
        }else{
            TIE.init();
        }
    }

})(window);