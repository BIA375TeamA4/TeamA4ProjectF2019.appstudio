/* SELECT ITEM DROPDOWN MUST DISPLAY EXISTING ITEMS FOR USER
   LABEL GROUP (or other item) MUST DISPLAY EXISTING ENTRIES FOR ITEM SELECTED */

entries.onshow=function(){
    let query10 = "SELECT item.name FROM item JOIN user ON item.user_id = user.user_id WHERE user.username = " + '"' + localStorage.getItem("username") + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query10)
      if (req1.status == 200) { 
        results9 = JSON.parse(req1.responseText)
        console.log(results9)
        dpdnSelectItem.clear()
        for (i = 0; i <= results9.length - 1; i++)
        dpdnSelectItem.addItem(results9[i])
}
}

dpdnSelectItem.onclick=function(selection1){
   if (typeof(selection1) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    dpdnSelectItem.value = selection1   // make dropdown show choice user made
    console.log("Your selection is " + selection1)
    let query8 = "SELECT entry FROM item_entries WHERE name = " + '"' + selection1 + '"'
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=tpm62822&pass=Beta#118&database=375groupa4&query=" + query8)
    if (req1.status == 200) { 
       results = JSON.parse(req1.responseText)
        lstEntries.clear()
       for (i = 0; i <= results.length - 1; i++)
        lstEntries.addItem(results[i],"active","default")
    }   
}
}

/* var data2 = JSON.parse(localStorage.getItem("entryData")

var listColumns1 = [  
            {title: "Entry"}
        ]

function Main1() { 
  updateTable1()
}

function updateTable1() { 
  dtblListEntries.settings.columns = listColumns1
  dtblListEntries.settings.data = JSON.parse(localStorage.getItem("entryData"))
  dtblListEntries.build()
}

function loadTable1() {  
  var table1 = $("#dtblListIEntries").DataTable()
  table.rows.add(dtblListEntries.settings.data).draw()
  }

}
}

dtblListEntries.onclick = function(event1) { 
  if(typeof(event1.target._DT_CellIndex) != "object" ) { 
     return }
  var row,col
  row = event1.target._DT_CellIndex.row
  col = event1.target._DT_CellIndex.column
  NSB.MsgBox("Value is "  +  JSON.parse(localStorage.getItem("entryData"))[row][col]  +  ".")
}


*/

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



