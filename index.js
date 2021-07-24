//Script decompiler: https://github.com/njames93/GTA-V-Script-Decompiler;
//1.54 Scripts: https://github.com/Sainan/GTA-V-Decompiled-Scripts/tree/master/scripts;
var qrfJNdtvAUHkEGCXtzIOwEPUfgDfMjOYVX = require('fs');
var wwjWXtFzaotZEunbsXloBzR = require('lazy');
const { lnbWjroVyBPDrmWdvnXCWUmwzsqxZKmQKN } = require('process');

/* Value to edit: */
var source = __dirname + "/example/plz_zu_ort.csv";//Your .csv file
var target = "./example/SQLtable.sql";//Outputfile
var begin = 0;//Line to start search
var end = 999999;//Line to end search
var TableName = "city_data";
var TableData = [
    ["osm_id", "int(255) NOT NULL", "int"],
    ["ort", "varchar(255) NOT NULL", "string"],
    ["plz", "int(255) NOT NULL", "int"],
    ["bundesland", "varchar(255) NOT NULL", "string"]
];

var pNfapIpORPLsrfngoqyAogUJQwPdOLVLnPXhiBi = require('readline').createInterface({
    input: require('fs').createReadStream(source)//Program start reading 'source'
});

var ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF = 0;//Lines searched between: 'begin'-'end'
var DbmSeJEKUiNnORJqSRxDqBjLNMW = 0;//Ammount of found RemoteID's
var HjQPmdCboQgtmwOysNesaToOvhz = false;//Checks if there is even 1 RemoteID found
var ShNbZubnGEFPVGeGNASKTabcJr = [];//...

