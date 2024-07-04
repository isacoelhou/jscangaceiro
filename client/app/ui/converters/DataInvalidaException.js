class DataInvalidaException extends ApplicatioonException{
    
    constructor(){
        super('A data deve estar no formato dd/mm/aaaa');

    }
}