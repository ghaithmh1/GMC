import Players from './players';
import Player from './Player';
function PlayersList() {
    const playerObject = Players.map(element => <Player {...element} />);
    return playerObject;

}
export default PlayersList;