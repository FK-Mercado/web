import { routePath } from "./routes.js";

export async function renderRoute() {
    const path = location.hash.slice(1) || '/';
    const app = document.getElementById('app');
    
    const route = routePath[path] || routePath['*'];
    if (route === routePath['*'] && path !== '*') {
        console.log('Route not found, redirecting to 404');
        location.hash = '*';
        return;
    }

     // 🔹 Cambiar el título dinámicamente
    document.title = route.title || 'Física';

    app.innerHTML = route.view;

    if (route.logic) {
        const module = await route.logic();
        requestAnimationFrame(() => {
            try {
                module.init?.();
            } catch (e) {
                console.error('Error initializing route logic:', e);
            }
        });
    }
}
