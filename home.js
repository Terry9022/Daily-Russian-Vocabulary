var subscribeBtn = document.getElementById('subscribeBtn');

window.addEventListener('submit', e => {
  e.preventDefault();
  var resultSubscribe = document.getElementById('resultSubscribe');
  var level = document.getElementById('level').value;
  var email = document.getElementById('email').value;

  var myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var message = document.createElement('div');
      message.innerHTML = '<i class="fa fa-check-circle"></i>';
      message.innerHTML +=
        "&nbsp Subscribe successfully. We'll send you daily vocabulary to your email";
      resultSubscribe.className = 'resultSubscribe';
      resultSubscribe.appendChild(message);
    }

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  myRequest.open('GET', 'subscribe.php?level=' + level + '&email=' + email);

  myRequest.send();
});
