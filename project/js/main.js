import "../styles/style.css"
import { array } from "./array"
import { DOMSelectors } from "./dom"

cardcreate(array)

const boxarray = Array.from(DOMSelectors.box)
let oldBoxArray = boxarray

function cardcreate(l){
  l.forEach(box => {
    document.querySelector(".container").insertAdjacentHTML(
      "beforeend",
      `<div class="box" id="itemholder">
      <h2>Price: ${box.currency}${box.price}</h2>
     <img class="${box.border}" src="d/${box.image}.jpg">
     <h2>${box.tagline}</h2>
 </div> `
  );}
  )}

  DOMSelectors.price.addEventListener("click", function(event) {
    del();
    priceCheck();
    themeReset();
  })

  DOMSelectors.whalen.addEventListener("click", function(event) {
    del();
    bestDollar();
    themeReset()
  })


  DOMSelectors.washington.addEventListener("click", function(event) {
    del();
    wash();
    themeReset();
  })

  DOMSelectors.fight.addEventListener("click", function(event) {
    del();
    fightCheck();
    themeReset()
  })
  

  DOMSelectors.theme.addEventListener("click", function(event) {
    theme()
  })
  
  
DOMSelectors.restore.addEventListener("click", function(event) {
  del()
  restoreBoxes()
  themeReset()
})


  function themeReset(){
    theme()
    theme()
  }
        
  function wash(){
    let may = array.filter(box => box.president.includes("Y"));
    console.log(may)
    cardcreate(may)
  }

  
  function fightCheck(){
    let may = array.filter(box => box.fight.includes("Y"));
    console.log(may)
    cardcreate(may)
    }

  function bestDollar(){
    let may = array.filter(box => box.name.includes("Whalen"));
    console.log(may)
    cardcreate(may)
    }
    
  function priceCheck(){
  let may = array.filter(box => box.price > 50);
  console.log(may)
  cardcreate(may)
  }


  function theme(){
    if(document.body.classList.contains("main")){
      invert()
      }
      else{      
          main()
      }
      }


  function invert(){
    const boxarray = Array.from(DOMSelectors.box)
    const cArray = Array.from(DOMSelectors.container)
    cArray.forEach(container =>{
        container.classList.add("containerI")
        container.classList.remove("containerM")
    })
    boxarray.forEach(box => {
        box.classList.add("boxI")
        box.classList.remove("boxM")
        document.body.classList.remove("main")
        document.body.classList.add("invert")
  })
  }
  
  function main(){
    const boxarray = Array.from(DOMSelectors.box)
    const cArray = Array.from(DOMSelectors.container)
    cArray.forEach(container =>{
        container.classList.add("containerM")
        container.classList.remove("containerI")
    })
    boxarray.forEach(box => {
        box.classList.add("boxM")
        box.classList.remove("boxI")
        document.body.classList.remove("invert")
        document.body.classList.add("main")
  })
  }

  function del(){
    let current = Array.from(DOMSelectors.box)
    console.log(current)
    current.forEach(box =>
      box.remove())
  }
  
  function restoreBoxes(){
    oldBoxArray.forEach(box => {
      document.querySelector(".container").insertAdjacentElement(
        "beforeend",
        box
    );
    }
    )
    }
  