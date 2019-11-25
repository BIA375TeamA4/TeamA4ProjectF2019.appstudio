NAME = localStorage.getItem("first_name") + " " + localStorage.getItem("last_name")
console.log(NAME)

accountCreationConfirm.onshow=function(){
  lblConfirmation.value = "Your account has been created, " + NAME + ". Please press continue."
}

Button3.onclick=function(){
  ChangeForm(loginPage)
}
