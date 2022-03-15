export function strictEquals(a, b){
    if(isNaN(a) && isNaN(b)){
        //console.log("Rule Exception");
        return false;
    }
    if(Object.is(a, 0) && Object.is(b,-0)){

        //console.log("Rule Exception");
        return true;
    }
    if(Object.is(a, -0) && Object.is(b,0)){
        //console.log("Rule Exception");
        return true;
    }
        
        return Object.is(a,b);
        
}




//console.log("For the comparation with " + a + " and " + b + "the Result is : "+ result );
//        return result;