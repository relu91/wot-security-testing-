# Node-wot security testing 
this repository can be used as a test bed for node-wot security. Node-wot can be used in two modes: `embedded` or `runtime`.
For each mode you can find the corresponding project folder. 


# Credentials 
node-wot accept a credential object as a configuration. This object has for keys the ID of the target Web Thing and as value the credential parameters. For example:
```js
{   
    // Other parameters
    "urn:dev:thing:123":{
        name: "test",
        password: "test"
    }
}
```
*Note*: in the latest release `node-wot`also accepts an array of credentials, but it is not well tested yet. 

## Examples of credentials

### basic
```json
{
    name: "test",
    password: "test"
}
```
### bearer
```json
{
    token:"test"
}
```

### API key
```json
{
    apiKey: "test"
}   
```

### OAuth
```json
{
    clientId: "test",
    clientSecrete: "test"
}   
```

## Other resources
- [Node-wot binding http readme](https://github.com/eclipse/thingweb.node-wot/tree/9f519b6f84e5c9a90a31e739d5c1da551708602d/packages/binding-http)