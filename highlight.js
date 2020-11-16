const url = window.location.href;

if (url.indexOf('dashboard.') < 0 ) {
    setInterval(() => {
        const videos = document.getElementsByTagName('video');
        for (let i = 0; i < videos.length; i++) {
            if (videos.length > 2
                && videos[i].parentElement
                && videos[i].parentElement.childNodes
                && videos[i].parentElement.childNodes.length <= 2) {
                const button = document.createElement('button');
                button.textContent = 'x';
                button.classList.add('chrome-extension-button');
                button.onclick = function(e) {
                    e.stopPropagation();
                    if (button.classList.contains('highlight')) {
                        button.classList.remove('highlight');
                    } else {
                        button.classList.add('highlight');
                    }
                };
                console.log('highlight button added')
                videos[i].parentElement.appendChild(button);
            }
        }
    }, 5000)
}
