myList.onshow=function(){
    let queryItem1 = "SELECT name, location, description, date FROM user_bucket_list WHERE user_id = " + '"' + currentUserID + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
    if (req1.status == 200) { 
       results = JSON.parse(req1.responseText)
       console.log(results)
    }     
}
   

/* ADD CONTAINER TO DISPLAY ALL EXISTING ITEMS ON LIST 

var itemJson = JSON.stringify(data1)    // put data in another format - use later

var listColumns = [  
            {title: "Name"},
            {title: "Location"},
            {title: "Description"},
            {title: "Date"}
            // {title: "Completed?"}
        ]
*/

btnCreateNewItem.onclick=function(){
  ChangeForm(newItem)
}


btnHome2.onclick=function(){
  ChangeForm(homePage)
}

btnMap2.onclick=function(){
  ChangeForm(map)
}

btnEntry2.onclick=function(){
  ChangeForm(entries)
}

btnProfile2.onclick=function(){
  ChangeForm(profilePage)
}