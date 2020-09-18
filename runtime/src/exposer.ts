import td from './tds/exposer.td.json';

WoT.produce(td).then(thing =>{
    thing.setPropertyReadHandler("canYouReadMe",async ()=> "Ok");
    thing.expose();
})