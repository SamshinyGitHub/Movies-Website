const allProducts = [
  {
    id: 1,
    title: "They Cloned Tyrone",
    desc: "A pulpy, sci-fi mystery caper in which an unlikely trio investigates a series of eerie events, alerting them to a nefarious conspiracy.",
    image: "img/img1.jpg",
    year: "RELEASE DATE: July 21, 2023",
  },

  {
    id: 2,
    title: "Oppenheimer",
    desc: "Will focus on a seminal moment in World War II. This one is J. Robert Oppenheimer’s role in the development of the atom bomb during WWII.",
    image: "img/img2.jpg",
    year: "RELEASE DATE: July 21, 2023",
  },

  {
    id: 3,
    title: "Barbie",
    desc: "To live in Barbie Land is to be a perfect being in a perfect place. Unless you have a full-on existential crisis. Or you're a Ken.",
    image: "img/img3.jpg",
    year: "RELEASE DATE: July 21, 2023",
  },

  {
    id: 4,
    title: "Asteroid City",
    desc: "The itinerary of a Junior Stargazer convention is spectacularly disrupted by world-changing events.",
    image: "img/img4.jpg",
    year: "RELEASE DATE: July 23, 2023",
  },

  {
    id: 5,
    title: "Past Lives",
    desc: "Nora and Hae Sung, two deeply connected childhood friends, are wrest apart after Nora's family emigrates from South Korea.",
    image: "img/img5.jpg",
    year: "RELEASE DATE: August 31, 2023",
  },

  {
    id: 6,
    title: "Cocaine Bear",
    desc: "Based on an untitled spec written by Jimmy Warden. It is inspired by true events that took place in Kentucky in 1985.",
    image: "img/img6.jpg",
    year: "RELEASE DATE: Febuary 24, 2023",
  },

  {
    id: 7,
    title: "The Little Mermaid (1988)",
    desc: "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world.",
    image: "img/img7.jpg",
    year: "RELEASE DATE: May 26, 2023",
  },

  {
    id: 8,
    title: "Evil Dead Rise",
    desc: "Moving the action out of the woods and into the city, 'Evil Dead Rise' tells a twisted tale of two estranged sisters.",
    image: "img/img8.jpg",
    year: "RELEASE DATE: Apri 21, 2023",
  },
  {
    id: 9,
    title: "Missing",
    desc: "From the minds behind Searching comes Missing, a thrilling roller-coaster mystery that makes you wonder how well you know those closest to you.",
    image: "img/img9.jpg",
    year: "RELEASE DATE: January 20, 2023",
  },
  {
    id: 10,
    title: "The Super Hero Bros",
    desc: "Mario and Luigi live in New York City until one fateful day, they go into the video game movie and discover the mysteries of their missing father.",
    image: "img/img10.jpg",
    year: "RELEASE DATE: April 7, 2023",
  },
  {
    id: 11,
    title: "M3GAN",
    desc: "In the film, Williams plays Gemma, a brilliant roboticist at a toy company. She uses artificial intelligence to develop M3GAN.",
    image: "img/img11.jpg",
    year: "RELEASE DATE: January 6, 2023",
  },
  {
    id: 12,
    title: "Creed 3",
    desc: "After dominating the boxing world, Adonis Creed (Michael B. Jordan) has been thriving in both his career and family life.",
    image: "img/img12.jpg",
    year: "RELEASE DATE: March 3, 2023",
  },
];

const prodCont = document.getElementById('products-cont')
// console.log(prodCont)


const createProduct=()=>{
    allProducts.forEach((product, index)=>{
        // console.log(index)
        const card = `
        <div key=${index} class='card'>
            <img src=${product.image} alt=${product.title}/>
            <h3>${product.title}</h3>
            <p>${product.desc}</p>
            <small>${product.year}</small>
            <button class="play-btn">Play ▶</button>
        </div>
    `        
    prodCont.innerHTML += card 
    })

}
createProduct()






// const newProducts = document.getElementById('new-card')
// const createProduct2=()=>{
//     allProducts.map((prod)=>{
//         const newCard = document.createElement('div')
//         newProducts.appendChild(newCard)
//         const image = document.createElement('img')
//         image.src=prod.image
//         const title = document.createElement('h2')
//         title.innerHTML = prod.title
//         const description = document.createElement('p')
//         description.innerHTML = prod.desc
//         const price  = document.createElement('p')
//         price.innerHTML = prod.price
//         const buyNow = document.createElement('button')
//         buyNow.innerHTML = 'Buy Now'
    

//         newCard.appendChild(image)
//         newCard.appendChild(title)
//         newCard.appendChild(description)
//         newCard.appendChild(price)
//         newCard.appendChild(buyNow)

//         newCard.className='card'

//         newProducts.appendChild(newCard)
        
//     })
// }

// createProduct2()