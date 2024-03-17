import { useEffect, useRef } from "react";
import Modal_ from "../../modal"
import 'ol/ol.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import { Icon , Style } from 'ol/style';

import mark from '../../../image/marker-icon.png'


const MapUserModal = ({show, handlerClose}) => {

    const mapTarget = useRef();

    useEffect(() => {

        const osmLayer = new TileLayer({
            source: new OSM(),
            preload: Infinity,
        });
    
        const map = new Map({
            target: mapTarget.current,
            layers: [osmLayer],
            view: new View({
                center: fromLonLat([51.404343, 35.715298]),
                zoom: 15,
            }),
        });
    
        const pointFeature = new Feature(new Point(fromLonLat([51.404343, 35.715298])));

        const markerStyle = new Style({
            image: new Icon({
                src: mark,
                anchor: [0.5,1],
                scale: 1
            })
        })

        pointFeature.setStyle(markerStyle)
        const vectorLayer = new VectorLayer({
            source: new VectorSource({
                features: [pointFeature]
            })
        })
        map.addLayer(vectorLayer)

        return () => map.setTarget(null);
    }, [show]);
    

    return (
        <Modal_ show={show} handlerClose={handlerClose} title={'نقشه'}>
            <div ref={mapTarget} style={{ width: '100%', height: '400px'}}></div>
        </Modal_>
    )
}

export default MapUserModal