// =====================================
// LaytonOS Core System
// =====================================



// -----------------------------
// Boot System
// -----------------------------


setTimeout(() => {

    document.getElementById("boot").style.display = "none";

    document.getElementById("login").style.display = "flex";


}, 3000);







// -----------------------------
// Login
// -----------------------------


function startDesktop(){


    document.getElementById("login").style.display="none";


    document.getElementById("desktop").style.display="block";


}







// -----------------------------
// Clock
// -----------------------------


function updateClock(){


    let date = new Date();


    document.getElementById("clock").textContent =

    date.toLocaleTimeString([], {

        hour:"2-digit",

        minute:"2-digit"

    });


}


setInterval(updateClock,1000);

updateClock();







// -----------------------------
// Start Menu
// -----------------------------


function toggleStart(){


    let menu =
    document.getElementById("start-menu");


    if(menu.style.display === "block"){

        menu.style.display="none";

    }

    else {

        menu.style.display="block";

    }


}









// -----------------------------
// Window Manager
// -----------------------------


let windowCount = 0;



function openApp(appName){



    let old =
    document.getElementById(appName);



    if(old){

        old.style.display="block";

        old.style.zIndex=++windowCount;

        return;

    }





    let win =
    document.createElement("div");


    win.className="os-window";


    win.id=appName;



    win.style.left =
    (150 + windowCount*30)+"px";


    win.style.top =
    (80 + windowCount*30)+"px";


    win.style.zIndex =
    ++windowCount;





    let title="";

    let content="";




  if(appName==="explorer"){

    explorerApp();

    return;

}


        title="📁 Explorer";


        content=`

        <h2>This PC</h2>

        <p>💾 Local Disk (C:)</p>

        <p>📂 Users</p>

        <p>📂 Documents</p>

        <p>📂 Downloads</p>

        `;


    }






    if(appName==="terminal"){

    terminalApp();

    return;

}


        title="💻 Terminal";


        content=`

        <pre id="terminal">

LaytonOS Terminal

Type help

C:\\Users\\Layton>

        </pre>


        <input 
        id="terminalInput"
        placeholder="command..."
        >


        `;


    }







    if(appName==="settings"){


        title="⚙️ Settings";


        content=`

        <h2>System</h2>

        <p>LaytonOS v1</p>

        <p>Virtual Machine Mode</p>

        <p>Browser OS</p>

        `;


    }








    win.innerHTML=`

    <div class="window-title">


    <span>

    ${title}

    </span>


    <button onclick="closeApp('${appName}')">

    ✕

    </button>


    </div>


    <div class="window-body">

    ${content}

    </div>

    `;




    document.getElementById("window-area")
    .appendChild(win);





    makeDraggable(win);


}








// -----------------------------
// Close Apps
// -----------------------------


function closeApp(id){


    let app =
    document.getElementById(id);


    if(app){

        app.remove();

    }


}








// -----------------------------
// Drag Windows
// -----------------------------


function makeDraggable(window){



    let header =
    window.querySelector(".window-title");



    let dragging=false;


    let offsetX=0;

    let offsetY=0;





    header.onmousedown=(e)=>{


        dragging=true;


        window.style.zIndex =
        ++windowCount;



        offsetX =
        e.clientX-window.offsetLeft;


        offsetY =
        e.clientY-window.offsetTop;


    };






    document.onmouseup=()=>{


        dragging=false;


    };







    document.onmousemove=(e)=>{


        if(!dragging)
        return;



        window.style.left =
        (e.clientX-offsetX)+"px";



        window.style.top =
        (e.clientY-offsetY)+"px";



    };



}
