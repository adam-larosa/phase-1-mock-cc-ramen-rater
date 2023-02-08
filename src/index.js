
const topContainer = document.getElementById( 'ramen-menu' )
const imageElement = document.querySelector( '.detail-image' )
const nameElement = document.querySelector( '.name' )
const restaurantElement = document.querySelector( '.restaurant' )
const ratingElement = document.getElementById( 'rating-display' )
const commentElement = document.getElementById( 'comment-display' )
const theForm = document.getElementById( 'new-ramen' )


theForm.addEventListener( 'submit', e => {
    e.preventDefault()
    const ourNewRamenObject = {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value
    }

    // beginning of "advanced deliverable"
    fetch( 'http://localhost:3000/ramens', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( ourNewRamenObject )
    } )
        .then( r => r.json() )
        .then( aFreshRamenObj => {
            renderTop( aFreshRamenObj )
            e.target.reset()
        })
    // end of advanced

/*     renderTop( ourNewRamenObject ) <-- how we changed the DOM before doing
                                          advanced. */

} )


fetch( 'http://localhost:3000/ramens' )
    .then( r => r.json() )
    .then( ramensArray => {
        // renderMain( ramensArray[0] )  <--- more advanced 
        ramensArray.forEach( ramenObject => {
            renderTop( ramenObject )
        }  )
    } )


function renderTop( thatRamenObj ) {
    const img = document.createElement( 'img' )
    img.addEventListener( 'click', () => {
        renderMain( thatRamenObj ) 
    } )
    img.src = thatRamenObj.image
    topContainer.append( img )
}

function renderMain( ourRamenObj ) {
    imageElement.src = ourRamenObj.image
    nameElement.innerText = ourRamenObj.name
    restaurantElement.innerText = ourRamenObj.restaurant
    ratingElement.innerText = ourRamenObj.rating
    commentElement.innerText = ourRamenObj.comment
}

