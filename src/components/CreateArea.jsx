import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
function CreateArea(props) {

  const [titleExpand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    if (note.content) {
      props.addNote(note);
      event.preventDefault();
      setNote({
        title: "",
        content: ""
      });
    }
    else {
      alert("Type something to make a note.");
    }
  }

  function fakeAnimation() {
    setExpand(true);
  }

  return (
    <div>
      <form className="create-note">
        {titleExpand ? <input
          name="title"
          required
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          required
          onClick={fakeAnimation}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={titleExpand ? "3" : "1"}
        />
        <Zoom in={titleExpand}>
          <Fab onClick={handleSubmit}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
