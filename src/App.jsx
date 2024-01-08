import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header.jsx'
import CoreComponent from './components/CoreComponent.jsx'

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concpets</h2>
          <ul>
            <CoreComponent {...CORE_CONCEPTS[0]}/>
            <CoreComponent {...CORE_CONCEPTS[1]}/>
            <CoreComponent {...CORE_CONCEPTS[2]}/>
            <CoreComponent 
              title={CORE_CONCEPTS[3].title} 
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;