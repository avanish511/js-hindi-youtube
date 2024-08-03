

(function() {
    console.log('IIFE');
})();
//important to close with semi-colon

(()=>{
    console.log('IIFE in arrow function');
})();


((name)=>{
    console.log(`Hi ${name}`);
})("Avanish")
