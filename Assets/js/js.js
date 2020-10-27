function openNav() {
    document.getElementById("burger-main").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("burger-main").style.width = "0";
  }
  
  function openDropDown(id, id2, id3 ) {
    let element = document.getElementById(id);
    document.getElementById(id2).classList.add("dropUp")
    document.getElementById(id3).classList.add("dropDown")
    element.classList.add("dropUp");
  }
  
  function closeDropDown(id, id2, id3) {
    let element = document.getElementById(id);
    document.getElementById(id2).classList.add("dropDown")
    document.getElementById(id3).classList.add("dropUp")
    element.classList.add("dropDown");
  }