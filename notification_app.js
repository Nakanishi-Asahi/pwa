window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js')
            .then(registration => console.log('registered', registration))
            .catch(error => console.log('error', error));
    }
});

document
    .getElementById('confirm')
    .addEventListener('click', onClickConfirm);
document.getElementById('send').addEventListener('click', onClickSend);
document.getElementById('wait').addEventListener('click', onClickWait);


function onClickConfirm() {
    if (!('Notification' in window)) {
        alert('このブラウザはプッシュ通知に対応してません。。。');
        return;
    }
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') alert('通知の許可がもらえました');
        if (permission === 'denied') alert('通知の許可がもらえませんでした');
    });
}
function onClickSend() {
    if (!('Notification' in window)) {
        alert('このブラウザはプッシュ通知に対応してません。。。');
        return;
    }
    const permission = Notification.permission;
    if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
            registration.active.postMessage("これはテスト通知です");
        });
    } else {
        alert('通知の許可がもらえませんよ');
    }
}
function onClickWait() {
    if (!('Notification' in window)) {
        alert('このブラウザはプッシュ通知に対応してません。。。');
        return;
    }
    const permission = Notification.permission;
    if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
            setTimeout(function () {
                registration.active.postMessage('ちょっと待ったぜ!!!');
            }, 3000);
        });
    } else {
        alert('通知の許可がもらえませんよ');
    }
}
*/