/*
What does the result of the query that is returned to the app 
look like? 

We'll take a look at a demo that uses a SELECT query to get the names
of all the pets of a type chosen by the user. 
The algorithm:
 1. get the 'type' of pet the user wants to check the database for.
 2. create a 'SELECT WHERE' query 
 3. run an AJAX call, which runs the query on the database server.
    > if the transit of the request works, parse the results returned. 
      > if the results are empty, that means there are no pets of 
        that type in the DB
      > if the results are not empty, show the results
    > or if the transit of the request didn't work, tell the user there
      was an error in transit


btnSubmit2.onclick=function(){
     // 2. create a 'SELECT WHERE' query
    let check = inptType2.value
    let query = "SELECT * FROM pets WHERE petType = " + '"' + check + '"'  
    
    // 3. run an AJAX call, which runs the query on the database server.
    req1 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=clc90595&pass=BIA375&database=clc90595&query=" + query)
    
    if (req1.status == 200) { //transit worked.
        /* req1.responseText is a JSON object with the results of the 
         query in it, among other things. 
         In order to convert responseText into a nicer format that 
         you can work with - 
           parse it from the JSON object it is (JSON = JS Object Notaton) 
           into one big array that holds many little arrays - 
           each little array holds one row of the data that was 
           returned from the database table. 
    
        results = JSON.parse(req1.responseText)
        console.log(results)   // this shows the array of arrays
        
    if (results.length == 0)   // the array is empty so no results returned             
        NSB.MsgBox("There are no pets of that type.")
    else {        
       This is what results look like: one big array with 3
         little arrays: 
         [[47,"Paul","dog"],[23,"Marty","dog"],[34,"Jack","horse"]]  
         array 0             array 1            array 2
         So the first array (array index 0) holds the first row of 
         data returned: [47,"Paul","dog"] - it has 3 indices
                   item: 0    1      2
         
         So to get the name 'Paul':
            results[0][1]   (array 0, within that array, item 1)
         Let's take a look:
 
        console.log("the parsed JSON is " + results)
        console.log("eg. temp[0] or first row in big array is " + results[0])
        console.log("to get to Paul, need results[0][1]: " + results[0][1])

        // So now output the names of all the dogs
        let message = ""
        for (i = 0; i <= results.length - 1; i++)
            message = message + results[i][1] + "\n"
        txtResults.value = message
      } 

  } else
        //transit error - Handle that with an error message.
        NSB.MsgBox("Error code: " + req1.status)
}
*/