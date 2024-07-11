// closures
// function can return function   

function func(){
    let counter =  0;
    return function(){
        if(counter < 1){
            console.log("hi you called me");
            counter++;
        }
        else {

            console.log("me ek bar call ho chuka hu")
        }
    }
}
const myfunc = func();
myfunc();
myfunc();
