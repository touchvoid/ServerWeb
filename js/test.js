window.onload=function() {
    obj=document.getElementById("js")
    document.getElementById("button2").onclick=function() {
        if(obj.style.display=="none")
            obj.style.display="block";
        else
            obj.style.display="none";
    }
}