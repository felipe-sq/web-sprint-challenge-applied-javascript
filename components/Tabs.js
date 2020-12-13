// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const tabEntryPoint = document.querySelector('div.topics')


const newTabURL = axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(({data}) => {
    // console.log(data)
    let newTabData = data
    let tabDataArray = Object.values(newTabData)

    console.log(tabDataArray)
    
    // const newTopic = newTopicMaker(newTabData)


    // for(i = 0; i < newTabData.length; i++){
    //     const newTab = document.createElement('div')
    //     newTab.classList.add('tab')
    //     newTab.textContent = `${i}`

    //     tabEntryPoint.appendChild(newTopic);
    //     return newTab
    // }
    
    tabDataArray.forEach(e => {
        const newTopic = newTopicMaker(e)

        tabEntryPoint.appendChild(newTopic);
    })


})
.catch(err => {
    console.log ('Error: ', err)
})

function newTopicMaker(data){

    const newTab = document.createElement('div')
    newTab.classList.add('tab')
    newTab.textContent = `${data}`
    // tabEntryPoint.appendChild(newTab);
    
    return newTab
}

// tabEntryPoint.appendChild(newTopicMaker(newTabURL))