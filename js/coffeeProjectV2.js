
//----------------------------------------------------------------------------------------------
        //Coffee names
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//----------------------------------------------------------------------------------------------

//This works with New Orleans, but not Light or Half because of the name City.

function searching(){
    let bar = document.getElementById('searchBar').value;
    let grab = document.querySelector('.box');
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
    
    //console.log(bar);
    }
}
//this function logs the coffee and the individual letter
function little(){
    for(let j = 0; j < coffees.length; j++){
        for(let k = 0; k < coffees.length; k++){
        console.log(coffees[j].name[k]);
        }
    }
}
console.log(little());

//Bold the name
//Include the roast in smaller font

//----------------------------------------------------------------------------------------------

