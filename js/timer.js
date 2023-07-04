var countdownSeconds = 180; //倒數計時的秒數
var startTime = null;
var countdownInterval = null;
var countdownElement = document.getElementById("countdown");


function startCountdown() {
    startTime = Date.now();

    countdownInterval = setInterval(updateCountdown, 1000); //(要重複做的函式,時間間隔（ms）)
}

function updateCountdown() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;

    var remainingSeconds = Math.max(0, countdownSeconds - Math.floor(elapsedTime / 1000));

    var minutes = Math.floor(remainingSeconds / 60);
    var seconds = remainingSeconds % 60;

    // 轉為 mm:ss 的形式
    var formattedTime = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);

    countdownElement.textContent = formattedTime;

    if (remainingSeconds === 0) {
        clearInterval(countdownInterval);
        // 倒计时结束后执行相应操作
        // 例如游戏结束、显示得分等
        // 在此处添加您的代码
    }
}

// 在游戏开始时调用 startCountdown() 来启动倒计时
startCountdown();