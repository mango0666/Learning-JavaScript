let sammuAlguseks = 0;
        const kaugusSammudes = Number(prompt('Kui pika vahemaa läbid? (meetrites)'))
        const sammuPikkus = Number(prompt('Kui pikk samm Sul on? (meetrites)'));
        ///++ tähendab + 1
        for(let samm = sammuAlguseks; samm <= kaugusSammudes; samm = samm + sammuPikkus){
            console.log(alert("Läbitud on " + samm + " meetrit."));
        }
        alert("Oled kohal. Läbisid " + kaugusSammudes + " meetrit.")