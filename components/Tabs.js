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
    let newTabData = data.topics
    // let tabDataArray = Object.values(newTabData)
    // const tabDataArray = tabObjectKeys.splice(' ')

    console.log(newTabData)
    // console.log(tabDataArray)
    
    // const newTopic1 = newTopicMaker(tabDataArray[0][0])
    // tabEntryPoint.appendChild(newTopic1);

    // const newTopic2 = newTopicMaker(tabDataArray[0][0])
    // tabEntryPoint.appendChild(newTopic2);

    // const newTopic3 = newTopicMaker(tabDataArray[0][1])
    // tabEntryPoint.appendChild(newTopic3);

    // const newTopic4 = newTopicMaker(tabDataArray[0][2])
    // tabEntryPoint.appendChild(newTopic4);

    // const newTopic5 = newTopicMaker(tabDataArray[0][3])
    // tabEntryPoint.appendChild(newTopic5);


    newTabData.forEach(e => {
        const newTopic = newTopicMaker(e)

        tabEntryPoint.appendChild(newTopic);
    })

    // Wrote longer code above as the .forEach() method was not working as expected. 
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

// Code still needs more work. Topic Tabs are all displaying as a single tab instead of iterating into separate tabs via the .forEach() method. 

// tabEntryPoint.appendChild(newTopicMaker(newTabURL))