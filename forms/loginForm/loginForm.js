btnLogin.onclick=function(){
    let username = inptUsername.value
    let password = inptPassword.value
    localStorage.setItem("username", username)
    let query1 = "SELECT * FROM user WHERE username = " + '"' + username + '"' + "AND password = " + '"' + password + '"'

    // run an AJAX call, which runs the query on the database server.
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query1)
        
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)
        localStorage.setItem("firstName", results[0][1])
        localStorage.setItem("lastName", results[0][2])
        localStorage.setItem("city", results[0][4])
        localStorage.setItem("state", results[0][5])
        
    if (results.length == 0)   
        lblNoAccount.value = "There is no username or password associated with this account, please click Create New Account."
    else {        
        ChangeForm(homePage)
      } 
   } 
}


btnCreateNewAccount.onclick=function(){
  ChangeForm(createNewAccount)
}

loginForm.onshow=function(){
  inptUsername.value = ""
  inptPassword.value = ""
}
