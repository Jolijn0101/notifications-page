//gets all the notifications and creates a counter
let notifications = document.querySelectorAll('.active');
let notificationCounter = notifications.length;

//sets all notifications to read
document.querySelector('header p').addEventListener('click', function () {
  //sets the notification number
  notificationCounter = 0;
  document.querySelector('.notification-num').innerHTML = notificationCounter;
  //removes background color from each notification
  notifications.forEach((article) => {
    article.classList.remove('active');
  });
  //removes dots from each notification
  let dots = document.querySelectorAll('p .dot');
  dots.forEach((dot) => {
    dot.style.display = 'none';
  });
});

//sets specific notification to read
notifications.forEach((article) => {
  article.addEventListener('click', function () {
    //checks if notification is read
    if (article.className === 'active') {
      //increase the notification counter
      notificationCounter--;
      document.querySelector('.notification-num').innerHTML = notificationCounter;
      //removes background color of notification
      article.classList.remove('active');
      //removes dot of notification
      document.querySelector(`#${article.id} .dot`).style.display = 'none';
    }
  });
});
