// create champion folders
const fs = require("fs");
const path = require("path");

//Make list of champion names I need to build folders for
const champions = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol",
"Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","ChoGath",
"Corki","Darius","Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks",
"Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Gwen","Hecarim",
"Heimerdinger","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx",
"KaiSa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","KhaZix",
"Kindred","Kled","KogMaw","LeBlanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu",
"Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","Mordekaiser","Morgana","Nami",
"Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon",
"Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renekton","Rengar",
"Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen",
"Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra",
"TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate",
"Twitch","Udyr","Urgot","Varus","Vayne","Veigar","VelKoz","Vex","Vi","Viego","Viktor",
"Vladimir","Volibear","Warwick","Wukong","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick",
"Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"
];

//Design the script to create folders
champions.forEach(champion => {
    const dir = path.join(__dirname, "assets", "sounds", champion);
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true });
        console.log(`Created folder for ${champion}`);
    }
});

//Confirm it worked
console.log("All champion folders created successfully.");