// =====================================
// LaytonOS File Explorer
// =====================================


function explorerApp(){


    let win = document.getElementById("explorer");

    if(win){
        win.remove();
    }



    let explorer =
    document.createElement("div");


    explorer.className="os-window";

    explorer.id="explorer";



    explorer.style.left="180px";

    explorer.style.top="100px";



    explorer.innerHTML = `

    <div class="window-title">

        <span>
        📁 File Explorer
        </span>

        <button onclick="closeApp('explorer')">
        ✕
        </button>

    </div>


    <div class="window-body">


        <h2>
        LaytonOS Drive
        </h2>


        <div id="fileList">

        </div>


    </div>

    `;



    document
    .getElementById("window-area")
    .appendChild(explorer);



    displayFiles("C:");

    makeDraggable(explorer);


}







function displayFiles(path){


    let list =
    document.getElementById("fileList");


    list.innerHTML="";



    let current =
    fileSystem[path];



    if(!current){

        list.innerHTML=
        "Folder not found";

        return;

    }





    Object.keys(current)
    .forEach(item=>{


        let element =
        document.createElement("p");



        if(typeof current[item]==="object"){


            element.innerHTML =
            "📁 " + item;


        }

        else {


            element.innerHTML =
            "📄 " + item;


        }



        list.appendChild(element);



    });



}







// Make Explorer open from desktop/taskbar

window.openExplorer = explorerApp;
