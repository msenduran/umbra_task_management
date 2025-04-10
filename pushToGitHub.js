// pushToGitHub.js

const simpleGit = require('simple-git');
const git = simpleGit();

async function pushToGitHub() {
  try {
    // Yerel repoyu başlatıyoruz (init)
    await git.init();

    // Mevcut remote'ları alalım
    const remotes = await git.getRemotes();
    const originExists = remotes.find(r => r.name === 'origin');

    // Halihazırda origin varsa URL'yi güncelleyelim, yoksa ekleyelim.
    if (originExists) {
      console.log('Remote origin zaten var. URL güncelleniyor...');
      await git.remote(['set-url', 'origin', 'https://github.com/msenduran/umbra_task_management.git']);
    } else {
      await git.addRemote('origin', 'https://github.com/msenduran/umbra_task_management.git');
    }

    // Tüm dosyaları ekleyip commit yapıyoruz.
    await git.add('.');
    await git.commit('İçerik güncellendi');

    // Force push ile değişiklikleri uzak repoya gönderiyoruz.
    await git.push(['--force', 'origin', 'main']);  // Eğer repoda "master" dalı varsa 'main' yerine 'master' kullanın

    console.log('Dosyalar force push ile başarıyla güncellendi!');
  } catch (error) {
    console.error('Push işlemi sırasında hata oluştu:', error);
  }
}

pushToGitHub();
