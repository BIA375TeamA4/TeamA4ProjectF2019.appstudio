btnLogin.onclick=function(){
     // create a 'SELECT WHERE' query
    let username = inptUsername.value
    let password = inptPassword.value
    let query1 = "SELECT * FROM user WHERE username = " + '"' + username + '"' + "AND password = " + '"' + password + '"'
    
    // run an AJAX call, which runs the query on the database server.
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query1)
    
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)   
        
    if (results.length == 0)   
        lblNoAccount.value = "There is no username or password associated with this account, please click Create New Account."
    else {        
        ChangeForm(homePage)
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}

btnCreateNewAccount.onclick=function(){
   ChangeForm(createNewAccount)
}
