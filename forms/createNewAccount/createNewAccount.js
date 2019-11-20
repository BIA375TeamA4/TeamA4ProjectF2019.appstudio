

btnNext1.onclick=function(){
    let createFirstName = inptCreateFirstName.value
    let createLastName = inptCreateLastName.value
    let createEmail = inptCreateEmail.value
    let createZipcode = inptCreateZipcode.value
    let blankValue = ""
  
  if (createFirstName != blankValue && createLastName != blankValue && createEmail  != blankValue && createZipcode != blankValue) {
    ChangeForm(createNewAccount1)
  } else
    lblSubmitAllInformation.value = "Please submit all information"

}


btnBackLogin.onclick=function(){
  ChangeForm(loginForm)
}
