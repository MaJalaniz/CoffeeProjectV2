
//----------------------------------------------------------------------------------------------
        //Coffee names
let coffees = 
   [{id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light' },
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental' , roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];
/*
function entire(){
    for (var i=0; i < coffees.length ;i++)
         document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[i].name + "</strong>" + " " + "<i>" + coffees[i].roast + "</i>" + "</div>" ;
         //console.log(give());
         //MANIPULATE THIS FUNCTION INSTEAD OF THE GIVE() TO DISPLAY COFFEES
    }
    */
    function entire(){
        for (var i=0; i < coffees.length ;i++){
        let y = document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[i].name + "</strong>" + " " + "<i>" + coffees[i].roast + "</i>" + "</div>" ;
        }
        //console.log(give());
        //MANIPULATE THIS FUNCTION INSTEAD OF THE GIVE() TO DISPLAY COFFEES
           var x = document.getElementById("choices").value; 
           //document.getElementById("choiceHere").innerHTML =  x;
           if(x === "light"){
               for(let a = 0; a < coffees.length; a++){
                   if(coffees[a].roast.includes('light') == true){
                   let y = document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" ;
                   }else{
                       console.log("NOOOOOOOOOOOOO");
                   }
               }
               }else if (x === "medium"){
                   for(let a = 0; a < coffees.length; a++){
                       if(coffees[a].roast.includes('medium') == true){
                       document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" ;
                       }
                   }
               }else if(x === "dark"){
                   for(let a = 0; a < coffees.length; a++){
                       if(coffees[a].roast.includes('dark') == true){
                       document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" ;
                       }
                   }
               }else if (x === "all"){
                   for(let a = 0; a < coffees.length; a++){
                       document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" + "<br>";
                       }
                   }else{
                       console.log("NO");
                       
                   }
                   
               }


    function darker(){
        let one = document.getElementById('thisOne').style.backgroundColor = "black";
        let two = document.getElementById('thisTwo').style.color = "white";
        let three = document.getElementById('darkMode').innerHTML = "Light Mode";
        //Write an If statement to toggle between light and dark mode
        //console.log(three);
        }
//----------------------------------------------------------------------------------------------

    
//----------------------------------------------------------------------------------------------

    //Dynamic search function 2.0 now functions without turning the list into a  OL or UL.
    
function search_drink() { 
    let input = document.getElementById('searchBar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('example'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display ="initial";                  
        } 
    } 
} 

//----------------------------------------------------------------------------------------------
    //write a function that adds an item to the list of coffee objects
/*
    function newOption(){
        for (var i=0; i < coffees.length ;i++){
            let those = coffees[i].id;
            let newer = 1;
            //let one = this id is one that is not equal to any of the IDs found in Coffee object
           // let two = document.getElementById('searchBar') to get the value and name in the search bar
           // let three = create another drop down selection for roasts and link the value to this variable
            if(those === newer){
                //console.log("EQUALS")
                let old = coffees[i].id;
                console.log("YES");
            }else{
                console.log("NO");
                coffees.push({id:one, name:two, roast:three});

            }
    console.log(those);
    
}
        //coffees.push({id:one, name:two, roast:three});
        console.log();
    }
console.log(newOption());
    */
//----------------------------------------------------------------------------------------------
        //write a function that shows all the light coffees
    //this function does not get rid of the previous coffees
    // instead, adds each category of roasts/coffees at the bottom of the previouse list of coffees
    //All of the options now display their respective choice except for "choose your coffee" which is void
   


/*
    function give() { 
        var x = document.getElementById("choices").value; 
        //document.getElementById("choiceHere").innerHTML =  x;
        if(x === "light"){
            for(let a = 0; a < coffees.length; a++){

                if(coffees[a].roast.includes('light') == true){
                document.getElementById("myDiv").innerHTML +=  "<div class= ONE>" + "<ul>"  + "<li>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</li>" + "</i>" + "</ul>" + "</div>" + "<br>";
                }else{
                    console.log("NOOOOOOOOOOOOO");
                }
            }
            }else if (x === "medium"){
                for(let a = 0; a < coffees.length; a++){
                    if(coffees[a].roast.includes('medium') == true){
                    document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" + "<br>";
                    }
                }
            }else if(x === "dark"){
                for(let a = 0; a < coffees.length; a++){
                    if(coffees[a].roast.includes('dark') == true){
                    document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" + "<br>";
                    }
                }
            }else if (x === "all"){
                for(let a = 0; a < coffees.length; a++){
                    document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" + "<br>";
                    }
                }else{
                    console.log("NO");
                }
            }
    
        console.log(x);
    */
//---------------------------------------------------------------------------------------------- 

/*
function plusOne(){

  name = document.getElementById('searchBart').value;  
  roast = document.getElementById('choiceThere').value;
  let both = name + ", " + roast;
  let here = [];
  here.push(both);

  //This function pulls values from search bar and select dropdown
  //Then pushes them into a new array
  //Does not wait to log the whole name and instead logs every individual letter
  console.log(name + ", " + roast);
  console.log(here);
}
console.log(plusOne());
*/
//---------------------------------------------------------------------------------------------- 
//let menu = {};
function getName(name){
    let menu = [];
    name = document.getElementById('searchBart').value;
    menu.push({name});
    console.log(menu);
   // console.log(menu);
    //return name;
}
console.log(getName());


function getRoast(roast){
    roast = document.getElementById('choiceThere').value;
    menu.push(roast);
    console.log(menu);
    //console.log(roast);
    //return roast;
}
console.log(getRoast());

/*
function addCoffee(name, roast){
   
    coffees.push(name);
    coffees.push(roast);
    console.log(coffees);
}
console.log(addCoffee());
*/