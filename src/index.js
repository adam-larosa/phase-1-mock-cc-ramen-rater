

const topContainer = document.getElementById( 'ramen-menu' )
const mainImageElement = document.querySelector( '.detail-image' )
const nameElement = document.querySelector( '.name' )
const restaurantElement = document.querySelector( '.restaurant' )
const ratingElement = document.getElementById( 'rating-display' )
const commentElement = document.getElementById( 'comment-display' )
 
// deliverable 3
const newRamenForm = document.querySelector( '#new-ramen' )
newRamenForm.addEventListener( 'submit', e => {
    e.preventDefault()

    const newRamenObj = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }

    renderSingleTop( newRamenObj )
    // renderMain( newRamenObj ) 
} )



fetch( 'http://localhost:3000/ramens' )
    .then( r => r.json() )
    .then( ramensArray => {
    
        //deliverable 1
        ramensArray.forEach( ramenObjInTheArray => {

            renderSingleTop( ramenObjInTheArray )

        } )
    } ) 



    
// deliverable 1 & 3
function renderSingleTop( ramenObj ) {

    // make an new element
    const imageElement = document.createElement( 'img' )
    
    // change an attribute of that element
    imageElement.src = ramenObj.image
    
    // put the new element on the DOM
    topContainer.append( imageElement )
    
    // adding a listener for deliverable
    imageElement.addEventListener( 'click', () => {
        renderMain( ramenObj )
    } )
} 


// deliverable 2
function renderMain( thatRamenObj ) {
    mainImageElement.src = thatRamenObj.image
    nameElement.textContent = thatRamenObj.name
    restaurantElement.textContent = thatRamenObj.restaurant
    ratingElement.textContent = thatRamenObj.rating
    commentElement.textContent = thatRamenObj.comment
}