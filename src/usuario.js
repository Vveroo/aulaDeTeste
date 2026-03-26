function validarEmail(email){
    return email.includes('@') && email.includes('.com');
}
function criarUsuario(nome, email, senha){
    if(!validarEmail(email)){
        throw new Error('Email inválido');
    }

    return {
        id: Math.floor(Math.random()* 1000),
        nome, 
        email, 
        ativo: true, 
        criadoEm: new Date(), 
        senha
    };
}

module.exports = {validarEmail, criarUsuario};