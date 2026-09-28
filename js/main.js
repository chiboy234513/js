const test = document.getElementById("test");
const msg =  document.querySelector(".message")

test.addEventListener("click",function(){
    alert("Heeyyyyy Wow! JS Amaka");
    console.log("Welcome to Javascript");

    msg.innerHTML = "Welcome to the world of Javascript";
});


const testInput = document.querySelector(".testInput");
const testInBtn = document.querySelector("#testInBtn");

testInBtn.onclick = function(){
    testInput.value = "Wow!!! working";
}


console.log( window );

// const tall = window.confirm("Are you sure you are tall? ","")
// const tall = window.prompt("Are you sure you are tall? ","")

// console.log( tall );
// let Attempt = 0;
const clBtn = document.querySelector(".close");
clBtn.addEventListener("click",function(){
   let confirmClose = confirm("Are you sure you wqn to close this window?");
    if(confirmClose){ 
        window.close()
    }else{
        console.log(window)
    }
})



const docList = document.all();
console.log(docList)
 


