class FeaturesES6 {

    // REST
    static somaRest(a, ...params) {
        // reduce
        return params.reduce((total, next) => total + next);
    }

    static spread() {
        const arr1 = [1,2,3];
        const arr2 = [4,5,6];

        // SPREAD
        console.log([...arr1, ...arr2]);

        const usuario1 = {
            nome: 'Vagner',
            idade: 29,
            empresa: 'Empresa'
        };

        // SPREAD
        const usuario2 = { ...usuario1, nome:'Bernal' };

        console.log(usuario2);

    }
}

export default FeaturesES6;