//A Responsive Dictionary App
//Here we created an dictionary application using public dictionary API ( Application Programming Interface) key 

// INSTRUCYIONS TO UNDERSTAND BETTER 
//This code uses the Dictionary API, which doesn't require an API key. It fetches the definition for the entered word and displays it on the page.
//It uses asynchronus function and get definition function.
// This also contain error handler functions for better user experience UX with user friendly user interface UI design.


        async function getDefinition() {
            const wordInput = document.getElementById('wordInput').value;
            const definitionContainer = document.getElementById('definitionContainer');
            const definitionElement = document.getElementById('definition');

            try {
                // Fetch definition from Dictionary API
                const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${wordInput}`);
                const data = await response.json();

                // Display the definition
                definitionElement.textContent = data[0]?.meanings[0]?.definitions[0]?.definition || 'Definition not found.';

                // Show the definition container
                definitionContainer.style.display = 'block';
            } catch (error) {
                console.error(error);

                // Display an error message
                definitionElement.textContent = 'Error fetching definition. Please try again.';

                // Show the definition container
                definitionContainer.style.display = 'block';
            }
        }
    