document.addEventListener('DOMContentLoaded', function() {
    const androidSection = document.getElementById('android-section');
    const iosSection = document.getElementById('ios-section');

    // Função para detectar o sistema operacional
    function detectOS() {
        const userAgent = window.navigator.userAgent.toLowerCase();
        const isAndroid = userAgent.indexOf('android') > -1;
        const isIOS = /iphone|ipad|ipod/.test(userAgent);

        if (isAndroid) {
            // Para desktop ou outros dispositivos, mostrar a seção Android
            androidSection.style.display = 'block';
            iosSection.style.display = 'none';
            // Redirecionar para a Google Play Store para dispositivos Android
            window.open('https://play.google.com/store/apps/details?id=com.cafezao.computacao', '_blank');
        } else if (isIOS) {
            androidSection.style.display = 'none';
            iosSection.style.display = 'block';
        } else {
            // Para desktop ou outros dispositivos, mostrar a seção Android
            androidSection.style.display = 'block';
            iosSection.style.display = 'none';
        }
    }

    // Executar a detecção quando a página carregar
    detectOS();
}); 