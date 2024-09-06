document.addEventListener('DOMContentLoaded', () => {
    // Select the menu icon and the menu container
    const menuIcon = document.querySelector('.menu');
    const menuContainer = document.querySelector('.menuD');

    // Add click event listener to the menu icon
    menuIcon.addEventListener('click', () => {
        // Toggle the visibility of the menu container
        if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
            menuContainer.style.display = 'block';
        } else {
            menuContainer.style.display = 'none';
        }
    });
});