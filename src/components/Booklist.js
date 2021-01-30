import React,{Component} from 'react';
import Book from './Book';
import booksData from './Data';
import Button from './Button';

class Booklist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: booksData

    };
  }



// State işlemleri için renderın üstü kullanılır
  

  render() {
    // const example = this.state.books.map(item => item.book)
    // console.log(example);
    return (
      <div>
        <h2>Bu haftanın En Çok Satılanları</h2>
        {/* <Book info={this.state.books[0]} />
        <Book info={ this.state.books[1]}/> */}
        {this.state.books.map(book => (
          <Book key={book.id} info={book}/>
          )
        )}
        {/* <Button onClick={this.handleClick}/> */}
        
      </div>
    )
  }
}
export default Booklist;
