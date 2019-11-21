let currentUser = localStorage.getItem("username");



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