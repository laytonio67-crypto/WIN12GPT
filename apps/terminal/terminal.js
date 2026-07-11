// =====================================
// LaytonOS Terminal
// =====================================


let terminalPath = ["C:"];





function terminalApp(){


    let old =
    document.getElementById("terminal");


    if(old){

        old.style.display="block";

        old.style.zIndex=999;

        return;

    }




    let content = `


    <pre id="terminalOutput">
LaytonOS Terminal
Type "help" for commands.

C:\\>
    </pre>



    <input 
    id="terminalInput"
    placeholder="Enter command..."
    onkeydown="terminalCommand(event)"
    >


    `;




    createWindow(

        "terminal",

        "💻 Terminal",

        content

    );



}








function terminalCommand(event){


    if(event.key !== "Enter")
        return;




    let input =
    document.getElementById("terminalInput");



    let output =
    document.getElementById("terminalOutput");



    let command =
    input.value.trim();



    output.innerHTML +=

    "\n\nC:\\> " + command;



    let parts =
    command.split(" ");



    let cmd =
    parts[0].toLowerCase();







    // HELP

    if(cmd==="help"){


        output.innerHTML += `


        \n\nAvailable commands:


        \nhelp

        \ndir

        \ncd

        \nmkdir

        \necho

        \nsysteminfo

        \nclear


        `;


    }







    // DIR

    else if(cmd==="dir"){


        let folder =
        getTerminalFolder();



        Object.keys(folder)
        .forEach(item=>{


            output.innerHTML +=

            "\n" + item;


        });


    }








    // CD

    else if(cmd==="cd"){



        if(!parts[1]){


            output.innerHTML +=

            "\nMissing folder";


        }

        else if(parts[1]===".."){


            if(terminalPath.length>1)

            terminalPath.pop();


        }

        else{


            let folder =
            getTerminalFolder();



            if(folder[parts[1]]){


                terminalPath.push(parts[1]);


            }

            else{


                output.innerHTML +=

                "\nFolder not found";


            }


        }



    }








    // MKDIR

    else if(cmd==="mkdir"){


        if(parts[1]){


            let folder =
            getTerminalFolder();



            folder[parts[1]]={};



            saveStorage();



            output.innerHTML +=

            "\nCreated folder: "

            + parts[1];


        }


    }








    // ECHO

    else if(cmd==="echo"){


        output.innerHTML +=

        "\n"

        + parts.slice(1).join(" ");


    }








    // SYSTEM INFO

    else if(cmd==="systeminfo"){


        output.innerHTML += `


        \n\nLaytonOS

        \nVersion: 1.0

        \nBrowser OS

        \nStorage: Virtual Drive


        `;


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








function getTerminalFolder(){


    let current =
    fileSystem;



    for(let part of terminalPath){


        current =
        current[part];


    }



    return current;


}
