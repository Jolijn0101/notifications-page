//gets all the notifications and creates a counter
let notifications = document.querySelectorAll('.active');
let notificationCounter = notifications.length;

//sets all notifications to read
document.querySelector('header p').addEventListener('click', function () {
  notificationCounter = 0;
  document.querySelector('.notification-num').innerHTML = notificationCounter;
  notifications.forEach((article) => {
    article.classList.remove('active');
  });
});

//sets specific notification to read
notifications.forEach((article) => {
  article.addEventListener('click', function () {
    //checks if notification is read
    if (article.className === 'active') {
      notificationCounter--;
      console.log(notificationCounter);
      document.querySelector('.notification-num').innerHTML = notificationCounter;
      article.classList.remove('active');
    }
  });
});
