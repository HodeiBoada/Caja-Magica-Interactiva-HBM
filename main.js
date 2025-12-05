`use strict`;
import {cambiarTexto} from './modulos/texto.js';
import {cambiarColor} from './modulos/color.js';
import {cambiarTamano} from './modulos/tamano.js';

window.reload = inicio;

function inicio(){
    cambiarTexto();
    cambiarColor();
    cambiarTamano();
}
