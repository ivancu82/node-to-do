//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');
//console.log(argv);
const toDo = require('./to-do/to-do');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = toDo.getListado();

        for ( let tarea of listado) {
            console.log('======To Do========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('==============='.green);
        }
        // console.log('Mostrar todas las tareas por hacer');
        break;

    case 'actualizar':

        let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
        console.log( actualizado );
        break;

    case 'borrar':
        let borrado = toDo.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
    console.log('Comando no reconocido');
}
