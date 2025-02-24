import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data.js'
import Header from './components/Header/Header.jsx'
import CoreConcept from './components/CoreConcept/CoreConcept.jsx'
import TabButton from './components/TabButton.jsx'
import { EXAMPLES } from './data.js'




function App() {
  const [count, setCount] = useState(0)
  const [ selectedTopic, setSelectedTopic ] = useState();

  function handleSelect(selectedButton) {
    console.log("On Select " + selectedButton);
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
        </ul>
      </section>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')} label="Components" />
          <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')} label="JSX" />
          <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')} label="Props" />
          <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')} label="State" />
        </menu>
        {selectedTopic}        
          {!selectedTopic ? <p>Please select a topic.</p> : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre><code>{EXAMPLES[selectedTopic].code}</code></pre>
            </div>)}          
      </section>
      <h1>Vite + Reactydsfsdf</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </main>
    </>
  )
}

export default App
