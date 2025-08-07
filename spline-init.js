// Spline 3D Scene Integration
import { Application } from 'https://unpkg.com/@splinetool/runtime@latest/build/runtime.js';

// Initialize Spline scene
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('canvas3d');
    if (canvas) {
        const app = new Application(canvas);
        app.load('https://prod.spline.design/kJoATiZn79gnuT3G/scene.splinecode')
            .then(() => {
                console.log('Spline scene loaded successfully');
                window.dispatchEvent(new Event('spline-loaded'));
            })
            .catch((error) => {
                console.error('Error loading Spline scene:', error);
            });
    }
});
