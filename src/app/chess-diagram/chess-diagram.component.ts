import {Component, Input, ViewChild, ElementRef} from '@angular/core';

import * as BABYLON from 'babylonjs';


@Component({
    selector: 'chess-diagram',
    templateUrl: './chess-diagram.component.html',
    styleUrls: ['./chess-diagram.component.css']
})

export class ChessDiagram {
    private _size: number;

    // get the element with the #chessCanvas on it
    @ViewChild("chessCanvas") chessCanvas: ElementRef; 

    constructor(){
        this._size = 850;
    }

    ngAfterViewInit() { // wait for the view to init before using the element

      let canvas: HTMLCanvasElement = this.chessCanvas.nativeElement;
      var engine = new BABYLON.Engine(canvas, true);

      var scene =this.createScene(engine,canvas)

      engine.runRenderLoop(function () {
         scene.render();
      });


    }

    get size(){
        return this._size;
    }

    @Input () set size(newValue: number){
        this._size = Math.floor(newValue);
    }

    createScene(engine,canvas){
        var scene = new BABYLON.Scene(engine);
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
         // This targets the camera to scene origin
         camera.setTarget(BABYLON.Vector3.Zero());
         // This attaches the camera to the canvas
         camera.attachControl(canvas, false);
         // This creates a light, aiming 0,1,0 - to the sky.
         var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
         // Dim the light a small amount
         light.intensity = .5;
         // Let's try our built-in 'sphere' shape. Params: name, subdivisions, size, scene
         var sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
         // Move the sphere upward 1/2 its height
         sphere.position.y = 1;
         // Let's try our built-in 'ground' shape. Params: name, width, depth, subdivisions, scene
         var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
         return scene
    }


}