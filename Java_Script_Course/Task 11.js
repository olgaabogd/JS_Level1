function replaceSpacesToUnderscores(text) {
    return text.split(' ').join('_')
}

console.log(replaceSpacesToUnderscores('I love JavaScript!'));
