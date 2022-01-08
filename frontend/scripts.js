let elements = [];
let symbols =[];
let atomicNumber = [];
let atomicMass = [];


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