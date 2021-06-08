/* eslint-disable react-hooks/exhaustive-deps */
import './App.css';
import React, { useState ,useEffect} from 'react';
import Cards from './Cards.js';
import Search from './Search.js';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cards, setCards] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [keywords, setKeywords] = useState("")
  const [total, setTotal] = useState(0)
  const [input, setInput] = useState("")

  async function getData() {
    const response = await fetch(`https://api.elderscrollslegends.io/v1/cards/?pageSize=20&page=${page}&name=${keywords}`).then(setLoading(true));
    const data = await response.json();

    if(page>0 && data){
      setCards(cards.concat(data.cards))
    }else if(data){
      setCards(data.cards)
    }
    setLoading(false)
    setTotal(data._totalCount)
  }

  const onClicked = () => {
    setKeywords(input)
    setInput("")
    setCards([])
    setLoaded(false)
    setPage(1)
  }

  const onKeyPress = (e) => {
    console.log(e)
    if(e.charCode === 13) {
      onClicked()
    }else{
      setInput(input+e.key)
    }
  }

  const onScroll = () => {
    if (window.pageYOffset+1000 > document.body.scrollHeight) {
      setPage(page+1)
      getData()
    }
  };
  
  useEffect(() => {
    if(!loaded){
      getData()  
      setLoaded(true)
    }
    window.addEventListener("scroll", onScroll);

    return () => [window.removeEventListener("scroll", onScroll)]
  }, [page, keywords]);

  return (
    <Container className="App">
      <Search onClicked={onClicked} onKeyPress={onKeyPress} />
      <div id="total">Total Count = {total}</div>
        {loading &&<Spinner className="spinner" animation="border" variant="primary"/>} 
        <Cards cards={cards}/>
    </Container>
  );
}

export default App;
