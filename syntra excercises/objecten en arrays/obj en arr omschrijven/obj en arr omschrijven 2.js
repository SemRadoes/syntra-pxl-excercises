const getallen = [3, 1, 3, 2];
const eersteGetal = getallen[0];
getallen[0] = getallen[1];
getallen[1] = eersteGetal;

// de array getallen wordt geinitialiseerd
// de variabele eersteGetal wordt geinitialiseerd met waarde index 0 van array getallen
// 3 geeft een error
// 4 geeft een error
