// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(something = "go to the office") {
    return `This Monday, I will ${something}.`;
}

function wrapAdjective(flair = "*") {
    return function innerFunction(param = "special") {
    return `You are ${flair}${param}${flair}!`
}
    }
wrapAdjective("||")("a dedicated programmer");