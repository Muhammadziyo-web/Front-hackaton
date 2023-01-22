const $ = function (item) {
    return document.querySelector(item);
  };
  
  // Selector all
  const $a = function (item) {
    return document.querySelectorAll(item);
  };
  
  // Dynamic element
  const createElement = function (tagName, className, content) {
    const newElement = document.createElement(tagName);
  
    if (className) {
      newElement.setAttribute("class", className);
    }
  
    if (content) {
      newElement.innerHTML = '${content}';
    }
  
    return newElement;
  };
  
let categoryArr =
  "Bedroom Dinning Room Meeting Room Workspace Living Room Kitchen Living Space".split(
    " "
  );
  let currentTab

categoryArr.forEach((e) => {
  let li = document.createElement("li");
  li.setAttribute("id", "tabs");
  li.innerHTML = e;
  category.appendChild(li);
});
tabs = document.querySelectorAll("#tabs");

tabs[0].classList.add("active-tab");
console.log(tabs);

tabs.forEach((e,i) => {
  e.addEventListener("click", (ev) => {
    document.querySelector(".active-tab").classList.remove("active-tab");
currentTab = i
changeTab()
console.log(currentTab);
    ev.target.classList.add("active-tab");
  });
});

let tabContent =document.querySelector('.tab-content')

function changeTab(){

    if(!currentTab){
        tabContent.innerHTML =''
        tabContent.innerHTML = `
        <span id="imgHover">
        <img  src="images/Image (1).png" alt="img" />
        <h1 id="spanH1">Bedroom</h1>
        <button id="spanBtn">Explore</button>
        </span>
        <img  src="images/Image Container2.png" alt="img" />
        <img src="images/Image Container3.png" alt="img" />
        <img src="images/Image Container4.png" alt="img" />
        <img src="images/Image Container5.png" alt="img" />
        <img src="images/Image Container6.png" alt="img" />
        `
        
        imgHover.addEventListener("mouseover", (e) => {
            spanH1.style.display = "block";
            spanBtn.style.display = "block";
            e.target.style.boxShadow ='0px 4px 50px rgba(0, 0, 0, 0.15)'
        });
        
        imgHover.addEventListener("mouseout", (e) => {
            e.target.style.boxShadow ='none'
            spanH1.style.display = "none";
            spanBtn.style.display = "none";
        });
        
    }else{
        console.log('ji');
        tabContent.innerHTML=''
        tabContent.innerHTML = `
        <h1 class="notFound">${categoryArr[currentTab]}</h1>
        `
    }
}
changeTab()

//MODAL

closemodal.addEventListener("click", () => {
    $(".modal-window").style.display = "none";
  });
  $(".login").addEventListener("click", () => {
    $(".modal-window").style.display = "block";
  });
    