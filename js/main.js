


/* things we need to change for each coffee:
name - name of coffee/* things we need to change for each coffee:
name - name of coffee
pic - image source
alt - alt tag
color - color
desc - description
day - day of the week */
 
let myDate = new Date();
let myDay = "";
let today = "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
 
if(urlParams.has('day')) {
    myDay = urlParams.get('day');
}
else {
    myDay = myDate.getDay();
}
 
myDay = parseInt(myDay);
 
function coffeeTemplate(coffee) {
    let myReturn = "";
    myReturn += `<p>
                    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee"/>
                    <strong class="feature">${coffee.day}'s Coffee Special:</strong><br> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>${coffee.desc}
                </p>`;
    return myReturn;
}
 
 
 
switch(myDay) {
    case 0:
        today = "Sunday";
        coffee = {
            name: "caramel-latte",
            pic: "images/caramel-latte.jpg",
            alt: "A picture of an espress topped with whipped cream and cinnamon in a white ceramic cup.",
            color: "#00FFFF",
            desc: `.<br>Brought to you from Italy, the espresso con panna is a simple but delicious drink. Consisting of espresso topped with a small mountain of whipped cream and a dusting of cinnamon, it's a truly decadent, and we know you're going to love it!`,
            day: "Sunday"
        };
        break;
 
    case 1:
        today = "Monday";
        coffee = {
            name: "pumpkin spice latte",
            pic: "images/pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte in an orange ceramic mug.",
            color: "#FF7518",
            desc: `.<br>Our pumpkin spice latte makes us wish it was always fall, as this is one of our top sellers! Made with cinnamon, nutmeg, ground clove, just a touch of pumpkin puree, and (of course) sugar, this is sure to be the best pumpkin spice latte you've ever tasted!`,
            day: "Monday"
        };
        break;
 
    case 2:
        today = "Tuesday";
        coffee = {
            name: "milky way frapppaccino",
            pic: "images/frappaccino.jpg",
            alt: "A milky way fappuccino in a white ceramic cup with an intricate flower-like design in caramel and chocolate on the top.",
            color: "blue",
            desc: `.<br>Our milky way cappuccino is to die for. Made with milk chocolate, caramel, and topped with whipped cream and swirls of milk chocolate and caramel syrups in an intricate pattern, this drink is heaven in a cup!<br>The milky way is also available as a latte, if that's more your style.`,
            day: "Tuesday"
        };
        break;
 
    case 3:
        today = "Wednesday";
        coffee = {
            name: "drip coffee",
            pic: "images/drip.jpg",
            alt: "A picture of a drip coffee.",
            color: "green",
            desc: `.<br>Made with natural spring water boiled and then slowly poured over finely ground coffee beans. With a strong, bold flavor, we're sure you're going to love it!<br>Our drip coffee is usually made with dark roasted coffee beans, but medium roast and light roast are available on request!`,
            day: "Wednesday"
        };
        break;
 
    case 4:
        today = "Thursday";
        coffee = {
            name: "mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha in a white ceramic coffee cup.",
            color: "violet",
            desc: `.<br>Our mochas are made with the finest dark cocoa powder and topped with a dash of whipped cream and a milk chocolate drizzle that we make ourselves right here in the shop.<br>If you'd like to add a bit of a kick, ask for our Mexican mocha, which has chili powder added to it!`,
            day: "Thursday"
        };
        break;
   
    case 5:
        today = "Friday";
        coffee = {
            name: "cold-brew",
            pic: "images/cold-brew.jpg",
            alt: "A picture of a old-brew, an espresso shot with steamed milk in a small glass cup.",
            color: "yellow",
            desc: `.<br>Our cold-brew is made with the finest dark roast ground coffee beans, for maximum flavor in your espresso. The steamed milk adds just a touch of sweetness to the shot--if you're an espresso lover, this is the drink for you!`,
            day: "Friday"
        };
        break;
 
    case 6:
        today = "Saturday";
        coffee = {
            name: "bubble-tea",
            pic: "images/bubble-tea.jpg",
            alt: "A bubble-tea latte in a white ceramic cup,.",
            color: "grey",
            desc: `.<br>We know, it's an unusual one! But we find the bubble-tea latte to be a soothing and mellow cup of coffee--perfect for an afternoon drink on a weekend! Made with our homemade lavender simple syrup and sprinkled with a touch of dried milk, this one's a shop favorite.`,
            day: "Saturday"
        };
        break;
   
}
 
console.log(coffee);
 
document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);
document.getElementsByClassName("feature")[0].style.color = coffee.color;
document.getElementsByClassName("feature")[1].style.color = coffee.color;
document.styleSheets[1].cssRules[0].style.setProperty("background-color", coffee.color)
