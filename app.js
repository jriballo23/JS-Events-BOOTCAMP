// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click


let clickBtn =() => {console.log("has pulsado click")}

let overkBtn =() => {console.log("has pasado sobre el boton")}

document.getElementById("btnToClick").addEventListener("click",clickBtn)


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector(".focus").addEventListener("focus",clickBtn)

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.querySelector(".value").addEventListener("input",clickBtn)

// otro ejemplo con el evento de mouseover " cuando pasas en rato sobre el elemento"

document.querySelector(".hover").addEventListener("mouseover",clickBtn)