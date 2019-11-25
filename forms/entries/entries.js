/* SELECT ITEM DROPDOWN MUST DISPLAY EXISTING ITEMS FOR USER
   LABEL GROUP (or other item) MUST DISPLAY EXISTING ENTRIES FOR ITEM SELECTED */

entries.onshow=function(){
    let queryItem1 = "SELECT location, entry FROM item_entries WHERE user_id = " + '"' + currentUserID + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + queryItem1)
    if (req1.status == 200) { 
       results = JSON.parse(req1.responseText)
       console.log(results)
       localStorage.setItem("entryData", JSON.stringify(results))
    }     
}
   
var data2 = JSON.parse(localStorage.getItem("entryData"))


var entryColumns = [  
           {title: "Trip Name"},
          {title: "Entry Info"}
        ]

function entryMain() { 
  updateEntryTable()
}

function updateEntryTable() { 
  dtblListEntries.settings.columns = entryColumns
  dtblListEntries.settings.data = data2
  dtblListEntries.build()
}

function loadEntryTable() {  
  var table = $("#dtblListEntries").DataTable()
  table.rows.add(dtblListEntries.settings.data).draw()
}

dtblListEntries.onclick = function(event) { 
  if(typeof(event.target._DT_CellIndex) != "object" ) { 
     return }
  var row,col
  row = event.target._DT_CellIndex.row
  col = event.target._DT_CellIndex.column
  NSB.MsgBox("Value is "  +  data2[row][col]  +  ".")
}




btnCreateNewEntry.onclick=function(){
  ChangeForm(newEntry)
}


btnHome3.onclick=function(){
  ChangeForm(homePage)
}

btnMap3.onclick=function(){
  ChangeForm(map)
}

btnMyList3.onclick=function(){
  ChangeForm(myList)
}

btnProfile3.onclick=function(){
  ChangeForm(profilePage)
}

