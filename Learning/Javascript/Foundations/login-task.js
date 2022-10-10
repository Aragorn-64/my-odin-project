
function checkCancelled(input){
    if(input == null || input == ""){
        alert("Cancelled");
        return true;
    }
    else return false;
}

function askPass(){
    let pass = prompt("Enter password");
    if(!checkCancelled(pass)){
        if(pass == "TheMaster") alert("Welcome!");
        else alert("Wrong password");
    }
}

function askUser(){
    let user = prompt("Who's there?");
    if(!checkCancelled(user)){
        if(user != "Admin"){
            alert("I don't know you");
        }
        else{
            askPass();
        }
    }
}

//actually calling
askUser();

