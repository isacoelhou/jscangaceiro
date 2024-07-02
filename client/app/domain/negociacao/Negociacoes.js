class Negociacoes{

    constructor(){
        this._negociacoes = [];
        Object.freeze(this);
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao);
    }


    get volumeTotal() {
        return this._negociacoes.reduce((total, negociacao) => total + negociacao.volume, 0);
    }

    paraArray(){
        return [].concat(this._negociacoes);
    }

    esvazia(){
        this._negociacoes.length = 0;
    }
    
}