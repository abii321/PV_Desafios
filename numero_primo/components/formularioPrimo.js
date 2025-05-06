import { esPrimo } from "../services/evaluacionPrimoService.js"; 
 
export const inicializarFormulario = () => {
    const txtNumero= document.getElementById('txtNumero');
    const btnValidarNumero= document.getElementById('btnValidarNumero')
    const parrafoResultado = document.getElementById('resultado')

    btnValidarNumero.addEventListener('click',()=>{
        const numeroIngresado=parseInt(txtNumero.value);
        
        if ( isNaN(numeroIngresado) ) {
            parrafoResultado.textContent="Ingrese un numero valido";
            return;
        }

        const resultadoEvaluacion=esPrimo(numeroIngresado);
        parrafoResultado.textContent= resultadoEvaluacion ? `${numeroIngresado} es primo` :                                                    
                                                            `${numeroIngresado} no es pirmo`;
    })
}