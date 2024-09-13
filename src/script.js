document.addEventListener('DOMContentLoaded', () => {
    const signInBtn = document.getElementById('signInBtn');
    const contactBtn = document.getElementById('contactBtn');
    
  
  
    const signInModal = document.getElementById('signInModal');
    const contactModal = document.getElementById('contactModal');
    
  
  
    const closeSignInBtn = document.querySelector('.close-btn');
    const closeContactBtn = document.querySelector('.contact-close-btn');
  

    // Show sign-in modal when sign-in button is clicked
    signInBtn.addEventListener('click', () => {
        signInModal.style.display = 'block';
    });

    // Show contact modal when contact button is clicked
    contactBtn.addEventListener('click', () => {
        contactModal.style.display = 'block';
    });

    // Hide sign-in modal when close button is clicked
    closeSignInBtn.addEventListener('click', () => {
        signInModal.style.display = 'none';
    });

    // Hide contact modal when close button is clicked
    closeContactBtn.addEventListener('click', () => {
        contactModal.style.display = 'none';
    });
  

    // Hide modals when clicking outside of modal content
    window.addEventListener('click', (event) => {
        if (event.target === signInModal) {
            signInModal.style.display = 'none';
        }
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
      
    });
});



function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.city-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Optionally, you can show the first section by default
document.addEventListener('DOMContentLoaded', function() {
    showSection('chandigarh'); // Show Chandigarh by default
});







function showSectionH(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.hiddencity-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Optionally, you can show the first section by default
document.addEventListener('DOMContentLoaded', function() {
    showSectionH('kakra'); // Show Chandigarh by default
});





function showSectionhotel(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.hotelcity-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Optionally, you can show the first section by default
document.addEventListener('DOMContentLoaded', function() {
    showSectionhotel('place1'); // Show Chandigarh by default
});




// script.js

document.getElementById('searchButton').addEventListener('click', async () => {
    const location = document.getElementById('location').value.trim();
    if (!location) {
        alert('Please enter a city or state.');
        return;
    }

    const apiKey = 'b3edd18764e3a83f2527c8eb2281b10f'; // Replace with your actual API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById('weatherInfo').innerHTML = '<p>Location not found. Please try again.</p>';
            return;
        }

        document.getElementById('weatherInfo').innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
            <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('weatherInfo').innerHTML = '<p>Failed to fetch weather data. Please try again later.</p>';
    }
});


document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract form data
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Simulate form submission
    alert(`Booking Confirmed!\n
        Destination: ${destination}\n
        Travel Date: ${date}\n
        Travel Type: ${type}\n
        Name: ${name}\n
        Email: ${email}`);
});

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract form data
    const name = document.getElementById('name').value;
    const rating = document.getElementById('rating').value;
    const reviewText = document.getElementById('reviewText').value;
    const photo = document.getElementById('photo').files[0];
    const video = document.getElementById('video').files[0];

    // Create review element
    const reviewElement = document.createElement('div');
    reviewElement.className = 'review';

    // Add rating
    reviewElement.innerHTML =`<div class="rating">Rating: ${rating} ⭐ </div>`;

    // Add review text
    reviewElement.innerHTML +=`<p><strong>${name}:</strong> ${reviewText}</p>`;

    // Add photo
    if (photo) {
        const photoURL = URL.createObjectURL(photo);
        reviewElement.innerHTML +=`<img src="${photoURL}" alt="Review Photo">`;
    }

    // Add video
    if (video) {
        const videoURL = URL.createObjectURL(video);
        reviewElement.innerHTML +=`<video controls src="${videoURL}"></video>`;
    }

    // Add review to reviews container
    document.getElementById('reviewsContainer').appendChild(reviewElement);

    // Clear form
    document.getElementById('reviewForm').reset();
});