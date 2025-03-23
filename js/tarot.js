document.addEventListener('DOMContentLoaded', function() {
  // ข้อมูลไพ่ทาโรต์
  const tarotCards = [
    {
      id: 0,
      name: "The Fool",
      thaiName: "คนโง่",
      suit: "Major Arcana",
      image: "/images/tarot/the-fool.jpg",
      uprightMeaning: "การเริ่มต้นใหม่ การผจญภัย ความไร้เดียงสา ความเป็นอิสระ การปล่อยวาง",
      reversedMeaning: "ความประมาท การตัดสินใจที่ผิดพลาด ความเสี่ยงที่ไม่จำเป็น ความไม่รับผิดชอบ"
    },
    {
      id: 1,
      name: "The Magician",
      thaiName: "นักเวทย์",
      suit: "Major Arcana",
      image: "/images/tarot/the-magician.jpg",
      uprightMeaning: "พลังแห่งการสร้างสรรค์ ความสามารถพิเศษ การริเริ่ม การใช้ทรัพยากรอย่างชาญฉลาด",
      reversedMeaning: "การหลอกลวง การใช้พลังในทางที่ผิด การขาดทักษะ การไม่สามารถใช้ศักยภาพของตนเองได้"
    },
    {
      id: 2,
      name: "The High Priestess",
      thaiName: "มหาปุโรหิตหญิง",
      suit: "Major Arcana",
      image: "/images/tarot/the-high-priestess.jpg",
      uprightMeaning: "ความลึกลับ สัญชาตญาณ ความรู้ที่ซ่อนอยู่ภายใน การรับรู้ที่ลึกซึ้ง",
      reversedMeaning: "ความลังเล การปิดกั้นสัญชาตญาณ ความลับที่ถูกเปิดเผย การขาดความเข้าใจในตนเอง"
    },
    {
      id: 3,
      name: "The Empress",
      thaiName: "จักรพรรดินี",
      suit: "Major Arcana",
      image: "/images/tarot/the-empress.jpg",
      uprightMeaning: "ความอุดมสมบูรณ์ ความเป็นแม่ ความสร้างสรรค์ ความงาม ความรัก",
      reversedMeaning: "การพึ่งพาผู้อื่นมากเกินไป การขาดความสร้างสรรค์ ความไม่มั่นคงทางอารมณ์"
    },
    {
      id: 4,
      name: "The Emperor",
      thaiName: "จักรพรรดิ",
      suit: "Major Arcana",
      image: "/images/tarot/the-emperor.jpg",
      uprightMeaning: "อำนาจ ความเป็นผู้นำ ความมั่นคง การควบคุม ความมีเหตุผล",
      reversedMeaning: "การใช้อำนาจในทางที่ผิด ความดื้อรั้น การควบคุมมากเกินไป ความไม่ยืดหยุ่น"
    },
    {
      id: 10,
      name: "Wheel of Fortune",
      thaiName: "กงล้อแห่งโชคชะตา",
      suit: "Major Arcana",
      image: "/images/tarot/wheel-of-fortune.jpg",
      uprightMeaning: "โชคชะตา การเปลี่ยนแปลง โอกาส วัฏจักร จังหวะชีวิต",
      reversedMeaning: "โชคร้าย การต่อต้านการเปลี่ยนแปลง การสูญเสียการควบคุม"
    },
    {
      id: 11,
      name: "Justice",
      thaiName: "ความยุติธรรม",
      suit: "Major Arcana",
      image: "/images/tarot/justice.jpg",
      uprightMeaning: "ความยุติธรรม ความสมดุล ความซื่อสัตย์ กฎหมาย ความจริง",
      reversedMeaning: "ความไม่ยุติธรรม ความไม่สมดุล การหลอกลวง การปฏิเสธความจริง"
    },
    {
      id: 36,
      name: "Ace of Cups",
      thaiName: "เอซแห่งถ้วย",
      suit: "Cups",
      image: "/images/tarot/ace-of-cups.jpg",
      uprightMeaning: "ความรักใหม่ ความสุข ความคิดสร้างสรรค์ การเริ่มต้นทางอารมณ์ใหม่",
      reversedMeaning: "ความว่างเปล่าทางอารมณ์ ความรักที่ไม่สมหวัง การสูญเสียความสุข"
    },
    {
      id: 49,
      name: "Ace of Swords",
      thaiName: "เอซแห่งดาบ",
      suit: "Swords",
      image: "/images/tarot/ace-of-swords.jpg",
      uprightMeaning: "ความชัดเจนทางความคิด ความจริง ชัยชนะ ความเฉียบคม การตัดสินใจที่เด็ดขาด",
      reversedMeaning: "ความสับสน ความคิดที่ไม่ชัดเจน การตัดสินใจที่ผิดพลาด"
    },
    {
      id: 62,
      name: "Ace of Wands",
      thaiName: "เอซแห่งไม้เท้า",
      suit: "Wands",
      image: "/images/tarot/ace-of-wands.jpg",
      uprightMeaning: "การเริ่มต้นใหม่ แรงบันดาลใจ พลังงานใหม่ ความคิดสร้างสรรค์ โอกาสใหม่",
      reversedMeaning: "ความล่าช้า การขาดแรงบันดาลใจ การเริ่มต้นที่ผิดพลาด"
    },
    {
      id: 75,
      name: "Ace of Pentacles",
      thaiName: "เอซแห่งเหรียญ",
      suit: "Pentacles",
      image: "/images/tarot/ace-of-pentacles.jpg",
      uprightMeaning: "โอกาสทางการเงินใหม่ ความมั่งคั่ง ความมั่นคง การเติบโตทางวัตถุ",
      reversedMeaning: "การสูญเสียทางการเงิน โอกาสที่พลาดไป ความไม่มั่นคงทางวัตถุ"
    }
  ];

  // ความหมายของตำแหน่งไพ่ในการดูแบบต่างๆ
  const spreadPositionMeanings = {
    single: [
      "ไพ่นี้แสดงถึงสถานการณ์ปัจจุบันหรือคำตอบสำหรับคำถามของคุณ"
    ],
    three: [
      "อดีต - สิ่งที่ผ่านมาและมีอิทธิพลต่อสถานการณ์ปัจจุบัน",
      "ปัจจุบัน - สถานการณ์ที่คุณกำลังเผชิญอยู่ในขณะนี้",
      "อนาคต - แนวโน้มหรือผลลัพธ์ที่อาจเกิดขึ้นในอนาคต"
    ],
    celtic: [
      "สถานการณ์ปัจจุบัน - สิ่งที่มีผลต่อผู้ถามในขณะนี้",
      "อุปสรรค - สิ่งที่ขัดขวางผู้ถาม",
      "เป้าหมาย - สิ่งที่ผู้ถามหวังจะบรรลุ",
      "รากฐาน - อดีตที่มีอิทธิพลต่อสถานการณ์",
      "อิทธิพลที่กำลังจะผ่านไป - สิ่งที่เพิ่งเกิดขึ้นและกำลังจะผ่านไป",
      "อิทธิพลที่กำลังจะมา - สิ่งที่จะเกิดขึ้นในอนาคตอันใกล้",
      "ตัวผู้ถาม - ทัศนคติหรือมุมมองของผู้ถาม",
      "สภาพแวดล้อม - อิทธิพลจากภายนอก",
      "ความหวังและความกลัว - สิ่งที่ผู้ถามหวังหรือกลัว",
      "ผลลัพธ์สุดท้าย - ผลลัพธ์ที่น่าจะเกิดขึ้น"
    ]
  };

  // ฟังก์ชันสุ่มไพ่
  function drawRandomCards(count) {
    // สร้างสำเนาของไพ่ทั้งหมด
    const deck = [...tarotCards];
    const drawnCards = [];
    
    // สุ่มไพ่ตามจำนวนที่ต้องการ
    for (let i = 0; i < count; i++) {
      if (deck.length === 0) break;
      
      const randomIndex = Math.floor(Math.random() * deck.length);
      const card = deck[randomIndex];
      
      // สุ่มว่าไพ่จะหงายหรือคว่ำ
      const isReversed = Math.random() > 0.5;
      
      drawnCards.push({
        ...card,
        isReversed
      });
      
      // ลบไพ่ที่สุ่มแล้วออกจากสำรับ
      deck.splice(randomIndex, 1);
    }
    
    return drawnCards;
  }

  // ฟังก์ชันดูไพ่ตามรูปแบบที่เลือก
  function doTarotReading(spreadType, question) {
    let cards = [];
    let positions = [];
    
    switch (spreadType) {
      case "single":
        cards = drawRandomCards(1);
        positions = spreadPositionMeanings.single;
        break;
      case "three":
        cards = drawRandomCards(3);
        positions = spreadPositionMeanings.three;
        break;
      case "celtic":
        cards = drawRandomCards(10);
        positions = spreadPositionMeanings.celtic;
        break;
    }
    
    // สร้างคำทำนาย
    const reading = cards.map((card, index) => {
      const meaning = card.isReversed ? card.reversedMeaning : card.uprightMeaning;
      return {
        position: positions[index],
        card,
        meaning,
        isReversed: card.isReversed
      };
    });
    
    return {
      question,
      spreadType,
      reading
    };
  }

  // จัดการการส่งฟอร์ม
  const tarotForm = document.getElementById('tarot-form');
  const tarotResult = document.getElementById('tarot-result');
  const singleSpread = document.getElementById('single-spread');
  const threeSpread = document.getElementById('three-spread');
  const celticSpread = document.getElementById('celtic-spread');
  
  tarotForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const question = document.getElementById('question').value;
    const spreadType = document.querySelector('input[name="spreadType"]:checked').value;
    
    if (!question) {
      alert("กรุณากรอกคำถามของคุณ");
      return;
    }
    
    // ทำนายไพ่
    const result = doTarotReading(spreadType, question);
    
    // แสดงผลลัพธ์
    document.getElementById('tarot-question').textContent = `คำถาม: ${result.question}`;
    
    // ซ่อนทุกรูปแบบการดูไพ่
    singleSpread.classList.add('hidden');
    threeSpread.classList.add('hidden');
    celticSpread.classList.add('hidden');
    
    // แสดงผลตามรูปแบบที่เลือก
    if (result.spreadType === "single") {
      singleSpread.innerHTML = `
        <div class="text-center">
          <h3 class="mb-4">${result.reading[0].position}</h3>
          <div class="tarot-card ${result.reading[0].isReversed ? 'reversed' : ''}">
            <p class="text-2xl font-bold">${result.reading[0].card.name}</p>
            <p class="text-lg">${result.reading[0].card.thaiName}</p>
            <p class="text-sm text-muted">${result.reading[0].card.suit}</p>
            ${result.reading[0].isReversed ? '<div class="reversed-badge">กลับหัว</div>' : ''}
          </div>
          <div class="mt-4">
            <p class="font-medium mb-2">ความหมาย:</p>
            <p>${result.reading[0].meaning}</p>
          </div>
        </div>
      `;
      singleSpread.classList.remove('hidden');
    } else if (result.spreadType === "three") {
      let threeHtml = '<div class="three-cards">';
      
      result.reading.forEach((item, index) => {
        threeHtml += `
          <div class="tarot-card-container">
            <h3 class="text-center mb-2">${item.position}</h3>
            <div class="tarot-card ${item.isReversed ? 'reversed' : ''}">
              <p class="text-xl font-bold">${item.card.name}</p>
              <p class="text-base">${item.card.thaiName}</p>
              <p class="text-xs text-muted">${item.card.suit}</p>
              ${item.isReversed ? '<div class="reversed-badge">กลับหัว</div>' : ''}
            </div>
            <div class="mt-2">
              <p class="font-medium mb-1">ความหมาย:</p>
              <p class="text-sm">${item.meaning}</p>
            </div>
          </div>
        `;
      });
      
      threeHtml += '</div>';
      
      threeHtml += `
        <div class="mt-4 text-center">
          <p class="font-medium mb-2">การตีความโดยรวม:</p>
          <p>
            ${result.reading[0].position}: ${result.reading[0].meaning.substring(0, 50)}...
            <br>
            ${result.reading[1].position}: ${result.reading[1].meaning.substring(0, 50)}...
            <br>
            ${result.reading[2].position}: ${result.reading[2].meaning.substring(0, 50)}...
          </p>
        </div>
      `;
      
      threeSpread.innerHTML = threeHtml;
      threeSpread.classList.remove('hidden');
    } else if (result.spreadType === "celtic") {
      let celticHtml = '<div class="celtic-cross">';
      
      // First 6 cards
      celticHtml += '<div class="celtic-first-section">';
      result.reading.slice(0, 6).forEach((item, index) => {
        celticHtml += `
          <div class="celtic-card">
            <div class="tarot-card ${item.isReversed ? 'reversed' : ''}">
              <p class="text-sm font-bold">${item.card.name}</p>
              <p class="text-xs">${item.card.thaiName}</p>
              ${item.isReversed ? '<div class="reversed-badge">กลับหัว</div>' : ''}
            </div>
            <div class="celtic-card-meaning">
              <h3 class="text-sm font-medium">${index + 1}. ${item.position}</h3>
              <p class="text-xs">${item.meaning}</p>
            </div>
          </div>
        `;
      });
      celticHtml += '</div>';
      
      // Last 4 cards
      celticHtml += '<div class="celtic-second-section">';
      result.reading.slice(6, 10).forEach((item, index) => {
        celticHtml += `
          <div class="celtic-card">
            <div class="tarot-card ${item.isReversed ? 'reversed' : ''}">
              <p class="text-sm font-bold">${item.card.name}</p>
              <p class="text-xs">${item.card.thaiName}</p>
              ${item.isReversed ? '<div class="reversed-badge">กลับหัว</div>' : ''}
            </div>
            <div class="celtic-card-meaning">
              <h3 class="text-sm font-medium">${index + 7}. ${item.position}</h3>
              <p class="text-xs">${item.meaning}</p>
            </div>
          </div>
        `;
      });
      celticHtml += '</div>';
      
      celticHtml += '</div>';
      
      celticHtml += `
        <div class="mt-4 text-center">
          <p class="font-medium mb-2">สรุปการตีความ:</p>
          <p>
            ไพ่ทั้ง 10 ใบแสดงให้เห็นถึงสถานการณ์ที่ซับซ้อนในชีวิตของคุณ 
            โดยมีทั้งอุปสรรคและโอกาส คุณควรพิจารณาความหมายของแต่ละไพ่
            และความสัมพันธ์ระหว่างไพ่เพื่อเข้าใจสถานการณ์ของคุณอย่างลึกซึ้ง
          </p>
        </div>
      `;
      
      celticSpread.innerHTML = celticHtml;
      celticSpread.classList.remove('hidden');
    }
    
    tarotResult.classList.remove('hidden');
    
    // เลื่อนไปที่ผลลัพธ์
    tarotResult.scrollIntoView({ behavior: 'smooth' });
  });

  // เพิ่ม CSS สำหรับการแสดงไพ่
  const style = document.createElement('style');
  style.textContent = `
    .three-cards {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 1.5rem;
    }
    
    .tarot-card {
      background-color: var(--muted);
      border-radius: var(--radius);
      padding: 2rem 1rem;
      text-align: center;
      position: relative;
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 1rem;
    }
    
    .tarot-card.reversed {
      transform: rotate(180deg);
    }
    
    .reversed-badge {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      background-color: var(--destructive);
      color: var(--destructive-foreground);
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius);
      font-size: 0.75rem;
      transform: rotate(180deg);
    }
    
    .celtic-cross {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .celtic-first-section, .celtic-second-section {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
    }
    
    .celtic-card {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }
    
    .celtic-card .tarot-card {
      min-height: 120px;
      min-width: 80px;
      padding: 0.5rem;
      margin-bottom: 0;
    }
    
    .celtic-card-meaning {
      flex: 1;
    }
    
    @media (min-width: 640px) {
      .three-cards {
        grid-template-columns: repeat(3, 1fr);
      }
      
      .celtic-first-section, .celtic-second-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;
  document.head.appendChild(style);
});