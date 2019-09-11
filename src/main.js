import FeaturesES6 from "./featuresES6";
import Api from "./api";

// super class
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

// class
class TodoList extends List{
    constructor() {
        super();

        this.usuario = 'Vagner'
    }

    mostraUsuario() {
        console.log(this.usuario);
    }

}

// const
const MinhaLista = new TodoList();

// arrow functions
document.getElementById('novotodo', onclick = () => {
    MinhaLista.add('Novo todo');
})

MinhaLista.mostraUsuario();
    
console.log(FeaturesES6.somaRest(1,2,3));

FeaturesES6.spread();

Api.getUserInfo();


