var arr = [
  "Alborz",
  "Ardabil",
  "Bushehr",
  "Chaharmahal and Bakhtiari",
  "East Azerbaijan",
  "Isfahan",
  "Fars",
  "Gilan",
  "Golestan",
  "Hamadan",
  "Hormozgan",
  "Ilam",
  "Kerman",
  "Kermanshah",
  "Khuzestan",
  "Kohgiluyeh and Boyer-Ahmad",
  "Kurdistan",
  "Lorestan",
  "Markazi",
  "Mazandaran",
  "North Khorasan",
  "Qazvin",
  "Qom",
  "Razavi Khorasan",
  "Semnan",
  "Sistan and Baluchestan",
  "South Khorasan",
  "Tehran",
  "West Azerbaijan",
  "Yazd",
  "Zanjan"
];

autocomplete(document.getElementById("myInput"), arr);
function autocomplete(inp, arr) {

  inp.addEventListener("input", function(e) {
      var a, b, c, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      a = document.createElement("DIV");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (var i = 0; i < arr.length; i++) {
      
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.setAttribute("class", "item");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
      if(!b){

        c = document.createElement("DIV");
        c.setAttribute("class", "not-found");
        c.innerHTML = "Not Found!‍";
        a.appendChild(c);
      }
   
  });
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      
      
    }
  }
}
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});


}
