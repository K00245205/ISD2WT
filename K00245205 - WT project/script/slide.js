
function swap(imgnum) {
    document.getElementById("heroImg").src =
            "images/hero" + imgnum + ".jpg";
}

var imgnum = 1;
function next() {
    if (imgnum == 4) {
        imgnum = 1;
    } else
        imgnum++;
    swap(imgnum);
}
setInterval(next,2000);