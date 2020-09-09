function Mostrar(){
    // document.getElementById('SubMenu').style.display="none";
    var items = document.getElementsByClassName('item');
    console.log(items);
    for (let index = 0; index < items.length; index++) {
        items[index].style.display = "block";
    }
}
function Ocultar(){
    var items = document.getElementsByClassName('item');
    console.log(items);
    for (let index = 0; index < items.length; index++) {
        items[index].style.display = "none";
    }
}