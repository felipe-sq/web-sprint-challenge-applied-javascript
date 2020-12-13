// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//

const { default: Axios } = require("axios");

// Use your function to create a card for each of the articles, and append each card to the DOM.

const headlineEntryPoint = document.querySelector('div.cards-container')

Axios.get('https://lambda-times-api.herokuapp.com/articles')
.then(({data}) => {
    console.log(data)
    let articlesJS = data.articles['javascript']
    let articlesBS = data.articles['bootstrap']
    let articlesTech = data.articles['technology']
    let articlesJQuery = data.articles['jquery']
    let articlesNode = data.articles['node']

    let articlesAll = data.articles


    // console.log(articlesJS[0])
    console.log(articlesJS[0]['headline'])

    const newArticle = newHeadlineCardMaker(articlesJS[0])
    headlineEntryPoint.appendChild(newArticle)


    articlesJS.forEach(e => {

        const newArticle1 = newHeadlineCardMaker(articlesJS[e])
        headlineEntryPoint.appendChild(newArticle1)
    })


    // for(i = 0; i < articlesBS.length; i++){
    //     const newHeadlineCard = newHeadlineCardMaker(articlesBS['i'])
    //     headlineEntryPoint.appendChild(newHeadlineCardMaker(newHeadlineCard))        
    //     return newHeadlineCard
    // }

})
.catch(err => {
    console.log('Error: ', err)
})

function newHeadlineCardMaker(data) {
    const divCard = document.createElement('div')
    const divHeadline = document.createElement('div')
    const divAuthor = document.createElement('div')
    const authorImgDiv = document.createElement('div')
    const divImg = document.createElement('img')
    const spanByLine = document.createElement('span')

    divCard.classList.add('card')
    divHeadline.classList.add('headline')
    divHeadline.textContent = `${data['headline']}`
    divAuthor.classList.add('author')
    authorImgDiv.classList.add('img-container')
    divImg.src = data['authorPhoto']
    spanByLine.textContent = `By ${data['authorName']}`

    divCard.appendChild(divHeadline)
    divCard.appendChild(divAuthor)
    divAuthor.appendChild(authorImgDiv)
    authorImgDiv.appendChild(divImg)
    divAuthor.appendChild(spanByLine)

    console.log(divCard)

    return divCard
}

// newHeadlineCard(articlesURL)
