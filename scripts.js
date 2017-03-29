function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    document.getElementById('name').innerHTML = ''
  });
}

function onSignIn(googleUser) {
document.getElementById('sign-in').style.visibility = "hidden";
document.getElementById('log-out').style.visibility = "visible";
var auth2 = gapi.auth2.getAuthInstance();
var profile = googleUser.getBasicProfile();
document.getElementById('name').innerHTML = profile.getName()
}
