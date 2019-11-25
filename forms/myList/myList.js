myList.onshow=function(){
    let queryItem1 = "SELECT name, location, description, date FROM user_bucket_list WHERE user_id = " + '"' + currentUserID + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
  if (req1.status == 200) { 
       results = JSON.parse(req1.responseText)
       console.log(results)
       localStorage.setItem("itemData", JSON.stringify(results))
    }     
}

var data1 = JSON.parse(localStorage.getItem("itemData"))
console.log(data1)

/* ADD CONTAINER TO DISPLAY ALL EXISTING ITEMS ON LIST 
var itemJson = JSON.stringify(data1)    // put data in another format - use later

var listColumns = [  
            {title: "Name"},
@@ -19,7 +18,32 @@ var listColumns = [
            {title: "Date"}
            // {title: "Completed?"}
        ]
*/

var listColumns = [               // column headings
            {title: "Name"},
            {title: "Location"},
            {title: "Description"},
            {title: "Date"},
        ]

function Main() { 
  updateTable()
}

function updateTable() { 
  dtblListItems.settings.columns = listColumns
  dtblListItems.settings.data = data1
  dtblListItems.build()
}

function loadTable() {  
  var table = $("#dtblListItems").DataTable()
  table.rows.add(dtblListItems.settings.data).draw()
}





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
