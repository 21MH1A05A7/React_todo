import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form onSubmit={props.handle}>
        <input name="title" placeholder="Title" onChange={props.changetitle} value={props.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.changeContent} value={props.content}/>
        <button onClick={props.add} type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
