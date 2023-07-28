import banks from './assets/banks.json'

const getLogoUrl = (dynamicPart) => {
    for (let bank of banks) {
        if (bank.code === dynamicPart) {
            return bank.logo
        }
    }
}

const elements = document.querySelectorAll('[class^="nbi nbi-"]');

elements.forEach((element) => {
    const classes = element.className.split(' ');
    const dynamicPartClass = classes.find((className) => className.startsWith('nbi-'));

    if (dynamicPartClass === undefined || dynamicPartClass === '') return
    const dynamicPart = dynamicPartClass.replace('nbi-', '');

    const url = getLogoUrl(dynamicPart)
    element.style.backgroundImage = `url('${url}')`;
});
