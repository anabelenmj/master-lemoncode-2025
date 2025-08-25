//5. Slot Machine

/* El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola un mensaje y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje. */

class SlotMachine {
    coin: number = 0;

    play() {
        this.coin ++;
        const getBooleans = () => { return Math.random() < 0.65 }
        const booleanResult: boolean[] = [getBooleans(), getBooleans(), getBooleans()];

        const isFalse: boolean = booleanResult.some((result) => result === false)
        
        if (isFalse) {
            return console.log('Good luck next time!!')
        } else {
            const coinsEarned: number = this.coin;
            this.coin = 0;
            return console.log(`Congratulations!!!. You won ${coinsEarned} coins!!`)
        }
    }
}

const firstPlay = new SlotMachine();

firstPlay.play();
firstPlay.play();
firstPlay.play();
firstPlay.play();
firstPlay.play();
firstPlay.play();
firstPlay.play();
firstPlay.play();


