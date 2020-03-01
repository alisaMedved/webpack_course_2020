// Метод EventTarget.addEventListener() регистрирует определенный обработчик события,
// вызванного на EventTarget.
//
// EventTarget должен быть либо существующим элементом в документе, либо Document,
// либо Window, либо любым другим объектом, который поддерживает события (такой, как XMLHttpRequest).

function createAnalitycs() {
    let counter = 0;
    let isDestroyed = false;

    const listener = () => counter ++;

    document.addEventListener('click', listener);

    return {
        destroy() {
            document.removeEventListener('click', listener);
            isDestroyed=true;
        },
        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed';
            }
            return counter;
        }
    }
}
window.analytics = createAnalitycs();
