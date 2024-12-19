// URL of the API you want to test
const apiUrl = "https://firebase-project-delta.vercel.app/users"; // Replace with your API URL

// Exportable function to test the fetch request
export const getUsers = async () => {
  try {
    const response = await fetch(apiUrl, {
      method: "GET", // or 'POST', depending on your API
      headers: {
        "Content-Type": "application/json",
        // Add any other necessary headers here
      },
    });

    // Check if the response is OK
    if (response.ok) {
      const data = await response.json();
      console.log("Success:", data);
    } else {
      console.error("HTTP Error:", response.status);
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }
};
