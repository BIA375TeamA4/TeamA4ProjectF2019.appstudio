btnNext1.onclick=function(){
    let createFirstName = inptCreateFirstName.value
    let createLastName = inptCreateLastName.value
    let createEmail = inptCreateEmail.value
    let createCity = inptCreateCity.value
    let createState =  inptCreateState.value
    let createZipcode = inptCreateZipcode.value
    let blankValue = ""
  
  if (createFirstName != blankValue && createLastName != blankValue && createEmail  != blankValue && createCity != blankValue && createState != blankValue && createZipcode != blankValue) {
    ChangeForm(createNewAccount1)
  } else
    lblSubmitAllInformation.value = "Please submit all information"

}


btnBackLogin.onclick=function(){
  ChangeForm(loginForm)
}
