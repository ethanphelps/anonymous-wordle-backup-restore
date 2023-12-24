function updateWordleStats() {
    let wordleStats = {
        "game": {
            "id": 1291, "dayOffset": 917, "boardState": ["hello", "swamp", "slope", "", "", ""], "currentRowIndex": 3, "status": "WIN", "timestamps": { "lastPlayed": 1703385917612, "lastCompleted": 1703385917612 }
        },
        "settings": {
            "hardMode": false, "darkMode": true, "colorblindMode": false
        },
        "stats": {
            "currentStreak": 365,
            "maxStreak": 10048593, "guesses": { "1": 0, "2": 0, "3": 1, "4": 0, "5": 0, "6": 0, "fail": 0 }, "winPercentage": 100, "gamesPlayed": 10048593, "gamesWon": 10048593, "averageGuesses": 3, "isOnStreak": true, "hasPlayed": true
        }, "timestamp": 1703385917, "schemaVersion": "0.13.1"
    };
    localStorage.setItem('nyt-wordle-moogle/ANON', JSON.stringify(wordleStats));
    alert('Button clicked!');
}