document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('surveyForm').addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        
        const formData = new FormData(e.target);
        const data = {};
        for (const [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Log the collected data to the console (you would actually send this to the server)
        console.log(data);

        // Redirect to the results page
        window.location.href = '/results';
    });
});