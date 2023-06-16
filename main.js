
let users = [
    {email: "dioum95@gmail.com", password: 1092830},
    {email: "diop90@gmail.com", password: 1102850},
    {email: "fall91@gmail.com", password: 1112840},
    {email: "seck92@gmail.com", password: 1122820},
    {email: "amar93@gmail.com", password: 1132810},
    {email: "amar93@gmail.com", password: 1132810},
];
// Cette fonction supprime les doublons dans le tableau: users
function removeDuplicateObject(users) {
    // On déclare keys comme objets
    var keys = {};
    // On filtre tous les objets de users
    return users.filter(function(item) {
        //On convertit les objets en JSON
        var key = JSON.stringify();
        //Condition qui nous permet d'alerter et retourner false s'il
        // y'a des doublons dans users
        if (key in keys) {
            alert("Il y a une simularité");
            return false;
        }
        // On retourne true si l'objet ne se presente qu'une seule fois dans users
        keys[key] = 1;
        return true;
    });
}
console.log(removeDuplicateObject(users));
