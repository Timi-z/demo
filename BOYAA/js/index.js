function $(id) {
    return document.getElementById(id);
}
window.onload = function() {
    const oDiv = $("wrap");
    const pics = $("pic").getElementsByTagName("li");
    const num = $("num").getElementsByTagName("li");
    const left = $("left");
    const right = $("right");
    let index = 0;
    let timer;
    //左右按钮切换
    left.onclick = function() {
        index--;
        if (index < 0) {
            index = pics.length - 1;
        }
        change(index);
    }
    right.onclick = function() {
            index++;
            if (index >= pics.length) {
                index = 0;
            }
            change(index);
        }
        //翻页按钮切换
    for (let i = 0; i < num.length; i++) {
        num[i].onclick = function() {
            index = i;
            change(index);
        }
    }
    //图片停止滚动
    oDiv.onmouseover = function() {
        clearInterval(timer);
    }
    oDiv.onmouseout = function() {
        timer = setInterval(run, 4000);
    }
    timer = setInterval(run, 4000);
    //定时器切换图片
    function run() {
        index++;
        if (index >= pics.length) {
            index = 0;
        }
        change(index);
    }
    //手动切换图片
    function change(curindex) {
        for (let i = 0; i < pics.length; i++) {
            pics[i].style.display = "none";
            num[i].className = "";
        };
        pics[curindex].style.display = "block";
        num[curindex].className = "active";
        index = curindex;
    }

}