btnSubmitInformation.onclick=function(){
    let createFirstName = inptCreateFirstName.value
    let createLastName = inptCreateLastName.value
    let createEmail = inptCreateEmail.value
    let createCity = inptCreateCity.value
    let createState =  inptCreateState.value
    let createZipcode = inptCreateZipcode.value
    let createUsername = inptCreateUsername.value
    let createPassword = inptCreatePassword.value
    let verifyPassword = inptCreatePassword.value
    let blankValue = ""
    let query2 = "SELECT * FROM user WHERE username = " + '"' + createUsername + '"' + " AND password = " + '"' + createPassword + '"'
    let query3 = "INSERT into user (first_name, last_name, email, city, state, username, password) values (" + "'"+ createFirstName + "', '" + createLastName + "', '" + createEmail + "', '" + createCity + "', '" + createState + "', '" + createUsername + "', '" + createPassword + "'" + ");"
    
  if (createUsername != blankValue && createPassword != blankValue && verifyPassword != blankValue && createPassword == verifyPassword) {
        req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query2)
        if (req1.status == 200) { 
              results = JSON.parse(req1.responseText)
              console.log(results)
              if (results.length == 0) {
                    req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query3)
                    if (req2.status == 200) {
                          req3 =  Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query2)
                           if (req1.status == 200) { 
                                  results2 = JSON.parse(req3.responseText)
                                  console.log(results2)
                           }
                     }
               }      
        } else
    lblSubmitAllInformation1.value = "Please submit all information and ensure proper verification of password."
}
  
}


      
      
      
      
      
      
      
      
      
      /* if (createPassword !== verifyPassword

     let query = "INSERT into user (first_name, last_name, email, city, state, username, password) values ("createFirstName + "'" + createLastName + "'" + createEmail + "'" + createCity + "'" + createState + "'" + createUserName + "'" + createPassword + "'" ")
    
       // let query = "SELECT * FROM user WHERE username = " + '"' + username + '"' " AND password = " + '"' + password + '"'

    
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query)
    
    if (req1.status == 200) { 
        results = JSON.parse(req1.responseText)
        console.log(results)  
        
    if (results.length == 0)               
        NSB.MsgBox("There are no pets of that type.")
      else {        
        
        console.log("the parsed JSON is " + results)
        console.log("eg. temp[0] or first row in big array is " + results[0])
        console.log("to get to Paul, need results[0][1]: " + results[0][1])

        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}




btnBackLogin.onclick=function(){
  ChangeForm(loginForm)
}
*/  

btnBackCreateNewAccount.onclick=function(){
  ChangeForm(createNewAccount)
}
