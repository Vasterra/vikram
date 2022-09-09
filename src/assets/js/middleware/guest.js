export default ({ store, to, from, next }) => {
    
    if (!localStorage.getItem('user_token')) {
        next('/login');

        return false;
    }
    next()
}