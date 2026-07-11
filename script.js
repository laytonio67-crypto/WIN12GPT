// =====================================
// LaytonOS Core System
// =====================================


// =====================
// Boot
// =====================


setTimeout(() => {

    document.getElementById("boot").style.display = "none";

    document.getElementById("login").style.display = "flex";


}, 3000);







// =====================
// Login
// =====================


function login(){


    document.getElementById("login").style.display="none";


    document.getElementById("desktop").style.display="block";


}








// =====================
// Clock
// =====================


function updateClock(){


    let now = new Date();


    document.getElementById("clock").innerHTML =

    now.toLocaleTimeString([], {

        hour:"2-digit",

        minute:"2-digit"

    });


}



setInterval(updateClock,1000);

updateClock();








// =====================
// Start Menu
// =====================


function toggleStart(){


    let menu =
    document.getElementById("startMenu");



    if(menu.style.display === "block"){

        menu.style.display="none";

    }

    else{

        menu.style.display="block";

    }


}









// =====================
// Window System
// =====================


let windowLayer = 10;



function createWindow(id,title,content){



    let old =
    document.getElementById(id);


    if(old){

        old.style.zIndex=++windowLayer;

        return old;

    }





    let win =
    document.createElement("div");



    win.className="os-window";


    win.id=id;


    win.style.left =
    (150 + windowLayer * 5)+"px";


    win.style.top =
    (80 + windowLayer * 5)+"px";



    win.style.zIndex =
    ++windowLayer;





    win.innerHTML = `

    <div class="window-header">


        <span>
        ${title}
        </span>



        <div>


        <button onclick="minimizeWindow('${id}')">
        ─
        </button>


        <button onclick="maximizeWindow('${id}')">
        □
        </button>


        <button onclick="closeWindow('${id}')">
        ✕
        </button>


        </div>


    </div>



    <div class="window-body">

        ${content}

    </div>


    `;



    document
    .getElementById("windows")
    .appendChild(win);



    makeDraggable(win);



    return win;


}









function openApp(app){


    if(app==="explorer"){

        explorerApp();

    }



    if(app==="terminal"){

        terminalApp();

    }



    if(app==="notepad"){

        notepadApp();

    }



    if(app==="settings"){

        settingsApp();

    }



}







function closeWindow(id){


    let win =
    document.getElementById(id);



    if(win){

        win.remove();

    }


}







function minimizeWindow(id){


    let win =
    document.getElementById(id);



    if(win){

        win.style.display="none";

    }


}







function maximizeWindow(id){


    let win =
    document.getElementById(id);



    if(!win.dataset.max){


        win.style.width="90%";

        win.style.height="80%";

        win.style.left="5%";

        win.style.top="5%";


        win.dataset.max="true";


    }

    else{


        win.style.width="650px";

        win.style.height="420px";

        win.style.left="150px";

        win.style.top="80px";


        win.dataset.max="";

    }


}








// =====================
// Drag Windows
// =====================


function makeDraggable(win){


    let header =
    win.querySelector(".window-header");



    let moving=false;

    let x=0;

    let y=0;





    header.onmousedown=(e)=>{


        moving=true;


        win.style.zIndex=++windowLayer;



        x =
        e.clientX-win.offsetLeft;


        y =
        e.clientY-win.offsetTop;


    };





    document.onmouseup=()=>{


        moving=false;


    };





    document.onmousemove=(e)=>{


        if(!moving)
        return;



        win.style.left =
        (e.clientX-x)+"px";


        win.style.top =
        (e.clientY-y)+"px";


    };


}
