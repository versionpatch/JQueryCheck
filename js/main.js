var isBold = false;
var isItalic = false;
var isUnderlined = false;

$("p").css("font-size","20px");

var boldBtn = $("#bold");
boldBtn.click(Bold);
var itBtn = $("#italic");
itBtn.click(Italic);
var ulBtn = $("#underline");
ulBtn.click(Underline);



function ActiveBtn(btn)
{
    btn.css("background-color","#cccccc");
    btn.css("color","#222222");
}
function DefaultBtn(btn)
{
    btn.css("background-color","#222222");
    btn.css("color","#ffffff");
}

function Bold()
{
    if (!isBold)
    {
        $("p").css("font-weight","bold");
        isBold = true;
        ActiveBtn(boldBtn);
    }
    else
    {
        $("p").css("font-weight","");
        isBold = false;
        DefaultBtn(boldBtn);
    }
}
function Italic()
{
    if (!isItalic)
    {
        $("p").css("font-style","italic");
        isItalic = true;
        ActiveBtn(itBtn);
    }
    else
    {
        $("p").css("font-style","");
        isItalic = false;
        DefaultBtn(itBtn);
    }
}
function Underline()
{
    if (!isUnderlined)
    {
        $("p").css("text-decoration","underline");
        isUnderlined = true;
        ActiveBtn(ulBtn);
    }
    else
    {
        $("p").css("text-decoration","");
        isUnderlined = false;
        DefaultBtn(ulBtn);
    }
}

function ChangeFont(font)
{
    $("p").css("font-family",font);
}

function ChangeSize(size)
{
    $("p").css("font-size",size);
}