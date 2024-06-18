export function sortHealth (players) {
    players.sort(function (a, b) {
        return b.health - a.health;
    });
    return players
};