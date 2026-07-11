// =====================================
// LaytonOS Terminal
// =====================================


function terminalApp(){


    let old =
    document.getElementById("terminal");


    if(old){
        old.remove();
    }



    let terminal =
    document.createElement("div");


    terminal.className="os-window";

    terminal.id="terminal";



    terminal.style.left="250px";

    terminal.style.top="120px";



    terminal.innerHTML = `

    <div class="window-title">

        <span>
        💻 Terminal
        </span>


        <button onclick="closeApp('terminal')">
        ✕
        </button>

    </div>


    <div class="window-body">


        <pre id="terminalOutput">
LaytonOS Terminal

Type help for commands.

C:\\Users\\Layton>
        </pre>


        <input 
        id="terminalInput"
        placeholder="command..."
        onkeydown="runCommand(event)"
        >

    </div>

    `;



    document
    .getElementById("window-area")
    .appendChild(terminal);



    makeDraggable(terminal);



}








function runCommand(event){


    if(event.key !== "Enter")
        return;



    let input =
    document.getElementById("terminalInput");



    let command =
    input.value.trim();



    let output =
    document.getElementById("terminalOutput");



    output.innerHTML +=

    "\n\nC:\\Users\\Layton> "
    + command;



    let args =
    command.split(" ");



    let cmd =
    args[0].toLowerCase();







    // HELP

    if(cmd==="help"){


        output.innerHTML += `


        \n\nCommands:


        \ndir

        \nmkdir <name>

        \necho <text>

        \nsysteminfo

        \nclear

        \nwhoami


        `;


    }







    // DIRECTORY LIST


    else if(cmd==="dir"){


        let files =
        fileSystem["C:"]
        .Users
        .Layton
        .Desktop;



        Object.keys(files)
        .forEach(file=>{


            output.innerHTML +=

            "\n📁 " + file;


        });


    }








    // MAKE FOLDER


    else if(cmd==="mkdir"){


        if(!args[1]){


            output.innerHTML +=

            "\nMissing folder name";


        }

        else{


            fileSystem["C:"]
            .Users
            .Layton
            .Desktop[args[1]]
            ={};



            saveDrive(fileSystem);



            output.innerHTML +=

            "\nCreated folder: "
            + args[1];


        }



    }









    // ECHO


    else if(cmd==="echo"){


        output.innerHTML +=

        "\n" +

        args.slice(1).join(" ");


    }









    // SYSTEM INFO


    else if(cmd==="systeminfo"){


        output.innerHTML += `


        \n\nLaytonOS System Information


        \nOS: LaytonOS v1


        \nCPU: Virtual Processor


        \nRAM: 32GB


        \nStorage: Virtual SSD


        `;


    }








    // USER


    else if(cmd==="whoami"){


        output.innerHTML +=

        "\nLayton";


    }








    // CLEAR


    else if(cmd==="clear"){


        output.innerHTML=

        "LaytonOS Terminal";


    }







    else{


        output.innerHTML +=

        "\nCommand not found";


    }



    input.value="";



    output.scrollTop =
    output.scrollHeight;


}





window.openTerminal = terminalApp;
