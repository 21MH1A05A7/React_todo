import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [count,setCount]=useState(0);
  const [title,setTitle]  = useState("");
  const [content,setContent] = useState(""); 
  const [word,setWordCount] = useState(0);

  const [arrayTitle,setAtitle] = useState([])
  const [arrayContent,setAcontent] = useState([]);

  function handleSubmit(event){
    event.preventDefault();
  }
  function changetitle(event){
    // event.preventDefault();
    let r = event.target.value;
    console.log(r);
    setTitle(r);
  }

  function changeContent(event){ 
    let q = event.target.value;
    setCount(q.length);
    // q.map(function(item){
    //   if(item===' '){
    //       console.log("HEllo");
    //   }
    //   return item
    // })
    setWordCount(q.split(" ").length-1)
    setContent(q);
  }

  function addItem(){
    setAtitle(function(prevItem){
      return [...prevItem,title]
    })
    setTitle("");

    setAcontent(function(prevItem){
      return [...prevItem,content]
    })
    setContent("");
    setCount(0);
    setWordCount(0);
  }

  function deleteItem(id){
    setAtitle(function(prevItem){
      return arrayTitle.filter(function(index){
        return index!==arrayTitle[id];
      })
    })
    setAcontent(function(prevItem){
      return arrayContent.filter(function(index){
        return index!==arrayContent[id];
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea handle={handleSubmit} changetitle={changetitle} title={title} changeContent={changeContent} content={content} add={addItem} />
      <p>{count} characters</p>
      <p>{word} words</p>
      {arrayContent.map(function(item,index){
        return <Note key={index} id={index} title={arrayTitle[index]} content={item} delete={deleteItem}/>
      })}
      <Footer />
    </div>
  );
}

export default App;
