const userProfile = {
    name: "Mariana Lara",
    height: 160,
    hasTicket: true,
};

const minimalNecessaryHeight = 130;

const currentHour = new Date().getHours();

const parkHasOpen = currentHour > 9 && currentHour < 18;

if (!parkHasOpen) {
    throw new Error("O parque está fechado!");
}

const userHasTicked = userProfile.hasTicket;

if (!userHasTicked) {
    throw new Error(`${userProfile.name} não possui um bilhete para entrar no parque!`);
}

const hasPermissionToEnterToy = userProfile.height > minimalNecessaryHeight;

if (!hasPermissionToEnterToy) {
    throw new Error(`${userProfile.name} não pode entrar no brinquedo!`);
}

console.log(`${userProfile.name} se divertiu muito! :)`);
