const image_data = {
  results: [
    { id: 0, urls: "./images/image4-f.jpg", title: "Holistic Development", description: "Right Mix of Curricular and Co-Curricular Activities." },
    { id: 1, urls: "./images/image2-f.jpg", title: "Proven and Tested Centralized Curriculum", description: "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students." },
    { id: 2, urls: "./images/image3-f.jpg", title: "Innovative and Challenging learning Methodologies", description: "Facilitate excellence through critical thinking and profound learning." },
    { id: 3, urls: "./images/image4-f.jpg", title: "Faculty Enrichment Program", description: "Regular teacher training and curriculum workshops" },
  ]
}

// // Funtion to fetch images from `image_data`
const fetchImages = () => {
  
  const imagesContainer = document.querySelector('.images-container')

  // Function to create HTML elements using template literals
  const createImageElement = (photo) => {
    // Splitting the title into words
    const words = photo.title.split(' ');
    
    // Check if the length of the word is 5
    let titleHTML = '';
    if (words.length === 5) {
      titleHTML = `<span style="color: #f3c265;">${words[0]}</span> ${words[1]} <span style="color: #f3c265;">${words[2]}</span> ${words[3]} ${words[4]}`;
    } else {
      // Extracting the first word
      const firstWord = words[0];
      titleHTML = `<span style="color: #f3c265;">${firstWord}</span> ${photo.title.slice(firstWord.length)}`;
    }
    
    return (`
      <div class="imageDiv">
        <img src="${photo.urls}">
        <h2 class="bottomTitle">${titleHTML}</h2>
        <div class="overlay">
         
        </div>
        <div class="overlay-text">
          <h2>${photo.title}</h2>
          <h3>${photo.description}</h3>
          
        <div>
        
      </div>
    `);
  };

  // Loop through image data and append HTML elements to container
  image_data.results.forEach((photo) => {
    imagesContainer.innerHTML += createImageElement(photo);
  });
}

// Call the `fetchImages` function
fetchImages();

