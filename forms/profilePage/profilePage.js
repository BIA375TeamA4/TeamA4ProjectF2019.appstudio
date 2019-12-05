profilePage.onshow=function(){
 lblProfileName.value =  "Full Name: " + localStorage.getItem("firstName") + " " +  localStorage.getItem("lastName")
 lblProfileUsername.value = "Username: " + localStorage.getItem("username")
 lblProfileCity.value = "City: " + localStorage.getItem("city") 
 lblProfileState.value = "State: " + localStorage.getItem("state") 
 
}

var userInfo = localStorage.getItem("userInfo")





btnSignOut.onclick=function(){
  ChangeForm(loginForm)
}



btnHome4.onclick=function(){
  ChangeForm(homePage)
}

btnMap4.onclick=function(){
  ChangeForm(map)
}

btnMyList4.onclick=function(){
  ChangeForm(myList)
}

btnEntry4.onclick=function(){
  ChangeForm(entries)
}