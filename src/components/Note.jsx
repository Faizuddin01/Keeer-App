import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
function Note(props) {

  return (
    <div className="note">
      <h1>{props.title ? props.title : "Untitled"}</h1>
      <p>{props.content}</p>
      <button onClick={() => {
        props.handleDelete(props.id)
      }}><DeleteForeverIcon /></button>
    </div>
  );
}

export default Note;
