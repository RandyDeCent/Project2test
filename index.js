

window.addEventListener(load , () =>{ 
    const form = document.queryCommandValue("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#Tasks");

    form.addEventListener('submit', (e) => {
        e.prevenntdefualt (); 
        console.log ("submit form");
        
    })
})