import { HttpClientFactory, HttpsClientFactory } from '@node-wot/binding-http';
import { Helpers, Servient } from '@node-wot/core'


const servient = new Servient();
servient.addClientFactory(new HttpsClientFactory());
servient.addClientFactory(new HttpClientFactory());

//TODO: add credentials

servient.start().then( async ( WoT) => {
    new Helpers(servient).fetch("http://localhost:8080/Exposer").then(async td => {
        const thing = await WoT.consume(td)
        try {
            const result = await thing.readProperty("canYouReadMe");
            console.log(result);

        } catch (error) {
            console.log("Not Authorized")
        }
    })
})


