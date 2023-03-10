if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
    } else {
        ready()
    }

function ready() {
    /*remove product button from cart */
    var removeCartItemButtons = document.getElementsByClassName('btn-delet')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    /*quantity list from cart*/
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    /*add to cart button in product*/
    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
         var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('purchase-btn')[0].addEventListener('click', purchaseClicked)
    }
 /*remove cart item function here*/
 function removeCartItem(event) {
    var buttonClicked = event.target
   buttonClicked.parentElement.parentElement.remove()
   /*update called here, please check function before after every change*/
   CartTotal()
}

    /* quantity change in the cart function here*/
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
     /*update called here, please check function before after every change*/
    CartTotal()
}
    /*add to cart 'EVENT!!' function from products*/
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addToCart(title, price, imageSrc)
    /*update called here, please check function before after every change*/
    CartTotal()
}
/*add to cart from products here*/
function addToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('You have choosen the same Product again! Are you sure that you want to add again')
            return
        }
    }
        /*Cart contents*/
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
            <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-delet" type="button">REMOVE</button>
        </div>`
        cartRow.innerHTML = cartRowContents
        cartItems.append(cartRow)
        cartRow.getElementsByClassName('btn-delet')[0].addEventListener('click', removeCartItem)
        cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}
    /*update cart function here*/
function CartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
    /*purchase button function here*/
function purchaseClicked() {

    var name=prompt("Enter your first name");
    var lastname=prompt("Enter your last name");
        
    
    if(name==null || name==""){
        alert("First Name can not be blank");
        return false;
    }else if(lastname==null || lastname==""){
        alert("Last Name can not be blank");
        return false;
    }else{
        var cartItems = document.getElementsByClassName('cart-items')[0]
        while (cartItems.hasChildNodes()) {
            cartItems.removeChild(cartItems.firstChild)
        }
        alert(name+" "+lastname+" "+'Thank you for your purchase')
    
    }
    
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    /*update called here, please check function before after every change*/
    CartTotal()
}
