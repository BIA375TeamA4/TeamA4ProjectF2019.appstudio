
accountCreationConfirm.onshow=function(){
    let username = inptCreateUsername.value
    lblConfirmation.value = "Your account has been created, " + username + ". Please press continue."
}

Button3.onclick=function(){
  ChangeForm(loginPage)
}
