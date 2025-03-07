/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

import { COLORS } from "../helpers/colors.ts";

interface Ability {
    use(): void;
}

class SwordAttack implements Ability {
    use(): void {
        console.log('%cAtaca con una espada', COLORS.blue);
    }
}

class MagicSpell implements Ability {
    use(): void {
        console.log('%cLanza hechizo mágico poderoso', COLORS.green);
    }
}

class FireBallSpell implements Ability {
    use(): void {
        console.log('%cLanza hechizo de bola de fuego poderoso', COLORS.red);
    }
}
  

class AxeAttack implements Ability {
    use(): void {
        console.log('%cLanza ataque de hacha', COLORS.cyan);
    }
}

abstract class Character {
    protected ability: Ability;

    constructor(ability: Ability) {
        this.ability = ability;
    }

    setAbilitiy(ability: Ability): void {
        this.ability = ability;
    }

    abstract performAbility(): void;
}

class Warrior extends Character {
    override performAbility(): void {
        console.log('Guerrero listo para luchar');
        this.ability.use();
    }
}

class Wizard extends Character {
    override performAbility(): void {
        console.log('El mago está listo para hechizar');
        this.ability.use();
    }
}

function main() {
    const warrior = new Warrior(new SwordAttack());
    warrior.performAbility();

    warrior.setAbilitiy(new AxeAttack());

    warrior.performAbility();

    const wizard = new Wizard(new MagicSpell());

    wizard.performAbility();
}

main();