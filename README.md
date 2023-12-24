# anonymous-wordle-backup-restore
a way to update your wordle stats from a json backup if you refuse to make a NYT account but have a long wordle streak that you don't want to lose 😂

## What to do
If you have a JSON object that's the backup of the local storage that NYT uses to store anonymous wordle stats, you can use this to force the web page to run javascript that updates the key `nyt-wordle-moogle/ANON` with a new value

Updating `localStorage` via dev tools does not persist after the tab is closed, even though local storage does. Local storage data must be updated by javascript running from the web page's source code in order to persist between tab closure and browser closure.

Putting the code to update local storage into a button `onclick` event allows you to run the code as the webpage which allows the updated values to persist as if they'd been written normally 