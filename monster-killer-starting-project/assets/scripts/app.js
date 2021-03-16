/*
    Simple app that allows the player to attack a monster and get damaged.
*/

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

// Initialize health bars.
let maxLife = 100;
let currentMonsterHealth = maxLife;
let currentPlayerHealth = maxLife;
let hasBonusLife = true;

adjustHealthBars(maxLife);

const playerAttack = (atkValue) => {
    const damage = dealMonsterDamage(atkValue);
    currentMonsterHealth -= damage;
}

const monsterAttack = () => {
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
}

const endRound = (actionType) => {
    const initialPlayerHealth = currentPlayerHealth;
    monsterAttack();

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert('You would have died...but your divine blessing has saved you.')
        setPlayerHealth(initialPlayerHealth);
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You are victorious!');
    } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0) {
        alert('You have died...');
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert('The monster was slain, but so are you...');
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
        alert('You were fully healed.')
    } else {
        increasePlayerHealth(HEAL_VALUE);
        currentPlayerHealth += HEAL_VALUE;
        monsterAttack();
    }
    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);