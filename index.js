window.onload = function () {
    var oDiv = document.getElementById('box');
    var oUl = document.getElementById('list');
    var aLi = oUl.getElementsByTagName('li');
    var num = 0;
    var imgArr = [
        '161a91a1d528448ba7b66874fa70df8b.jpg',
        '2ac3743025fb4cdeb5960b5db30f61bf.jpg',
        '00fd184b39c04608b6bc21d34fd5f496.jpg',
        '7f5eb2d107c9470ca81b6fa7ebcc6e66.jpg',
        '8bfb018e76a1453091c4ad54df82adc8.jpg',
        '15c7a10578e34acd9c471b42fbafb6f3.jpg',
        '6978e2fc6c3b4791ae4c178c92d02b71.jpg',
        'a3d5cea1a3134eca936f58aaf50cad7b.jpg',
        'd622c81d3c674f76b15e1547de5d4a2c.jpg',
        'f0b37b2aa03847709a45b5ca1dcac068.jpg'
    ];
    var nameArr = [];
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (var i = 0; i < aLi.length; i++) {
                aLi[i].className = '';
            }
            num = this.index;
            oDiv.style.backgroundImage = 'url("img/' + imgArr[this.index] + '")';
            this.className = 'active';
        }
    }
    ;
    function tabImg() {
        num++;
        if (num == imgArr.length) {
            num = 0;
        }
        ;
        for (var i = 0; i < aLi.length; i++) {
            aLi[i].className = '';
        }
        ;
        oDiv.style.backgroundImage = 'url("img/' + imgArr[num] + '")';
        aLi[num].className = 'active';
    }

    var timer = setInterval(tabImg, 3000);
    oUl.onmouseover = function () {
        clearInterval(timer);
    };
    oUl.onmouseout = function () {
        timer = setInterval(tabImg, 3000);
    };
    var loginBox = document.getElementById('login');
    var registerBox = document.getElementById('register');
    var ologin = document.getElementById('login-btn');
    var oregister = document.getElementById('register-btn');
    var clogin = document.getElementById('login-close');
    var cregister = document.getElementById('register-close');
    loginBox.onclick = ologin.onclick = function (ev) {
        loginBox.style.display = 'block';
        var ev = ev || event;
        ev.cancelBubble = true;
    };
    registerBox.onclick = oregister.onclick = function (ev) {
        registerBox.style.display = 'block';
        var ev = ev || event;
        ev.cancelBubble = true;
    };
    clogin.onclick = function (ev) {
        loginBox.style.display = 'none';
        var ev = ev || event;
        ev.cancelBubble = true;
    };
    cregister.onclick = function (ev) {
        registerBox.style.display = 'none';
        var ev = ev || event;
        ev.cancelBubble = true;
    };
    document.onclick = function () {
        loginBox.style.display = 'none';
        registerBox.style.display = 'none';
        downList.style.display = 'none';
    };
    var sDiv = document.getElementById('sou');
    var downList = document.getElementById('slist');
    sDiv.onclick = function (ev) {
        downList.style.display = 'block';
        var ev = ev || event;
        ev.cancelBubble = true;
    };
    var dUl = downList.getElementsByTagName('ul')[0];
    var dLi = dUl.getElementsByTagName('li');
    var dSpan = dUl.getElementsByTagName('span');
    for (var j = 0; j < dLi.length; j++) {
        dLi[j].index = j;
        dLi[j].onclick = function () {
            sDiv.value = dSpan[this.index].innerText;
        }
    }
    var oBox = document.getElementById('show-img');
    var aLiArr = oBox.getElementsByTagName('li');

    for (var n = 0; n < aLiArr.length; n++) {
        aLiArr[n].index = n;
        if (n < aLiArr.length - 1) {
            aLiArr[n].onmouseover = function () {
                this.style.width = '930px';
                this.style.marginLeft = -190 * this.index + 'px';
                // this.style.transform = 'translateX(' + (-190 * this.index) + 'px)';
            };
            aLiArr[n].onmouseout = function () {
                this.style.width = '170px';
                // this.style.transform = 'translateX(0)';
                this.style.marginLeft = 0;
            }
        }else{
            aLiArr[n].onmouseover = function () {
                this.style.width = '930px';
                this.style.marginLeft = -190 * (this.index - 1)+ 'px';
                // this.style.transform = 'translateX(' + (-190 * this.index) + 'px)';
            };
            aLiArr[n].onmouseout = function () {
                this.style.width = '170px';
                // this.style.transform = 'translateX(0)';
                this.style.marginLeft = 0;
            }
        }

    }
};



