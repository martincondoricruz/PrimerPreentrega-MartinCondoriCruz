import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/002/483/079/non_2x/shopping-cart-trolley-supermarket-line-style-free-vector.jpg";
  return (
    <div>
        <img src={imgCarrito} alt="Carrito de compras" />
        <p>10</p>
        </div>
  )
}

export default CartWidget