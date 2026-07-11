// =========================
// LaytonOS System Engine
// =========================


// Boot sequence

setTimeout(() => {

    document.getElementById("bootScreen").style.display = "none";

    document.getElementById("loginScreen").style.display = "flex";


}, 3000);






// =========================
// Login
// =========================


function login(){


    document.getElementById("loginScreen").style.display="none";


    document.getElementById("desktop").style.display="block";


}








// =========================
// Start Menu
// =========================


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








// =========================
// Window System
// =========================


function openWindow(id){


    let win =
    document.getElementById(id);


    win.style.display="block";


    win.style.left="200px";

    win.style.top="100px";


    document.getElementById("startMenu").style.display="none";


}





function closeWindow(id){


    document.getElementById(id)
    .style.display="none";


}





function minimizeWindow(id){


    document.getElementById(id)
    .style.display="none";


}





function maximizeWindow(id){


    let win =
    document.getElementById(id);


    win.style.left="5%";

    win.style.top="5%";

    win.style.width="90%";

    win.style.height="80%";


}









// =========================
// Clock
// =========================


function updateClock(){


    let time =
    new Date();


    document.getElementById("clock")
    .innerHTML =

    time.toLocaleTimeString([],{

        hour:"2-digit",

        minute:"2-digit"

    });


}



setInterval(updateClock,1000);

updateClock();









// =========================
// Terminal
// =========================


function terminalCommand(event){


    if(event.key !== "Enter")
    return;



    let input =
    document.getElementById("terminalInput");


    let command =
    input.value.toLowerCase();



    let terminal =
    document.getElementById("terminalText");



    terminal.innerHTML +=
    "\n\nC:\\Users\\Layton> "
    + command;





    if(command === "help"){


        terminal.innerHTML +=
        `

Commands:

help

dir

systeminfo

clear

echo

restart

shutdown

        `;


    }





    else if(command === "dir"){


        terminal.innerHTML +=
        `

Desktop

Documents

Downloads

Pictures

        `;


    }





    else if(command === "systeminfo"){


        terminal.innerHTML +=
        `

LaytonOS VM

CPU: Virtual Processor

RAM: 32GB

Storage: 256GB SSD

        `;


    }





    else if(command === "clear"){


        terminal.innerHTML =
        "LaytonOS Terminal\n\nC:\\Users\\Layton>";

    }





    else if(command.startsWith("echo")){


        terminal.innerHTML +=

        "\n" +

        command.replace(
            "echo ",
            ""
        );


    }





    else if(command === "restart"){


        location.reload();


    }





    else if(command === "shutdown"){


        document.body.innerHTML =

        `

        <div style="
        height:100vh;
        background:black;
        color:white;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:40px;
        ">

        LaytonOS is shutting down...

        </div>

        `;


    }





    else{


        terminal.innerHTML +=
        "\nCommand not found";


    }



    input.value="";


    terminal.scrollTop =
    terminal.scrollHeight;


}









// =========================
// Window Dragging
// =========================


document.querySelectorAll(".window")
.forEach(win=>{


    let header =
    win.querySelector(".windowHeader");


    let dragging=false;


    let offsetX=0;

    let offsetY=0;



    header.onmousedown=function(e){


        dragging=true;


        offsetX =
        e.clientX-win.offsetLeft;


        offsetY =
        e.clientY-win.offsetTop;


    };





    document.onmouseup=function(){


        dragging=false;


    };





    document.onmousemove=function(e){


        if(!dragging)
        return;



        win.style.left =
        (e.clientX-offsetX)+"px";



        win.style.top =
        (e.clientY-offsetY)+"px";


    };



});








// =========================
// Keyboard shortcuts
// =========================


document.addEventListener(
"keydown",

function(e){


    if(e.key === "Escape"){


        document.getElementById("startMenu")
        .style.display="none";


    }



});
