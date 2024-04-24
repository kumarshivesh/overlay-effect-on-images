const image_data = {
  results : [
    {id: 0, urls: "./images/image4-f.jpg", title: "Holistic Development", description: "Right Mix of Curricular and Co-Curricular Activities."},
    {id: 1, urls: "./images/image2-f.jpg", title: "Proven and Tested Centralized Curriculum", description: "CBSE school with balanced traditional & contemporary curriculum to foster growth in all its students."},
    {id: 2, urls: "./images/image3-f.jpg", title: "Innovative and Challenging learning Methodologies", description: "Facilitate excellence through critical thinking and profound learning."},
    {id: 3, urls: "./images/image4-f.jpg", title: "Faculty Enrichment Program", description: "Regular teacher training and curriculum workshops"},
  ]
}

console.log(image_data)

const imagesContainer = document.querySelector('.images-container')

// Funtion to fetch images using Unsplash API
const fetchImages = async (image_data) => {
  try {
    if(image_data.results.length > 0){
      console.log(`The image_data length is ${image_data.length}`)
      image_data.results.forEach((photo) => {
        const imageElement = document.createElement('div')
        imageElement.classList.add('imageDiv')
        imageElement.innerHTML = `<img src="${photo.urls}">`
    
        //creating overlay
        const overlayElement = document.createElement('div')
        overlayElement.classList.add('overlay')
    
        //creating overlay text
        const overlayTitle = document.createElement('h2')
        overlayTitle.innerText = `${photo.title}`
        
        // Splitting the title into words
        const words = photo.title.split(' ')
        console.log(words)

        // Check if the length of the word is 5
        if (words.length === 5) {
          
         overlayTitle.innerHTML = `<span style="color: #f3c265;">${words[0]}</span> ${words[1]} <span style="color: #f3c265;">${words[2]}</span> ${words[3]} ${words[4]}`
        } else {
          // Extracting the first word
          const firstWord = words[0]

          overlayTitle.innerHTML = `<span style="color: #f3c265;">${firstWord}</span> ${photo.title.slice(firstWord.length)}`
        }


        const overlayDescription = document.createElement('h3')
        overlayDescription.innerText = `${photo.description}`
        
        overlayElement.appendChild(overlayTitle)
        overlayElement.appendChild(overlayDescription)
        imageElement.appendChild(overlayElement)
        imagesContainer.appendChild(imageElement)
      })
    } else {
      imagesContainer.innerHTML = '<h2>None image found</h2>'
    }
  } catch (error) {
    imagesContainer.innerHTML = '<h2>Fail to fetch images. Please try again.</h2>'
  }
}

// Calling the `fetchImages` function
fetchImages(image_data)
