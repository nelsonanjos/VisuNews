import React, { useState } from 'react';
import './css/style.css';

import Image from './components/image.component'

import News from './components/news.component';
import Time from './components/time.component';
import Head from './components/head.component';

function App() {
  let news1 = {
    head: 'Tecnologia',
    img: require('./img/ti.jpeg'),
    title: 'Diretor do INPI afirma que o mundo digital está mudando!',
    text: ['O diretor do INPI disse que o mundo digital cresce',
    'a cada momento rápidamente.',
    'Ainda disse, que nada estava dizendo']
  };
  let news2 = {
    head: 'Négocios',
    img: require('./img/business.jpg'),
    title: 'Mundo dos négocios muda drasticamente.',
    text: ['Com o caso do coronavírus circulando',
    'economistas informam que não é bom investir alto nesse tempo.',
    'O melhor seria aguardar a melhora na China.']
  };
  let news3 = {
    head: 'Saúde',
    img: require('./img/fruit.jpg'),
    title: 'Coma bem, para ter uma vida saúdavel.',
    text: ['Comer frutas no café da manhã tras um ânimo melhor',
    'além disso diminui os riscos de infarto',]
  };
  
  const listNews = [news1, news2, news3];
  const [head, setHead] = useState(listNews[0].head);
  const [image, setImage] = useState(listNews[0].img);
  const [title, setTitle] = useState(listNews[0].title);
  const [text, setText] = useState(listNews[0].text);
  const [time, setTime] = useState(null);
  let [positionNews, setPositionNews] = useState(1);
  const timeSlide = minutes => (minutes * 1000)*60;
  

  const handleSlide = async() => {
    setTimeout(() => {
      (positionNews < listNews.length-1)
      ? setPositionNews(positionNews+1)
      : setPositionNews(0);
      setImage(listNews[positionNews].img);
      setTitle(listNews[positionNews].title);
      setText(listNews[positionNews].text);
    }, timeSlide(0.1));
  }
  handleSlide();

  const handleTime = async() => setTimeout(() => {
    setTime(<Time />);
  }, 1000);

  handleTime();
  return (
    <div className="App">
      <section>
        <Head text={head}/>
        <Image src={image}/>
      </section>

      <footer>
        <div id="container-news">
          <News title={title} text={text} />
        </div>
        <div id="container-date">
          {time}
        </div>
      </footer>

    </div>
  );
}

export default App;
