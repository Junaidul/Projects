var form = document.getElementById("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    var search = document.getElementById("search").value.trim(); 
    var without_space = search.replace(/\s+/g, '');

    // Clear previous results and error
    document.getElementById("pic").innerHTML = "";
    document.getElementById("bio").innerHTML = "";
    document.getElementById("error").innerHTML = "";
    document.getElementById("github-content").style.display = "none";

    fetch("https://api.github.com/users/" + without_space)
        .then(response => {
            if (!response.ok) {
                // Show the error message
                document.getElementById("error").innerHTML = "⚠️ User not found. Please try again.";
                throw new Error("User not found");
            }
            return response.json();
        })
        .then(data => {
            // Clear any error messages
            document.getElementById("error").innerHTML = "";

            // Display user profile and details
            document.getElementById("pic").innerHTML = `
                <a target="_blank" href="https://www.github.com/${without_space}">
                    <img src="${data.avatar_url}" alt="${data.login}'s Avatar">
                </a>`;

            document.getElementById("bio").innerHTML = `
                <strong>Name:</strong> ${data.name || 'N/A'}<br>
                <strong>Username:</strong> <a target="_blank" href="https://github.com/${data.login}">${data.login}</a><br>
                <strong>Bio:</strong> ${data.bio || 'No bio available'}<br>
                <strong>Location:</strong> ${data.location || 'Not specified'}<br>
                <strong>Followers:</strong> ${data.followers}<br>
                <strong>Following:</strong> ${data.following}<br>
                <strong>Public Repositories:</strong> ${data.public_repos}`;

            document.getElementById("github-content").style.display = "block"; // Show results
        })
        .catch(error => {
            console.error("Error fetching user:", error);

            // Ensure only the error message is visible
            document.getElementById("pic").innerHTML = "";
            document.getElementById("bio").innerHTML = "";
            document.getElementById("github-content").style.display = "none";
        });
});