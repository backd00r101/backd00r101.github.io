
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
           var htmlsource = xhr.responseText
           // some operations
           parser = new DOMParser().parseFromString(htmlsource, "text/html");
           print(htmlsource)

        }
};

xhr.open('GET', 'https://www.united-domains.de/portfolio/a/user/data', true);
xhr.send();






