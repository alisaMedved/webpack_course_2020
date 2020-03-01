// Метод EventTarget.addEventListener() регистрирует определенный обработчик события,
// вызванного на EventTarget.
//
// EventTarget должен быть либо существующим элементом в документе, либо Document,
// либо Window, либо любым другим объектом, который поддерживает события (такой, как XMLHttpRequest).

function createAnalitycs() {
    let counter = 0;
    let destroyed = false;

    const listener = () => counter ++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            destroyed=true;
        },
        getClicks() {
            if (destroyed) {
                return 'Analytics is destroyed. апоооооо';
            }
            return counter;
        }
    }
}
window.analytics = createAnalitycs();
