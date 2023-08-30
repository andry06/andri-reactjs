import React from "react";
import { Container } from "react-bootstrap";
import CardNews from "./CardNews";
import Loading from "./Loading";

export default class NewsApi extends React.Component {

    state = {
        fetchError : false,
        fetchLoading: true,
        newsArray: [],
        searchData: '',
        currentData: []
    }

    componentDidMount(){
        const data = fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=745fc8773151426695f3366ddf6a4483');
        data
        .then(function(res){ return res.json()})
        .then(res => {
            this.setState({newsArray : res.articles, currentData : res.articles});
            
        })
        .catch(err => {
            this.setState({fetchError: true});
        })
        .finally(() => {
            this.setState({fetchLoading: false});
        });
    };

    componentDidUpdate(nextState, prevState){
        let tempData = this.state.newsArray;
        console.log(prevState);
        if(this.state.searchData !== prevState.searchData){
            if(this.state.searchData !== ''){
                
                const regexSearch = new RegExp(`.*${this.state.searchData}.*`, 'gi');
                // console.log(regexSearch);
                tempData = tempData.filter(function (p) { 
                    return p.title.match(regexSearch);
                });
            }
            setTimeout(() => {
                this.setState({currentData: tempData, fetchLoading: false, fetchError : tempData.length === 0 ? true : false});  
            }, 1000);
           
            
        }
    }

    render(){
    
        return(
            <Container>
                    <br />
                    <input className="form-control border-primary" placeholder="Search News ..." onChange={e => this.setState({searchData: e.target.value, fetchLoading: true})} type="text" />
                    <br />

                    {this.state.fetchLoading ? <Loading /> : this.state.fetchError ? 
                      <h2>Data Not Found</h2> : 
                    
                        <CardNews currentData = {this.state.currentData} />
                     }
                
            </Container>
        )
    }
}