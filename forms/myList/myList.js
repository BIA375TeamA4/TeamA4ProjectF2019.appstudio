
myList.onshow=function(){
    let queryItem1 = "SELECT name, location, description, date FROM user_bucket_list WHERE user_id = " + '"' + localStorage.getItem("userID") + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
    if (req1.status == 200) { 
       results = JSON.parse(req1.responseText)
       console.log(results)
       localStorage.setItem("itemData", JSON.stringify(results))
    }     

}

var data1 = JSON.parse(localStorage.getItem("itemData"))


var listColumns = [  
            {title: "Name"},
            {title: "Location"},
            {title: "Description"},
            {title: "Date"}
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


dtblListItems.onclick = function(event) { 
  if(typeof(event.target._DT_CellIndex) != "object" ) { 
     return }
  var row,col
  row = event.target._DT_CellIndex.row
  col = event.target._DT_CellIndex.column
  ChangeForm(entries)
  dpdn
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