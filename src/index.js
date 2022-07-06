
const menuContainer = document.getElementById( "ramen-menu" )

const imageElement = document.querySelector( '.detail-image' )
const nameElement = document.querySelector( '.name' ) 
const restaurantElement = document.querySelector( '.restaurant' ) 
const ratingElement = document.getElementById( 'rating-display' )
const commentElement = document.getElementById( 'comment-display' )

const formElement = document.getElementById( "new-ramen" )


formElement.addEventListener( 'submit', e => {
    e.preventDefault()
    
    const newRamenObj = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }

    renderTopPic( newRamenObj )
} )


fetch( 'http://localhost:3000/ramens' )    
    .then( respObj => respObj.json() )
    .then( ramensArray => {
        ramensArray.forEach( ramenObj => {
           renderTopPic( ramenObj )
        } )
    } )


function renderTopPic( ramenObj ) {
    // make a new <img> element
    const img = document.createElement( 'img' )

    // add a listener to new img element ( 2nd deliverable )
    img.addEventListener( 'click', () => showRamen( ramenObj ) )

    // change the element's attribute to have the ramenObj's data
    img.src = ramenObj.image

    // append the new element to the DOM
    menuContainer.append( img )
}


function showRamen( ramenObj ) {
    imageElement.src = ramenObj.image
    nameElement.textContent = ramenObj.name
    restaurantElement.textContent = ramenObj.restaurant
    ratingElement.textContent = ramenObj.rating
    commentElement.textContent = ramenObj.comment
}


