
const audio = document.getElementById("audio");
const speakerIcon = document.getElementById("speaker-icon");
const songSelect = document.getElementById("song-select");

let isMuted = false;

// Ensure sound is on by default when page loads
window.addEventListener('DOMContentLoaded', function () {
    audio.src = "song1.mp3"; // Default song
    audio.play(); // Play the song immediately
    isMuted = false; // Ensure sound is not muted
    speakerIcon.classList.remove("muted"); // Make sure the speaker icon reflects that sound is on

    songSelect.value = "song1.mp3"; // Set the dropdown to default song 1
});

// Toggle mute/unmute when speaker icon is clicked
speakerIcon.addEventListener("click", function () {
    if (isMuted) {
        audio.play();
        speakerIcon.classList.remove("muted");
    } else {
        audio.pause();
        speakerIcon.classList.add("muted");
    }
    isMuted = !isMuted;
});

// Change song when the song select changes
songSelect.addEventListener("change", function () {
    const selectedSong = songSelect.value;
    audio.src = selectedSong;
    audio.play();
    isMuted = false;
    speakerIcon.classList.remove("muted");
});

const plants = [
    { name: "Tulip", description: "Tulips", longDescription: "Tulips are one of the most popular spring flowers, known for their vibrant, showy blooms in a wide variety of colors, ranging from red to purple, and even multi-colored varieties. They symbolize perfect love and are often seen in gardens and floral arrangements.", img: "https://art.pixilart.com/sr22f12d8957baws3.gif" },
    { name: "Tulip", description: "Tulips", longDescription: "Tulips are perennial flowers that bloom in the spring, offering a stunning array of colors such as pink, yellow, and white. Known for their clean, simple shape, they’re often associated with elegance and renewal. They thrive in sunny, well-drained soil.", img: "https://art.pixilart.com/sr22f12d8957baws3.gif" },
    { name: "Daffodil", description: "Daffodils", longDescription: "Daffodils, also known as narcissus, are one of the first flowers to bloom in spring, often symbolizing rebirth and new beginnings. With their distinct yellow or white petals and trumpet-shaped structure, daffodils brighten gardens and landscapes.", img: "https://media.tenor.com/AbybPxRG78kAAAAm/pixel-idle.webp" },
    { name: "Daffodil", description: "Daffodils", longDescription: "Daffodils are cheerful springtime flowers that bloom in bright yellow, white, or orange hues. They are known for their resilience and are often seen as a symbol of hope and renewal, as they emerge from the soil after the long winter months.", img: "https://media.tenor.com/AbybPxRG78kAAAAm/pixel-idle.webp" },
    { name: "Cherry Blossom", description: "Cherry blossoms", longDescription: "Cherry blossoms, a symbol of spring and fleeting beauty, bloom in delicate pink and white clusters. Their short-lived flowers are celebrated in various cultures, especially in Japan, where the annual cherry blossom festival signifies the beauty of life's transience.", img: "https://media.tenor.com/eOkeIJAFP8QAAAAM/flowers-leaves.gif" },
    { name: "Cherry Blossom", description: "Cherry blossoms", longDescription: "Known for their breathtaking beauty, cherry blossoms represent renewal, hope, and the transient nature of life. These soft pink or white flowers bloom in early spring and often bring communities together to celebrate the fleeting moments of nature's beauty.", img: "https://media.tenor.com/eOkeIJAFP8QAAAAM/flowers-leaves.gif" },
    { name: "Lilac", description: "Lilacs", longDescription: "Lilacs are fragrant flowers that bloom in a variety of colors, including purple, white, and pink. Known for their sweet scent, they are a symbol of love and renewal. They bloom in late spring, adding color and fragrance to gardens and bringing a nostalgic sense of peace.", img: "https://img.freepik.com/free-vector/flat-design-flower-pixel-art-illustration_23-2149294238.jpg?ga=GA1.1.109945997.1700161604&semt=ais_hybrid" },
    { name: "Lilac", description: "Lilacs", longDescription: "Lilacs are not only admired for their lovely appearance but also for their intoxicating fragrance. They are often associated with memories of spring and symbolize love, purity, and renewal. Blooming in early spring, they bring an air of nostalgia and beauty to any garden.", img: "https://img.freepik.com/free-vector/flat-design-flower-pixel-art-illustration_23-2149294238.jpg?ga=GA1.1.109945997.1700161604&semt=ais_hybrid" },
    { name: "Hyacinth", description: "Hyacinths", longDescription: "Hyacinths are known for their intense fragrance and colorful spikes of flowers, ranging from shades of purple to pink and white. These flowers are symbols of playfulness, constancy, and a reminder to cherish beauty and fragrance in everyday life.", img: "https://pics.craiyon.com/2024-05-02/VwAp1dq4RPqBSdAdbxS5sA.webp" },
    { name: "Hyacinth", description: "Hyacinths", longDescription: "Hyacinths are bulbous spring flowers with thick clusters of vibrant blooms in shades like blue, pink, and white. They are known for their strong, sweet fragrance and symbolize constancy, which makes them a beautiful gift in early spring.", img: "https://pics.craiyon.com/2024-05-02/VwAp1dq4RPqBSdAdbxS5sA.webp" },
    { name: "Peony", description: "Peonies", longDescription: "Peonies are lush, full-bloom flowers that come in a variety of colors, including pink, white, and red. Known for their fragrance and symbolic connection to romance and prosperity, they are often featured in wedding bouquets and symbolize honor and happiness.", img: "https://media.tenor.com/hcI3W7YppHEAAAAm/flowers-glitter.webp" },
    { name: "Peony", description: "Peonies", longDescription: "Peonies are beloved for their large, fragrant blooms that signify love, beauty, and prosperity. These flowers often have multiple layers of petals in colors like deep red, pale pink, or pure white. They are often associated with happy beginnings and are a favorite in floral arrangements.", img: "https://media.tenor.com/hcI3W7YppHEAAAAm/flowers-glitter.webp" },
    { name: "Bluebell", description: "Bluebells", longDescription: "Bluebells, with their bell-shaped, vibrant blue flowers, are commonly found carpeting woodland floors in spring. They symbolize humility, gratitude, and everlasting love. Their unique fragrance and charming appearance make them a favorite in gardens and natural landscapes.", img: "https://img.freepik.com/free-vector/flat-design-flower-pixel-art_23-2149255778.jpg?ga=GA1.1.109945997.1700161604&semt=ais_hybrid" },
    { name: "Bluebell", description: "Bluebells", longDescription: "Bluebells are delicate spring flowers with a sweet fragrance that grow in clusters. Their vibrant blue color and bell-shaped blooms make them a favorite for naturalizing in woodlands or gardens. They symbolize gratitude and everlasting love.", img: "https://img.freepik.com/free-vector/flat-design-flower-pixel-art_23-2149255778.jpg?ga=GA1.1.109945997.1700161604&semt=ais_hybrid" },
    { name: "Snowdrop", description: "Snowdrops", longDescription: "Snowdrops are delicate, white flowers that often bloom in late winter or early spring. These flowers are one of the first signs that winter is ending and symbolize hope and the promise of new beginnings. They often grow in clusters and are a beloved sign of the changing seasons.", img: "https://img.freepik.com/free-vector/flat-design-flower-pixel-art_23-2149255782.jpg?ga=GA1.1.109945997.1700161604&semt=ais_hybrid" },
    { name: "Snowdrop", description: "Snowdrops", longDescription: "Snowdrops are resilient little flowers that break through the snow to greet spring. Their delicate white petals are a symbol of hope, purity, and renewal, and they are often associated with the end of winter and the arrival of brighter days.", img: "https://img.freepik.com/free-vector/flat-design-flower-pixel-art_23-2149255782.jpg?ga=GA1.1.109945997.1700161604&semt=ais_hybrid" }
];

