class NegociacaoController {

    constructor() {

        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        const self = this;
        this._negociacoes = new Proxy(new Negociacoes(), {
            
            get(target, prop, receiver) {
            
                if(typeof(target[prop]) == typeof(Function) && ['adiciona', 'esvazia']
                    .includes(prop)) {
                        
                        return function() {

                            console.log(`"${prop}" disparou a armadilha`);
                            target[prop].apply(target, arguments);
                            self._negociacoesView.update(target);
                        }

                } else {

                    return target[prop];
                }
            }
        });

        this._negociacoesView = new NegociacoesView('#negociacoes');
        this._negociacoesView.update(this._negociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('#mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();

        this._negociacoes.adiciona(this._criarNegociacao());

        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);

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

    apaga(){
      this._negociacoes.esvazia();

      this._Mensagem.texto = 'Negociações esvaziadas com sucesso';
      this._MensagemView.update(this._Mensagem);

    }

}