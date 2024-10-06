import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0x1b1e2b );
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BufferGeometry();

const positions = new Float32Array(
    [
        -0.5,   -0.5,   0.0,
        0.5,    -0.5,   0.0,
        0.0,    0.36,   0.0
    ]
);

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const colors = new Float32Array(
    [
        0, 1, 0,
        0, 0, 1,
        1, 0, 0
    ]
)

geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));


const material = new THREE.MeshBasicMaterial( {vertexColors: true} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 1.5;

function animate() {

	renderer.render( scene, camera );

}