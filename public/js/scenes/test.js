const plant = {
    'pine':{
        'a-nft': {
            'type': 'nft',
            'url': 'assets/pine/nfts/pine_tree',
            'smooth': 'true',
            'smoothCount': '10',
            'smoothTolerance': '.01',
            'smoothThreshold': '5',
            'markerFound': 'onMarkerFound',
        }
    },
    'tree':{
        'a-nft': {
            'type': 'nft',
            'url': 'assets/pine/nfts/tree',
            'smooth': 'true',
            'smoothCount': '10',
            'smoothTolerance': '.01',
            'smoothThreshold': '5',
            'markerFound': 'onMarkerFound',
        }
    }
};
const entriesPlants = Object.entries(plant);

for (const [key, value] of entriesPlants) {
    const entriesANft = Object.entries(value);
    for (const [key, value] of entriesANft) {
        console.log(key);
    }
}