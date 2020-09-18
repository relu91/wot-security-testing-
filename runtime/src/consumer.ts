WoTHelpers.fetch("http://localhost:8080/Exposer").then(async td => {
    const thing = await WoT.consume(td)
    try {
        const result = await thing.readProperty("canYouReadMe");
        console.log(result);

    } catch (error) {
        console.log("Not Authorized")
    }
})