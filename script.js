"use strict";

var commonPool = {
    "5-star": [
        "(Veteran of the Sword) Asbel",
        "(Master Swordsman) Lloyd",
        "(Vagabond Wolf) Raven",
        "(Humanitarian Noble) Estelle",
        "(Special Ops Commander) Asch",
        "(The Rose Prince) Richard",
        "(Chosen of Mana) Colette",
        "(Fonic Hymn Master) Tear",
        "(Well-Armed Mercenary) Alvin",
        "(Aurora User) Reid",
        "(Master of Space-Time) Cress",
        "(Unleasher of Salvos) Ludger",
        "(Seeker of Heroes) Reala",
        "(The Oathsworn Fist) Jude",
        "(Swordian Master) Rutee",
        "(Sword of Swords) Luke",
        "(Assault Sniper) Pascal",
        "(Swordian Master) Stahn",
        "(Devastating Cutie) Anise",
        "(Enlightened Warrior) Asbel",
        "(Enlightened Healer) Cheria",
        "(Gleaming Knight) Zelos",
        "(Grand Mage) Rita"
    ],
    "4-star": [
        "(Insightful One) Jade",
        "(Shadowmancer) Chieni",
        "(King of Elysium) Dhaos",
        "(A Friendship Undying) Richard",
        "(Daredevil) Presea",
        "(King of the Iron Fist) Bruiser Khang",
        "(Patriotic Princess) Natalia",
        "(Secretive Swordsman) Asch",
        "(Shinobi) Suzu",
        "(Survivor) Chester",
        "(Broadsword Tyrant) Ruca",
        "(Fervent Swordsman) Kor",
        "(The Dawn King) Gaius",
        "(Young Viscount) Luke",
        "(Archaeology Fanatic) Raine",
        "(Skilled Bodyguard) Reid",
        "(Viking) Chat",
        "(The Resolute Gaze) Philia",
        "(Multi-Gunner) Illia",
        "(Flame Fighter) Mao",
        "(Craymel Technician) Meredy",
        "(Comely Spearmaiden) Judith",
        "(Elegant Princess) Estelle",
        "(Divine Swordsman) Emil",
        "(Young Spellcaster) Arche",
        "(Gale-Force Archer) Hisui",
        "(The White Owl) Sedira",
        "(Upbeat Reporter) Leia",
        "(Hired Gun) Alvin",
        "(Rickrack Blader) Rondoline",
        "(Sigmund Tactician) Guy",
        "(Battle God) Senel",
        "(Naive Great Spirit) Muzet",
        "(The Invisible Hand) Rutee",
        "(Canine Traveler) Repede",
        "(Magic Science Pioneer) Rita",
        "(Bazooka Girl) Gardina",
        "(Lively Catgirl) Meowna",
        "(Minstrel) Claudio",
        "(Dualblade Officer) Hubert",
        "(Eraser) Kyle",
        "(Golem User) Micaldio",
        "(Courier Coordinator) Ines",
        "(Bladerang Maestro) Malik",
        "(Avatar of the Sea) Shirley",
        "(Poker Face) Garr",
        "(Panther of Calegia) Eugene",
        "(Martial Artist) Kudo",
        "(Magic-User) Genis",
        "(Kung Fu Master) Farah",
        "(Elusive Middle-Ager) Raven",
        "(Whirlwind Sniper) Hisui",
        "(Mage) Rita",
        "(Resplendent Warrior) Nitoa",
        "(Enlightened Butler) Rowen",
        "(Cardinal) Mint",
        "(Beast Prince) Caius",
        "(Blademagic Master) Kratos",
        "(The Orchid Blade) Rigitte",
        "(Elemental Summoner) Sheena",
        "(Wild Lass) Nanaly",
        "(Crescent Arrow) Chester",
        "(Greater Craymel) Celsius",
        "(Gaze of Justice) Stahn",
        "(Trusting Girl) Marta",
        "(Elf Maiden) Risaora",
        "(Grown-up Child) Anise",
        "(Battlefield Singer) Lumiela",
        "(Kimlascan Princess) Natalia",
        "(Bewitching Ruler) Digrita",
        "(Demure Danseuse) Richenal",
        "(Fiery Charge) Lilith",
        "(Spirit Channeler) Elize",
        "(Ratatosk Mode) Emil",
        "(Beautiful Blade) Silas",
        "(Bullet Blizzard) Nikola",
        "(Artemis Eyes) Chelsea",
        "(Craymel Mage) Keele",
        "(Dragoon) Judith",
        "(Avatar) Reala",
        "(Bomb Alchemist) Philia",
        "(Compassionate Flower) Lyra",
        "(Dark Wings Bandit) Melissa",
        "(Blossom Blitzer) Kohaku",
        "(Singer of the Verse) Tear",
        "(Somatic Bondsman) Kor",
        "(Master Swordsman) Lloyd",
        "(Radiant Healer) Cheria",
        "(Wielder of the Light) Asbel",
        "(Paladin) Alfas"
    ],
    "3-star": [
        "(Free Aristocrat) Spada",
        "(Magic Symbolist) Annie",
        "(Sword Hunter) Reid",
        "(Ice Swordsman) Veigue",
        "(The Resurrected) Ruca",
        "(Lens Hunter) Rutee",
        "(Hunter) Chester",
        "(White-Hot Swordsman) Stahn",
        "(Gale-Force Blade) Kyle",
        "(Cleric) Mint",
        "(Burning Flame) Lilith",
        "(Gun and Glyph User) Pascal",
        "(Summoner) Sheena",
        "(Sorcerer) Genis",
        "(Reticent Axewoman) Presea",
        "(Artes Wand User) Agria",
        "(Staff Wielder) Leia",
        "(Spirit Swordswoman) Milla",
        "(Martial Artist) Jude",
        "(Healer) Cheria",
        "(Fist Initiate) Sophie",
        "(Sword Initiate) Asbel",
        "(Stout-Hearted) Kohaku",
        "(Somatic) Kor",
        "(Genius Researcher) Rita",
        "(Healer) Estelle",
        "(Lancer) Judith",
        "(Vigilante) Yuri",
        "(Puppeteer) Anise",
        "(Fonist) Tear",
        "(Duke's Son) Luke",
        "(Bubble Maiden) Norma",
        "(Fighter) Senel",
        "(Teacher) Raine",
        "(Fledgling Chosen) Colette",
        "(Twin-Sword Warrior) Lloyd",
        "(Scientist) Harold",
        "(Scholar) Keele",
        "(Priestess) Philia",
        "(Shortbow Maiden) Chelsea",
        "(Sparrow Ninja) Suzu",
        "(Witch) Arche",
        "(Albane-style Fighter) Cress"
    ]
}

