const menuBtn = document.querySelector('.menu_btn');
const headerNavMobile = document.querySelector('.header_nav_mobile');
const btnCloseNav = document.querySelector('.btn_close_nav');
const navAbout = document.querySelector('.nav_about');
const navProgram = document.querySelector('.nav_program');
const navJoin = document.querySelector('.nav_join');
const navSponsor = document.querySelector('.nav_sponsor');
const speakerContainerCard = document.querySelector('.speaker_container_card');
const speakerBtn = document.querySelector('.speakers_btn');

const mediaqueryList = window.matchMedia('(max-width: 768px)');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.add('hidden');
  headerNavMobile.classList.remove('hidden');
});

btnCloseNav.addEventListener('click', () => {
  menuBtn.classList.remove('hidden');
  headerNavMobile.classList.add('hidden');
});

navAbout.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

navProgram.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

navJoin.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

navSponsor.addEventListener('click', () => {
  headerNavMobile.classList.add('hidden');
  menuBtn.classList.remove('hidden');
});

const dataSpeakers = [
  {
    id: 0,
    url: './images/speakers/1.png',
    name: 'Erin Gilmore',
    position:
    'Erin she/her,Yoga, but also: Pilates, dance, modern sages, autonomy, and nonviolent communication.That girl from Down Dog',
    description:
      'Practice w/me 👇🏼linktr.ee/eringilmore',
  },
  {
    id: 1,
    url: './images/speakers/2.png',
    name: 'Alexa Romano',
    position: 'BA & MA @Stanford Alumn.San Francisco, CA',
    description:
      'Anthropology | Ethics | Photography.  romanoalexa.com',
  },
  {
    id: 2,
    url: './images/speakers/3.png',
    name: 'Xinia Alderson',
    position: ' Kiwi Ashtangi | KPJAYI L2 Authorized Teacher by S.Jois. 📍NZ Summer',
    description:
      'Yoga + Moves + Travel | E-YT-500hr. xinyoga.co.nz',
  },
  {
    id: 3,
    url: './images/speakers/4.png',
    name: 'Lauriane Fargier',
    position:
      '🎙️French voice-over @lauriane.voixoff🧘 Certified 200H Hatha Yoga teacher⛰️ Nature lover',
    description:
    '📩 lauriane.fargier@gmail.com',
  },
  {
    id: 4,
    url: './images/speakers/5.png',
    name: 'Lena',
    position: 'come find me at @pranachronic.God is alive, Magic is afoot',
    description:
    'www.lena-jenschovar.de',
  },
  {
    id: 5,
    url: './images/speakers/6.png',
    name: 'Tina Louise',
    position: 'Yoga Instructor.Bachelors Degree,Business Administration.Federal University of Rio de Janeiro/Brazil',
    description:
      'Core Strengthening, Hatha, Viniyoga, Vinyasa Flow.Meditation, Pranayama, Private / Individual',
  },
];

const cardSpeaker = (index) => `
  <div class="speaker_c_img">
      <img src=${dataSpeakers[index].url} alt="speaker images ${dataSpeakers[index].name}">
  </div>
  <div class="speaker_c_content">
      <div class="speaker_c_name">
          <p>
              ${dataSpeakers[index].name}
          </p>
      </div>
      <div class="speaker_c_details">
          <p>
              ${dataSpeakers[index].position}
          </p>
      </div>
      <div class="speaker_c_description">
          <p>${dataSpeakers[index].description}</p>
      </div>
  </div>
  `;

const deployTwoSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 2; i++) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeaker(i);
    speakerContainerCard.appendChild(speaker);
  }
};

const deployAllSpeakers = () => {
  speakerContainerCard.innerHTML = ' ';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < dataSpeakers.length; i++) {
    const speaker = document.createElement('div');
    speaker.classList.add('speaker-card');
    speaker.innerHTML = cardSpeaker(i);
    speakerContainerCard.appendChild(speaker);
  }
};

speakerBtn.addEventListener('click', () => {
  const regex = /MORE/;
  const flag = regex.test(speakerBtn.textContent);
  if (flag) {
    speakerBtn.innerHTML = 'LESS <i class="a_chevron_up"></i>';
    deployAllSpeakers();
  } else {
    speakerBtn.innerHTML = 'MORE <i class="a_chevron_down"></i>';
    deployTwoSpeakers();
  }
});

const screenTest = (e) => {
  if (e.matches) {
    deployTwoSpeakers();
  } else {
    deployAllSpeakers();
  }
};

screenTest(mediaqueryList);

mediaqueryList.addListener(screenTest);