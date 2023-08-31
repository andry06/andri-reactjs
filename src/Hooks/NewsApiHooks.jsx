import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import LoadingHooks from "./LoadingHooks";
import CardNewsHooks from "./CardNewsHook";

const NewsApiHooks = () => {

    let [News, setNews] = useState({});
    let [Error, setError] = useState(false);
    let [Loading, setLoading] = useState(true);
    let [Current, setCurrent] = useState({});
    let [Search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=745fc8773151426695f3366ddf6a4483')
        .then(function(res){ return res.json()})
        .then(res => {
            setNews(res.articles);
            setCurrent(res.articles)
        })
        .catch(err => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        });
        
    }, []); 

    useEffect(() => {
        let tempData = News;
        if(Search !== ''){
            
            const regexSearch = new RegExp(`.*${Search}.*`, 'gi');
                // console.log(regexSearch);
                tempData = tempData.filter(function (p) { 
                    return p.title.match(regexSearch);
                });
                 
            setTimeout(() => {
                setCurrent(tempData);
                setLoading(false);
                setError(tempData.length === 0 ? true : false);
            }, 1000);
            
        }
    }, [Search])

    return(
        <div>
              <Container>
                    <br />
                    <input className="form-control border-primary" placeholder="Search News ..." 
                    onChange={e => { 
                        setSearch(e.target.value);
                        setLoading(true);
                    }}
                    type="text" />
                    <br />
                    {Loading ? <LoadingHooks /> : Error ? 
                      <h2>Data Not Found</h2> : 
                        <CardNewsHooks Current = {Current} />
                     }
                
            </Container>
        </div>
    )
}

export default NewsApiHooks;