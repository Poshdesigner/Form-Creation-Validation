async function fetchUserData() {
    // 1. API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 2. Container to display the data
    const dataContainer = document.getElementById('api-data');

    try {
        // 3. Fetch data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // 4. Clear the loading message
        dataContainer.innerHTML = '';

        // 5. Create a list
        const userList = document.createElement('ul');

        // 6. Loop through users and add names
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 7. Append list to container
        dataContainer.appendChild(userList);

    } catch (error) {
        // 8. Handle any errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}

// 9. Run function when DOM is ready
document.addEventListener('DOMContentLoaded', fetchUserData);
