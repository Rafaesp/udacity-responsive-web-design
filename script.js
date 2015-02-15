
document.getElementById('menu').addEventListener('click', function(){
    var drawer = document.getElementById('drawer');
    if(drawer.className.indexOf('open') > 0){
        drawer.className = 'nav';
    }else{
        drawer.className += ' open';        
    }
});