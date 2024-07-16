class HttpService{

    get(url){
        return new Promise((resolve, reject) => {

            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            xhr.onreadystatechange = () => {
            
                if(xhr.readyState == 4) {

                    if(xhr.status == 200) {
                        
                        const negociacoes = JSON
                            .parse(xhr.responseText)
                            .map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor));
                            
                        resolve(negociacoes);

                    } else {
                        reject('Não foi possível obter nas negociações da semana',);
                    }
                }
            };

            xhr.send();
        });
    }
}