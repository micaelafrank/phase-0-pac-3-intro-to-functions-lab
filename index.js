function shout(string){
    const shoutedWord = string.toUpperCase();
    console.log(shoutedWord);
    return shoutedWord;
}

function whisper(string){
    const whisperedWord = string.toLowerCase();
    console.log("I love to whisper:", whisperedWord);
    return whisperedWord;
}


function logShout(string){
    console.log(string.toUpperCase());
}

function logWhisper(string){
    console.log(string.toLowerCase());
}

console.log(logWhisper("HELLO"));

function sayHiToHeadphonedRoommate(string){
    const whisperToRoommate = string.toLowerCase();
    const shoutToRoommate = string.toUpperCase();

    if (string === whisperToRoommate){
        console.log("I can't hear you!");
        return "I can't hear you!";
    } else if (string === shoutToRoommate){
        console.log("YES INDEED!");
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!");{
        console.log("I would love to!");
        return "I would love to!";
    }
}

sayHiToHeadphonedRoommate("Let's have dinner together!");