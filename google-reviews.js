const API_KEY = 'AIzaSyBR_w14X4yuSFGcPGzDM]8PPnTReFQWtqI'; // Replace with your API key
const PLACE_ID = 'ChIJEbPHg4w|wYcRg8qCqwcakuk'; // Replace with your Place ID

async function fetchReviews() {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`);
    const data = await response.json();
    return data.result.reviews;
}

async function displayReviews() {
    const reviews = await fetchReviews();
    const reviewsContainer = document.getElementById('reviews');

    reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `
            <strong>${review.author_name}</strong>
            <p>Rating: ${review.rating}</p>
            <p>${review.text}</p>
        `;
        reviewsContainer.appendChild(reviewElement);
    });
}

document.addEventListener('DOMContentLoaded', displayReviews);
