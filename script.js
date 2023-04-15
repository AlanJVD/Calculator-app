const deleteLast = () => {
    let screenValue = document.getElementById('screen-input').value.toString();
    let newValue = screenValue.substring(0, screenValue.length - 1);
    if (document.getElementById('screen-input').value == 'Error' || document.getElementById('screen-input').value == 'NaN' || document.getElementById('screen-input').value == 'Infinity') {
        document.getElementById('screen-input').value = '';
    } else {
        document.getElementById('screen-input').value = newValue;
    }
}

const toggleSwitch = () => {
    if (document.getElementById('switch').value == 1) {
        const body = document.getElementsByTagName('body')[0];
        body.attributeStyleMap.clear();

        const title = document.getElementsByClassName('title-container')[0];
        title.attributeStyleMap.clear();

        const toggleSwitch = document.querySelector('input[type="range"]');
        toggleSwitch.attributeStyleMap.clear();

        const screen = document.getElementById('screen-input');
        screen.attributeStyleMap.clear();

        const keypad = document.getElementsByClassName('keypad-container')[0];
        keypad.attributeStyleMap.clear();

        const keys = document.getElementsByClassName('key');
        for (let index = 0; index < keys.length; index++) {
            const allKey = document.getElementsByClassName('key')[index];
            allKey.attributeStyleMap.clear();
        }

        const deleteButton = document.getElementsByClassName('delete')[0];
        deleteButton.attributeStyleMap.clear();

        const resetButton = document.getElementsByClassName('reset')[0];
        resetButton.attributeStyleMap.clear();

        const equalButton = document.getElementsByClassName('equal')[0];
        equalButton.attributeStyleMap.clear();

        const footer = document.getElementsByClassName('footer')[0];
        footer.attributeStyleMap.clear();

        const aTag = document.getElementsByTagName('a');
        for (let index = 0; index < aTag.length; index++) {
            const allA = document.getElementsByTagName('a')[index];
            allA.attributeStyleMap.clear();
        }

    } else if (document.getElementById('switch').value == 2) {
        const body = document.getElementsByTagName('body')[0];
        body.style.background = 'hsl(0, 0%, 90%)';

        const title = document.getElementsByClassName('title-container')[0];
        title.style.color = 'hsl(60, 10%, 19%)';

        const toggleSwitch = document.querySelector('input[type="range"]');
        toggleSwitch.style.background = 'hsl(0, 5%, 81%)';

        const screen = document.getElementById('screen-input');
        screen.style.background = 'hsl(0, 0%, 93%)';
        screen.style.color = 'hsl(60, 10%, 19%)';

        const keypad = document.getElementsByClassName('keypad-container')[0];
        keypad.style.background = 'hsl(0, 5%, 81%)';

        const keys = document.getElementsByClassName('key');
        for (let index = 0; index < keys.length; index++) {
            const allKey = document.getElementsByClassName('key')[index];
            allKey.style.background = 'hsl(45, 7%, 89%)';
            allKey.style.color = 'hsl(60, 10%, 19%)';
            allKey.style['boxShadow'] = '0 4px 0 hsl(35, 11%, 61%)';
        }

        const deleteButton = document.getElementsByClassName('delete')[0];
        deleteButton.style.background = 'hsl(185, 42%, 37%)';
        deleteButton.style['boxShadow'] = '0 4px 0 hsl(185, 58%, 25%)';
        deleteButton.style.color = 'hsl(0, 0%, 100%)';

        const resetButton = document.getElementsByClassName('reset')[0];
        resetButton.style.background = 'hsl(185, 42%, 37%)';
        resetButton.style['boxShadow'] = '0 4px 0 hsl(185, 58%, 25%)';
        resetButton.style.color = 'hsl(0, 0%, 100%)';

        const equalButton = document.getElementsByClassName('equal')[0];
        equalButton.style.background = 'hsl(25, 98%, 40%)';
        equalButton.style['boxShadow'] = '0 4px 0 hsl(25, 99%, 27%)';
        equalButton.style.color = 'hsl(0, 0%, 100%)';

        const footer = document.getElementsByClassName('footer')[0];
        footer.style.background = 'hsl(0, 5%, 81%)';
        footer.style.color = 'hsl(60, 10%, 19%)';

        const aTag = document.getElementsByTagName('a');
        for (let index = 0; index < aTag.length; index++) {
            const allA = document.getElementsByTagName('a')[index];
            allA.style.color = 'hsl(25, 98%, 40%)';
        }

    } else if (document.getElementById('switch').value == 3) {
        const body = document.getElementsByTagName('body')[0];
        body.style.background = 'hsl(268, 75%, 9%)';

        const title = document.getElementsByClassName('title-container')[0];
        title.style.color = 'hsl(52, 100%, 62%)';

        const toggleSwitch = document.querySelector('input[type="range"]');
        toggleSwitch.style.background = 'hsl(268, 71%, 12%)';

        const screen = document.getElementById('screen-input');
        screen.style.background = 'hsl(268, 71%, 12%)';
        screen.style.color = 'hsl(52, 100%, 62%)';

        const keypad = document.getElementsByClassName('keypad-container')[0];
        keypad.style.background = 'hsl(268, 71%, 12%)';

        const keys = document.getElementsByClassName('key');
        for (let index = 0; index < keys.length; index++) {
            const allKey = document.getElementsByClassName('key')[index];
            allKey.style.background = 'hsl(268, 47%, 21%)';
            allKey.style.color = 'hsl(52, 100%, 62%)';
            allKey.style['boxShadow'] = '0 4px 0 hsl(290, 70%, 36%)';
        }

        const deleteButton = document.getElementsByClassName('delete')[0];
        deleteButton.style.background = 'hsl(281, 91%, 25%)';
        deleteButton.style['boxShadow'] = '0 4px 0 hsl(285, 91%, 52%)';

        const resetButton = document.getElementsByClassName('reset')[0];
        resetButton.style.background = 'hsl(281, 91%, 25%)';
        resetButton.style['boxShadow'] = '0 4px 0 hsl(285, 91%, 52%)';

        const equalButton = document.getElementsByClassName('equal')[0];
        equalButton.style.background = 'hsl(176, 100%, 44%)';
        equalButton.style['boxShadow'] = '0 4px 0 hsl(177, 92%, 70%)';
        equalButton.style.color = 'hsl(198, 20%, 13%)';

        const footer = document.getElementsByClassName('footer')[0];
        footer.style.background = 'hsl(268, 71%, 12%)';
        footer.style.color = 'hsl(52, 100%, 62%)';

        const aTag = document.getElementsByTagName('a');
        for (let index = 0; index < aTag.length; index++) {
            const allA = document.getElementsByTagName('a')[index];
            allA.style.color = 'hsl(176, 100%, 44%)';
        }
    }
}

