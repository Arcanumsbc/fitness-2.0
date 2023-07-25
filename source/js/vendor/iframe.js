// iframe

const setupVideo = (video) => {
  const link = video.querySelector('a');
  const media = video.querySelector('img');
  const button = video.querySelector('button');
  const wrapper = video.querySelector('.media__wrapper');

  video.addEventListener('click', () => {
    const iframe = createIframe();
    link.remove();
    button.remove();
    media.remove();
    wrapper.appendChild(iframe);
  });
  video.setAttribute('data-video', 'is-enabled');
  link.removeAttribute('href');
};

const createIframe = () => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('title', 'YouTube player');
  iframe.style.width = '364';
  iframe.style.height = '228';
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1');

  return iframe;
};

const videoIntro = document.querySelector('.media__video');

setupVideo(videoIntro);

export {createIframe};
