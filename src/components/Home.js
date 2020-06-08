import React from 'react';
import {FormControl, Button, InputGroup} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import axios from 'axios';
export default class Home extends React.Component{
    state= {
        articles:[]
    }
    getData = () =>{
        const text=document.getElementById("text").value

        axios.get("http://newsapi.org/v2/everything?q="+text+"&apiKey=b3159ffc028a41ab8fdd336e9e6cb2a1")
        .then(res=>{return res.data}).then(articles=> this.setState(articles))
        console.log(this.articles)

    }
    render(){
        return(
            <div>
                <InputGroup className="mb-3">
               <FormControl id="text" placeholder="Search..." aria-describedby="basic-addon1" /> 
               <Button onClick={this.getData} variant="outline-secondary">Submit</Button>
               </InputGroup>
               <div id="articles">
                   {
                       this.state.articles.map(article=>
                        <div id="article">
                        <p ><strong>{article.source.name}</strong></p>
                        <a href={article.url} target="_blank"><img src={article.urlToImage} alt="image" width="400" height="300"/></a>
                        <p><em>{article.content}-{article.author}</em></p>
                        </div>
                        )
                   }
               </div>
            </div>
        );
    }
}
