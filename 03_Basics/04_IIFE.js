// IIFE => Immediately Invoked Function Expressions...


(function chiya (){
    console.log("Database connection")
// named IIFE
})();
// to reduce the pollution of global scope variable IIFE is used..


( () =>{
    console.log(`Arrow funnction with IIFE`);
})(); // unnamed IIFE
