

//greet(2) // geht nicht, weil kein string
greet('Max') // geht, weil string

async function greet(name: string){
    return 'Hallo' + name;
}