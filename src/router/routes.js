import home from '../views/home.html?raw';
import notFound from '../views/404.html?raw';
import unidadI from '../views/unidadI.html?raw';
import unidadII from '../views/unidadII.html?raw';
import unidadIII from '../views/unidadIII.html?raw';
import tema1 from '../views/tema1.html?raw';
import tema2 from '../views/tema2.html?raw';
import tema3 from '../views/tema3.html?raw';
import tema4 from '../views/tema4.html?raw';
import tema5 from '../views/tema5.html?raw';
import tema6 from '../views/tema6.html?raw';
import tema7 from '../views/tema7.html?raw';
import tema8 from '../views/tema8.html?raw';
import tema9 from '../views/tema9.html?raw';
import tema10 from '../views/tema10.html?raw';
import tema11 from '../views/tema11.html?raw';
import tema12 from '../views/tema12.html?raw'
import tema13 from '../views/tema13.html?raw'

export const routePath = {
    '/': {
        view: home,
        logic: () => import('../logic/home.js'),
        title: 'Inicio | Física Radiologica'
    },
    '/unidadI': {
        view: unidadI,
        logic: () => import('../logic/unidadI.js'),
        title: 'Unidad I | Física Radiologica'
    },
    '/unidadII': {
        view: unidadII,
        logic: () => import('../logic/unidadII.js'),
        title: 'Unidad II | Física Radiologica'
    },
    '/unidadIII': {
        view: unidadIII,
        logic: () => import('../logic/unidadIII.js'),
        title: 'Unidad III | Física Radiologica'
    },
    '/tema1': {
        view: tema1,
        logic: () => import('../logic/tema1.js'),
        title: 'Tema 1 | Física Radiologica'
    },
    '/tema2': {
        view: tema2,
        logic: () => import('../logic/tema2.js'),
        title: 'Tema 2 | Física Radiologica'
    },
    '/tema3': {
        view: tema3,
        logic: () => import('../logic/tema3.js'),
        title: 'Tema 3 | física Radiologica'
    },
    '/tema4': {
        view: tema4,
        logic: () => import('../logic/tema4.js'),
        title: 'Tema 4 | Física Radiologica'
    },
    '/tema5': {
        view: tema5,
        logic: () => import('../logic/tema5.js'),
        title: 'Tema 5 | Física Radiologica'
    },
    '/tema6': {
        view: tema6,
        logic: () => import('../logic/tema6.js'),
        title: 'Tema 6 | Física Radiologica'
    },
    '/tema7': {
        view: tema7,
        logic: () => import('../logic/tema7.js'),
        title: 'Tema 7 | Física Radiologica'
    },
    '/tema8': {
        view: tema8,
        logic: () => import('../logic/tema8.js'),
        title: 'Tema 8 | Física Radiologica'
    },
    '/tema9': {
        view: tema9,
        logic: () => import('../logic/tema9.js'),
        title: 'Tema 9 | Física Radiologica'
    },
    '/tema10': {
        view: tema10,
        logic: () => import('../logic/tema10.js'),
        title: 'Tema 10 | Física Radiologica'
    },
    '/tema11': {
        view: tema11,
        logic: () => import('../logic/tema11.js'),
        title: 'Tema 11 | Física Radiologica'
    },
    '/tema12': {
        view: tema12,
        logic: () => import('../logic/tema12.js'),
        title: 'Tema 12 | Física Radiologica'
    },
    '/tema13': {
        view: tema13,
        logic: () => import('../logic/tema13.js'),
        title: 'Tema 13 | Física Radiologica'
    },
    '*': {
        view: notFound,
        logic: () => import('../logic/404.js'),
        title: '404 | Not Found'
    },
};