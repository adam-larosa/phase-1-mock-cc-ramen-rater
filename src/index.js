// write your code here
const detailImg = document.querySelector( '.detail-image' )
const name = document.querySelector( '.name' )
const restaurant = document.querySelector( '.restaurant' )
const rating = document.querySelector( '#rating-display' )
const comment = document.getElementById( 'comment-display' )

const topContainer = document.querySelector( '#ramen-menu' )

const formElement = document.querySelector( '#new-ramen' )


formElement.addEventListener( 'submit', e => {
    e.preventDefault()

    const newRamen = {
        image: e.target.image.value,
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        rating: e.target.rating.value,
        comment: e.target["new-comment"].value
    }

    renderSingleTop( newRamen )
    renderMain( newRamen )
    
    // cool user experience where the form is cleared.
    e.target.reset()
} )

const renderSingleTop = ramenObj => {
    const imgElement = document.createElement( 'img' )
    imgElement.src = ramenObj.image
    topContainer.append( imgElement )
    imgElement.addEventListener( 'click', () => renderMain( ramenObj ) )
}

const renderTopMenu = ramenArray => ramenArray.forEach( renderSingleTop )

const renderMain = ramenObj => {
    detailImg.src = ramenObj.image
    name.textContent = ramenObj.name
    restaurant.textContent = ramenObj.restaurant
    rating.textContent = ramenObj.rating
    comment.textContent = ramenObj.comment
}





fetch( 'http://localhost:3000/ramens' )
    .then( resp => resp.json() )
    .then( ramenArray => {
        renderTopMenu( ramenArray )
    } )
