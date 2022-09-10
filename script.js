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

document.getElementById("comments_list_form_textarea").value = "Your text";

comments_list_form_textarea.onclick = function form_erase(){
    document.getElementById('comments_list_form_textarea').value = "";
}
