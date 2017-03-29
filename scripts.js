function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(hideName())
}

function hideName() {
  document.getElementById('name').innerHTML = ''
}

function getUserName(googleUser) {
 var profile = googleUser.getBasicProfile()
 return profile.getName()
}

function onSignIn(googleUser) {
  document.getElementById('sign-in').style.visibility = "hidden";
  document.getElementById('log-out').style.visibility = "visible";
  document.getElementById('name').innerHTML = getUserName(googleUser)
}
