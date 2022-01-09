import { Game } from "phaser";
import { CustomScene } from "./scene";

export const Config = new Game({
    type: Phaser.AUTO,
    width: 2048,
    height: 1080,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: [
        CustomScene
    ]
});