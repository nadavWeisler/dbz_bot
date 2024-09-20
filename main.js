import {DBbot, generateBotFile} from '@gold-lab/dbbot';

const dbBot = new DBbot();

dbBot.botColor = "blue";
dbBot.userColor = "orange";

const details = {
    name: "DBZ Bot",
    description: "A bot that can answer questions about Dragon Ball Z",
};

dbBot.details = details;

const welcomeMessages = [];

let first_message = "Welcome to the DBZ Bot! I can answer questions about Dragon Ball Z. Ask me anything!";
welcomeMessages.push(first_message);

let second_message = "Well, not everything, just who stronger than who and when";
welcomeMessages.push(second_message);

const slots = {
    welcomeSlot: welcomeMessages
};

dbBot.slots = slots;

dbBot.loadFile("dbz.csv");

const nullValues = [null, "NA", NaN];
dbBot.fillNullValuesAll({
    numericValue: -1,
    stringValue: "FILL",
    nullValue: nullValues,
});

const whichSaga = {
    name: "WhichSaga",
    column: "Saga_or_Movie",
    dataType: "string",
    customFunction: function (cell, saga) {
        return cell.includes(saga);
    },
    params: [
        {
            name: "cell",
            dataType: "string",
        },
        {
            name: "saga",
            dataType: "string",
        },
    ],
};

dbBot.addCustomOperator(whichSaga);

generateBotFile(dbBot);
