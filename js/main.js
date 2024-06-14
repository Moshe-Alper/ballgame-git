'use strict'

function onBallClick(elBall) {
    elBall.style.width = parseInt(elBall.clientWidth) + 50 + 'px'
    elBall.style.height = parseInt(elBall.clientHeight) + 50 + 'px'

    if (elBall.style.width === '400px' && elBall.style.height === '400px') {
        elBall.style.height = '100px'
        elBall.style.width = '100px'
    }
    
} 