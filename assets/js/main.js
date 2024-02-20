function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
        },
        
        cliqueBotoes(){
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.btnParaDisplay(this.display.value = "")
                }


                if (el.classList.contains('btn-del')) {
                    this.btnApagar();
                }

                if (el.classList.contains('btn-enter')) {
                    this.btnResultado(this.display.value);
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        btnApagar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        btnResultado(valor) {
            try{this.display.value = eval(valor);}
            catch (e) {
                alert("conta invalida")
            }
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();