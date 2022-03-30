
//botones filtro
const met= document.querySelector("#mtrans")
const nobles= document.querySelector("#gnobles")

const getAll = async ()=> {
    const response = await fetch(
        `http://127.0.0.1:3000/tablaperiodica/elements`
    );
    const myInfoE = await response.json();
    elements = myInfoE;
    myInfoE.forEach((element) => {
        const container = document.getElementById(element.atomicNumber);
        if(container!==null){
            const elemento = document.createElement('h3');
            const symb = document.createElement('h1');
            const vnato = document.createElement('h4');
            const mass = document.createElement('h2')

            elemento.innerHTML = element.nameE;
            symb.innerHTML = element.symbol;
            vnato.innerHTML = element.atomicNumber;
            mass.innerHTML = element.atomicMass;

            container.appendChild(elemento);
            container.appendChild(symb);
            container.appendChild(vnato);
            container.appendChild(mass);
        }
            
    });
}


const porGrupo = async ()=>{
    try{
        const {id}=event.target; 
        if(id==="g1"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=1`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g2"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=2`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g3"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=3`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g4"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=4`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g5"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=5`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g6"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=6`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g7"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=7`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }
        if(id==="g8"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=8`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g9"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=9`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g10"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=10`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g11"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=11`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g12"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=12`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g13"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=13`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g14"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=14`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g15"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=15`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g16"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=16`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g17"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=17`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="g18"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?valenceE=18`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }

    }catch(error){
        console.log(error) 
    }
}

const porPeriodo = async ()=>{
    try{
        const {id} = event.target;
        if(id==="p1"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=1`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }
        if(id==="p2"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=2`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="p3"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=3`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="p4"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=4`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="p5"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=5`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="p6"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=6`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }if(id==="p7"){
            const response = await fetch(
                `http://127.0.0.1:3000/tablaperiodica/elements?layer=2`);
                const myInfo = await response.json();
                    
                pintarBox(myInfo)
        }    


    }catch(error){
        console.log(error) 
    }
}

const porCategoria = async (id)=>{
    try{
        const {id}=event.target;           
            if(id==="gnobles"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Gases nobles`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)         
                      
            }if(id==="mtrans"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Metales de transición`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="halo"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Halógenos`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="alcal"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Alcalinotérreos`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="nMetales"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=No metales`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="mAlcal"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Metales alcalinos`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="meta"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Metaloides`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="lanta"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Lantánidos`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="otrM"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Otros metales`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }if(id==="acti"){
                const response = await fetch(
                    `http://127.0.0.1:3000/tablaperiodica/elements?typeEle=Actínidos`);
                        const myInfo = await response.json();
                    
                     pintarBox(myInfo)
            }
    }catch(error){
        console.log(error) 
    }
}

const pintarBox = (myInfo)=>{
    myInfo.forEach((element) => {                 
        const container = document.getElementById(element.atomicNumber);
        
        const elemento = document.createElement('h3');

        elemento.innerHTML = element.nameE;
        container.appendChild(elemento);
    }); 
}