function piOdUIKvqhNgtJfhUsbTKeWkDmERpGfcBAjwkN(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

var imfHiXZxDKUOTFeBKBzjkgiMuIriHb = false;
wlxejAqEOXccGuvGlgNLXxWbNLDsj = () => {
    for (var x = 0; x < TableData.length; x++) {
        ShNbZubnGEFPVGeGNASKTabcJr.push([TableData[x][2]]);
    }   

    console.table(ShNbZubnGEFPVGeGNASKTabcJr);
    imfHiXZxDKUOTFeBKBzjkgiMuIriHb = true;
    return
}

pNfapIpORPLsrfngoqyAogUJQwPdOLVLnPXhiBi.on('line', function (line) {
    if (!imfHiXZxDKUOTFeBKBzjkgiMuIriHb) {
        wlxejAqEOXccGuvGlgNLXxWbNLDsj();
    }

    if (ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF >= begin && ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF <= end) {

        var amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH = line.split(",");
        if (ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF == 0) {
            console.log(amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH[0], amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH[1], amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH[2], amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH[3]);
            if (TableData.length != amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH.length) {
                console.log("Error: TableData Array doesn't match .csv Array")
                lnbWjroVyBPDrmWdvnXCWUmwzsqxZKmQKN(0);
            } else {
                console.log("Passed");
            }
            ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF++;
            return;//Jump the first line
        }



        for (var x = 0; x < ShNbZubnGEFPVGeGNASKTabcJr.length; x++) {
            if (ShNbZubnGEFPVGeGNASKTabcJr[x][0] == "string") {
                ShNbZubnGEFPVGeGNASKTabcJr[x].push("'" + amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH[x] + "'");
            } else if (ShNbZubnGEFPVGeGNASKTabcJr[x][0] == "int") {
                ShNbZubnGEFPVGeGNASKTabcJr[x].push(amZxmcwqgijDKYhwQmklPNEeLSqdZYjAVFYMEaNH[x]);
            }
        }

        DbmSeJEKUiNnORJqSRxDqBjLNMW++;
        if (!HjQPmdCboQgtmwOysNesaToOvhz) {
            HjQPmdCboQgtmwOysNesaToOvhz = true;
        }
    }
    ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF++;
});

//Output a array to copy in C++->Bruteforce all possible RemoteID's via. trigger_script_event
OQzHiUByezwArojNzWGPyCjYRyrAOmEVhWhg = () => {
    var gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT = "--\n-- Automatic Table generation...\n--\n\nCREATE TABLE `" + TableName + "` (\n";
    for (var x = 0; x < TableData.length; x++) {
        gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += "\t`" + TableData[x][0] + "` " + TableData[x][1];
        if (x != TableData.length - 1) {
            gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += ",\n";
        } else {
            gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += "\n";
        }
    }

    gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += ") ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;";
    return gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT;
}

RmcMPjgMIMtSEJQZnSqjxPrwVmyTAjjbeblnTWOJC = () => {
    var gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT = "INSERT INTO `" + TableName + "` (";

    for (var x = 0; x < TableData.length; x++) {
        gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += "`" + TableData[x][0] + "`";
        if (x != TableData.length - 1) {
            gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += ",";
        }
    }

    gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += ") VALUES\n";


    for (var x = 1; x < DbmSeJEKUiNnORJqSRxDqBjLNMW; x++) {
        var bVyEIJBDlLDiCYFKobZlKmQ = "(";
        for (var y = 0; y < ShNbZubnGEFPVGeGNASKTabcJr.length; y++) {
            bVyEIJBDlLDiCYFKobZlKmQ += ShNbZubnGEFPVGeGNASKTabcJr[y][x]
            if (y != ShNbZubnGEFPVGeGNASKTabcJr.length - 1) {
                bVyEIJBDlLDiCYFKobZlKmQ += ", "
            }
        }
        if (x != DbmSeJEKUiNnORJqSRxDqBjLNMW - 1) {
            bVyEIJBDlLDiCYFKobZlKmQ += "),\n"
        } else {
            bVyEIJBDlLDiCYFKobZlKmQ += ");"
        }
        gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT += bVyEIJBDlLDiCYFKobZlKmQ;
    }

    return gYGbgHeGmydVtATdMggfPQdIZqguvBSLEfT;
}

uuDMgZjlOgmIvCWdKYxtDNkFEPFTCTFhJJTFXOYoLQQE = () => {
    var uTVUUbbZXxrOGxcLIIaViyQl = '-- Table generated by WlanKabL\n\nSET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";\nSET time_zone = "+00:00";\n\n';
    uTVUUbbZXxrOGxcLIIaViyQl += OQzHiUByezwArojNzWGPyCjYRyrAOmEVhWhg() + "\n\n--\n-- Data for the Table: " + TableName + "\n--\n\n";
    var zVyAqbOVGSbbmasyJhuxyXmKop = uTVUUbbZXxrOGxcLIIaViyQl;

    zVyAqbOVGSbbmasyJhuxyXmKop += RmcMPjgMIMtSEJQZnSqjxPrwVmyTAjjbeblnTWOJC();
    zVyAqbOVGSbbmasyJhuxyXmKop += "\n\n--\n-- Number of values in table:\n-- " + DbmSeJEKUiNnORJqSRxDqBjLNMW + "\n--";
    return zVyAqbOVGSbbmasyJhuxyXmKop;
}

//End of Programm. All lines of 'source' got readed
pNfapIpORPLsrfngoqyAogUJQwPdOLVLnPXhiBi.on("close", function () {
    console.log("File searched: " + source);
    if (HjQPmdCboQgtmwOysNesaToOvhz) {
        console.log("Searched Lines: " + ydLKbmGoWyyjKamUPdjqixPOatOsSyEUiJCBMNF);
        console.log("Searched between: " + begin + " and " + end);
        console.log("Found Values's for Table: " + DbmSeJEKUiNnORJqSRxDqBjLNMW);
    } else {
        console.log("ERROR: Searchrequest not found!");
        lnbWjroVyBPDrmWdvnXCWUmwzsqxZKmQKN(0);
    }

    qrfJNdtvAUHkEGCXtzIOwEPUfgDfMjOYVX.writeFile(target, uuDMgZjlOgmIvCWdKYxtDNkFEPFTCTFhJJTFXOYoLQQE(), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
})