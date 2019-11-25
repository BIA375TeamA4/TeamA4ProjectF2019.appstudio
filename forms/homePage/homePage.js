let currentUser = localStorage.getItem("username");

homePage.onshow=function(){
    let queryItem1 = "SELECT user_id FROM user WHERE username = " + '"' + currentUser + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
    userID = JSON.parse(req1.responseText)
    console.log(userID)
    localStorage.setItem("userID", userID)
}

let currentUserID = localStorage.getItem("userID")


/* STILL NEED MORE CONTENT */


btnMap.onclick=function(){
  ChangeForm(map)
}

btnMyList.onclick=function(){
  ChangeForm(myList)
}

btnEntry.onclick=function(){
  ChangeForm(entries)
}

btnProfile.onclick=function(){
  ChangeForm(profilePage)
}