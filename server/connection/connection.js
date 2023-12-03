const dataPlant = {
    'pino':{
        'a-nft': {
            'id': 'pinoNft',
            'type': 'nft',
            'url': 'assets/pino/nfts/pino',
            'smooth': 'true',
            'smoothCount': '10',
            'smoothTolerance': '.01',
            'smoothThreshold': '5'
        },
        'entities':[{
            'id': 'pineTreeModel1',
            'gltf-model': 'assets/pino/model/pine_tree.gltf',
            'scale': '5 5 5',
            'position': '60 0 -60',
        },{
            'id': 'pineTreeModel2',
            'gltf-model': 'assets/pino/model/pine_tree.gltf',
            'scale': '5 5 5',
            'position': '30 0 -60',
        },{
            'id': 'pineTreeModel3',
            'gltf-model': 'assets/pino/model/pine_tree.gltf',
            'scale': '5 5 5',
            'position': '15 0 -90',
        },{
            'id': 'pineTreeModel4',
            'gltf-model': 'assets/pino/model/pine_tree.gltf',
            'scale': '5 5 5',
            'position': '45 0 -90',
        },{
            'id': 'pineTreeModel5',
            'gltf-model': 'assets/pino/model/pine_tree.gltf',
            'scale': '5 5 5',
            'position': '0 0 -60',
        },{
            'id': 'pineTreeModel6',
            'gltf-model': 'assets/pino/model/pine_tree.gltf',
            'scale': '5 5 5',
            'position': '0 0 -60',
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
    },'manzanilla':{
        'a-nft': {
            'id': 'manzanilla',
            'type': 'nft',
            'url': 'assets/manzanilla/nfts/manzanilla',
            'smooth': 'true',
            'smoothCount': '10',
            'smoothTolerance': '.01',
            'smoothThreshold': '5',
        },
        'entities':[{
            'id': 'manzanilla01',
            'gltf-model': 'assets/manzanilla/model/manzanilla.glb',
            'scale': '20 20 20',
            'position': '150 0 -100',
        },{
            'id': 'manzanilla02',
            'gltf-model': 'assets/manzanilla/model/manzanilla.glb',
            'scale': '20 20 20',
            'position': '100 0 -100',
        }],
        'texts': [{
            'id': "manzanillaMessage1",
            'value': '¡Soy la manzanilla, la pequeña maravilla que alivia!',
        },{
            'id': "manzanillaMessage2",
            'value': 'Mis propiedades calmantes son la solución natural para dolores de estomago.',
        },{
            'id': "manzanillaMessage3",
            'value': '¡Una taza conmigo y el bienestar llegará!',
        },{
            'id': "manzanillaMessage4",
            'value': 'Mis poderes curativos despejan el camino hacia la tranquilidad. Desde calmar los dolores de cabeza.',
        }],
        'narrative':{
            'id': 'manzanillaNarrative',
            'value': 'Soy la manzanilla, la guardiana de la calma y sanación. Con mis pétalos azules y blancos, alivio el estrés, calmo los malestares estomacales y traigo paz a cada sorbo. ¡Estoy aquí para ser tu aliada natural!.'
        }
    }
};

const messagePlant  = {
    'pino':{
        'entities':[{
            'id': 'hola',
            'gltf-model': 'assets/message/model/comic_hi.glb',
            'scale': '5 5 5',
            'position': '60 30 -60',
        }]
    },'manzanilla':{
        'entities':[{
            'id': 'hola',
            'gltf-model': 'assets/message/model/comic_hi.glb',
            'scale': '5 5 5',
            'position': '150 0 -80',
        }],
    }
};

module.exports = { dataPlant, messagePlant };
