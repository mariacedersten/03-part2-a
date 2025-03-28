import Note from './components/Note';

const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <h2>Tapa 1</h2>
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>
      <h2>Tapa 2</h2>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
    </div>
  )
}

export default App