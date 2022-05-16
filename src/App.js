import {
  interaction, layer, custom, control,Interactions, Overlays, Controls, Map, Layers, Overlay, Util
} from "react-openlayers";

function App() {
  return (
    <div>
     <Map view={{center:[36.823102996344026, -1.2884355721062337],zoom:12.5,maxZoom: 20,projection: 'EPSG:4326',}}>
      <Layers>
        <layer.Tile></layer.Tile>
      </Layers>
     </Map>
    </div>
  );
}

export default App;
