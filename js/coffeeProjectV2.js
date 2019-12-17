
//----------------------------------------------------------------------------------------------
        //Coffee names
let coffees = [
    {
        id: 1, 
        name: 'Light City', 
        roast: 'light'
    },
    {
        id: 2, 
        name: 'Half City', 
        roast: 'light'
    },
    {
        id: 3,
        name: 'Cinnamon',
        roast: 'light'
        },
    {
        id: 4,
        name: 'City',
        roast: 'medium'
    },
    {
        id: 5,
        name: 'American',
        roast: 'medium'
    },
    {
        id: 6,
        name: 'Breakfast', 
        roast: 'medium'
    },
    {
        id: 7,
         name: 'High',
          roast: 'dark'
    },
    {
        id: 8,
         name: 'Continental',
          roast: 'dark'
    },
    {
        id: 9,
        name: 'New Orleans',
        roast: 'dark'
    },
    {
        id: 10,
        name: 'European',
        roast: 'dark'
    },
    {
        id: 11,
         name: 'Espresso',
          roast: 'dark'
    },
    {
        id: 12,
         name: 'Viennese',
          roast: 'dark'
    },
    {
        id: 13,
        name: 'Italian',
        roast: 'dark'
    },
    {
        id: 14,
         name: 'French',
          roast: 'dark'
    },
];

//Displays the coffees to the browser
function entire(){
for (var i=0; i < coffees.length ;i++)
     document.getElementById("myDiv").innerHTML +=  "<div class= example>" + "<strong>" + coffees[i].name + "</strong>" + " " + "<i>" + coffees[i].roast + "</i>" + "</div>" + "<br>";
     if(give() === 'light'){
         document.getElementsByClassName('.example').style.display='none';
     }
     //MANIPULATE THIS FUNCTION INSTEAD OF THE GIVE() TO DISPLAY COFFEES
}

//----------------------------------------------------------------------------------------------

    // Dynamic search function v1.0, This works with New Orleans, but not Light or Half because of the name City.

function searching(){
    let bar = document.getElementById('searchBar').value;
    //let grab = document.querySelector('.box');
    //grab.textContent = bar; //prints search to browser
    
    for(let i = 0; i < coffees.length; i++){
    if(bar.includes(coffees[i].name)){
        console.log("This is " + coffees[i].name + " blend, a " + coffees[i].roast + " roast coffee!");
        //alert("This is " + coffees[i].name + " blend, a " + coffees[i].roast + " roast coffee!");
        let one = coffees[i].name + " " + coffees[i].roast; 
        let blend = document.querySelector('.square');
        blend.textContent = one;
    }else{
        console.log("What is this coffee?");
    }
    
    }
}

//----------------------------------------------------------------------------------------------

    //Dynamic search function 2.0, now works with all the coffees now not just light or half.
function search_drink() { 
    let input = document.getElementById('searchBar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('example'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="list-item";                  
        } 
    } 
} 

//----------------------------------------------------------------------------------------------
    //write a function that adds an item to the list of coffee objects

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
    
//----------------------------------------------------------------------------------------------
        //write a function that shows all the light coffees
    //this function does not get rid of the previous coffees
    // instead, adds each category of roasts/coffees at the bottom of the previouse list of coffees
    //All of the options now display their respective choice except for "choose your coffee" which is void
    for(let b = 0; b < coffees.length; b++){        
        document.getElementById('myDiv').style.display = 'none';
}



    function give() { 
        var x = document.getElementById("choices").value; 
        document.getElementById("choiceHere").innerHTML =  
        "Selected roast type: " + x; 
        if(x === "light"){
            for(let a = 0; a < coffees.length; a++){

                if(coffees[a].roast.includes('light') == true){
                document.getElementById("myDiv").innerHTML +=  "<div class= ONE>" + "<strong>" + coffees[a].name + "</strong>" + " " + "<i>" + coffees[a].roast + "</i>" + "</div>" + "<br>";
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
    
//---------------------------------------------------------------------------------------------- 
