const userService = {
    login: checkUserLogin
    
}

function checkUserLogin(name, password) {
    if (name != null && password != null) {
        return getUser(name, password)
    }
    return null
}

function getUser(name, password) {
    if (name == 'gerant' && password == 'admin') {
        return {
            lastname: 'Bonnaud',
            firstname: 'Jean',
            role: 'gerant',
            email: 'dieudeslieux@monmail.com'
        }
    } else if (name == 'user1' && password == '123456') {
        return {
            lastname: 'Durand',
            firstname: 'Martine',
            role: 'client',
            email: 'clientefidele@monmail.com'
        }
    }
    return null;
}

module.exports = userService