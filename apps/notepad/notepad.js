// =====================================
// LaytonOS Notepad
// =====================================


function notepadApp(){


    let old =
    document.getElementById("notepad");


    if(old){

        old.style.display="block";

        old.style.zIndex=999;

        return;

    }





    let content = `


    <input 
    id="noteName"
    value="NewFile.txt"
    placeholder="File name"
    >



    <br><br>



    <textarea
    id="noteText"
    style="
    width:100%;
    height:250px;
    "
    placeholder="Type here..."
    ></textarea>



    <br><br>



    <button onclick="saveNote()">
    💾 Save
    </button>



    <button onclick="loadNote()">
    📂 Load
    </button>


    `;




    createWindow(

        "notepad",

        "📝 Notepad",

        content

    );


}








function saveNote(){



    let name =
    document.getElementById("noteName")
    .value;



    let text =
    document.getElementById("noteText")
    .value;





    fileSystem["C:"]
    .Users
    .Layton
    .Documents[name]
    = text;




    saveStorage();



    alert(

        "Saved " + name

    );


}








function loadNote(){



    let name =
    document.getElementById("noteName")
    .value;




    let file =
    fileSystem["C:"]
    .Users
    .Layton
    .Documents[name];





    if(file){


        document.getElementById("noteText")
        .value=file;


    }

    else{


        alert(
            "File not found"
        );


    }



}
