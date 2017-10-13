var height = 0;
var at = 0;
var i = 0;
function scroll() {
console.log("hight:" + height + " scrollHeight:" + document.body.scrollHeight + " att:" + at  );

if (height < document.body.scrollHeight)
{
    //height = document.body.scrollHeight;
    window.scrollTo(0, height);
    at++;
    height = parseInt(height) + at;
}
else
{
    clearInterval(i);
}
}
i = setInterval(scroll,200);

