menu.onclick = function menu_navigation(){
    var x = document.getElementById('nav_menu');
    var header = document.getElementById('header');
    
    if(x.className === 'nav_menu'){
        x.className += ' screen_nav_menu';
    }else{
        x.className = 'nav_menu';
    }
    
    if(header.className === 'header'){
        header.className += ' header_height';
    }else{
        header.className = 'header';
    }
}

document.getElementById("footer_email_form").value = "Your email";

footer_email_form.onclick = function form_erase(){
    document.getElementById('footer_email_form').value = "";
}
