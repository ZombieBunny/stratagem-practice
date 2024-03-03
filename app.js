"use strict"

const strategemsV2 = [
    {
        "REINFORCE": [
            "up",
            "down",
            "right",
            "left",
            "up"
        ]
    },
    {
        "RESUPPLY": [
            "down",
            "down",
            "up",
            "right"
        ]
    },
    {
        "SOS_BEACON": [
            "up",
            "down",
            "right",
            "up"
        ]
    },
    {
        "SEAF_ARTILLERY": [
            "down",
            "up",
            "up",
            "left"
        ]
    },
    {
        "HELLBOMB": [
            "down",
            "up",
            "left",
            "down",
            "up",
            "right",
            "down",
            "up"
        ]
    },
    {
        "UPLOAD_DATA": [
            "left",
            "right",
            "up",
            "up",
            "up"
        ]
    },
    {
        "ORBITAL_ILLUMINATION_FLARE": [
            "right",
            "right",
            "left",
            "left"
        ]
    },
    {
        "SUPER_EARTH_FLAG": [
            "down",
            "up",
            "down",
            "up"
        ]
    },
    {
        "PROSPECTING_DRILL": [
            "down",
            "down",
            "left",
            "right",
            "down",
            "down"
        ]
    },
    {
        "SEISMIC_PROBE": [
            "up",
            "up",
            "left",
            "right",
            "down",
            "down"
        ]
    },
    {
        "MACHINE_GUN_SENTRY": [
            "down",
            "up",
            "right",
            "right",
            "up"
        ]
    },
    {
        "GATLING_SENTRY": [
            "down",
            "up",
            "right",
            "left"
        ]
    },
    {
        "MORTAR_SENTRY": [
            "down",
            "up",
            "right",
            "right",
            "down"
        ]
    },
    {
        "GUARD_DOG": [
            "down",
            "up",
            "left",
            "up",
            "right",
            "down"
        ]
    },
    {
        "AUTOCANNON_SENTRY": [
            "down",
            "up",
            "right",
            "up",
            "left",
            "up"
        ]
    },
    {
        "ROCKET_SENTRY": [
            "down",
            "up",
            "right",
            "right",
            "left"
        ]
    },
    {
        "EMS_MORTAR_SENTRY": [
            "down",
            "up",
            "right",
            "down",
            "right"
        ]
    },
    {
        "ANTI_PERSONNEL_MINEFIELD": [
            "down",
            "left",
            "down",
            "up",
            "right"
        ]
    },
    {
        "SUPPLY_PACK": [
            "down",
            "left",
            "down",
            "up",
            "up",
            "down"
        ]
    },
    {
        "GRENADE_LAUNCHER": [
            "down",
            "left",
            "up",
            "left",
            "down",
            "down"
        ]
    },
    {
        "LASER_CANNON": [
            "down",
            "left",
            "down",
            "up",
            "left"
        ]
    },
    {
        "INCENDIARY_MINES": [
            "down",
            "left",
            "left",
            "down"
        ]
    },
    {
        "GUARD_DOG_ROVER": [
            "down",
            "up",
            "left",
            "up",
            "right",
            "right"
        ]
    },
    {
        "BALLISTIC_SHIELD_BACKPACK": [
            "down",
            "left",
            "down",
            "down",
            "up",
            "left"
        ]
    },
    {
        "ARC_THROWER": [
            "down",
            "right",
            "down",
            "up",
            "left",
            "left"
        ]
    },
    {
        "SHIELD_GENERATOR_PACK": [
            "down",
            "up",
            "left",
            "right",
            "left",
            "right"
        ]
    },
    {
        "ORBITAL_PRECISION_STRIKE": [
            "right",
            "right",
            "up"
        ]
    },
    {
        "ORBITAL_GAS_STRIKE": [
            "right",
            "right",
            "down",
            "right"
        ]
    },
    {
        "ORBITAL_EMS_STRIKE": [
            "right",
            "right",
            "left",
            "down"
        ]
    },
    {
        "ORBITAL_SMOKE_STRIKE": [
            "right",
            "right",
            "down",
            "up"
        ]
    },
    {
        "HMG_EMPLACEMENT": [
            "down",
            "up",
            "left",
            "right",
            "right",
            "left"
        ]
    },
    {
        "SHIELD_GENERATOR_RELAY": [
            "down",
            "down",
            "left",
            "right",
            "left",
            "right"
        ]
    },
    {
        "TESLA_TOWER": [
            "down",
            "up",
            "right",
            "up",
            "left",
            "right"
        ]
    },
    {
        "EAGLE_REARM": [
            "up",
            "up",
            "left",
            "up",
            "right"
        ]
    },
    {
        "EAGLE_STRAFING_RUN": [
            "up",
            "right",
            "right"
        ]
    },
    {
        "EAGLE_AIRSTRIKE": [
            "up",
            "up",
            "down",
            "right"
        ]
    },
    {
        "EAGLE_CLUSTER_BOMB": [
            "up",
            "right",
            "down",
            "down",
            "right"
        ]
    },
    {
        "EAGLE_NAPALM_AIRSTRIKE": [
            "up",
            "right",
            "down",
            "up"
        ]
    },
    {
        "JUMP_PACK": [
            "down",
            "up",
            "up",
            "down",
            "up"
        ]
    },
    {
        "EAGLE_SMOKE_STRIKE": [
            "up",
            "right",
            "up",
            "down"
        ]
    },
    {
        "EAGLE_110MM_ROCKET_PODS": [
            "up",
            "right",
            "up",
            "left"
        ]
    },
    {
        "EAGLE_500KG_BOMB": [
            "up",
            "right",
            "down",
            "down",
            "down"
        ]
    },
    {
        "ORBITAL_GATLING_BARRAGE": [
            "right",
            "down",
            "left",
            "up",
            "up"
        ]
    },
    {
        "ORBITAL_AIRBURST_STRIKE": [
            "right",
            "right",
            "right"
        ]
    },
    {
        "ORBITAL_120MM_HE_BARRAGE": [
            "right",
            "down",
            "down",
            "left",
            "down",
            "right",
            "down",
            "down"
        ]
    },
    {
        "ORBITAL_380MM_HE_BARRAGE": [
            "right",
            "down",
            "up",
            "up",
            "left",
            "down",
            "down"
        ]
    },
    {
        "ORBITAL_WALKING_BARRAGE": [
            "right",
            "down",
            "right",
            "down",
            "right",
            "down"
        ]
    },
    {
        "ORBITAL_LASER": [
            "right",
            "down",
            "up",
            "right",
            "down"
        ]
    },
    {
        "ORBITAL_RAILCANNON_STRIKE": [
            "right",
            "up",
            "down",
            "down",
            "right"
        ]
    },
    {
        "MACHINE_GUN": [
            "down",
            "left",
            "down",
            "up",
            "right"
        ]
    },
    {
        "ANTI_MATERIAL_RIFLE": [
            "down",
            "left",
            "right",
            "up",
            "down"
        ]
    },
    {
        "STALWART": [
            "down",
            "left",
            "down",
            "up",
            "up",
            "left"
        ]
    },
    {
        "EXPENDABLE_ANTI_TANK": [
            "down",
            "down",
            "left",
            "up",
            "right"
        ]
    },
    {
        "RECOILLESS_RIFLE": [
            "down",
            "left",
            "right",
            "right",
            "left"
        ]
    },
    {
        "FLAMETHROWER": [
            "down",
            "left",
            "up",
            "down",
            "up"
        ]
    },
    {
        "AUTOCANNON": [
            "down",
            "left",
            "down",
            "up",
            "up",
            "right"
        ]
    },
    {
        "RAILGUN": [
            "down",
            "right",
            "down",
            "up",
            "left",
            "right"
        ]
    },
    {
        "SPEAR": [
            "down",
            "down",
            "up",
            "down",
            "down"
        ]
    },
    {
        "REINFORCE": [
            "up",
            "down",
            "right",
            "left",
            "up"
        ]
    },
    {
        "RESUPPLY": [
            "down",
            "down",
            "up",
            "right"
        ]
    },
    {
        "SOS_BEACON": [
            "up",
            "down",
            "right",
            "up"
        ]
    },
    {
        "SEAF_ARTILLERY": [
            "down",
            "up",
            "up",
            "left"
        ]
    },
    {
        "HELLBOMB": [
            "down",
            "up",
            "left",
            "down",
            "up",
            "right",
            "down",
            "up"
        ]
    },
    {
        "UPLOAD_DATA": [
            "left",
            "right",
            "up",
            "up",
            "up"
        ]
    },
    {
        "ORBITAL_ILLUMINATION_FLARE": [
            "right",
            "right",
            "left",
            "left"
        ]
    },
    {
        "SUPER_EARTH_FLAG": [
            "down",
            "up",
            "down",
            "up"
        ]
    },
    {
        "PROSPECTING_DRILL": [
            "down",
            "down",
            "left",
            "right",
            "down",
            "down"
        ]
    },
    {
        "SEISMIC_PROBE": [
            "up",
            "up",
            "left",
            "right",
            "down",
            "down"
        ]
    },
    {
        "MACHINE_GUN_SENTRY": [
            "down",
            "up",
            "right",
            "right",
            "up"
        ]
    },
    {
        "GATLING_SENTRY": [
            "down",
            "up",
            "right",
            "left"
        ]
    },
    {
        "MORTAR_SENTRY": [
            "down",
            "up",
            "right",
            "right",
            "down"
        ]
    },
    {
        "GUARD_DOG": [
            "down",
            "up",
            "left",
            "up",
            "right",
            "down"
        ]
    },
    {
        "AUTOCANNON_SENTRY": [
            "down",
            "up",
            "right",
            "up",
            "left",
            "up"
        ]
    },
    {
        "ROCKET_SENTRY": [
            "down",
            "up",
            "right",
            "right",
            "left"
        ]
    },
    {
        "EMS_MORTAR_SENTRY": [
            "down",
            "up",
            "right",
            "down",
            "right"
        ]
    },
    {
        "ANTI_PERSONNEL_MINEFIELD": [
            "down",
            "left",
            "down",
            "up",
            "right"
        ]
    },
    {
        "SUPPLY_PACK": [
            "down",
            "left",
            "down",
            "up",
            "up",
            "down"
        ]
    },
    {
        "GRENADE_LAUNCHER": [
            "down",
            "left",
            "up",
            "left",
            "down",
            "down"
        ]
    },
    {
        "LASER_CANNON": [
            "down",
            "left",
            "down",
            "up",
            "left"
        ]
    },
    {
        "INCENDIARY_MINES": [
            "down",
            "left",
            "left",
            "down"
        ]
    },
    {
        "GUARD_DOG_ROVER": [
            "down",
            "up",
            "left",
            "up",
            "right",
            "right"
        ]
    },
    {
        "BALLISTIC_SHIELD_BACKPACK": [
            "down",
            "left",
            "down",
            "down",
            "up",
            "left"
        ]
    },
    {
        "ARC_THROWER": [
            "down",
            "right",
            "down",
            "up",
            "left",
            "left"
        ]
    },
    {
        "SHIELD_GENERATOR_PACK": [
            "down",
            "up",
            "left",
            "right",
            "left",
            "right"
        ]
    },
    {
        "ORBITAL_PRECISION_STRIKE": [
            "right",
            "right",
            "up"
        ]
    },
    {
        "ORBITAL_GAS_STRIKE": [
            "right",
            "right",
            "down",
            "right"
        ]
    },
    {
        "ORBITAL_EMS_STRIKE": [
            "right",
            "right",
            "left",
            "down"
        ]
    },
    {
        "ORBITAL_SMOKE_STRIKE": [
            "right",
            "right",
            "down",
            "up"
        ]
    },
    {
        "HMG_EMPLACEMENT": [
            "down",
            "up",
            "left",
            "right",
            "right",
            "left"
        ]
    },
    {
        "SHIELD_GENERATOR_RELAY": [
            "down",
            "down",
            "left",
            "right",
            "left",
            "right"
        ]
    },
    {
        "TESLA_TOWER": [
            "down",
            "up",
            "right",
            "up",
            "left",
            "right"
        ]
    },
    {
        "EAGLE_REARM": [
            "up",
            "up",
            "left",
            "up",
            "right"
        ]
    },
    {
        "EAGLE_STRAFING_RUN": [
            "up",
            "right",
            "right"
        ]
    },
    {
        "EAGLE_AIRSTRIKE": [
            "up",
            "up",
            "down",
            "right"
        ]
    },
    {
        "EAGLE_CLUSTER_BOMB": [
            "up",
            "right",
            "down",
            "down",
            "right"
        ]
    },
    {
        "EAGLE_NAPALM_AIRSTRIKE": [
            "up",
            "right",
            "down",
            "up"
        ]
    },
    {
        "JUMP_PACK": [
            "down",
            "up",
            "up",
            "down",
            "up"
        ]
    },
    {
        "EAGLE_SMOKE_STRIKE": [
            "up",
            "right",
            "up",
            "down"
        ]
    },
    {
        "EAGLE_110MM_ROCKET_PODS": [
            "up",
            "right",
            "up",
            "left"
        ]
    },
    {
        "EAGLE_500KG_BOMB": [
            "up",
            "right",
            "down",
            "down",
            "down"
        ]
    },
    {
        "ORBITAL_GATLING_BARRAGE": [
            "right",
            "down",
            "left",
            "up",
            "up"
        ]
    },
    {
        "ORBITAL_AIRBURST_STRIKE": [
            "right",
            "right",
            "right"
        ]
    },
    {
        "ORBITAL_120MM_HE_BARRAGE": [
            "right",
            "down",
            "down",
            "left",
            "down",
            "right",
            "down",
            "down"
        ]
    },
    {
        "ORBITAL_380MM_HE_BARRAGE": [
            "right",
            "down",
            "up",
            "up",
            "left",
            "down",
            "down"
        ]
    },
    {
        "ORBITAL_WALKING_BARRAGE": [
            "right",
            "down",
            "right",
            "down",
            "right",
            "down"
        ]
    },
    {
        "ORBITAL_LASER": [
            "right",
            "down",
            "up",
            "right",
            "down"
        ]
    },
    {
        "ORBITAL_RAILCANNON_STRIKE": [
            "right",
            "up",
            "down",
            "down",
            "right"
        ]
    },
    {
        "MACHINE_GUN": [
            "down",
            "left",
            "down",
            "up",
            "right"
        ]
    },
    {
        "ANTI_MATERIAL_RIFLE": [
            "down",
            "left",
            "right",
            "up",
            "down"
        ]
    },
    {
        "STALWART": [
            "down",
            "left",
            "down",
            "up",
            "up",
            "left"
        ]
    },
    {
        "EXPENDABLE_ANTI_TANK": [
            "down",
            "down",
            "left",
            "up",
            "right"
        ]
    },
    {
        "RECOILLESS_RIFLE": [
            "down",
            "left",
            "right",
            "right",
            "left"
        ]
    },
    {
        "FLAMETHROWER": [
            "down",
            "left",
            "up",
            "down",
            "up"
        ]
    },
    {
        "AUTOCANNON": [
            "down",
            "left",
            "down",
            "up",
            "up",
            "right"
        ]
    },
    {
        "RAILGUN": [
            "down",
            "right",
            "down",
            "up",
            "left",
            "right"
        ]
    },
    {
        "SPEAR": [
            "down",
            "down",
            "up",
            "down",
            "down"
        ]
    }
];

