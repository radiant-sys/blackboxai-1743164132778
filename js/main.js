// Sample game data
const games = [
    {
        id: 1,
        name: "Slot Machine",
        category: "Slots",
        thumbnail: "images/placeholder.svg",
        isFeatured: true,
        minBet: 1,
        maxBet: 100
    },
    {
        id: 2,
        name: "Blackjack",
        category: "Card Games",
        thumbnail: "images/placeholder.svg",
        isFeatured: true,
        minBet: 5,
        maxBet: 500
    },
    {
        id: 3,
        name: "Roulette",
        category: "Table Games",
        thumbnail: "images/placeholder.svg",
        isFeatured: true,
        minBet: 1,
        maxBet: 1000
    },
    {
        id: 4,
        name: "Poker",
        category: "Card Games",
        thumbnail: "images/placeholder.svg",
        isFeatured: false,
        minBet: 10,
        maxBet: 1000
    },
    {
        id: 5,
        name: "Baccarat",
        category: "Table Games",
        thumbnail: "images/placeholder.svg",
        isFeatured: true,
        minBet: 20,
        maxBet: 2000
    },
    {
        id: 6,
        name: "Dice",
        category: "Casino",
        thumbnail: "images/placeholder.svg",
        isFeatured: true,
        minBet: 1,
        maxBet: 500
    }
];

// Rest of the file remains exactly the same as before
// DOM elements
const gamesContainer = document.getElementById('games-container');
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const ctaBtn = document.querySelector('.cta-btn');

// Display games
function displayGames() {
    gamesContainer.innerHTML = '';
    
    const featuredGames = games.filter(game => game.isFeatured);
    
    featuredGames.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.name}">
            <div class="game-info">
                <h3>${game.name}</h3>
                <span class="category">${game.category}</span>
                <div class="bet-range">
                    <span>$${game.minBet} - $${game.maxBet}</span>
                </div>
                <button class="btn play-btn" data-game-id="${game.id}">Play Now</button>
            </div>
        `;
        gamesContainer.appendChild(gameCard);
    });

    // Add event listeners to play buttons
    document.querySelectorAll('.play-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gameId = e.target.getAttribute('data-game-id');
            playGame(gameId);
        });
    });
}

// Play game function
function playGame(gameId) {
    const game = games.find(g => g.id == gameId);
    if (game) {
        alert(`Loading ${game.name}...\n(Note: This is a demo. Actual game would require backend integration.)`);
    }
}

// Button event listeners
loginBtn.addEventListener('click', () => {
    alert('Login form would appear here');
});

registerBtn.addEventListener('click', () => {
    alert('Registration form would appear here');
});

ctaBtn.addEventListener('click', () => {
    document.querySelector('.game-categories').scrollIntoView({
        behavior: 'smooth'
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayGames();
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Responsive menu toggle (would be implemented in mobile view)
function toggleMenu() {
    // Implementation for mobile menu would go here
}