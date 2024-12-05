function signup(userName){
    let usernames=["Bob","Charlie","David","Anthony","John"]; 
    for(i=0;i<usernames.length;i++){ //this will check username present  in usernames array or not 
      if(userName==usernames[i]){
        return "User Already Regsistered, Please Login" ; // if username present 
      }
    }
     
        usernames.push(userName); //if username not present add that username in to usernames array
        return "Signup Sucessfull, Please Login";
      
    
  }
  console.log(signup("Priya"));// this will be added in the usernames array and will get message Signup Sucessfull, Please Login
  console.log(signup("Anthony"));// User Already Regsistered, Please Login
  
  