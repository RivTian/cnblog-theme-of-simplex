// 代码折叠
$(document).ready(function () {
    return;
    var pres = $("pre");
    for (var i = 0; i < pres.length; i++) {
        // --- 处于Pre内部
        // $(pres[i]).attr('id', 'pre' + i);
        // $(pres[i]).children('code').hide();
        // $(pres[i]).prepend('<button id="btn'+ i +'" onclick="view_code(\'pre'+ i +'\');" class="code-expander">查看代码</button>');

        // --- 处于Pre外部
        $(pres[i]).attr('id', 'pre' + i);
        // $(pres[i]).children('code').hide();
        var body = document.getElementById("cnblogs_post_body");
        var btn = document.createElement('button');
        btn.innerText = 'Hide Code';
        $(btn).attr('id', 'btn' + i);
        $(btn).attr('class', 'code-expander');
        $(btn).attr('onclick', 'view_code(\'' + i + '\');');
        pres[i].parentNode.insertBefore(btn, pres[i]); //在box之前添加元素
    }
});
function view_code(id) {
    // --- 处于Pre内部
    // var btn_text = document.getElementById(id).children[0].innerText;

    // --- 处于Pre外部
    var btn = document.getElementById('btn' + id);
    var btn_text = btn.innerText;

    var style;
    var style_btn
    var status;
    if (btn_text == 'View Code') {
        style = '""';
        style_btn = 'background: green';
        status = 'Hide Code';
    } else {
        style = 'display: none;';
        style_btn = 'background: var(--theme-color)';
        status = 'View Code';
    }

    // --- 处于Pre内部
    // document.getElementById('pre' + id).children[0].innerText = status;
    // document.getElementById('pre' + id).children[0].style = style_btn;
    // document.getElementById('pre' + id).children[1].style = style;

    // --- 处于Pre外部
    btn.innerText = status;
    btn.style = style_btn;
    document.getElementById('pre' + id).children[0].style = style;
}
// 代码折叠结束



// 隐藏摘要
$(document).ready(function () {
    return;
    var mainContent = document.getElementById("mainContent");
    var forFlow = mainContent.children[0];

    for (var i = 0; i < forFlow.children.length; i++) {
        var cur = forFlow.children[i];
        if (cur != null && cur.className == "day") {
            console.log("in" + cur.className + i);
            for (var j = 0; j < cur.children.length; j++) {
                var abs = cur.children[j];
                if (abs.className == "postCon") {
                    // $(abs).attr('hidden', 'hidden');
                    abs.innerHTML = "   ";
                }
            }
        }
        else {
            console.log("end" + i);
            break;
        }
    }
});
function getElementsByClassName(parent, tag, className) {
    //获取所有父节点下的tag元素
    var aEls = parent.getElementsByTagName(tag);
    var arr = [];

    //循环所有tag元素

    for (var i = 0; i < aEls.length; i++) {

        //将tag元素所包含的className集合（这里指一个元素可能包含多个class）拆分成数组,赋值给aClassName
        var aClassName = aEls[i].className.split(' ');

        //遍历每个tag元素所包含的每个className
        for (var j = 0; j < aClassName.length; j++) {

            //如果符合所选class，添加到arr数组
            if (aClassName[j] == className) {
                arr.push(aEls[i]);
                //如果className里面包含'box' 则跳出循环
                break; //防止一个元素出现多次相同的class被添加多次
            }
        };
    };
    return arr;
}
function __js_debug_msg(msg) {
    var panel = document.createElement('div');
    panel.id = "js_debug_msg";
    panel.setAttribute('style', 'position:fixed;width:300px;height:40px;padding:5px;background:#333;line-height:20px;color:#FFF;margin-top:0px;top:0px;right:0px;');
    panel.innerHTML = msg;
    document.body.appendChild(panel);
}
// 隐藏摘要结束


