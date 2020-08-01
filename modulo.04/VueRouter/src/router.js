import Vue from 'vue';
import Router from 'vue-router';
import Portada from './components/Portada';
import Sobremi from './components/Sobremi';
import Contacto from './components/Contacto';
import Post from './components/Post';
import NotFound from './components/NotFound';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            component: Portada
        },
        {
            path: '/sobremi',
            component: Sobremi
        },
        {
            path: '/contacto',
            component: Contacto
        },
        {
            path: '/post/:id',
            component: Post
        },
        {
            path: '*',
            component: NotFound
        },
    ]
})