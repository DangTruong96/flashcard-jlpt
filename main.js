const DATA = {
  N3: {
    "Bài 1": [
      { ja: "時間（じかん）", vi: "Thời gian", ex: "時間がありません。", ex_vi: "Tôi không có thời gian.", furigana: "<ruby>時間<rt>じかん</rt></ruby>", audio: "jikan.mp3" },
      { ja: "秒（びょう）", vi: "Giây", ex: "あと五秒で始まります。", ex_vi: "Sẽ bắt đầu sau 5 giây nữa.", furigana: "<ruby>秒<rt>びょう</rt></ruby>", audio: "byou.mp3" },
      { ja: "予定（よてい）", vi: "Kế hoạch", ex: "明日の予定は何ですか？", ex_vi: "Kế hoạch ngày mai là gì?", furigana: "<ruby>予定<rt>よてい</rt></ruby>", audio: "yotei.mp3" },
      { ja: "機会（きかい）", vi: "Cơ hội", ex: "その機会を逃さないで。", ex_vi: "Đừng bỏ lỡ cơ hội đó.", furigana: "<ruby>機会<rt>きかい</rt></ruby>", audio: "kikai.mp3" },
      { ja: "準備（じゅんび）", vi: "Chuẩn bị", ex: "旅行の準備をします。", ex_vi: "Tôi chuẩn bị cho chuyến du lịch.", furigana: "<ruby>準備<rt>じゅんび</rt></ruby>", audio: "junbi.mp3" },
      { ja: "解決（かいけつ）", vi: "Giải quyết", ex: "問題を解決しました。", ex_vi: "Tôi đã giải quyết vấn đề.", furigana: "<ruby>解決<rt>かいけつ</rt></ruby>", audio: "kaiketsu.mp3" },
      { ja: "影響（えいきょう）", vi: "Ảnh hưởng", ex: "天気が気分に影響します。", ex_vi: "Thời tiết ảnh hưởng đến tâm trạng.", furigana: "<ruby>影響<rt>えいきょう</rt></ruby>", audio: "eikyou.mp3" },
      { ja: "希望（きぼう）", vi: "Hy vọng", ex: "未来に希望を持ちます。", ex_vi: "Tôi hy vọng vào tương lai.", furigana: "<ruby>希望<rt>きぼう</rt></ruby>", audio: "kibou.mp3" },
      { ja: "条件（じょうけん）", vi: "Điều kiện", ex: "その条件を受け入れます。", ex_vi: "Tôi chấp nhận điều kiện đó.", furigana: "<ruby>条件<rt>じょうけん</rt></ruby>", audio: "jouken.mp3" },
      { ja: "結果（けっか）", vi: "Kết quả", ex: "試験の結果が良いです。", ex_vi: "Kết quả kỳ thi rất tốt.", furigana: "<ruby>結果<rt>けっか</rt></ruby>", audio: "kekka.mp3" }
    ]
  },
  N4: {
    "Bài 1": [
      { ja: "学生（がくせい）", vi: "Học sinh", ex: "私は学生です。", ex_vi: "Tôi là học sinh.", furigana: "<ruby>学生<rt>がくせい</rt></ruby>", audio: "gakusei.mp3" },
      { ja: "先生（せんせい）", vi: "Giáo viên", ex: "先生は優しいです。", ex_vi: "Giáo viên rất tốt.", furigana: "<ruby>先生<rt>せんせい</rt></ruby>", audio: "sensei.mp3" },
      { ja: "会社（かいしゃ）", vi: "Công ty", ex: "父は会社で働きます。", ex_vi: "Bố tôi làm việc ở công ty.", furigana: "<ruby>会社<rt>かいしゃ</rt></ruby>", audio: "kaisha.mp3" },
      { ja: "友達（ともだち）", vi: "Bạn bè", ex: "友達と遊びます。", ex_vi: "Tôi chơi với bạn bè.", furigana: "<ruby>友達<rt>ともだち</rt></ruby>", audio: "tomodachi.mp3" },
      { ja: "家（いえ）", vi: "Nhà", ex: "家に帰ります。", ex_vi: "Tôi về nhà.", furigana: "<ruby>家<rt>いえ</rt></ruby>", audio: "ie.mp3" },
      { ja: "学校（がっこう）", vi: "Trường học", ex: "学校に行きます。", ex_vi: "Tôi đi học.", furigana: "<ruby>学校<rt>がっこう</rt></ruby>", audio: "gakkou.mp3" },
      { ja: "仕事（しごと）", vi: "Công việc", ex: "仕事が忙しいです。", ex_vi: "Công việc rất bận rộn.", furigana: "<ruby>仕事<rt>しごと</rt></ruby>", audio: "shigoto.mp3" },
      { ja: "時間（じかん）", vi: "Thời gian", ex: "時間がありますか？", ex_vi: "Bạn có thời gian không?", furigana: "<ruby>時間<rt>じかん</rt></ruby>", audio: "jikan_n4.mp3" },
      { ja: "朝（あさ）", vi: "Buổi sáng", ex: "朝ご飯を食べます。", ex_vi: "Tôi ăn sáng.", furigana: "<ruby>朝<rt>あさ</rt></ruby>", audio: "asa.mp3" },
      { ja: "夜（よる）", vi: "Buổi tối", ex: "夜に勉強します。", ex_vi: "Tôi học vào buổi tối.", furigana: "<ruby>夜<rt>よる</rt></ruby>", audio: "yoru.mp3" }
    ]
  },
  N5: {
    "Bài 1": [
      { ja: "こんにちは", vi: "Xin chào", ex: "こんにちは、お元気ですか？", ex_vi: "Xin chào, bạn khỏe không?", furigana: "<ruby>こんにちは<rt>こんにちは</rt></ruby>", audio: "konnichiwa.mp3" },
      { ja: "ありがとう", vi: "Cảm ơn", ex: "ありがとうございます。", ex_vi: "Cảm ơn rất nhiều.", furigana: "<ruby>ありがとう<rt>ありがとう</rt></ruby>", audio: "arigatou.mp3" },
      { ja: "さようなら", vi: "Tạm biệt", ex: "さようなら、またね。", ex_vi: "Tạm biệt, hẹn gặp lại.", furigana: "<ruby>さようなら<rt>さようなら</rt></ruby>", audio: "sayounara.mp3" },
      { ja: "おはよう", vi: "Chào buổi sáng", ex: "おはよう、今日も元気？", ex_vi: "Chào buổi sáng, hôm nay khỏe không?", furigana: "<ruby>おはよう<rt>おはよう</rt></ruby>", audio: "ohayou.mp3" },
      { ja: "すみません", vi: "Xin lỗi", ex: "すみません、道を教えてください。", ex_vi: "Xin lỗi, bạn có thể chỉ đường không?", furigana: "<ruby>すみません<rt>すみません</rt></ruby>", audio: "sumimasen.mp3" },
      { ja: "はい", vi: "Vâng", ex: "はい、了解しました。", ex_vi: "Vâng, tôi hiểu rồi.", furigana: "<ruby>はい<rt>はい</rt></ruby>", audio: "hai.mp3" },
      { ja: "いいえ", vi: "Không", ex: "いいえ、違います。", ex_vi: "Không, không phải vậy.", furigana: "<ruby>いいえ<rt>いいえ</rt></ruby>", audio: "iie.mp3" },
      { ja: "水（みず）", vi: "Nước", ex: "水を飲みます。", ex_vi: "Tôi uống nước.", furigana: "<ruby>水<rt>みず</rt></ruby>", audio: "mizu.mp3" },
      { ja: "本（ほん）", vi: "Sách", ex: "本を読みます。", ex_vi: "Tôi đọc sách.", furigana: "<ruby>本<rt>ほん</rt></ruby>", audio: "hon.mp3" },
      { ja: "人（ひと）", vi: "Người", ex: "あの人は誰ですか？", ex_vi: "Người đó là ai?", furigana: "<ruby>人<rt>ひと</rt></ruby>", audio: "hito.mp3" }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const levelSelect = document.getElementById('level');
  const lessonSelect = document.getElementById('lesson');
  const themeSelect = document.getElementById('theme');
  const flashcardContainer = document.getElementById('flashcard-container');
  const learnedList = document.getElementById('learned-list');
  const notLearnedList = document.getElementById('not-learned-list');
  const audioBtn = document.getElementById('audio-btn');
  const flipBtn = document.getElementById('flip-btn');
  const markBtn = document.getElementById('mark-btn');
  const nextBtn = document.getElementById('next-btn');
  const errorMessage = document.getElementById('error-message');

  let currentLevel = null;
  let currentLesson = null;
  let currentCardIndex = 0;
  let currentCards = [];
  let filteredCards = [];
  let learnedWords = JSON.parse(localStorage.getItem('learnedWords') || '{}');
  let touchStartX = 0;
  let touchEndX = 0;
  let touchStartTime = 0;
  let isSwiping = false;

  // Điền danh sách cấp độ
  Object.keys(DATA).forEach(level => {
    const option = document.createElement('option');
    option.value = level;
    option.textContent = level;
    levelSelect.appendChild(option);
  });

  // Cập nhật danh sách bài học khi chọn cấp độ
  levelSelect.addEventListener('change', () => {
    currentLevel = levelSelect.value;
    lessonSelect.innerHTML = '<option value="">Chọn bài học</option>';
    if (currentLevel && DATA[currentLevel]) {
      Object.keys(DATA[currentLevel]).forEach(lesson => {
        const option = document.createElement('option');
        option.value = lesson;
        option.textContent = lesson;
        lessonSelect.appendChild(option);
      });
    }
    currentLesson = null;
    currentCards = [];
    filteredCards = [];
    localStorage.setItem('level', currentLevel);
    renderCards();
    updateNoteLists();
  });

  // Cập nhật flashcard khi chọn bài học
  lessonSelect.addEventListener('change', () => {
    currentLesson = lessonSelect.value;
    currentCardIndex = 0;
    currentCards = currentLevel && currentLesson ? DATA[currentLevel][currentLesson] : [];
    filterCards();
    localStorage.setItem('lesson', currentLesson);
    renderCards();
    updateNoteLists();
  });

  // Chuyển đổi giao diện sáng/tối
  themeSelect.addEventListener('change', () => {
    document.body.classList.toggle('dark', themeSelect.value === 'dark');
    localStorage.setItem('theme', themeSelect.value);
  });

  // Lật thẻ bằng nút
  flipBtn.addEventListener('click', () => {
    if (filteredCards.length === 0) {
      showError('Không còn thẻ để học!');
      return;
    }
    const activeCard = flashcardContainer.querySelector('.flashcard.active');
    if (activeCard) {
      activeCard.classList.toggle('flipped');
    }
  });

  // Phát âm (mô phỏng)
  audioBtn.addEventListener('click', () => {
    if (filteredCards.length === 0 || !filteredCards[currentCardIndex]) {
      showError('Không còn thẻ để học!');
      return;
    }
    const card = filteredCards[currentCardIndex];
    playAudio(card.audio);
  });

  // Đánh dấu đã thuộc/chưa thuộc
  markBtn.addEventListener('click', () => {
    if (filteredCards.length === 0 || !filteredCards[currentCardIndex]) {
      showError('Không còn thẻ để học!');
      return;
    }
    const card = filteredCards[currentCardIndex];
    const key = `${currentLevel}_${currentLesson}_${card.ja}`;
    if (learnedWords[key]) {
      delete learnedWords[key];
      markBtn.textContent = 'Đánh dấu đã thuộc';
      filteredCards = currentCards.filter(c => !learnedWords[`${currentLevel}_${currentLesson}_${c.ja}`]);
    } else {
      learnedWords[key] = true;
      markBtn.textContent = 'Đánh dấu chưa thuộc';
      filteredCards = currentCards.filter(c => !learnedWords[`${currentLevel}_${currentLesson}_${c.ja}`]);
      if (filteredCards.length > 0) {
        currentCardIndex = currentCardIndex >= filteredCards.length ? 0 : currentCardIndex;
      }
    }
    localStorage.setItem('learnedWords', JSON.stringify(learnedWords));
    renderCards();
    updateNoteLists();
  });

  // Chuyển sang thẻ tiếp theo bằng nút
  nextBtn.addEventListener('click', () => {
    if (filteredCards.length === 0) {
      showError('Không còn thẻ để học!');
      return;
    }
    moveToNextCard();
  });

  // Xử lý lướt trái/phải và lật thẻ
  flashcardContainer.addEventListener('touchstart', (e) => {
    if (filteredCards.length === 0) {
      showError('Không còn thẻ để học!');
      return;
    }
    touchStartX = e.changedTouches[0].screenX;
    touchStartTime = Date.now();
    isSwiping = false;
  });

  flashcardContainer.addEventListener('touchmove', (e) => {
    e.preventDefault();
    touchEndX = e.changedTouches[0].screenX;
    isSwiping = true;

    const swipeDistance = touchEndX - touchStartX;
    const activeCard = flashcardContainer.querySelector('.flashcard.active');
    const nextCard = flashcardContainer.querySelector('.flashcard.next');
    const prevCard = flashcardContainer.querySelector('.flashcard.prev');

    if (activeCard) {
      activeCard.style.transition = 'none';
      activeCard.style.transform = `translateX(${swipeDistance}px)`;
      activeCard.style.opacity = 1 - Math.abs(swipeDistance) / 300;
    }
    if (swipeDistance < 0 && nextCard) {
      nextCard.style.transition = 'none';
      nextCard.style.transform = `translateX(${swipeDistance + 100}%)`;
      nextCard.style.opacity = Math.abs(swipeDistance) / 300;
    }
    if (swipeDistance > 0 && prevCard) {
      prevCard.style.transition = 'none';
      prevCard.style.transform = `translateX(${swipeDistance - 100}%)`;
      prevCard.style.opacity = Math.abs(swipeDistance) / 300;
    }
  });

  flashcardContainer.addEventListener('touchend', () => {
    if (filteredCards.length === 0) return;

    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 60;
    const swipeDuration = Date.now() - touchStartTime;
    const activeCard = flashcardContainer.querySelector('.flashcard.active');
    const nextCard = flashcardContainer.querySelector('.flashcard.next');
    const prevCard = flashcardContainer.querySelector('.flashcard.prev');

    if (activeCard) {
      activeCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      activeCard.style.transform = '';
      activeCard.style.opacity = 1;
    }
    if (nextCard) {
      nextCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      nextCard.style.transform = '';
      nextCard.style.opacity = 0;
    }
    if (prevCard) {
      prevCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      prevCard.style.transform = '';
      prevCard.style.opacity = 0;
    }

    if (isSwiping && Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance < 0) {
        moveToNextCard();
      } else {
        moveToPrevCard();
      }
    } else if (!isSwiping && swipeDuration < 250) {
      if (activeCard) {
        activeCard.classList.toggle('flipped');
      }
    }
  });

  // Hỗ trợ kéo bằng chuột trên máy tính
  let isDragging = false;
  flashcardContainer.addEventListener('mousedown', (e) => {
    if (filteredCards.length === 0) {
      showError('Không còn thẻ để học!');
      return;
    }
    isDragging = true;
    touchStartX = e.screenX;
    touchStartTime = Date.now();
    isSwiping = false;
  });

  flashcardContainer.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    touchEndX = e.screenX;
    isSwiping = true;

    const swipeDistance = touchEndX - touchStartX;
    const activeCard = flashcardContainer.querySelector('.flashcard.active');
    const nextCard = flashcardContainer.querySelector('.flashcard.next');
    const prevCard = flashcardContainer.querySelector('.flashcard.prev');

    if (activeCard) {
      activeCard.style.transition = 'none';
      activeCard.style.transform = `translateX(${swipeDistance}px)`;
      activeCard.style.opacity = 1 - Math.abs(swipeDistance) / 300;
      activeCard.style.zIndex = 10;
    }
    if (swipeDistance < 0 && nextCard) {
      nextCard.style.transition = 'none';
      nextCard.style.transform = `translateX(${swipeDistance + 100}%)`;
      nextCard.style.opacity = Math.abs(swipeDistance) / 300;
      nextCard.style.zIndex = 5;
    }
    if (swipeDistance > 0 && prevCard) {
      prevCard.style.transition = 'none';
      prevCard.style.transform = `translateX(${swipeDistance - 100}%)`;
      prevCard.style.opacity = Math.abs(swipeDistance) / 300;
      prevCard.style.zIndex = 5;
    }
  });

  flashcardContainer.addEventListener('mouseup', () => {
    if (!isDragging || filteredCards.length === 0) return;
    isDragging = false;

    const swipeDistance = touchEndX - touchStartX;
    const minSwipeDistance = 60;
    const swipeDuration = Date.now() - touchStartTime;
    const activeCard = flashcardContainer.querySelector('.flashcard.active');
    const nextCard = flashcardContainer.querySelector('.flashcard.next');
    const prevCard = flashcardContainer.querySelector('.flashcard.prev');

    if (activeCard) {
      activeCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      activeCard.style.transform = '';
      activeCard.style.opacity = 1;
      activeCard.style.zIndex = 10;
    }
    if (nextCard) {
      nextCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      nextCard.style.transform = '';
      nextCard.style.opacity = 0;
      nextCard.style.zIndex = 0;
    }
    if (prevCard) {
      prevCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      prevCard.style.transform = '';
      prevCard.style.opacity = 0;
      prevCard.style.zIndex = 0;
    }

    if (isSwiping && Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance < 0) {
        moveToNextCard();
      } else {
        moveToPrevCard();
      }
    } else if (!isSwiping && swipeDuration < 250) {
      if (activeCard) {
        activeCard.classList.toggle('flipped');
      }
    }
  });

  flashcardContainer.addEventListener('mouseleave', () => {
    if (!isDragging) return;
    isDragging = false;

    const activeCard = flashcardContainer.querySelector('.flashcard.active');
    const nextCard = flashcardContainer.querySelector('.flashcard.next');
    const prevCard = flashcardContainer.querySelector('.flashcard.prev');
    if (activeCard) {
      activeCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      activeCard.style.transform = '';
      activeCard.style.opacity = 1;
      activeCard.style.zIndex = 10;
    }
    if (nextCard) {
      nextCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      nextCard.style.transform = '';
      nextCard.style.opacity = 0;
      nextCard.style.zIndex = 0;
    }
    if (prevCard) {
      prevCard.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      prevCard.style.transform = '';
      prevCard.style.opacity = 0;
      prevCard.style.zIndex = 0;
    }
  });

  // Lọc thẻ chưa thuộc
  function filterCards() {
    filteredCards = currentCards.filter(card => {
      const key = `${currentLevel}_${currentLesson}_${card.ja}`;
      return !learnedWords[key];
    });
    currentCardIndex = 0;
  }

  // Tạo và hiển thị các thẻ
  function renderCards() {
    flashcardContainer.innerHTML = '';
    errorMessage.style.display = 'none';
    audioBtn.disabled = filteredCards.length === 0;
    flipBtn.disabled = filteredCards.length === 0;
    markBtn.disabled = filteredCards.length === 0;
    nextBtn.disabled = filteredCards.length === 0;

    if (filteredCards.length === 0) {
      const emptyCard = document.createElement('div');
      emptyCard.className = 'flashcard active';
      emptyCard.innerHTML = `
        <div class="card-front">
          <p>Không còn thẻ để học!</p>
        </div>
        <div class="card-back"></div>
      `;
      flashcardContainer.appendChild(emptyCard);
      markBtn.textContent = 'Đánh dấu';
      updateNoteLists();
      return;
    }

    filteredCards.forEach((card, index) => {
      const flashcard = document.createElement('div');
      flashcard.className = 'flashcard';
      if (index === currentCardIndex) {
        flashcard.classList.add('active');
        flashcard.style.opacity = 1;
        flashcard.style.zIndex = 10;
      } else if (index > currentCardIndex) {
        flashcard.classList.add('next');
        flashcard.style.opacity = 0;
        flashcard.style.zIndex = 0;
      } else {
        flashcard.classList.add('prev');
        flashcard.style.opacity = 0;
        flashcard.style.zIndex = 0;
      }
      flashcard.innerHTML = `
        <div class="card-front">
          <p>${card.furigana}</p>
        </div>
        <div class="card-back">
          <p>Nghĩa: ${card.vi}</p>
          <p>Ví dụ: ${card.ex}</p>
          <p>Dịch: ${card.ex_vi}</p>
        </div>
      `;
      flashcardContainer.appendChild(flashcard);
    });

    if (filteredCards[currentCardIndex]) {
      const card = filteredCards[currentCardIndex];
      const key = `${currentLevel}_${currentLesson}_${card.ja}`;
      markBtn.textContent = learnedWords[key] ? 'Đánh dấu chưa thuộc' : 'Đánh dấu đã thuộc';
    }
    updateNoteLists();
  }

  // Cập nhật danh sách đã thuộc/chưa thuộc
  function updateNoteLists() {
    learnedList.innerHTML = '';
    notLearnedList.innerHTML = '';

    if (!currentCards.length) {
      return;
    }

    currentCards.forEach(card => {
      const key = `${currentLevel}_${currentLesson}_${card.ja}`;
      const li = document.createElement('li');
      li.textContent = card.ja;
      if (learnedWords[key]) {
        learnedList.appendChild(li);
      } else {
        notLearnedList.appendChild(li);
      }
    });
  }

  // Chuyển sang thẻ tiếp theo
  function moveToNextCard() {
    if (filteredCards.length === 0) return;
    currentCardIndex = (currentCardIndex + 1) % filteredCards.length;
    updateCardPositions();
    const card = filteredCards[currentCardIndex];
    const key = `${currentLevel}_${currentLesson}_${card.ja}`;
    markBtn.textContent = learnedWords[key] ? 'Đánh dấu chưa thuộc' : 'Đánh dấu đã thuộc';
  }

  // Chuyển về thẻ trước
  function moveToPrevCard() {
    if (filteredCards.length === 0) return;
    currentCardIndex = (currentCardIndex - 1 + filteredCards.length) % filteredCards.length;
    updateCardPositions();
    const card = filteredCards[currentCardIndex];
    const key = `${currentLevel}_${currentLesson}_${card.ja}`;
    markBtn.textContent = learnedWords[key] ? 'Đánh dấu chưa thuộc' : 'Đánh dấu đã thuộc';
  }

  // Cập nhật vị trí các thẻ
  function updateCardPositions() {
    const cards = flashcardContainer.querySelectorAll('.flashcard');
    cards.forEach((card, index) => {
      card.classList.remove('active', 'next', 'prev');
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      card.style.transform = '';
      if (index === currentCardIndex) {
        card.classList.add('active');
        card.style.opacity = 1;
        card.style.zIndex = 10;
      } else if (index > currentCardIndex) {
        card.classList.add('next');
        card.style.opacity = 0;
        card.style.transform = 'translateX(100%)';
        card.style.zIndex = 0;
      } else {
        card.classList.add('prev');
        card.style.opacity = 0;
        card.style.transform = 'translateX(-100%)';
        card.style.zIndex = 0;
      }
      card.classList.remove('flipped');
    });
  }

  // Hiển thị thông báo lỗi
  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    setTimeout(() => {
      errorMessage.style.display = 'none';
    }, 3000);
  }

  // Mô phỏng phát âm
  function playAudio(audioFile) {
    console.log(`Phát âm: ${audioFile}`);
  }

  // Khôi phục trạng thái
  const savedLevel = localStorage.getItem('level');
  const savedLesson = localStorage.getItem('lesson');
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme) {
    document.body.classList.toggle('dark', savedTheme === 'dark');
    themeSelect.value = savedTheme;
  }

  if (savedLevel && DATA[savedLevel]) {
    levelSelect.value = savedLevel;
    currentLevel = savedLevel;
    lessonSelect.innerHTML = '<option value="">Chọn bài học</option>';
    Object.keys(DATA[currentLevel]).forEach(lesson => {
      const option = document.createElement('option');
      option.value = lesson;
      option.textContent = lesson;
      lessonSelect.appendChild(option);
    });
    if (savedLesson && DATA[savedLevel][savedLesson]) {
      lessonSelect.value = savedLesson;
      currentLesson = savedLesson;
      currentCards = DATA[savedLevel][savedLesson];
      filterCards();
      renderCards();
    }
  }
});