// github & theme power
$(document).ready(function () {
    // github
    var navList = document.getElementById("navList");
    var a = document.createElement('a');
    a.innerHTML = '<svg class="octicon octicon-mark-github v-align-middle" height="32" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>'
    $(a).attr('href', 'https://github.com/RivTian');
    $(a).attr('id', 'navList_github');
    $(a).attr('class', 'github');
    $(a).attr('target', '_black');
    navList.appendChild(a);

    // theme power footer
    var footer = document.getElementById("footer");
    var span = document.createElement('span');
    span.innerHTML = '&amp; custom theme of <a href="https://github.com/RivTian/cnblog-theme-of-simplex/NLNet-theme" target="_blank">NLNet\' cnblogs theme </a>'
    $(span).attr('class', 'esa-copyright');
    $(span).attr('id', 'nlnet_copyright');
    footer.appendChild(span);

    // title1 前面插入图标
    var title1s = $("#topics .postBody h1, .day .postTitle, #myposts div.postTitl2, #mainContent div.entrylistPosttitle");
    for (var i = 0; i < title1s.length; i++) {
        // var h = title1s[i];
        // console.log("第" + i + "个h1，child个数为：" + h.children.length, + "innerHTML为：" + h.innerHTML);
            
        var title1 = title1s[i];
        title1.innerHTML = "<object class=\"header_icon\" type=\"image/svg+xml\" data=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEyNjkwOTIxNDkwIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjgyMDYiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM1Ni41NDc5NTUgMzg1LjgxOTc0N2E1MC44IDk4LjkgNzUuOTU0IDEgMCAxOTEuODg2MDE0LTQ4LjAwNjIyMyA1MC44IDk4LjkgNzUuOTU0IDEgMC0xOTEuODg2MDE0IDQ4LjAwNjIyM1oiIGZpbGw9IiM0NkI4NjEiIHAtaWQ9IjgyMDciPjwvcGF0aD48cGF0aCBkPSJNNzMwIDYyOG0tNzYuMiAwYTc2LjIgNzYuMiAwIDEgMCAxNTIuNCAwIDc2LjIgNzYuMiAwIDEgMC0xNTIuNCAwWiIgZmlsbD0iIzQ2Qjg2MSIgcC1pZD0iODIwOCI+PC9wYXRoPjxwYXRoIGQ9Ik03MzUgNjM4LjdtLTEwLjcgMGExMC43IDEwLjcgMCAxIDAgMjEuNCAwIDEwLjcgMTAuNyAwIDEgMC0yMS40IDBaIiBmaWxsPSIjOEJERDlGIiBwLWlkPSI4MjA5Ij48L3BhdGg+PHBhdGggZD0iTTQ1Ni45IDM2MW0tMTAuNyAwYTEwLjcgMTAuNyAwIDEgMCAyMS40IDAgMTAuNyAxMC43IDAgMSAwLTIxLjQgMFoiIGZpbGw9IiM4QkREOUYiIHAtaWQ9IjgyMTAiPjwvcGF0aD48cGF0aCBkPSJNNjcyLjUgNjI2LjljLTAuMS0xLTAuMS0xLjktMC4xLTIuOSAwLTE3LjQgOS4zLTMyLjYgMjMuMS00MSAxLjYtMSAyLjItMy4xIDEuMy00LjktMS0yLTMuNS0yLjYtNS40LTEuNC0xNS45IDkuOC0yNi41IDI3LjMtMjYuNSA0Ny4zIDAgMS4xIDAuMSAyLjIgMC4yIDMuNGw3LjQtMC41eiIgZmlsbD0iIzhCREQ5RiIgcC1pZD0iODIxMSI+PC9wYXRoPjxwYXRoIGQ9Ik02MzkuMiA0ODguNm0tNzYuMiAwYTc2LjIgNzYuMiAwIDEgMCAxNTIuNCAwIDc2LjIgNzYuMiAwIDEgMC0xNTIuNCAwWiIgZmlsbD0iIzQ2Qjg2MSIgcC1pZD0iODIxMiI+PC9wYXRoPjxwYXRoIGQ9Ik02NDQuMiA0OTkuNG0tMTAuNyAwYTEwLjcgMTAuNyAwIDEgMCAyMS40IDAgMTAuNyAxMC43IDAgMSAwLTIxLjQgMFoiIGZpbGw9IiM4QkREOUYiIHAtaWQ9IjgyMTMiPjwvcGF0aD48cGF0aCBkPSJNNTgyLjEgNDgxYy0wLjEtMC45LTAuMS0xLjgtMC4xLTIuOCAwLTE2LjYgOC45LTMxLjIgMjIuMS0zOS4yIDEuNi0xIDIuMS0zIDEuMi00LjctMS0xLjktMy4zLTIuNS01LjItMS40LTE1LjIgOS4zLTI1LjQgMjYuMS0yNS40IDQ1LjMgMCAxLjEgMC4xIDIuMSAwLjIgMy4ybDcuMi0wLjR6TTM3Mi40IDM3NS45YzAuMi0wLjkgMC4zLTEuOCAwLjYtMi43IDQuMy0xNi4xIDE2LjYtMjcuOSAzMS41LTMyLjIgMS44LTAuNSAyLjgtMi40IDIuNC00LjItMC41LTIuMS0yLjYtMy4zLTQuNi0yLjctMTcuMSA1LjEtMzEuMiAxOC43LTM2LjIgMzcuMi0wLjMgMS0wLjUgMi4xLTAuNyAzLjFsNyAxLjV6IiBmaWxsPSIjOEJERDlGIiBwLWlkPSI4MjE0Ij48L3BhdGg+PHBhdGggZD0iTTcxOCA0MzUuMW0tNTguNSAwYTU4LjUgNTguNSAwIDEgMCAxMTcgMCA1OC41IDU4LjUgMCAxIDAtMTE3IDBaIiBmaWxsPSIjNDQ5QTU4IiBwLWlkPSI4MjE1Ij48L3BhdGg+PHBhdGggZD0iTTcyMS44IDQ0My40bS04LjIgMGE4LjIgOC4yIDAgMSAwIDE2LjQgMCA4LjIgOC4yIDAgMSAwLTE2LjQgMFoiIGZpbGw9IiM4QkREOUYiIHAtaWQ9IjgyMTYiPjwvcGF0aD48cGF0aCBkPSJNNjc4LjggNDM0LjRjMC0wLjctMC4xLTEuNS0wLjEtMi4yIDAtMTMuNCA3LjEtMjUuMSAxNy44LTMxLjYgMS4zLTAuOCAxLjctMi40IDEtMy43LTAuOC0xLjUtMi43LTItNC4yLTEuMS0xMi4zIDcuNS0yMC41IDIxLTIwLjUgMzYuNSAwIDAuOSAwLjEgMS43IDAuMSAyLjZsNS45LTAuNXoiIGZpbGw9IiM4QkREOUYiIHAtaWQ9IjgyMTciPjwvcGF0aD48cGF0aCBkPSJNMjk3LjcgMTQ2LjNtLTc5LjkgMGE3OS45IDc5LjkgMCAxIDAgMTU5LjggMCA3OS45IDc5LjkgMCAxIDAtMTU5LjggMFoiIGZpbGw9IiM0NDlBNTgiIHAtaWQ9IjgyMTgiPjwvcGF0aD48cGF0aCBkPSJNMzAyLjkgMTU3LjZtLTExLjIgMGExMS4yIDExLjIgMCAxIDAgMjIuNCAwIDExLjIgMTEuMiAwIDEgMC0yMi40IDBaIiBmaWxsPSIjOEJERDlGIiBwLWlkPSI4MjE5Ij48L3BhdGg+PHBhdGggZD0iTTI0NC4yIDE0NS4zYy0wLjEtMS0wLjItMi0wLjItMy4xIDAtMTguMyA5LjgtMzQuMyAyNC4zLTQzLjIgMS43LTEuMSAyLjMtMy4zIDEuNC01LjEtMS4xLTIuMS0zLjctMi43LTUuNy0xLjUtMTYuOCAxMC4zLTI4IDI4LjctMjggNDkuOCAwIDEuMiAwLjEgMi40IDAuMiAzLjVsOC0wLjR6IiBmaWxsPSIjOEJERDlGIiBwLWlkPSI4MjIwIj48L3BhdGg+PHBhdGggZD0iTTQ4NS43IDYzMC4zbS02My41IDBhNjMuNSA2My41IDAgMSAwIDEyNyAwIDYzLjUgNjMuNSAwIDEgMC0xMjcgMFoiIGZpbGw9IiM0NDlBNTgiIHAtaWQ9IjgyMjEiPjwvcGF0aD48cGF0aCBkPSJNNjQ3LjIgNjQxLjdtLTYzLjUgMGE2My41IDYzLjUgMCAxIDAgMTI3IDAgNjMuNSA2My41IDAgMSAwLTEyNyAwWiIgZmlsbD0iIzQ0OUE1OCIgcC1pZD0iODIyMiI+PC9wYXRoPjxwYXRoIGQ9Ik00ODkuOCA2MzkuMm0tOC45IDBhOC45IDguOSAwIDEgMCAxNy44IDAgOC45IDguOSAwIDEgMC0xNy44IDBaIiBmaWxsPSIjOEJERDlGIiBwLWlkPSI4MjIzIj48L3BhdGg+PHBhdGggZD0iTTQ0My4yIDYyOS41YzAtMC44LTAuMS0xLjYtMC4xLTIuNCAwLTE0LjUgNy44LTI3LjMgMTkuMy0zNC4zIDEuNC0wLjggMS44LTIuNiAxLjEtNC4xLTAuOS0xLjctMi45LTIuMi00LjUtMS4yLTEzLjMgOC4yLTIyLjIgMjIuOC0yMi4yIDM5LjYgMCAwLjkgMC4xIDEuOSAwLjEgMi44bDYuMy0wLjR6IiBmaWxsPSIjOEJERDlGIiBwLWlkPSI4MjI0Ij48L3BhdGg+PHBhdGggZD0iTTM0MC45IDU5OC4zczM3LjItNDIuNiA3OS44LTIxLjNjNDIuNiAyMS4zIDMxLjkgOTUuOCAzMS45IDk1LjhzMjkuMyA1NS45IDEwMS4xLTIuN2M3MS44LTU4LjUgMTQ2LjMtODUuMSAyMDIuMS01MC41IDU1LjkgMzQuNiA5My4xIDMyOS44LTE4My41IDMzNy44LTI3Ni43IDgtMzM1LjItMjIwLjgtMjMxLjQtMzU5LjF6IiBmaWxsPSIjZWZiMzM2IiBwLWlkPSI4MjI1IiBkYXRhLXNwbS1hbmNob3ItaWQ9ImEzMTN4Ljc3ODEwNjkuMC5pMjQiIGNsYXNzPSJzZWxlY3RlZCI+PC9wYXRoPjxwYXRoIGQ9Ik02MDMuNyAzNTEuNnMtMzkuMS0yLjYtNjguMi0zMS45bDI0LjQgMi45LTItMjggMjAuMyAyMS40IDMuNC0zMC4yIDE2LjkgMjQuM0w2MDggMjg4bDUuNCAyMi44IDEyLjktMjIuMSA2LjEgMjIuMSAxNC4yLTIwLjYgMy40IDI1LjEgMTQuMi0yMS40cy0xMy4xIDU0LjEtNDkgNTdjLTguNCAwLjctMTEuNSAwLjctMTEuNSAwLjd6IiBmaWxsPSIjRkY4MDgwIiBwLWlkPSI4MjI2Ij48L3BhdGg+PHBhdGggZD0iTTU5Ni40IDM0Ni40bC0zMC0xNy45IDI3LjkgMy42IDEuNC0xNi40IDUuNyAxMS40IDEyLTE2LjIgMyAxNC4xIDguNi03LjEgMi45IDUuNyAyMi4xLTguMi0xOC42IDI1LjRjMC0wLjEtMTQuMyAxMS4zLTM1IDUuNnoiIGZpbGw9IiNFMDY5NjkiIHAtaWQ9IjgyMjciPjwvcGF0aD48L3N2Zz4=\"></object>" + title1.innerHTML;
    }
    // h2
    var h2s = $("#topics .postBody h2");
    for (var i = 0; i < h2s.length; i++) {            
        var h = h2s[i];
        h.innerHTML = "<object class=\"header_icon\" type=\"image/svg+xml\" data=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjEyNjkwOTU3NDMzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9Ijg0NjciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzIiIGhlaWdodD0iMzIiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTYzMC44IDk2MC43SDM2MC41Yy02LjYgMC0xMi01LjQtMTItMTJWNjIxLjVoMjk0LjN2MzI3LjJjMCA2LjYtNS40IDEyLTEyIDEyeiIgZmlsbD0iI2JmYmZiZiIgcC1pZD0iODQ2OCIgZGF0YS1zcG0tYW5jaG9yLWlkPSJhMzEzeC43NzgxMDY5LjAuaTI4IiBjbGFzcz0ic2VsZWN0ZWQiPjwvcGF0aD48cGF0aCBkPSJNNDQzLjQgNTgxLjVzMTEuNS03LjQgOS0yNy40Yy0yLjUtMjAuMSAwLjgtNDAuOSAxNS42LTM4LjUgMTQuNyAyLjUgMTYgMjkuOSA3IDUxLjIgMCAwLTIuNyAyMi4zIDIuOSAyOS4zcy0yLjUgMzIuNS0zMC41IDQ0LjZjLTI4IDEyLjEtNjguNiA1Mi42LTc0LjMgOTAuMiAwIDAtMzEuOS03OC42LTEyLjMtMTExLjMgMCAwIDMuMy0yMy43IDEyLjMtMzguNSA5LTE0LjctMC4yLTIwLjggNy4xLTI3LjZzMzIuMS0yNi43IDMyLjktMzAuNmMwLjgtMy45IDI2LjgtNS42IDMwLjUtMi4zIDMuNyAzLjQgMiAyLjQgMy43IDMuNCAxLjYgMS02LjEgMzcuOS0xMy41IDQ2LjYtNy41IDguNiAyLjYgMTQuOCA5LjYgMTAuOXoiIGZpbGw9IiMyQzU4MDEiIHAtaWQ9Ijg0NjkiPjwvcGF0aD48cGF0aCBkPSJNNTU5LjggNDM4LjVzMTYuNy03LjQgMTMuMS0yNy40Yy0zLjYtMjAuMSAxLjItNDAuOSAyMi43LTM4LjUgMjEuNSAyLjUgMjMuMyAyOS45IDEwLjEgNTEuMiAwIDAtMy45IDIyLjMgNC4yIDI5LjNzLTMuNiAzMi41LTQ0LjQgNDQuNmMtNDAuOSAxMi4xLTk5LjkgNTIuNi0xMDguMyA5MC4yIDAgMC00Ni41LTc4LjYtMTcuOS0xMTEuMyAwIDAgNC44LTIzLjcgMTcuOS0zOC41IDEzLjEtMTQuNy0wLjMtMjAuOCAxMC4zLTI3LjYgMTAuNi02LjkgNDYuOC0yNi43IDQ4LTMwLjYgMS4yLTMuOSAzOS4xLTUuNiA0NC40LTIuMyA1LjQgMy40IDMgMi40IDUuNCAzLjRzLTguOSAzNy45LTE5LjcgNDYuNmMtMTAuNyA4LjcgMy45IDE0LjggMTQuMiAxMC45eiIgZmlsbD0iIzJCNTMwMCIgcC1pZD0iODQ3MCI+PC9wYXRoPjxwYXRoIGQ9Ik04MDAuMSA1NjkuN3MtMjIuMS0xNS4xLTYxLTE0Yy0zOC45IDEuMS0xNTguNy0xNDIuNi0xNTguNy0xNDIuNnMtMjEtNTcuOC0zOC45LTY3LjMgNzkuOSAyLjEgMTA4LjMgMzcuOCAzMi42IDQuMiA3Ni43IDc2LjdjMCAwIDIzLjEgMjAgMzUuNyAyOC40IDEyLjcgOC40IDM3LjkgODEgMzcuOSA4MXoiIGZpbGw9IiMzNDczMEIiIHAtaWQ9Ijg0NzEiPjwvcGF0aD48cGF0aCBkPSJNNTgxLjUgNDE3LjNzMjkuNC02Ni4yIDEzLjctOTcuOCA0NC4xIDM2LjggNTEuNSA3Mi41IDI2LjMgMTYuOCAzMi42IDQyYzYuMyAyNS4yLTE0LjIgNTMuNiA5LjUgODkuMyAxOCAyNy41LTEwNy4zLTEwNi0xMDcuMy0xMDZ6IiBmaWxsPSIjNDU5QTA3IiBwLWlkPSI4NDcyIj48L3BhdGg+PHBhdGggZD0iTTU1NS4yIDI1Mi42cy0zNy4xLTEuNC0yNy4zLTQwLjYgMTA3LjItNTguMiAxMzAuMyAzOS4ybC0xMDMgMS40eiIgZmlsbD0iI0VCMjAyNiIgcC1pZD0iODQ3MyI+PC9wYXRoPjxwYXRoIGQ9Ik01ODMuNCAyMzQuNWwtOS4xLTEuNmMtMC42LTAuMS0xLTAuNy0wLjktMS4zbDE1LjItODguOWMwLjEtMC42IDAuNy0xIDEuMy0wLjlsOS4xIDEuNmMwLjYgMC4xIDEgMC43IDAuOSAxLjNsLTE1LjIgODguOWMtMC4xIDAuNi0wLjcgMS0xLjMgMC45eiIgZmlsbD0iI0ZFRDQwNiIgcC1pZD0iODQ3NCI+PC9wYXRoPjxwYXRoIGQ9Ik01MzIuNiAyNzQuOHM2Ni4yLTY5LjQgMTMxLjQgNDEuNWMwIDAgMTguNC02NC42LTUyLTkwLjQgMCAwLjEtNTUuOC0xOC45LTc5LjQgNDguOXoiIGZpbGw9IiNDNjAxMTIiIHAtaWQ9Ijg0NzUiPjwvcGF0aD48cGF0aCBkPSJNNDQ3IDE2MC4zczM1LjMtMTEuNyAxNC45LTQ2LjYtMTE5LjItMjYtMTE0LjMgNzRsOTkuNC0yNy40eiIgZmlsbD0iI0VCMjAyNiIgcC1pZD0iODQ3NiI+PC9wYXRoPjxwYXRoIGQ9Ik00MTQuOSAxNTAuN2w4LjQtNGMwLjYtMC4zIDAuOC0xIDAuNS0xLjVMMzg0LjUgNjRjLTAuMy0wLjYtMS0wLjgtMS41LTAuNWwtOC40IDRjLTAuNiAwLjMtMC44IDEtMC41IDEuNWwzOS4zIDgxLjJjMC4zIDAuNiAxIDAuOCAxLjUgMC41eiIgZmlsbD0iI0ZFRDQwNiIgcC1pZD0iODQ3NyI+PC9wYXRoPjxwYXRoIGQ9Ik00NzQuOSAxNzUuM3MtODIuOS00OC4yLTExNC42IDc2LjVjMCAwLTM1LjctNTcgMjQuOC0xMDEuMyAwIDAgNDguMi0zMy43IDg5LjggMjQuOHoiIGZpbGw9IiNDNjAxMTIiIHAtaWQ9Ijg0NzgiPjwvcGF0aD48cGF0aCBkPSJNNDk0LjIgNTQ5czE0LTYuNSAxNi44LTMxLjdjMi44LTI1LjMgMTEuOS01My43IDMxLjUtNDkuMnM3OS4yIDM2LjkgMzAuOCAyMDQuNmMwIDAtMzguNSA3Mi41LTIzLjEgMTAxLjcgMCAwLTU2LjEtMzguMi02NC41LTEwMi4zIDAgMC0xMDkuMy03Ny43LTcwLjEtMTUwLjJzNjIuNC0yMi43IDYyLjQtMjIuNy0zLjQgNDcuMiAxNi4yIDQ5Ljh6IiBmaWxsPSIjMzc3NzA1IiBwLWlkPSI4NDc5Ij48L3BhdGg+PHBhdGggZD0iTTYwNS4zIDU1My4yczkuNS0xNC43LTEwLjUtMzMuNmMtMjAtMTguOS0yLjEtNDQuMSAxMC41LTQ0LjFzNzIgMTYuMyAxMDQuMSAxMTEuNGMwIDAgOS41IDg0LjYgMjkuNCAxMDQuMSAwIDAtNDUtMjAuNS04Mi0zOC41LTMwLTE0LjYtODguNiA2LjgtMTIzLjMtNzEuNSAwIDAtMTUuNC01MS4zIDIwLjgtNTguMiAzNi4zLTYuOSA1MSAzMC40IDUxIDMwLjR6TTQxOC4yIDQ3Mi4zczIyLTcuNyAyOS41LTQ1IDI0LjMtNzMuMyA0Ni02MS43YzIxLjYgMTEuNiA4LjEgNjEuNi0xNy45IDk1LjYgMCAwLTE2LjcgMzguOS0xMiA1NC4xIDQuNyAxNS4yLTIyLjIgNTcuNC03Mi43IDY1LjVzLTEzNi45IDYxLjItMTY3IDEyNi4zYzAgMC01LjYtMTU3LjIgNDMuNS0yMDYuNiAwIDAgMTguNS00MS4yIDQwLjgtNjMuMyAyMi40LTIyLjIgMTEuNC0zNy41IDI2LjYtNDYuMyAxNS4yLTguOCA2NS4yLTMyLjQgNjguNy0zOSAzLjUtNi42IDQ1IDIuOSA0OC45IDEwLjhzMS45IDUuMiAzLjkgNy45LTMwLjkgNjUuMi00Ny4zIDc3LjNjLTE2LjUgMTItNC4zIDI3LjkgOSAyNC40eiIgZmlsbD0iIzQ1OUEwNyIgcC1pZD0iODQ4MCI+PC9wYXRoPjxwYXRoIGQ9Ik0yOTQuMjMyODA3IDU0MS4zMTcwNzlhOS41IDEzLjcgNDEuNzYgMSAwIDE4LjI0ODcyNS0yMC40Mzg3ODcgOS41IDEzLjcgNDEuNzYgMSAwLTE4LjI0ODcyNSAyMC40Mzg3ODdaIiBmaWxsPSIjRkZGRkZGIiBwLWlkPSI4NDgxIj48L3BhdGg+PHBhdGggZD0iTTY0My4yNzY5MjIgNjE1Ljc2ODQ1OWE4LjkgNi4yIDM0LjQzIDEgMCA3LjAxMDk0Ny0xMC4yMjc3MzggOC45IDYuMiAzNC40MyAxIDAtNy4wMTA5NDcgMTAuMjI3NzM4WiIgZmlsbD0iI0ZGRkZGRiIgcC1pZD0iODQ4MiI+PC9wYXRoPjwvc3ZnPg==\"></object>" + h.innerHTML;
    }
});
// github & theme power结束