let shuffledPlants = plants.sort(() => Math.random() - 0.5);
let openedCards = [];
const gameBoard = document.querySelector(".game");
const modal = document.getElementById("modal");
const plantName = document.getElementById("plant-name");
const plantDescription = document.getElementById("plant-description");
const closeModal = document.querySelector(".close");
const tooltip = document.getElementById("tooltip");
const winModal = document.getElementById("win-modal");

shuffledPlants.forEach(plant => {
    let box = document.createElement("div");
    box.className = "item";
    box.dataset.name = plant.name;

    let img = document.createElement("img");
    img.src = plant.img;
    box.appendChild(img);

    box.addEventListener("click", function (event) {
        // Tooltip positioning logic
        const boxRect = box.getBoundingClientRect();
        const gameRect = gameBoard.getBoundingClientRect();

        // Add a small offset for better alignment
        const tooltipOffset = 10;  // Adjust this value as needed

        // Positioning logic for the tooltip relative to the card
        if (boxRect.left + boxRect.width / 2 < gameRect.left + gameRect.width / 2) {
            tooltip.style.left = `${boxRect.left - tooltip.offsetWidth - tooltipOffset}px`; // Left of the card
        } else {
            tooltip.style.left = `${boxRect.left + boxRect.width + tooltipOffset}px`; // Right of the card
        }

        // Ensure the tooltip does not go off-screen on the left side
        if (parseInt(tooltip.style.left) < 0) {
            tooltip.style.left = `${boxRect.left + boxRect.width + tooltipOffset}px`; // Fallback to the right
        }

        // Position the tooltip above or below the card based on available space
        if (boxRect.top + boxRect.height + tooltip.offsetHeight + tooltipOffset < window.innerHeight) {
            tooltip.style.top = `${boxRect.top + boxRect.height + tooltipOffset}px`; // Below the card
        } else {
            tooltip.style.top = `${boxRect.top - tooltip.offsetHeight - tooltipOffset}px`; // Above the card
        }

        // Show tooltip with description
        tooltip.style.display = "block";
        tooltip.textContent = plant.description;

        if (openedCards.length < 2 && !box.classList.contains("boxMatch")) {
            box.classList.add("boxOpen");
            openedCards.push(box);
        }

        if (openedCards.length === 2) {
            let firstCard = openedCards[0];
            let secondCard = openedCards[1];

            if (firstCard.dataset.name === secondCard.dataset.name) {
                setTimeout(() => {
                    firstCard.classList.add("boxMatch");
                    secondCard.classList.add("boxMatch");

                    // Check if the game is won
                    if (document.querySelectorAll(".boxMatch").length === shuffledPlants.length) {
                        setTimeout(() => {
                            winModal.style.display = "block"; // Show the win modal
                        }, 300);
                    }

                    plantName.textContent = plant.name;
                    plantDescription.innerHTML = '';
                    typeWriterEffect(plant.longDescription, plantDescription); // Use long description for modal

                    modal.style.display = "block";
                    modal.style.opacity = "0";
                    modal.style.transform = "scale(0.8)";
                    setTimeout(() => {
                        modal.style.opacity = "1";
                        modal.style.transform = "scale(1)";
                    }, 300);
                }, 300);
                openedCards = [];
                tooltip.style.display = "none"; // Hide tooltip on match
            } else {
                setTimeout(() => {
                    firstCard.classList.remove("boxOpen");
                    secondCard.classList.remove("boxOpen");
                    openedCards = [];
                    tooltip.style.display = "none"; // Hide tooltip if cards don't match
                }, 500);
            }
        }
    });

    gameBoard.appendChild(box);
});

function typeWriterEffect(text, element) {
    let i = 0;
    const speed = 50;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

closeModal.addEventListener("click", () => {
    modal.style.opacity = "1";
    modal.style.transform = "scale(1)";
    setTimeout(() => {
        modal.style.opacity = "0";
        modal.style.transform = "scale(0.8)";
        setTimeout(() => {
            modal.style.display = "none";
        }, 300);
    }, 100);
});

document.querySelector(".reset").addEventListener("click", function () {
    location.reload();
});
