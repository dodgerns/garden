export default class ConnectionBase{
    constructor(connection){

    }
    getPlants(){
        return {
            'pine':{
                'a-nft': {
                    'id': 'pineTreeNft',
                    'type': 'nft',
                    'url': 'assets/pine/nfts/pine_tree',
                    'smooth': 'true',
                    'smoothCount': '10',
                    'smoothTolerance': '.01',
                    'smoothThreshold': '5',
                    'markerFound': 'onMarkerFound',
                },
                'entities':[{
                    'id': 'pineTreeModel',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '50 150 0',
                    }],
                'texts': [{
                    'id': "pineTreeMessage1",
                    'text': "font: mozillavr; value: Via stock font name."
                    }
                ]
            },
            'pine':{
                'a-nft': {
                    'id': 'arbol',
                    'type': 'nft',
                    'url': 'assets/tree/nfts/arbol',
                    'smooth': 'true',
                    'smoothCount': '10',
                    'smoothTolerance': '.01',
                    'smoothThreshold': '5',
                    'markerFound': 'onMarkerFound',
                },
                'entities':[{
                    'id': 'arbolModel',
                    'gltf-model': 'assets/tree/model/arbol.gltf',
                    'scale': '5 5 5',
                    'position': '60 100 100',
                },{
                    'id': 'pineTreeModel1',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '0 100 0',
                },{
                    'id': 'pineTreeModel2',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '20 100 -20',
                },{
                    'id': 'pineTreeModel3',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '30 100 -30',
                },{
                    'id': 'pineTreeModel4',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '-10 100 15',
                },{
                    'id': 'pineTreeModel5',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '15 100 -50',
                },{
                    'id': 'pineTreeModel6',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '35 100 10',
                },{
                    'id': 'pineTreeModel7',
                    'gltf-model': 'assets/pine/model/pine_tree.gltf',
                    'scale': '5 5 5',
                    'position': '-15 100 -40',
                }],
                'texts': [{
                    'id': "pineMessage1",
                    'value': 'Mi follaje siempre verde es un símbolo de constancia y vida, brindando refugio a diversas criaturas del bosque.',
                },{
                    'id': "pineMessage2",
                    'value': 'Con mis raíces profundas, sostengo firmemente la tierra y contribuyo a mantener la estabilidad del suelo.',
                },{
                    'id': "pineMessage3",
                    'value': '¡La producción de oxígeno es mi superpoder! Brindo aire fresco y purificado a todo aquel que lo respire.',
                },{
                    'id': "pineMessage4",
                    'value': 'Mi crecimiento lento pero constante es una muestra de paciencia y resistencia ante las estaciones cambiantes.',
                }],
                'narrative':{
                    'id': 'pineNarrative',
                    'value': 'El pino, un coloso entre árboles, es más que un majestuoso adorno del paisaje natural. Con sus hojas perennes y su abrazo verde al viento, es como un guardián silencioso en el corazón del bosque. Sus raíces profundas son como pilares invisibles que sostienen la tierra, y su capacidad para limpiar el aire que respiramos lo convierte en un gigante ecológico. ¡Acompáñame a descubrir más sobre este ser imponente que moldea el escenario natural que nos rodea!'
                }
            }
        };
    }
}
