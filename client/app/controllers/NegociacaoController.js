class NegociacaoController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._negociacoes = new Negociacoes();
        this._negociacoesViews =  new NegociacoesView('#negociacoes');

        this._negociacoesViews.update(this._negociacoes);
    }

    adiciona(event) {

        event.preventDefault();

        this._negociacoes.adiciona(this._criarNegociacao());
        this._negociacoesViews.update(this._negociacoes);        
        this._limpaFormulario();
    }

    _criarNegociacao(){

        return new Negociacao(
            DateConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    }

}