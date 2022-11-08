export function load() {
    const preLoader = document.getElementById('load')
    if (preLoader) {
        setTimeout(() => {
            preLoader.style.display = 'none'
        }, 3000)
    }
}
