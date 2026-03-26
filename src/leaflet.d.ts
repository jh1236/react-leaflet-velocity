import "leaflet"
import {VelocityLayerProps} from "./index";

declare module "leaflet" {
    interface VelocityLayer extends L.Layer {
    }

    export function velocityLayer({options}: VelocityLayerProps): L.Layer;

}