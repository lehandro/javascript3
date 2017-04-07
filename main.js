/**
 * LOOPS
 * FOR
 */

// for (var i = 0; i < 10; i++){
//     console.log(i)
// }

/**
 * loops
 * while
 */

// var 1 = 0
// while(i < 10){
//     if(1 < 5){
//         console.log('i es menor que 5', i)
//     }else{
//         console.log('i es menor que 5')
//     }
//     i++
// }
// var vie = 'viernes'
// var sab = 'sabado'
// var dm = 'domingo'
// var diasemanas = ['lunes', 'martes', 'miercoles', 'jueves', vie, sab, dm]
// console.log(diasemanas) 


// for (var i = 0; i < diasemanas.length; i++){
//     console.log(diasemanas[i])
// }


var mes = prompt("En que mes estas de cumpleaños?")
var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiempre', 'octubre', 'noviembre', 'diciembre']

for (var i = 0; i < meses.length; i++){
    if(meses[i] !=mes){
        console.log(meses[i])
    }
}


