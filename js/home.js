function toggleNotification() {
    const notificationBox = document.querySelector('.notification-box span');
    const notificationIcon = document.querySelector('.notification-box img');
    if (notificationBox.style.display === 'none' || notificationBox.style.display === '') {
        notificationBox.style.display = 'inline';
        notificationIcon.style.display = 'none';
    } else {
        notificationBox.style.display = 'none';
        notificationIcon.style.display = 'inline';
    }
}
