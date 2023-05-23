const inputCantMeses = document.querySelector("#cant-meses");
const selectOpcionMeses = document.querySelector("#opciones-suscripcion");





function generarOpciones() {
    let cantMeses = inputCantMeses.value;

    selectOpcionMeses.innerHTML = "";

    for (let i = 1; i <= cantMeses; i++) {
        if (i ==1) {
            selectOpcionMeses.innerHTML = `<option value="">Seleccione</option>`
        }

        selectOpcionMeses.innerHTML += `<option value="">Meses: ${i}</option>`
    };
};
