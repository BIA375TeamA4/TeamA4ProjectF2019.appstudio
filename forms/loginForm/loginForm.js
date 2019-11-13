btnLogin.onclick=function(){
     // create a 'SELECT WHERE' query
    let username = inptUsername.value
    let password = inptPassword.value
    let query = "SELECT * FROM user WHERE username = " + '"' + username + '"' + "AND password = " + '"' + password + '"'
    
    // run an AJAX call, which runs the query on the database server.
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query)
    
    if (req1.status == 200) { //transit worked.
        /* req1.responseText is a JSON object with the results of the 
         query in it, among other things. 
         In order to convert responseText into a nicer format that 
         you can work with - 
           parse it from the JSON object it is (JSON = JS Object Notaton) 
           into one big array that holds many little arrays - 
           each little array holds one row of the data that was 
           returned from the database table. 
        */
        results = JSON.parse(req1.responseText)
        console.log(results)   // this shows the array of arrays
        
    if (results.length == 0)   // the array is empty so no username or password is present for this user.         
        lblNoAccount.value = "There is no username or password associated with this account, please click Create New Account."
    else {        
        /* 
        This is what results look like: one big array with 3
         little arrays: 
         [[47,"Paul","dog"],[23,"Marty","dog"],[34,"Jack","horse"]]  
         array 0             array 1            array 2
         So the first array (array index 0) holds the first row of 
         data returned: [47,"Paul","dog"] - it has 3 indices
                   item: 0    1      2
         
         So to get the name 'Paul':
            results[0][1]   (array 0, within that array, item 1)
         Let's take a look:
        */
        console.log("the parsed JSON is " + results)
        /*
        console.log("eg. temp[0] or first row in big array is " + results[0])
        console.log("to get to Paul, need results[0][1]: " + results[0][1])
        */
        ChangeForm(homePage)
       
       
       // So now output the names of all the dogs
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}

btnCreateNewAccount.onclick=function(){
   ChangeForm(createNewAccount)
}
