import reactImg from './assets/react-core-concepts.png'
import { CORE_CONCEPTS } from './data.js'

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}

function Header() {
  const description = reactDescriptions[getRandomInt(reactDescriptions.length - 1)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
      {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreComponent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

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
