function isAuthorizedUser(users){
    return function(userId) {
        return users.includes(userId);
    };
}