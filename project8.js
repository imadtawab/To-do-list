/*
        espace
        , 
        => 
*/
// input
const form = document.getElementById("form");
const main = document.getElementById("main");
const input = document.querySelector("input");
form.addEventListener("click", (eo) => {
  eo.preventDefault();
  if (eo.target.className == "icon-upload3 dow icon") {
    main.innerHTML += `
    <div class="container">
            <div class="icon-star-full icon star"></div>
            <div class="task">${input.value}</div>
            <div class="parent">
                    <span class="icon-bin corbeil icon"></span>
                    <span class="icon-angry2 angry icon"></span>
            </div>
        </div>
 `;
 input.value=""
  }
});

// heart

/*
        espace
        , 
        => 
*/

main.addEventListener("click", (eo) => {
  if
  
  (eo.target.className == "icon-angry2 angry icon") {
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("task")[0]
      .classList.add("textdecoration");
    eo.target.parentElement.innerHTML += `<span class="icon-heart heart icon"></span>`;
  }
  
   else if (eo.target.className == "icon-bin corbeil icon") {
    eo.target.parentElement.parentElement.remove();
  } 
  
  else if (eo.target.className == "icon-heart heart icon") {
    eo.target.classList.add("dn");
    eo.target.parentElement.parentElement
      .getElementsByClassName("task")[0]
      .classList.remove("textdecoration");
    eo.target.parentElement.innerHTML += `<span class="icon-angry2 angry icon"></span>`;
  }
  
  else if (eo.target.className == "icon-star-full icon star") {
    eo.target.classList.add("orange-star");
    eo.target.classList.remove("star");
    
    main.prepend(eo.target.parentElement);

  } 
  
  else if (eo.target.className == "icon-star-full icon orange-star") {
        eo.target.classList.remove("orange-star");
        eo.target.classList.add("star");
      }
      
});
