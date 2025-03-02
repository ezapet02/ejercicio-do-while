let opcionaElegir = prompt(`
        Escoja una opción para continuar
            1. Cálculo promedio de Notas
            2. Cálculo área de un rectángulo
            3. Sumar dos números
            4. Retorno de nombre del día segun número de día
    `)
do {
    switch(opcionaElegir){
        case '1':
                const nota1 = parseFloat(prompt(`Ingrese la primer nota`))
                const nota2 = parseFloat(prompt(`Ingrese la segunda nota`))
                const nota3 = parseFloat(prompt(`Ingrese la tercer nota`))
                const nota4 = parseFloat(prompt(`Ingrese la cuarta nota`))

            const respuestaPromedio = (nota1 + nota2 + nota3 + nota4) / 4 
            alert(`El promedio de las notas ingresadas es ${respuestaPromedio}`)
            break
        case '2':
                const base = Number(prompt(`Ingrese la base del rectángulo`))
                const altura = Number(prompt(`Ingrese la altura del rectángulo`))

                const area = base * altura
                alert(`El área del rectángulo es ${area}`)
            break
        case '3':
                const numero1 = Number(prompt('Ingrese el primer número a sumar'))
                const numero2 = Number(prompt('Ingrese el segundo número a sumar'))
                const suma = numero1 + numero2
                alert(`La suma de los números es: ${suma}`)
            break
        case `4`:
                const numeroDia = Number(prompt(`Ingrese el número de día`))
            if(numeroDia === 1) {alert(`El día correspondiente es Lunes`)}
            else if(numeroDia === 2) {alert(`El día correspondiente es Martes`)}
            else if(numeroDia === 3) {alert(`El día correspondiente es Miércoles`)}
            else if(numeroDia === 4) {alert(`El día correspondiente es Jueves`)}
            else if(numeroDia === 5) {alert(`El día correspondiente es Viernes`)}
            else if(numeroDia === 6) {alert(`El día correspondiente es Sábado`)}
            else if(numeroDia === 7) {alert(`El día correspondiente es Domingo`)}
            else{alert(`El número ingresado no es válido`)}
            break 
        default:
                alert('Opción incorrecta')
            break
}
    
    opcionaElegir = prompt(`
        Escoja una opción para continuar
            0. Salir
            1. Cálculo promedio de Notas
            2. Cálculo área de un rectángulo
            3. Sumar dos números
            4. Retorno de nombre del día segun número de día
    `)
} while(opcionaElegir != '0')