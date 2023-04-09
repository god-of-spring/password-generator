"use strict";

document.getElementById("generate").addEventListener("click", function passwordGen() {
    
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    
    let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];
    
    let ulength = document.getElementById("length").value;
    console.log(ulength);
    
    let commonArray = [...arr_en, ...arr_EN];
    console.log(commonArray);
    
    if (document.querySelector(".numbers__checkbox").checked == true) {
        commonArray.unshift(...arr_num);
    }
    
    if (document.querySelector(".symbols__checkbox").checked == true) {
        commonArray.unshift(...arr_symb);
    }
    
    function rndmElem(arr) {
        let rndmIndex = Math.floor(Math.random() * commonArray.length); 
        return arr[rndmIndex];
    }
    
    let password = "";
    
    for (let i = 0; i <= ulength; i++) {
        password += rndmElem(commonArray);
    }
    
    console.log(password);
            
});