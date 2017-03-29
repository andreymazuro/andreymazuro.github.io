function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    hideName()
  });
}

function hideName() {
  document.getElementById('name').innerHTML = ''
}

function getUserName() {
  return googleUser.getBasicProfile();
}

function onSignIn(googleUser) {
  document.getElementById('sign-in').style.visibility = "hidden";
  document.getElementById('log-out').style.visibility = "visible";
  var profile = getUserName()
  document.getElementById('name').innerHTML = profile.getName()
}
