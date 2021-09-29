// write your code here

const ramenMenuElement = document.getElementById('ramen-menu')


const newRamenForm = document.getElementById('new-ramen')

newRamenForm.addEventListener('submit', e => {
    e.preventDefault()

    //make an object
    const newRamen = {}
    newRamen.name = e.target.name.value
    newRamen.restaurant = e.target["new-restaurant"].value
    newRamen.image = e.target.image.value
    newRamen.rating = e.target.rating.value
    newRamen.comment = e.target["new-comment"].value

    //use renderRamenToMenu with the new object
    renderRamenToMenu(newRamen)
})


const ramenClick = (theRamen) => {
    // grab the ramen-detail div
    const detailElement = document.getElementById("ramen-detail")
    // add theRamen's attributes to the div
    // a img that needs the image
    const img = detailElement.querySelector('img')
    img.src = theRamen.image
    // a h2 that needs the name
    const h2 = detailElement.querySelector('h2')
    h2.textContent = theRamen.name
    // a h3 that needs the restaurant
    const h3 = detailElement.querySelector('h3')
    h3.textContent = theRamen.restaurant

    // lol don't forget anything!
    document.querySelector('span#rating-display').textContent = theRamen.rating
    document.getElementById('comment-display').innerText = theRamen.comment
}


function renderRamenToMenu (ramenObject) {
    const newImg = document.createElement('img')

    newImg.addEventListener('click', () => ramenClick(ramenObject))

    // assign the src attribute to each img element
    newImg.src = ramenObject.image
    // append to the ramenMenuElement
    ramenMenuElement.append(newImg)

}

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(ramens => {
        ramens.forEach( renderRamenToMenu )       
    })
