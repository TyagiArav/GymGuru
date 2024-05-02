document.addEventListener('DOMContentLoaded', () => {
    const surveyForm = document.getElementById('surveyForm');
    if (surveyForm) {
        surveyForm.addEventListener('submit', (e) => {
            // Create a FormData object from the form
            const formData = new FormData(e.target);

            // Check if all fields are filled (non-empty and not just whitespace)
            const allFieldsFilled = Array.from(formData.entries()).every(([key, value]) => {
                return value.trim() !== '';
            });

            // If not all fields are filled, prevent form submission and alert the user
            if (!allFieldsFilled) {
                e.preventDefault(); // Prevent the default form submission
                alert('Please fill in all fields.'); // Alert the user
            } else {
                
                console.log(Object.fromEntries(formData.entries()));
                
            }
        });
    } else {
        console.error('Survey form not found.');
    }
});
