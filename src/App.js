import './App.css';
import Video from './pages/Video'
import clip0 from "./pages/videos/scoott.mp4"
import clip1 from "./pages/videos/mrbeen.mp4"  


function App() {
  
  return (
    <div className="App">
      <div className='app__videos'>
        
        <Video 
          likes={100}
          messages={200}
          shares={300}
          name="David 1"
          description="Michael Scott, the office"
          music="epic music"
          clip={clip0}
        />

        <Video 
          likes={1000}
          messages={200}
          shares={300}
          name="David 2"
          description="Mr Bean, tranquilão"
          music="musica boa, musica maneirona"
          clip={clip1}
        />
        
      </div>      
    </div>
  );
}

export default App;
