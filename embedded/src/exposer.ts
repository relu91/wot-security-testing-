import { HttpServer } from '@node-wot/binding-http';
import {Servient} from '@node-wot/core'
import td from './tds/exposer.td.json';


const servient = new Servient();

servient.addServer(new HttpServer());

servient.start().then( WoT =>{
    WoT.produce(td).then(thing => {
        thing.setPropertyReadHandler("canYouReadMe", async () => "Ok");
        thing.expose();
    })
})

