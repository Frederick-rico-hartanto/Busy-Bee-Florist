const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

function validateForm() {
    var fName = document.forms["myForm"]["fName"].value;
    var lName = document.forms["myForm"]["lName"].value;
    var email = document.forms["myForm"]["email"].value;
    var phone = document.forms["myForm"]["phone"].value;
    if (fName == "") {
    alert("Name must be filled out");
    return false;
    }
    if (lName == "") {
        alert("Name must be filled out");
        return false;
        }
    
    if (email == "") {
    alert("Email must be filled out");
    return false;
    }
    if (phone  == "") {
        alert("Name must be filled out");
        return false;
        }
   } 