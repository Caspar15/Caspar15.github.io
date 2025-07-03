// assets/js/modules/magic-cube.js

// A simple tweening function for smooth animations
function tween(start, end, duration, onUpdate, onComplete) {
    const startTime = performance.now();
    function animate(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easedProgress = progress * (2 - progress); // Ease-out quadratic
        const value = start + (end - start) * easedProgress;
        onUpdate(value);
        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            if (onComplete) onComplete();
        }
    }
    requestAnimationFrame(animate);
}

export function initMagicCube() {
    const container = document.getElementById('magic-cube-container');
    if (!container) return;

    // --- Cube Properties (Declared first to ensure availability) ---
    const pieceSize = 1;
    const gap = 0.08;
    const N = 3;
    const offset = (N - 1) / 2;
    const pieces = [];

    // --- Basic Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(4.5, 4.5, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Enable shadows
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 20, 15);
    directionalLight.castShadow = true; // Light casts shadows
    // Configure shadow camera for better quality
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);

    // --- Ground Plane for Shadows ---
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0xf0f0f0, roughness: 0.8, metalness: 0.1 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -pieceSize * 3.0; // Position below the cube (further adjusted)
    ground.receiveShadow = true; // Ground receives shadows
    scene.add(ground);

    // --- Cube Creation ---
    const cubeWrapper = new THREE.Group();
    scene.add(cubeWrapper);

    const rubiksCube = new THREE.Group();
    cubeWrapper.add(rubiksCube);

    const materials = {
        right:  new THREE.MeshStandardMaterial({ color: 0xB71C1C, roughness: 0.4, metalness: 0.05 }), // Red
        left:   new THREE.MeshStandardMaterial({ color: 0xFF6F00, roughness: 0.4, metalness: 0.05 }), // Orange
        top:    new THREE.MeshStandardMaterial({ color: 0xC0C0C0, roughness: 0.4, metalness: 0.05 }), // Silver
        bottom: new THREE.MeshStandardMaterial({ color: 0xFFD600, roughness: 0.4, metalness: 0.05 }), // Yellow
        front:  new THREE.MeshStandardMaterial({ color: 0x0D47A1, roughness: 0.4, metalness: 0.05 }), // Blue
        back:   new THREE.MeshStandardMaterial({ color: 0x1B5E20, roughness: 0.4, metalness: 0.05 }), // Green
        inner:  new THREE.MeshStandardMaterial({ color: 0x121212, roughness: 0.4, metalness: 0.05 })  // Dark gray
    };

    const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 }); // Black edges

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            for (let k = 0; k < N; k++) {
                if (i === 1 && j === 1 && k === 1) continue;

                const pieceGeometry = new THREE.BoxGeometry(pieceSize, pieceSize, pieceSize);
                const pieceMaterials = [
                    i === N - 1 ? materials.right : materials.inner,
                    i === 0     ? materials.left : materials.inner,
                    j === N - 1 ? materials.top : materials.inner,
                    j === 0     ? materials.bottom : materials.inner,
                    k === N - 1 ? materials.front : materials.inner,
                    k === 0     ? materials.back : materials.inner,
                ];

                const piece = new THREE.Mesh(pieceGeometry, pieceMaterials);
                piece.castShadow = true; // Each piece casts shadows
                piece.receiveShadow = true; // Each piece receives shadows from others

                // Add black edges
                const edges = new THREE.EdgesGeometry(pieceGeometry);
                const line = new THREE.LineSegments(edges, edgeMaterial);
                piece.add(line);

                const position = new THREE.Vector3(
                    (i - offset) * (pieceSize + gap),
                    (j - offset) * (pieceSize + gap),
                    (k - offset) * (pieceSize + gap)
                );
                piece.position.copy(position);
                rubiksCube.add(piece);
                pieces.push(piece);
            }
        }
    }

    // --- Animation Logic ---
    let isRotating = false;
    const pivot = new THREE.Group();
    rubiksCube.add(pivot);

    function rotateLayer(axis, layerIndex, direction) {
        if (isRotating) return;
        isRotating = true;

        pivot.rotation.set(0, 0, 0);
        pivot.updateMatrixWorld();

        const piecesToRotate = pieces.filter(p => Math.abs(p.position[axis] - layerIndex) < 0.1);

        piecesToRotate.forEach(piece => {
            pivot.attach(piece);
        });

        const targetAngle = (Math.PI / 2) * direction;
        
        tween(0, targetAngle, 300,
            (angle) => {
                pivot.rotation[axis] = angle;
            },
            () => {
                pivot.updateMatrixWorld();
                piecesToRotate.forEach(piece => {
                    rubiksCube.attach(piece);
                });
                isRotating = false;
            }
        );
    }

    // --- Fixed Scramble and Solve Sequence ---
    const layerCoord = (N - 1) / 2 * (pieceSize + gap);

    const scrambleSequence = [
        { axis: 'x', layer: layerCoord, dir: 1 },    // R
        { axis: 'y', layer: layerCoord, dir: 1 },    // U
        { axis: 'z', layer: layerCoord, dir: 1 },    // F
        { axis: 'x', layer: -layerCoord, dir: -1 },   // L'
        { axis: 'y', layer: -layerCoord, dir: -1 },   // D'
        { axis: 'z', layer: -layerCoord, dir: -1 },   // B'
        { axis: 'x', layer: layerCoord, dir: -1 },    // R'
        { axis: 'y', layer: layerCoord, dir: -1 },    // U'
        { axis: 'z', layer: layerCoord, dir: -1 },    // F'
        { axis: 'x', layer: -layerCoord, dir: 1 },    // L
        { axis: 'y', layer: -layerCoord, dir: 1 },    // D
        { axis: 'z', layer: -layerCoord, dir: 1 },    // B
        { axis: 'x', layer: layerCoord, dir: 1 },    // R
        { axis: 'y', layer: layerCoord, dir: 1 },    // U
        { axis: 'z', layer: layerCoord, dir: 1 },    // F
    ];

    const solveSequence = [
        { axis: 'z', layer: layerCoord, dir: -1 },   // F'
        { axis: 'y', layer: layerCoord, dir: -1 },   // U'
        { axis: 'x', layer: layerCoord, dir: -1 },    // R'
        { axis: 'z', layer: -layerCoord, dir: -1 },   // B'
        { axis: 'y', layer: -layerCoord, dir: -1 },   // D'
        { axis: 'x', layer: -layerCoord, dir: -1 },   // L'
        { axis: 'z', layer: layerCoord, dir: 1 },    // F
        { axis: 'y', layer: layerCoord, dir: 1 },    // U
        { axis: 'x', layer: layerCoord, dir: 1 },    // R
        { axis: 'z', layer: -layerCoord, dir: 1 },    // B
        { axis: 'y', layer: -layerCoord, dir: 1 },    // D
        { axis: 'x', layer: -layerCoord, dir: 1 },    // L
        { axis: 'z', layer: layerCoord, dir: -1 },   // F'
        { axis: 'y', layer: layerCoord, dir: -1 },   // U'
        { axis: 'x', layer: layerCoord, dir: -1 },    // R'
    ];

    let currentSequence = scrambleSequence;
    let currentMoveIndex = 0;
    let isScrambling = true;

    function performNextMove() {
        if (isRotating) return;

        if (currentMoveIndex < currentSequence.length) {
            const move = currentSequence[currentMoveIndex];
            rotateLayer(move.axis, move.layer, move.dir);
            currentMoveIndex++;
        } else {
            // Sequence completed, switch phase
            if (isScrambling) {
                isScrambling = false;
                currentSequence = solveSequence;
            } else {
                isScrambling = true;
                currentSequence = scrambleSequence;
            }
            currentMoveIndex = 0;
        }
    }

    setInterval(performNextMove, 1500);

    // --- Main Loop & Resize ---
    function animate() {
        requestAnimationFrame(animate);
        if (!isRotating) {
            cubeWrapper.rotation.y += 0.002;
            cubeWrapper.rotation.x += 0.001;
        }
        renderer.render(scene, camera);
    }
    animate();

    window.addEventListener('resize', () => {
        if (!container.clientWidth || !container.clientHeight) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}