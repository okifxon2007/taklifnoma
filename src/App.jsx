import { useState } from 'react';
import './App.css';
import song from './assets/music/toy.m4a'; 

function App() {
  const [audio] = useState(new Audio(song)); 
  const [isPlaying, setIsPlaying] = useState(false); 

  const playAudio = () => {
    audio.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error("Audio playback failed", error);
    });
  };

  return (
    <div className="taklifnoma">
      <div className="conta">
        <div className="box">
          <div className="bing">
            <h1>Уважаемая __</h1>
            <p>Мы будем рады разделить с вами радость неповторимого для нас дня – дня нашей свадьбы! Приглашаем присоединиться к нашему празднику и украсить его своим присутствием!</p>
            <h3>Дата: <span>17</span> августа <span>2024</span></h3>
            <h3>Адрес: <span> Ресторан «Ак-Ниет»</span></h3>
            <h3>Время:</h3>
            {!isPlaying && (
              <button onClick={playAudio} className="play-button">
                🎵 Воспроизвести
              </button>
            )}
            <br />
            <br />
            <a href="https://www.google.com/maps/place/%D0%8E%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%BE%D0%BD+%D0%BA%D1%9E%D1%87%D0%B0%D1%81%D0%B8/@40.3967434,71.8004383,16.38z/data=!4m6!3m5!1s0x38bb835c6cc2614f:0x7ddc67a9eedee5e!8m2!3d40.395819!4d71.8020458!16s%2Fg%2F11p9x3m84x?entry=ttu" target="_blank">Локация</a>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;
