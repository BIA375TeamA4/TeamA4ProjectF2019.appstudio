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
    let query2 = "SELECT * FROM user WHERE username = " + '"' + createUsername + '"'
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
                              localStorage.setItem("first_name",  createFirstName)
                              localStorage.setItem("last_name",  createLastName)
                              ChangeForm(accountCreationConfirm)
                        }
                  } else
                    lblSubmitAllInformation1.value = "Please submit all information "
              } else
                lblSubmitAllInformation1.value = "This username is already taken."
          } else
            lblSubmitAllInformation1.value = "Please submit all information and ensure proper verification of password."
      } else
        lblSubmitAllInformation1.value = "Please submit all information and ensure proper verification of password."
  }
      
btnBackCreateNewAccount.onclick=function(){
  ChangeForm(createNewAccount)
}
