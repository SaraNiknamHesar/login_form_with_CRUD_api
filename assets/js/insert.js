document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    // Function to get form data
    const getFormData = () => ({
        firstname: document.querySelector(".firstname").value.trim(),
        lastname: document.querySelector(".lastname").value.trim(),
        password: document.querySelector(".password").value.trim(),
    });

    // Function to send data to Firebase
    const postData = async (userData) => {
        try {
            const response = await fetch("https://js-project-20b4c-default-rtdb.firebaseio.com/users.json", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error("There was an issue submitting the form:", error);
            throw error;
        }
    };

    // Function to handle form submission
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userData = getFormData();

        try {
            const result = await postData(userData);
            console.log("User data successfully saved:", result);
            form.reset();  // Optionally reset form after successful submission
        } catch (error) {
            console.error(error);
        }
    };

    // Attach event listener to form submit
    form.addEventListener("submit", handleFormSubmit);
});
