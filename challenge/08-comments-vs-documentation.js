// UNNECESSARY - Essa função tem o objetivo de registrar um novo usuário no banco.
// async function register(data) {
async function registerUserOnDatabase(data) {
    // UNNECESSARY - Desestrutura os dados recebidos.
    const { email, name, avatar } = data

    // UNNECESSARY - Verifica se o avatar foi informado.
    if (!avatar) return { error: 'avatar is required' }

    // UNNECESSARY Verifica se o nome foi informado.
    if (!name) return { error: 'name is required' }

    // UNNECESSARY - Essa função retorna o usuário a partir do email informado
    const userMail = getUserByEmail(email)

    // UNNECESSARY - Verificação se o email informado já foi utilizado por algum usuário.
    if (userMail) {
        return { error: 'email already used' }
    }

    // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
    const avatar2 = convertImageToJPG(avatar)

    // UNNECESSARY - Cria o usuário no banco de dados
    const user = await createUser({ email, name, avatar: avatar2 })

    return { user }
}