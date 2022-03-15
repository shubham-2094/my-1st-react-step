import React from 'react'

const Book = ({img, Title, Author, Price}) =>{                         //also other method  const Book = (props) => { const {img, Title, Author, Price} =props.book}
    //attribute, eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) =>{
      console.log(e)
      console.log(e.target)
      alert ('Hello From React')
    }
    const complexExample = (Author) =>{
      console.log(Author)
    }
    return(                                                              
      <article className='book' onMouseOver={() =>{
        console.log(Title)
      }}>
        <img src={img} alt="" />
        <h2>{Title}</h2>
        <h3>{Author}</h3>
        <h5>{Price}</h5>
        <button type='button' onClick={clickHandler}>Refrence</button>
        <button type = 'button' onClick={ () =>complexExample(Author)}>Example</button>
  
      </article>
    )
  }
  
  // const Title = () => <h3>Life's Amazing Secrets</h3>
  // const Image = () => {
  //   return(
  //     <img src="https://images-eu.ssl-images-amazon.com/images/I/81N7FmJhbhL._AC_UL604_SR604,400_.jpg" alt="" />
  //   )
  // }
  // const Author = () => {
  //   return (
  //     <h3>Gaur Gopal Das</h3>
  //   )
  // }
  
  // const Price = () => <h5>₹137.00</h5>
  
  // const Person = () => <h1>Hello World</h1>
  // const Message = () => {
  //   return <p>Welcome to React </p>
  // }
  
  // const Greeting = () =>{
  //   return React.createElement(
  //     'div',
  //     {},
  //     React.createElement('h1', {}, 'Hello From React')
  //   )
  // }
  


export default Book