const equal = () => {
    try {
        if (document.calculator.screen.value != '') {
            document.calculator.screen.value = Math.round(eval(document.calculator.screen.value) * 10) / 10;
        }
    } catch (error) {
        document.calculator.screen.value = 'Error';
    }
}

const plus = () => {
    if (document.calculator.screen.value != '' && document.calculator.screen.value.toString().slice(-1) != '+' && document.calculator.screen.value.toString().slice(-1) != '-' && document.calculator.screen.value.toString().slice(-1) != '.' && document.calculator.screen.value.toString().slice(-1) != '/' && document.calculator.screen.value.toString().slice(-1) != '*') {
        document.calculator.screen.value += '+';
    }
}

const minus = () => {
    if (document.calculator.screen.value != '' && document.calculator.screen.value.toString().slice(-1) != '+' && document.calculator.screen.value.toString().slice(-1) != '-' && document.calculator.screen.value.toString().slice(-1) != '.' && document.calculator.screen.value.toString().slice(-1) != '/' && document.calculator.screen.value.toString().slice(-1) != '*') {
        document.calculator.screen.value += '-';
    }
}

const point = () => {
    if (document.calculator.screen.value != '' && document.calculator.screen.value.toString().slice(-1) != '+' && document.calculator.screen.value.toString().slice(-1) != '-' && document.calculator.screen.value.toString().slice(-1) != '.' && document.calculator.screen.value.toString().slice(-1) != '/' && document.calculator.screen.value.toString().slice(-1) != '*') {
        document.calculator.screen.value += '.';
    }
}

const division = () => {
    if (document.calculator.screen.value != '' && document.calculator.screen.value.toString().slice(-1) != '+' && document.calculator.screen.value.toString().slice(-1) != '-' && document.calculator.screen.value.toString().slice(-1) != '.' && document.calculator.screen.value.toString().slice(-1) != '/' && document.calculator.screen.value.toString().slice(-1) != '*') {
        document.calculator.screen.value += '/';
    }
}

const multiply = () => {
    if (document.calculator.screen.value != '' && document.calculator.screen.value.toString().slice(-1) != '+' && document.calculator.screen.value.toString().slice(-1) != '-' && document.calculator.screen.value.toString().slice(-1) != '.' && document.calculator.screen.value.toString().slice(-1) != '/' && document.calculator.screen.value.toString().slice(-1) != '*') {
        document.calculator.screen.value += '*';
    }
}