/**
 * C: Cuadrado
 * 
 * V: Vuelta
 * 
 * S: Hacer una "S"
 * 
 * Z: Zigziag
 */
/**
 * Miguel Lázaro Moguilnaia 2ºESOA
 */
/**
 * Cuadrado 50x50
 * 
 * 1)Recorrer cuadrado y terminar en la posición y punto de partida.
 * 
 * 2)Dar la vuelta alrededor de un objeto.
 * 
 * 3)Hacer una "s".
 * 
 * 4)Zigzag.
 */
function Zigzag () {
	
}
function Vueltas () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
}
input.onButtonPressed(Button.A, function () {
    if (ejercicio == "C") {
        ejercicio = "V"
    } else if (ejercicio == "V") {
        ejercicio = "S"
    } else if (ejercicio == "S") {
        ejercicio = "Z"
    } else if (ejercicio == "Z") {
        ejercicio = "C"
    }
    basic.showString(ejercicio)
})
function Cuadrado () {
    for (let index = 0; index < 1; index++) {
        for (let index = 0; index < 3; index++) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
            basic.pause(5000)
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
            basic.pause(2000)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (ejercicio == "c") {
        Cuadrado()
    } else if (ejercicio == "v") {
        Vueltas()
    } else if (ejercicio == "s") {
        S()
    } else if (ejercicio == "z") {
        Zigzag()
    }
})
function S () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 80)
    basic.pause(3000)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 80)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    basic.pause(3000)
}
let ejercicio = ""
ejercicio = "C"
basic.showString(ejercicio)
