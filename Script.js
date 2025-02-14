document.getElementById('start-game').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('game-step-1').classList.remove('hidden');
});

// Step 1: Riddle
document.getElementById('submit-riddle').addEventListener('click', function() {
    let answer = document.getElementById('riddle-answer').value.toLowerCase();
    if (answer === 'piano') {
        document.getElementById('game-step-1').classList.add('hidden');
        document.getElementById('game-step-2').classList.remove('hidden');
    } else {
        alert('Oops! Try again!');
    }
});

// Step 2: Memory Game (Simple Example)
document.getElementById('start-memory').addEventListener('click', function() {
    alert('Pretend you played a memory game and won! 🎀');
    document.getElementById('game-step-2').classList.add('hidden');
    document.getElementById('game-step-3').classList.remove('hidden');
});

// Step 3: Find the Heart
document.getElementById('real-heart').addEventListener('click', function() {
    alert('You found the heart! 💖');
    document.getElementById('game-step-3').classList.add('hidden');
    document.getElementById('final-step').classList.remove('hidden');
});

// Final Step: Floating Hearts Effect
document.getElementById('yes-btn').addEventListener('click', function() {
    alert('Yay! 💕');
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.classList.add('heart-effect');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);
    }
});

document.getElementById('no-btn').addEventListener('click', function() {
    alert('Oh no! 😭 But I still love you!');
});
