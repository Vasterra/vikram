export default ({ store, to, from, next }) => {
    
    if (!localStorage.getItem('api_token')) {
        next('/login');

        return false;
    }
    next()
}