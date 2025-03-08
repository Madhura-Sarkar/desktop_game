
// items and functionality
const gifs = [
    'https://media1.tenor.com/m/rzMh--pGLDIAAAAC/gogato-pakkapets.gif',
    'https://media1.tenor.com/m/rzMh--pGLDIAAAAC/gogato-pakkapets.gif',
    'https://media1.tenor.com/m/gRpWSl5RVTEAAAAC/poonai-pakkapets.gif',
    'https://media1.tenor.com/m/gRpWSl5RVTEAAAAC/poonai-pakkapets.gif',
    'https://media.tenor.com/eMHqFWJ7x_EAAAAM/nekoto-pakkapets.gif',
    'https://media.tenor.com/eMHqFWJ7x_EAAAAM/nekoto-pakkapets.gif',
    'https://media.tenor.com/s3ERAddUOy8AAAAM/marlie-pakkapets.gif',
    'https://media.tenor.com/s3ERAddUOy8AAAAM/marlie-pakkapets.gif',
    'https://media.tenor.com/StAwirQu9SoAAAAM/piero-pakkapets.gif',
    'https://media.tenor.com/StAwirQu9SoAAAAM/piero-pakkapets.gif',
    'https://media.tenor.com/_04PVA141w4AAAAM/buburu-pakkapets.gif',
    'https://media.tenor.com/_04PVA141w4AAAAM/buburu-pakkapets.gif',
    'https://media.tenor.com/IObVVZtT9q4AAAAM/starks-pakkapets.gif',
    'https://media.tenor.com/IObVVZtT9q4AAAAM/starks-pakkapets.gif',
    'https://www.megavoxels.com/wp-content/uploads/2023/07/Pixel-Art-Frog-Animation.gif',
    'https://www.megavoxels.com/wp-content/uploads/2023/07/Pixel-Art-Frog-Animation.gif'
];

let shuffledGifs = gifs.sort(() => Math.random() - 0.5);
let openedCards = [];

for (let i = 0; i < gifs.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.dataset.gif = shuffledGifs[i]; // Store gif URL for comparison

    let img = document.createElement('img');
    img.src = shuffledGifs[i];

    box.appendChild(img);

    box.addEventListener('click', function () {
        if (openedCards.length < 2 && !box.classList.contains('boxMatch')) {
            box.classList.add('boxOpen');
            openedCards.push(box);
        }

        if (openedCards.length === 2) {
            let firstCard = openedCards[0];
            let secondCard = openedCards[1];

            if (firstCard.dataset.gif === secondCard.dataset.gif) {
                firstCard.classList.add('boxMatch');
                secondCard.classList.add('boxMatch');
                openedCards = [];

                if (document.querySelectorAll('.boxMatch').length === gifs.length) {
                    setTimeout(() => alert('You win!'), 300);
                }
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('boxOpen');
                    secondCard.classList.remove('boxOpen');
                    openedCards = [];
                }, 500);
            }
        }
    });

    document.querySelector('.game').appendChild(box);
}



//smooth click functions

document.querySelector(".reset").addEventListener("click", function () {
    let gameBoard = document.querySelector(".game");
    let resetButton = document.querySelector(".reset");

    // Add fade-out effect
    gameBoard.classList.add("fade-out");
    resetButton.classList.add("fade-out");

    setTimeout(() => {
        gameBoard.innerHTML = ""; // Clear game board
        resetGame(); // Reload game without refreshing

        setTimeout(() => {
            gameBoard.classList.remove("fade-out"); // Smooth fade-in
            resetButton.classList.remove("fade-out");
        }, 2000); // Add delay before fading back in for better effect
    }, 2000); // Increased to 1s for smoother transition
});

function resetGame() {
    let shuffledGifs = gifs.sort(() => Math.random() - 0.5);
    let openedCards = [];

    for (let i = 0; i < gifs.length; i++) {
        let box = document.createElement("div");
        box.className = "item";
        box.dataset.gif = shuffledGifs[i];

        let img = document.createElement("img");
        img.src = shuffledGifs[i];

        box.appendChild(img);

        box.addEventListener("click", function () {
            if (openedCards.length < 2 && !box.classList.contains("boxMatch")) {
                box.classList.add("boxOpen");
                openedCards.push(box);
            }

            if (openedCards.length === 2) {
                let firstCard = openedCards[0];
                let secondCard = openedCards[1];

                if (firstCard.dataset.gif === secondCard.dataset.gif) {
                    firstCard.classList.add("boxMatch");
                    secondCard.classList.add("boxMatch");
                    openedCards = [];

                    if (document.querySelectorAll(".boxMatch").length === gifs.length) {
                        setTimeout(() => alert("You win!"), 300);
                    }
                } else {
                    setTimeout(() => {
                        firstCard.classList.remove("boxOpen");
                        secondCard.classList.remove("boxOpen");
                        openedCards = [];
                    }, 500);
                }
            }
        });

        document.querySelector(".game").appendChild(box);
    }
}


document.querySelector(".reset").addEventListener("click", function () {
    document.body.style.transition = "opacity 1s ease-out";
    document.body.style.opacity = "0";
    
    setTimeout(() => {
        location.reload();
    }, 500);
});

