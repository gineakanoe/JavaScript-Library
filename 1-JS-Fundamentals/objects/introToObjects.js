let netflix = {
    id: 1,
    name: 'The Office',
    season1: {
        seasonInfo: {
            episodeInfo: [
                {episode: 1, episodeName: "Pilot"},
                {episode: 2, episodeName: "Diversity Day"},
                {episode: 3, episodeName: "Health Care"},
                {episode: 4, episodeName: "The Alliance"},
                {episode: 5, episodeName: "Basketball"},
                {episode: 6, episodeName: "Hot Girl"}  
            ]
        }
    },
    season2: {},
    season3: {}
};

console.log("All data: ", netflix);
console.log("Season info: ", netflix.season1.seasonInfo);
console.log(netflix.season1.seasonInfo.episodeInfo[2].episodeName);

/*
JSON Objects
    - JavaScript Object Notation
    - The JSON syntax is derived from JavaScript Object Notation syntax, but the format is text only
    - JSON exisits as a string
    - JSONformatter.org - great website to take website JSON and make it readable and something we can use.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    }
};

console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.values(spaceJam.toonSquad));
