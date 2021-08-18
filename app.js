import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';

const main = () => {

	const canvas = document.querySelector('#canvas');
	const renderer = new THREE.WebGLRenderer({ canvas });
	const loader = new THREE.TextureLoader();
	const scene = new THREE.Scene();

	const cameraConfig = {
		fov: 75,
		aspect: 2,
		near: 0.1,
		far: 5
	}

	const camera = new THREE.PerspectiveCamera( cameraConfig.fov, cameraConfig.aspect,
	cameraConfig.near, cameraConfig.far );

	camera.position.z = 2;


 

	// Geometry
	const geometry = new THREE.SphereGeometry( 1, 42, 26 );
	const material = new THREE.MeshBasicMaterial({
		// Texture
		map: loader.load('https://st2.depositphotos.com/2731675/6325/i/950/depositphotos_63254639-stock-photo-planet-earth-texture.jpg'),
	});

	
	
	const sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );
	renderer.render(scene, camera);

	function resizeRendererToDisplaySize(renderer) {
	    const canvas = renderer.domElement;
	    const width = canvas.clientWidth;
	    const height = canvas.clientHeight;
	    const needResize = canvas.width !== width || canvas.height !== height;
	    if (needResize) {
	      renderer.setSize(width, height, false);
	    }
	    return needResize;
  	}


	// function animate
    function render(time) {
    	time *= 0.001 - 0.0009;  // convert time to seconds


    	if (resizeRendererToDisplaySize(renderer)) {
	        const canvas = renderer.domElement;
	      	camera.aspect = canvas.clientWidth / canvas.clientHeight;
	      	camera.updateProjectionMatrix();
    	}

    	sphere.rotation.y = time;

   	 	renderer.render(scene, camera);

    	requestAnimationFrame(render);
  	}
  	requestAnimationFrame(render);
} 
main();
