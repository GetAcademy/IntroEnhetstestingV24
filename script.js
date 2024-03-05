function translateText(text) {
    if (!text || typeof(text) != 'string' ) return '';
    let translatedText = '';
    for (let character of text) {
        translatedText += character;
        const lowChar = character.toLowerCase();
        const isConsonant = 'bcdfghjklmnpqrstvwxz'.includes(lowChar);
        if (isConsonant) {
            translatedText += 'o' + lowChar;
        }
    }
    return translatedText;
}

function formatHeader(text, startCount){
    const stars = '*'.repeat(startCount);
    return `${stars} ${text} ${stars}`;    
}
