const getRandomOffset = () => Math.floor(Math.random() * 101) - 50;
const changePosition = (position) => {
                        let posicionActual = position.split(' ').map(Number);
                        let nuevaPosicion = posicionActual.map(value => parseInt(value) + getRandomOffset());
                        return nuevaPosicion.join(' ');
                    };

export {getRandomOffset, changePosition}