/*
    Simple app that allows the player to fight a monster.
*/

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const BATTLELOG_SIZE = 50;

const PC_ATK = 'ATTACK';
const PC_STRONG_ATK = 'STRONG_ATTACK';
const PC_HEAL = 'HEAL';
const MONSTER_ATK = 'MONSTER_ATTACK';
const GAME_OVER = 'GAME_OVER';
const PC_DEAD = 'PC_DEAD';
const MONSTER_DEAD = 'MONSTER_DEAD';
const BOTH_DEAD = 'BOTH_DEAD';


let battleLog = [];
let enteredValue;
let promptCheck = true;

while (promptCheck) {
    enteredValue = prompt('Please set your max life [1 - 300]:', '100');
    if (!enteredValue || enteredValue <= 0 || enteredValue > 400) {
        alert('Please enter a valid number.')
    } else {
        promptCheck = false;
    }
}

// Initialize health bars.
let maxLife = parseInt(enteredValue);

let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

const writeToLog = (event, val) => {
    switch (event) {
        case PC_ATK:
            battleLog.push('Player made an attack for ' + val + ' damage.');
            break;
        case PC_STRONG_ATK:
            battleLog.push('Player made a strong attack for ' + val + ' damage.');
            break;
        case PC_HEAL:
            battleLog.push('Player healed for ' + val + ' health.');
            break;
        case MONSTER_ATK:
            battleLog.push('Monster attacked for ' + val + ' damage.');
            break;
        case GAME_OVER:
            switch (val) {
                case PC_DEAD:
                    battleLog.push('The player was killed!');
                    break;
                case MONSTER_DEAD: 
                    battleLog.push('The monster was killed!');
                    break;
                case BOTH_DEAD:
                    battleLog.push('The player and monster have killed each other!');
                    break;
            }
            break;
    };
    //Keep the size of the log in check
    if (battleLog.length > BATTLELOG_SIZE) {
        battleLog.shift();
    }
}

const reset = () => {
    currentMonsterHealth = maxLife;
    currentPlayerHealth = maxLife;
    resetGame(maxLife);
    battleLog = [];
}

const playerAttack = (atkValue) => {
    const damage = dealMonsterDamage(atkValue);
    currentMonsterHealth -= damage;
    atkValue === ATTACK_VALUE ? writeToLog(PC_ATK, damage) : writeToLog(PC_STRONG_ATK, damage);

}

const monsterAttack = () => {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeToLog(MONSTER_ATK, playerDamage);
}

const endRound = (actionType) => {
    const initialPlayerHealth = currentPlayerHealth;
    monsterAttack();

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You should have died...but your divine blessing has saved you.')
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You are victorious!');
    } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
        alert('You have died...');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('The monster was slain, but you have died...');
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        if (currentPlayerHealth <= 0) {
            writeToLog(GAME_OVER, PC_DEAD);
        } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
            writeToLog(GAME_OVER, BOTH_DEAD);
        } else {
            writeToLog(GAME_OVER, MONSTER_DEAD);
        }
        reset();
    }
}

const attackHandler = () => {
    playerAttack(ATTACK_VALUE);
    endRound();
}

const strongAttackHandler = () => {
    playerAttack(STRONG_ATTACK_VALUE);
    endRound();
}

const healPlayerHandler = () => {

    if (currentPlayerHealth + HEAL_VALUE >= maxLife) {
        currentPlayerHealth = 100;
        increasePlayerHealth(100); 
        monsterAttack();
        writeToLog(PC_HEAL, maxLife - currentPlayerHealth);
        alert('You were fully healed.')
    } else {
        increasePlayerHealth(HEAL_VALUE);
        currentPlayerHealth += HEAL_VALUE;
        monsterAttack();
        writeToLog(PC_HEAL, HEAL_VALUE);
    }
    endRound();
}

const printLogHandler = () => {
    for (const el of battleLog) {
        console.log(el);
    }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);