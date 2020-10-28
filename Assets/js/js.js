function openNav() {
    document.getElementById("burger-main").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("burger-main").style.width = "0";
  }
  
  function closeDropDown(id, nagative) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById(nagative).innerHTML = '-'
    } else {
      x.style.display = "none";
      document.getElementById(nagative).innerHTML = '+'
    }
  }
  function closeDropDown1(id, nagative1) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById(nagative1).innerHTML = '-'
    } else {
      x.style.display = "none";
      document.getElementById(nagative1).innerHTML = '+'
    }
  }
  function closeDropDown2(id, nagative2) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById(nagative2).innerHTML = '-'
    } else {
      x.style.display = "none";
      document.getElementById(nagative2).innerHTML = '+'
    }
  }
  function closeDropDown3(id, nagative3) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
      x.style.display = "block";
      document.getElementById(nagative3).innerHTML = '-'
    } else {
      x.style.display = "none";
      document.getElementById(nagative3).innerHTML = '+'
    }
  }