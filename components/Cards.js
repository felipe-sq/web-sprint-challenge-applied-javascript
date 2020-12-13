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

    // let articlesAll = data.articles


    // console.log(articlesJS[0])
    console.log(articlesJS[0]['headline'])

    const newArticle1 = newHeadlineCardMaker(articlesJS[0])
    const newArticle2 = newHeadlineCardMaker(articlesJS[1])
    const newArticle3 = newHeadlineCardMaker(articlesJS[2])
    const newArticle4 = newHeadlineCardMaker(articlesJS[3])
    headlineEntryPoint.appendChild(newArticle1)
    headlineEntryPoint.appendChild(newArticle2)
    headlineEntryPoint.appendChild(newArticle3)
    headlineEntryPoint.appendChild(newArticle4)


    const nodeArticle1 = newHeadlineCardMaker(articlesNode[0])
    const nodeArticle2 = newHeadlineCardMaker(articlesNode[1])
    headlineEntryPoint.appendChild(nodeArticle1)
    headlineEntryPoint.appendChild(nodeArticle2)

    const bsArticle1 = newHeadlineCardMaker(articlesBS[0])
    const bsArticle2 = newHeadlineCardMaker(articlesBS[1])
    const bsArticle3 = newHeadlineCardMaker(articlesBS[2])
    headlineEntryPoint.appendChild(bsArticle1)
    headlineEntryPoint.appendChild(bsArticle2)
    headlineEntryPoint.appendChild(bsArticle3)

    const techArticle1 = newHeadlineCardMaker(articlesTech[0])
    const techArticle2 = newHeadlineCardMaker(articlesTech[1])
    const techArticle3 = newHeadlineCardMaker(articlesTech[2])
    headlineEntryPoint.appendChild(techArticle1)
    headlineEntryPoint.appendChild(techArticle2)
    headlineEntryPoint.appendChild(techArticle3)

    const jqArticle1 = newHeadlineCardMaker(articlesJQuery[0])
    const jqArticle2 = newHeadlineCardMaker(articlesJQuery[1])
    const jqArticle3 = newHeadlineCardMaker(articlesJQuery[2])
    headlineEntryPoint.appendChild(jqArticle1)
    headlineEntryPoint.appendChild(jqArticle2)
    headlineEntryPoint.appendChild(jqArticle3)

    // Unable to write working code to iterate through article objects. Entered long 
    // code above.

    // articlesJS.forEach(e => {

    //     const newArticle1 = newHeadlineCardMaker(articlesJS[e])
    //     headlineEntryPoint.appendChild(newArticle1)
    // })


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

    divCard.addEventListener('click', ()=> {
        console.log(divHeadline.textContent)
    })

    console.log(divCard)

    return divCard
}

