let container = getSelector("#container");
let write = getSelector("#write");
let keyboard = getSelector("#keyboard");
let del = getSelector("li.delete");
let capsLock = getSelector("li.capslock");
// let space = getSelector("li.space");
write.focus()

keyboard.addEventListener("click", function(event) {
  let letter = event.target.closest("li.letter");
  let symbollOff = event.target.closest("li.symbol .off");
  let symbollOn = event.target.closest("li.symbol.active .on");
  let space =  event.target.closest("li.space");
  let enter =  event.target.closest("li.return");
  if (letter != null) {
    let key = letter.textContent;
    write.textContent += key
  }
  if (space != null) {
    write.textContent += " "
  }
  if (enter != null) {
    write.textContent += "\n"
  }
  if (symbollOff != null) {
    write.textContent += symbollOff.textContent
  }
  if(symbollOn != null) {
    write.textContent += symbollOn.textContent
  }
  event.stopPropagation;
})
del.addEventListener("click", function(event) {
  let context = write.textContent;
  write.textContent = context.substring(0, context.length - 1);
  event.stopPropagation;
})
capsLock.addEventListener("click",function() {
    let li = [...keyboard.querySelectorAll("li")];
    li.filter( function(elem) {
      if(elem.classList.contains("letter")) {
        elem.classList.toggle("textTranform");
        elem.innerHTML = elem.innerHTML.toLocaleUpperCase();
      }
      if ( !elem.classList.contains("textTranform")) {
        elem.innerHTML = elem.innerHTML.toLowerCase();
      }
    })
    li.filter( function(elem) {
      if(elem.classList.contains("symbol")) {
        elem.classList.toggle("active");
      }
    })
})



function getSelector(selector) {
  return document.querySelector(selector)
}