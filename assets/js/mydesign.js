function openTab(TabName) {
    var i;
    var x = document.getElementsByClassName("fun_cax");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(TabName).style.display = "block";
}