// Defining summons!
var waterSummon = {
    name: "Water Summon",
    image: "https://i.imgur.com/9L9eYk4.png",
    buttons: [{"https://i.imgur.com/l5jhPHy.png": "singleSummon"}, 
              {"https://i.imgur.com/xtakRLt.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: null,
    // "4-star", "5-star", "4+":
    multiGuarantee: {"4+": 1},
    usesCommonPool: true,
    fixedElement: "Water",
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    // omit any keys which do not exist:
    featuredRoster: {
        "5-star": [
            "(Kindly Scientist) Jude", 
            "(King Battler) QQ",    
            "(Might of Ratatosk) Emil",
            "(Trusty Fellow) Gall",
            "(Glimpse of Talent) Meredy",
            "(Driftwood Damsel) Kohaku"],
        "4-star": ["(Rain Maiden) Annie"],
        "3-star": []
    },
    nameBanner: "https://i.imgur.com/H98mhi7.png"
}

var athleticsFestivalSummon = {
    name: "Athletics Festival Fantasy Summon",
    image: "https://i.imgur.com/TBj9W7Y.png",
    buttons: [{"https://i.imgur.com/JvvIwKv.png": "singleSummon"}, 
              {"https://i.imgur.com/nWC7xV1.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: {"4+": 1},
    multiGuarantee: {"4+": 1},
    usesCommonPool: true,
    fixedElement: null,
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    featuredRoster: {
        "5-star": [
            "(Swimming Rep) Tear",
            "(Gymnastics Rep) Colette",
            "(Intelligentsia) Jude",
            "(Unifying Calm) Kratos"],
        "4-star": [
            "(Patriotic Princess) Natalia",
            "(King of the Iron Fist) Bruiser Khang",
            "(Daredevil) Presea"],
        "3-star": []
    },
    nameBanner: "https://i.imgur.com/ubapFyX.png"
}

var holyNightSummon = {
    name: "Knotty Holy Night Summon",
    image: "https://i.imgur.com/QbLLtjj.png",
    buttons: [{"https://i.imgur.com/BWwYjLj.png": "singleSummon"},
              {"https://i.imgur.com/q7v5jlM.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: {"4+": 1},
    multiGuarantee: {"4+": 2},
    usesCommonPool: true,
    fixedElement: null,
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    featuredRoster: {
        "5-star": [
            "(Bedside Goddess) Kanonno G.",
            "(Scattered in the Night) Ludger & Elle",
            "(Nice Kids Only) Cheria",
            "(Snowy Night) Luke & Mieu",
            "(Does Delivery) Rose"],
        "4-star": [
            "(Insightful One) Jade",
            "(Naïve Innocence) Chelsea",
            "(King of Phandaria) Garr"],
        "3-star": []
    },
    nameBanner: "https://i.imgur.com/N2usPGx.png"
}

var ma1Summon = {
    name: "Mystic Arte Summon",
    image: "https://i.imgur.com/K9JsL8g.png",
    buttons: [{"https://i.imgur.com/8FNnv8J.png": "singleSummon"},
              {"https://i.imgur.com/LXH9jGI.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 11,
    multiFeaturedGuarantee: null,
    multiGuarantee: {"4+": 2},
    usesCommonPool: true,
    fixedElement: null,
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    featuredRoster: {
        "5-star": [
            "(UA) Estelle & Rita",
            "(New Year's Party) Estelle",
            "(Festival Bloom) Estelle",
            "(Microphone Hog) Zelos",
            "(Tethe'allen Chosen) Zelos",
            "(Fair Nobleman) Zelos"],
        "4-star": [],
        "3-star": []
    },
    nameBanner: "https://i.imgur.com/QvpWqYc.png"
}


var maidSummon = {
    name: "Maid & Butler Summon Summon",
    image: "http://i.imgur.com/4YLE0Iy.png",
    buttons: [{"http://i.imgur.com/sXHyerR.png": "singleSummon"},
              {"http://i.imgur.com/jni0cwI.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: {"4+": 1},
    multiGuarantee: {"4+": 2},
    usesCommonPool: true,
    fixedElement: null,
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    featuredRoster: {
        "5-star": [
            "(Gorgeous Barmaid) Milla",
            "(Blushing Maiden) Tear",
            "(Combative Server) Alvin",
            "(Hot-blooded Waiter) Lloyd"],
        "4-star": [
            "(Archaeology Fanatic) Raine",
            "(Skilled Bodyguard) Reid",
            "(Young Viscount) Luke"],
        "3-star": []
    },
    nameBanner: "http://i.imgur.com/qS78N00.png"
}

var godGeneralSummon = {
    name: "God-Generals Strike Summon",
    image: "http://i.imgur.com/WgTIgMx.png",
    buttons: [{"http://i.imgur.com/gpvq9NL.png": "singleSummon"},
              {"http://i.imgur.com/zjP00O1.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: {"4+": 1},
    multiGuarantee: {"4+": 2},
    usesCommonPool: true,
    fixedElement: null,
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    featuredRoster: {
        "5-star": [
            "(God-General) Asch",
            "(God-General) Largo",
            "(God-General) Legretta",
            "(God-General) Sync",
            "(God-General) Arietta",
            "(God-General) Dist",
            "(The Bloody Maestro) Asch",
            "(Necromancer) Jade",
            "(Devastating Cutie) Anise",
            "(Sword of Swords) Luke",
            "(Fonic Hymn Master) Tear"],
        "4-star": [
            "(Secretive Swordsman) Asch",
            "(Patriotic Princess) Natalia",
            "(Insightful One) Jade",
            "(Grown-up Child) Anise",
            "(Kimlascan Princess) Natalia",
            "(Sigmund Tactician) Guy",
            "(Singer of the Verse) Tear",
            "(Young Viscount) Luke"],
        "3-star": []
    },
    nameBanner: "http://i.imgur.com/RO6u7m8.png"
}

var barbatosSummon = {
    name: "Barbatos Summon",
    image: "https://vignette2.wikia.nocookie.net/tales-of-link/images/d/d8/%28Hero_Killer%29_Barbatos.png/revision/latest?cb=20161016090637",
    buttons: [{"https://i.imgur.com/xtakRLt.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: null,
    // "4-star", "5-star", "4+":
    multiGuarantee: null,
    usesCommonPool: false,
    fixedElement: null,
    weights: [[0, "3-star"], [0, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    // omit any keys which do not exist:
    featuredRoster: {
        "5-star": [
            "(Hero Killer) Barbatos"]
    },
    nameBanner: "https://i.imgur.com/H98mhi7.png"
}

var flowerSummon = {
    name: "Flower Summon",
    image: "http://i.imgur.com/wzgV51y.png",
    buttons: [{"http://i.imgur.com/aieCKBu.png": "singleSummon"},
              {"http://i.imgur.com/98UHj79.png": "multiSummon"}],
    singleFeaturedGuarantee: null,
    multiRolls: 10,
    multiFeaturedGuarantee: null,
    multiGuarantee: {"4+": 2},
    usesCommonPool: true,
    fixedElement: false,
    weights: [[64, "3-star"], [94, "4-star"], [100, "5-star"]],
    singleSummon: defaultSingleSummon,
    multiSummon: defaultMultiSummon,
    featuredRoster: {
        "5-star": [
            "(Gentle Soul) Kana",
            "(Talk of the Town) Sophie",
            "(Her Father's Footsteps) Rubia",
            "(Memory Seeker) P. Kanonno",
            "(Blessed Maiden) Shirley"],
        "4-star": [],
        "3-star": []
    },
    nameBanner: "http://i.imgur.com/Irjw6s6.png"
}

// Returns a random value between minimum and maximum (both inclusive).
function getRandomNumber(minimum, maximum) {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

// Returns a random element.
function getRandomElement() {
    var elements = ["Light", "Dark", "Water", "Earth", "Fire", "Wind"];
    var idx = getRandomNumber(0, elements.length - 1);

    return elements[idx];
}

function createUnitObject(name, rarity, element) {
    var unit = {
        name: name,
        rarity: rarity,
        element: element
    };

    return unit;
}

// Adds the common pool to a summon and returns the new roster:
function addCommonPool(base) {
    var newRoster = {};
    for (var pool in base) {
        for (var j in base[pool]) {
            var unit = base[pool][j];

            if (newRoster[pool]) {
                newRoster[pool].push(unit);
            } else {
                newRoster[pool] = [unit];
            }
        }

        if (commonPool[pool]) {
            for (var j in commonPool[pool]) {
                if (newRoster[pool]) {
                    newRoster[pool].push(commonPool[pool][j]);
                } else {
                    newRoster[pool] = [commonPool[pool][j]];
                }
            }
        }
    }

    return newRoster;
}

function defaultSingleSummon() {
    var roster;
    if (this.usesCommonPool) {
        roster = addCommonPool(this.featuredRoster);
    } else {
        roster = this.featuredRoster;
    }

    // Grab a random number to figure out which pool to draw from:
    var poolVal = getRandomNumber(1, 100);
    var targetPool;

    for (var i in this.weights) {
        if (poolVal <= this.weights[i][0]) {
            targetPool = this.weights[i][1];
            break;
        }
    }

    // Grab a random index in that pool:
    var poolIdx = getRandomNumber(0, roster[targetPool].length - 1);
    var retval = [];

    if (this.fixedElement) {
        retval.push(createUnitObject(roster[targetPool][poolIdx], targetPool, this.fixedElement));
    } else {
        retval.push(createUnitObject(roster[targetPool][poolIdx], targetPool, getRandomElement()));
    }

    return retval;
}

function defaultMultiSummon() {
    var roster;
    if (this.usesCommonPool) {
        roster = addCommonPool(this.featuredRoster);
    } else {
        roster = this.featuredRoster;
    }

    var retval = [];
    var numRolls = this.multiRolls;
    if (this.multiFeaturedGuarantee) {
        for (var currPool in this.multiFeaturedGuarantee) {
            var poolRolls = this.multiFeaturedGuarantee[currPool];
            
            var targetPool;
            if (currPool == "4+") {
                var tmp = getRandomNumber(1, 100);
                if (tmp <= 94) {
                    targetPool = "4-star";
                } else {
                    targetPool = "5-star";
                }
            } else {
                targetPool = currPool;
            }


            for (var i = 0; i < poolRolls; i++) {
                // Grab a unit from the target pool:
                var poolIdx = getRandomNumber(0, this.featuredRoster[targetPool].length - 1);

                if (this.fixedElement) {
                    retval.push(createUnitObject(this.featuredRoster[targetPool][poolIdx], targetPool, this.fixedElement));
                } else {
                    retval.push(createUnitObject(this.featuredRoster[targetPool][poolIdx], targetPool, getRandomElement()));
                }
                numRolls -= 1;
            }
        }
    }

    if (this.multiGuarantee) {
        for (var currPool in this.multiGuarantee) {
            var poolRolls = this.multiGuarantee[currPool];

            var targetPool;
            if (currPool == "4+") {
                var tmp = getRandomNumber(1, 100);
                if (tmp <= 94) {
                    targetPool = "4-star";
                } else {
                    targetPool = "5-star";
                }
            } else {
                targetPool = currPool;
            }

            for (var i = 0; i < poolRolls; i++) {
                // Grab a unit from the target pool:
                var poolIdx = getRandomNumber(0, roster[targetPool].length - 1);

                if (this.fixedElement) {
                    retval.push(createUnitObject(roster[targetPool][poolIdx], targetPool, this.fixedElement));
                } else {
                    retval.push(createUnitObject(roster[targetPool][poolIdx], targetPool, getRandomElement()));
                }
                numRolls -= 1;
            }
        }
    }

    // Now handle any leftover rolls:
    for (var x = 0; x < numRolls; x++) {
        var poolVal = getRandomNumber(1, 100);
        var targetPool;

        for (var i in this.weights) {
            if (poolVal <= this.weights[i][0]) {
                targetPool = this.weights[i][1];
                break;
            }
        }

        // Grab a random index in that pool:
        var poolIdx = getRandomNumber(0, roster[targetPool].length - 1);
        if (this.fixedElement) {
            retval.push(createUnitObject(roster[targetPool][poolIdx], targetPool, this.fixedElement));
        } else {
            retval.push(createUnitObject(roster[targetPool][poolIdx], targetPool, getRandomElement()));
        }
    }

    return retval;
}

function getRosterList(summon) {
    var rosterInfo = '';
    if (summon.featuredRoster["5-star"]) {
        rosterInfo += '<div class="roster-list"><h2>5-star Units</h2>';

        for (var i in summon.featuredRoster["5-star"]) {
            var unit = summon.featuredRoster["5-star"][i];
            rosterInfo += '<li class="featured-unit-name">' + unit + '</li>';
        }

        if (summon.usesCommonPool) {
            for (var i in commonPool["5-star"]) {
                var unit = commonPool["5-star"][i];
                if (rosterInfo.indexOf(unit) == -1) {
                    rosterInfo += '<li>' + unit + '</li>';
                }
            }
        }

        rosterInfo += '</div>';
    }

    if (summon.featuredRoster["4-star"]) {
        rosterInfo += '<div class="roster-list"><h2>4-star Units</h2>';

        for (var i in summon.featuredRoster["4-star"]) {
            var unit = summon.featuredRoster["4-star"][i];
            rosterInfo += '<li class="featured-unit-name">' + unit + '</li>';
        }

        if (summon.usesCommonPool) {
            for (var i in commonPool["4-star"]) {
                var unit = commonPool["4-star"][i];
                if (rosterInfo.indexOf(unit) == -1) {
                    rosterInfo += '<li>' + unit + '</li>';
                }
            }
        }

        rosterInfo += '</div>';
    }

    if (summon.featuredRoster["3-star"]) {
        rosterInfo += '<div class="roster-list"><h2>3-star Units</h2>';

        for (var i in summon.featuredRoster["3-star"]) {
            var unit = summon.featuredRoster["3-star"][i];
            rosterInfo += '<li class="featured-unit-name">' + unit + '</li>';
        }

        if (summon.usesCommonPool) {
            for (var i in commonPool["3-star"]) {
                var unit = commonPool["3-star"][i];
                if (rosterInfo.indexOf(unit) == -1) {
                    rosterInfo += '<li>' + unit + '</li>';
                }
            }
        }

        rosterInfo += '</div>';
    }

    return rosterInfo;
}

function doSummon(funcName, summonIdx) {
    var summon = availableSummons[summonIdx];
    var retval = summon[funcName]();

    $('#resultList').html('');

    for (var i in retval) {
        let unitName = retval[i].name;
        let unitElement = retval[i].element;
        let unitRarity = retval[i].rarity;

        if (nameResolutions[unitName]) {
            if (nameResolutions[unitName][unitRarity]) {
                unitName = nameResolutions[unitName][unitRarity];
            }
        }

        getUnitImage(unitName).then(function(response) {
            // Replace all apostrophes:
            response[1] = response[1].replace("'", "@");

            $('#resultList').append('<div id="result-' + i + '" class="summon-row rarity-' + unitRarity +
                           '" onclick="loadFrame(\'' + response[1] + '\')"><img class="unit-icon" src="' + response[0] + '"><p>' + unitName + '</p><img class="element-icon" src="' + elementIcons[unitElement] + '"/></div></a>');
        })
    }
    
}

function loadFrame(url) {
    url = url.replace("@", "'");
    $('#wikiPage').attr('src', url);
}

var elementIcons = {
    "Water": "https://i.imgur.com/piEF2BU.png",
    "Fire": "https://i.imgur.com/gKkBY6n.png",
    "Wind": "https://i.imgur.com/5WcQNUY.png",
    "Earth": "https://i.imgur.com/XyMh3zq.png",
    "Light": "https://i.imgur.com/aMaJtbw.png",
    "Dark": "https://i.imgur.com/Xo3aJkY.png"
}
var imgResolutions = {
    // "(???) Chelsea": "https://i.imgur.com/hc4d3OV.png",
    // "(???) Garr": "https://i.imgur.com/RJyemmV.png"
};

var nameResolutions = {
    "(Master Swordsman) Lloyd": {"5-star": "(Master Swordsman) Lloyd (5-star)",
                                 "4-star": "(Master Swordsman) Lloyd (4-star)"}
};

function getUnitImage(name) {
    return new Promise(function(resolve, reject) {
        if (imgResolutions[name]) {
            return resolve([imgResolutions[name], "javascript:void(0)"]);
        }

        var targetName = name;

        var url = "https://tales-of-link.wikia.com/api.php?action=query&titles=File:" + encodeURIComponent(targetName) + " (Icon).png&prop=imageinfo&iiprop=url&format=json";

        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            success: function(res) {
                var pages = res.query.pages;
                for (var i in pages) {
                    resolve([pages[i].imageinfo[0].url, "https://tales-of-link.wikia.com/wiki/" + encodeURIComponent(targetName) + "?useskin=mercury"]);
                }
            }
        });
    })
}

function displaySummonInfo(summonIdx) {
    var summon = availableSummons[summonIdx];

    // Set the title:
    $('#summonName').html('<img src="' + summon.nameBanner + '"/>')

    // Populate roster list:
    $('#rosterList').html(getRosterList(summon));

    // Get button(s):
    var buttonHTML = '';
    for (var i in summon.buttons) {
        for (var key in summon.buttons[i]) {
            buttonHTML += ('<div class="summon-button">' + 
                           '<img id="summon-button-' + i + '" src="' + key + '"></div>');
        }
    }

    $('#summonBtns').html(buttonHTML);

    for (let i in summon.buttons) {
        for (let key in summon.buttons[i]) {
            $('#summon-button-' + i).on('click', function() {
                doSummon(summon.buttons[i][key], summonIdx);
            })
        }
    }
}

var availableSummons = [flowerSummon, holyNightSummon, waterSummon, athleticsFestivalSummon, ma1Summon, godGeneralSummon, maidSummon, barbatosSummon];

$(document).ready(function() {
    // Populate list of summons:
    var newStr = '<ul id="lightSlider">';

    for (var i in availableSummons) {
        newStr += '<li><img src="' + availableSummons[i].image + '"/></li>';
    }

    newStr += '</ul>'

    $('#summonList').html(newStr);

    $('#lightSlider').lightSlider({
        item: 1,
        slideMargin: 0,
        loop: true,
        keyPress: true,
        onSliderLoad: function(el) {
            displaySummonInfo(0);
        },
        onBeforeSlide: function (el) {
            displaySummonInfo(el.getCurrentSlideCount() - 1);
        }
    });

    // Hide the dot thing:
    // $('.lSPager').css('display', 'none');

})