import React from "react";

class News extends React.Component {

    constructor(props) {
        super(props);
    
        // This binding is necessary to make `this` work in the callback
        this.handleScrapeData = this.handleScrapeData.bind(this);
      }

    handleScrapeData() {
        fetch('/scrape')
            .then((response) => {
                // console.log(response);
                console.log('Button clicked at component level!');
                response.json().then((data) => {
                    console.log("client: ", data);
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        
        return (
            <div>
                <h1>News Component</h1>
                <hr/>
                <button onClick={this.handleScrapeData}>Scrape Me</button>
            </div>
            
        )
        
    }
    
} 
 

export default News;