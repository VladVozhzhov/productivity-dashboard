import WeatherWidjet from './WeatherWidget'
import Todo from './Todo';
import Timer from './Timer'

function App() {
  return (
    <main className='border-4 m-4 p-6 rounded-4xl'>
      <WeatherWidjet />
      <Todo />
      <Timer />
    </main>
  );
}

export default App;