const defaultGameState = {
    stragegems: [],
    currentStrategem: null,
    captured: null,
    timerStartTiime: null
}

let gameState = JSON.parse(JSON.stringify(defaultGameState));


function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function startGame() {
    gameState = JSON.parse(JSON.stringify(defaultGameState));
    for (let i = 0; i < 10; i++) {
        gameState.stragegems.push(randChoice(strategemsV2));
    }

    gameState.currentStrategem = gameState.stragegems[0];
    setDisplay();
}

function setDisplay() {

    const element = document.getElementById("name");
    element.innerHTML = Object.keys(gameState.currentStrategem)[0];

    setSequence();
}

function setSequence() {
    const sequence = document.getElementById("sequence");
    sequence.replaceChildren();

    for (let s = 0; s < Object.values(gameState.currentStrategem)[0].length; s++) {
        var span = document.createElement('div');
        const success = gameState.captured && gameState.captured?.length ? gameState.captured?.length : NaN;
        const name = Object.values(gameState.currentStrategem)[0][s];
        span.className = s < success ? `nes-text is-success ${name}` : `nes-text is-primary ${name}`;
        sequence.appendChild(span);
    }
}

function direction(direction) {
    const nextSequence = gameState.captured && gameState.captured.length > 0 ? gameState.captured.length : 0;
    console.log(gameState.currentStrategem, Object.values(gameState.currentStrategem)[0]);
    console.log(nextSequence);
    const answer = Object.values(gameState.currentStrategem)[0][nextSequence];
    if (direction === answer) {
        console.log("correct");
        if (gameState.captured && gameState.captured.length > 0) {
            gameState.captured.push(direction);
        } else {
            gameState.captured = [direction];
        }

        setSequence()

        if (gameState.captured.length === Object.values(gameState.currentStrategem)[0].length) {
            gameState.currentStrategem = randChoice(strategemsV2);
            gameState.captured = [];
            console.log("done, next", gameState.currentStrategem);
            setDisplay();
        }
    } else {
        // set error
    }
}

startGame();
