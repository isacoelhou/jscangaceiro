class ApplicatioonException extends Error{
    
    constructor(msg = ''){
        super(msg);

        this.name = this.constructor.name;
    }
}