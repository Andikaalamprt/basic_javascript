var dalem = 31;
var manjat = 7;
var kepeleset = 2;
var hari = 0;
var progress = 0;

while(progress <= dalem){
    hari += 1;
    progress += manjat;
   
    console.log("Hari ke-", hari, "=", progress)
    if(progress >= dalem){
        break;
    }
    progress -= kepeleset;

}
