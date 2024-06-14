'use strict'

function onBallClick(elBall) {
    const randomNum = getRandomInt(20, 60)
    elBall.style.width = parseInt(elBall.clientWidth) + randomNum + 'px'
    elBall.style.height = parseInt(elBall.clientHeight) + randomNum + 'px'

    if (parseInt(elBall.style.width) > 400 || parseInt(elBall.style.height) > 400) {
        elBall.style.height = '100px'
        elBall.style.width = '100px'
    }

    elBall.style.backgroundColor = getRandomColor()
    
} 