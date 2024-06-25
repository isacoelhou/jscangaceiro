class Negociacao{

    constructor(_data, _quantidade, _valor){
        Object.assign(this, {_data: new Date(_data.getTime())});
        Object.assign(this, {_quantidade, _valor});

        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){ 
        return new Date(this._data.getTime()); //retorna cópia do campo data 
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}