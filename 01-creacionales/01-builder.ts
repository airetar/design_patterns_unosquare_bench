/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

import { COLORS } from "../helpers/colors.ts";

class Computer {
    public cpu: string = 'cpu - not defined';
    public ram: string = 'ram - not defined';
    public storage: string = 'storage - not defined';
    public gpu?: string;

    displayConfiguration() {
        console.log(`Configuración de la computadora
        CPU: ${ this.cpu }
        RAM: ${ this.ram }
        STORAGE: ${ this.storage }
        GPU: ${ this.gpu ? this.gpu : 'Sin gpu asignada' }
        `);
    }
}

class ComputerBuilder {
    private computer: Computer;

    constructor() {
        this.computer = new Computer();
    }

    setCPU(cpu: string): ComputerBuilder {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM ( ram: string ): ComputerBuilder {
        this.computer.ram = ram;
        return this;
    }

    setStorage ( storage: string ): ComputerBuilder {
        this.computer.storage = storage;
        return this;
    }

    setGPU ( gpu: string ): ComputerBuilder {
        this.computer.gpu = gpu;
        return this;
    }

    build() {
        return this.computer;
    }
}

function main() {
    const basicComputer: Computer = new ComputerBuilder()
        .setCPU('Intel core 2 duo')
        .setRAM('4 GB')
        .setStorage(' 1 TB')
        .build();
    
        console.log('%cComputadora básica:', COLORS.blue);
        basicComputer.displayConfiguration();

    const gamingComputer: Computer = new ComputerBuilder()
        .setCPU('Intel i9')
        .setRAM('32 GB')
        .setStorage('2 TB')
        .build();
    console.log('%cComputadora Gamer:', COLORS.green);
    gamingComputer.displayConfiguration();
}

main();