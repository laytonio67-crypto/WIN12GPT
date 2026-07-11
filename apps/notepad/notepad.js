// =====================================
// LaytonOS Notepad
// =====================================


function notepadApp(){


    let old =
    document.getElementById("notepad");


    if(old){
        old.remove();
    }




    let notepad =
    document.createElement("div");


    notepad.className="os-window";

    notepad.id="notepad";



    notepad.style.left="320px";

    notepad.style.top="140px";



    notepad.innerHTML = `

    <div class="window-title">

        <span>
        📝 Notepad
        </span>


        <div>

        <button onclick="saveNote()">
        💾
        </button>


        <button onclick="closeApp('notepad')">
        ✕
        </button>


        </div>


    </div>


    <div class="window-body">


        <input 
        id="fileName"
        placeholder="File name"
        value="NewText.txt"
        >


        <br><br>


        <textarea
        id="noteText"
        style="
        width:100%;
        height:230px;
        resize:none;
        "
        ></textarea>



    </div>

    `;



    document
    .getElementById("window-area")
    .appendChild(notepad);



    makeDraggable(notepad);



}







function saveNote(){



    let name =
    document.getElementById("fileName")
    .value;



    let text =
    document.getElementById("noteText")
    .value;





    fileSystem["C:"]
    .Users
    .Layton
    .Documents[name]
    =
    text;





    saveDrive(fileSystem);




    alert(
        "Saved " + name
    );


}







window.openNotepad = notepadApp;
