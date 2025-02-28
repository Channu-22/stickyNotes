const form=document.querySelector("form");
const textArea=document.querySelector("textarea");
const color=document.querySelector("input");
const noteContainer=document.querySelector(".note-container");
const undo=document.querySelector(".undo");
const deletedNotes=[];

form.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    
    const note=document.createElement("div");  //<div><div/>
    const close=document.createElement("span");

    note.classList.add("note");  // <div class="note"><div/>
    close.classList.add("close");

    note.innerText=textArea.value;
    note.style.backgroundColor=color.value;
    // note.style.color="white";
    close.innerHTML="&times;";

    close.addEventListener("click",(evt)=>{


        deletedNotes.push(evt.target.closest(".note").remove());
        // evt.target.parentElement.remove();
        
        evt.target.closest(".note").remove();
        // console.log(deletedNotes);
    })

    note.append(close);
    noteContainer.append(note);

})

undo.addEventListener("click",(e)=>{
    const lastDeletedNotes=deletedNotes.pop();
    noteContainer.append(lastDeletedNotes);
    console.log(lastDeletedNotes);
})