import React, { Component } from 'react'
import Button from './Button';



export default class Book extends Component {
    //Eventları buraya yazman gerek 
    //1 Constructor - 2 - state - 3 Events -4 Structure
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this);
       this.state = {
           count: 0,
        //    name: 'Zeki',
        //     age: '36'
        };
    
    }
   
    
    addCount = () => {
        //Burası Event kısmı ve bunu bind etmen lazım...
        // console.log('Bana Tıkla!');
        // console.log(this.state.count);
        this.setState({
            count: this.state.count + 1,
            // name: this.state.name,//burada "" içinde yazarsab tıklandığında değiştirir yazıyı 
            // //çünkü bu event
            // age: this.state.age
        })
        
    };
    lowerCount = () => {
        if(this.state.count<=0){
            this.setState({
                count:this.state.count= 0
            })
        }else{
        this.setState({
            
            count: this.state.count -1
        
        })}
        
    }
    resetCount = () => {
        this.setState({
            count: this.state.count = 0,
        })
    }
    handleClick() {
        console.log("Ben button habercisi")
      }





    render() {
        const { img, title, author } = this.props.info //burada booka eklediğin özellikleri göstermen lazım
        //Bu componentin özellikleridir bunları eklememiz lazım.
        return (
            <div className='book'>
                {/* <h3>Hello From Book </h3> */}
                <img src={img} width='150px' alt='book' />
                <div>
                    <h4> Title: {title}</h4>
                    <h6> By : {author}</h6>
                    <button onClick={this.addCount}>Add Count</button>
                    <button onClick={this.lowerCount}>lower Count</button>
                    <button onClick={this.resetCount}>reset Count</button>

       
                    <h1>count: {this.state.count}</h1>
                    {/* <h3>name: {this.state.name}</h3> */}
                <Button/>
                </div>
            </div>
        )
    }
}
