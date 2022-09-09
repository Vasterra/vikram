export default ({ store, to, from, next }) => {
    
    if (localStorage.getItem('user_token')) {
        next('/');

        return false;
    }
    next()
}