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

function hideSignInButton(){
  document.getElementById('sign-in').style.visibility = "hidden";
}

function showLogOutButton(){
  document.getElementById('log-out').style.visibility = "visible";
}

function showUserName(name){
  document.getElementById('name').innerHTML = getUserName(name)
}

function onSignIn(googleUser) {
  hideSignInButton()
  showLogOutButton()
  showUserName(googleUser)
}
