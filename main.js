var names_of_people = [];
names_of_people.sort();

function add()
{
var htmldata;
var GuestName = document.getElementById("add1").value;
names_of_people.push(GuestName);

htmldata = "<ol class='list' height ='600'> "
for(var i=0;i<names_of_people.length;i++){
    htmldata=htmldata+'<li>' + names_of_people[i] + '</li>'
}

 htmldata=htmldata+"</ol>"
 document.getElementById("list1").innerHTML = htmldata;





}






function show(){
    var htmldata;
    htmldata = "<ol class='showlist' height ='600'> "
    
    for(var i=0;i<names_of_people.length;i++){
        htmldata=htmldata+'<li>' + names_of_people[i] + '</li>'
    }
    
     htmldata=htmldata+"</ol>"
     document.getElementById("showlist").innerHTML = htmldata;
    
    }



    function sort()
    {
    var htmldata;
    names_of_people.sort();
    htmldata = "<ol class='list' height ='600'> "
    
    for(var i=0;i<names_of_people.length;i++){
        htmldata=htmldata+'<li>' + names_of_people[i] + '</li>'
    }
    
     htmldata=htmldata+"</ol>"
     document.getElementById("sortlist").innerHTML = htmldata;
    
    
    
    
    
    }    

    function search()
    {
         var s= document.getElementById("search").value;
         var found=0;
         var j;
         for(j=0; j<names_of_people.length; j++)
         {
             if(s==names_of_people[j]){
                  found=found+1;
             }
         }
         document.getElementById("searchlist").innerHTML="name found  "+found+" time/s";
         console.log("found name "+found+"time/s");
    }