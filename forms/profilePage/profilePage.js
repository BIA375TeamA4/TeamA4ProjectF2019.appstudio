
profilePage.onshow=function(){
    let queryItem5 = "SELECT first_name, last_name, username, city, state FROM user WHERE user_id = " + '"' + currentUserID + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem5)
    if (req1.status == 200) { 
       results = JSON.parse(req1.responseText)
       console.log(results)
       localStorage.setItem("userInfo", results)
    }     
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