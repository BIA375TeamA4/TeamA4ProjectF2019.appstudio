btnSubmitCreateInfo.onclick=function(){
    let createFirstName = inptCreateFirstName.value
    let createLastName = inptCreateLastName.value
    let createEmail = inptCreateEmail.value
    let createPhone = inptCreatePhoneNumber.value
    let createCity = inptCreateCity.value
    let createState = inptCreateState.value
    let createUserName = inptCreateUserName.value
    let createPassword = inptCreatePassword1.value
    let verifyPassword = inptCreatePassword2.value

    let query = "INSERT into user (first_name, last_name, email, phone_number, city, state, username, password) values ('createFirstName', createLastName, createEmail, )"
    
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




Button1.onclick=function(){
  ChangeForm(___)
}
