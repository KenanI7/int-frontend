function submitForm() {
    document.getElementById('search-form').submit();
}

const input = document.querySelector('.search-input');

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        submitForm();
    }
});

const navItems = document.querySelectorAll('.nav-item');
const contentDisplay = document.querySelector('.content-display');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let currentIndex = 0; // To keep track of the currently selected nav item

// Function to update content based on selected nav item
function updateContent(index) {
    // Clear previously selected nav items
    navItems.forEach(item => item.classList.remove('active'));
    // Highlight the clicked nav item
    navItems[index].classList.add('active');
    // Display content based on clicked nav item
    contentDisplay.textContent = `Content for ${navItems[index].textContent}`;
}

// Add click event listener to each nav item
navItems.forEach((navItem, index) => {
    navItem.addEventListener('click', () => {
        currentIndex = index; // Update the current index
        updateContent(currentIndex);
    });
});

// Arrow functionality to scroll between nav items
leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + navItems.length) % navItems.length;
    updateContent(currentIndex);
});

rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % navItems.length;
    updateContent(currentIndex);
});

// Initialize with the first item as selected
updateContent(currentIndex);


// Function to update content based on selected nav item
function updateContent(index) {
    // Clear previously selected nav items
    navItems.forEach(item => item.classList.remove('active'));
    // Highlight the clicked nav item
    navItems[index].classList.add('active');
    // Display content based on clicked nav item
    contentDisplay.textContent = `Content for ${navItems[index].textContent}`;

    // Show or hide the left arrow based on the selected index
    leftArrow.style.display = index === 0 ? 'none' : 'block';
}

// ... (your existing code)


// Function to update content based on selected nav item
function updateContent(index) {
    // Clear previously selected nav items
    navItems.forEach(item => item.classList.remove('active'));
    // Highlight the clicked nav item
    navItems[index].classList.add('active');
    // Display content based on clicked nav item
    contentDisplay.textContent = `Content for ${navItems[index].textContent}`;

    // Show or hide the left arrow based on the selected index
    leftArrow.style.visibility = index === 0 ? 'hidden' : 'visible';
}

// ... (rest of your code)


