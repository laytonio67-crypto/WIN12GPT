// =====================================
// LaytonOS File Explorer
// =====================================


let explorerPath = ["C:"];





function explorerApp(){


    let old =
    document.getElementById("explorer");


    if(old){

        old.style.display="block";

        old.style.zIndex=999;

        return;

    }





    let content = `

    <div id="explorerPath">

    </div>


    <hr>


    <div id="explorerFiles">

    </div>


    `;





    let win =
    createWindow(

        "explorer",

        "📁 File Explorer",

        content

    );



    explorerRender();


}








function explorerRender(){



    let pathBox =
    document.getElementById("explorerPath");



    let filesBox =
    document.getElementById("explorerFiles");



    if(!filesBox)
        return;





    let folder =
    getFolder(explorerPath);



    pathBox.innerHTML =

    "C:\\" +

    explorerPath
    .slice(1)
    .join("\\");





    filesBox.innerHTML="";




    Object.keys(folder)
    .forEach(item=>{



        let button =
        document.createElement("button");



        let isFolder =
        typeof folder[item] === "object";



        button.innerHTML =

        (isFolder ? "📁 " : "📄 ")
        + item;



        button.style.display="block";

        button.style.width="100%";

        button.style.textAlign="left";

        button.style.margin="5px";

        button.style.padding="10px";




        if(isFolder){


            button.onclick=()=>{


                explorerPath.push(item);


                explorerRender();


            };


        }



        filesBox.appendChild(button);



    });



}








function getFolder(path){



    let current =
    fileSystem;



    for(let part of path){


        current =
        current[part];


    }



    return current;


}
