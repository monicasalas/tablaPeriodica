const getAll = async ()=> {
    const response = await fetch(
        `http://127.0.0.1:3000/tablaperiodica/elements`
    );

    const myInfo = await response.json();
    const container = document.getElementById('ele');

    myInfo.forEach((element) => {
        const div = document.createElement('h3');
        div.innerHTML = element.nameE;
        container.appendChild(div);

        
    });
}