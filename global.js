function openGooglePlay() {
  showToast("Currently, we are working on publishing our app!")
  // var newTabUrl = 'https://play.google.com/store/apps/details?id=in.architectengineer.app';
  // window.open(newTabUrl, '_blank');
}
function showToast(message) {
  var x = document.getElementById("snackbar");
  x.innerHTML = message
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);

}

function toggleMobileMenu() {
  const div = document.querySelector('.menu-mobile');
  if (div.classList.contains('open')) {
    div.classList.remove('open');
  } else {
    div.classList.add('open');
  }
}