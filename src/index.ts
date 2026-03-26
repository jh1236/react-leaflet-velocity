import {createElementObject, createLayerComponent, type LeafletContextInterface,} from "@react-leaflet/core";
import L from "leaflet";
import {type VelocityLayerProps} from "./types";


const createHeatLayer = (
    { ...options }: VelocityLayerProps,
    context: LeafletContextInterface
) => {
    const layer = L.velocityLayer(options);
    return createElementObject(layer, context);
};

const updateHeatLayer = (
    layer: L.VelocityLayer,
    { ...options }: VelocityLayerProps,
    prevProps: VelocityLayerProps
) => {
    return
};

export default createLayerComponent<L.VelocityLayer, VelocityLayerProps>(
    createHeatLayer,
    updateHeatLayer
);