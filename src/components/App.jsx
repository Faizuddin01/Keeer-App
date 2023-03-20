import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    })
  }

  function handleDelete(noteid) {

    setNotes(notes.filter((eachNote, index) => {
      return index !== noteid
    }));
  }

  return (
    <div>
      <Header />
      <CreateArea
        addNote={addNote}
      />
      {notes.map((eachNote, index) => {
        return <Note key={index} id={index} title={eachNote.title} content={eachNote.content} handleDelete={handleDelete} />
      })}
      <Footer />
    </div>
  );
}

export default App;
