document.addEventListener('DOMContentLoaded', function() {
  // ข้อมูลราศี
  const zodiacs = [
    {
      id: "aries",
      name: "Aries",
      thaiName: "ราศีเมษ",
      dateRange: "21 มีนาคม - 19 เมษายน",
      element: "ไฟ",
      symbol: "♈"
    },
    {
      id: "taurus",
      name: "Taurus",
      thaiName: "ราศีพฤษภ",
      dateRange: "20 เมษายน - 20 พฤษภาคม",
      element: "ดิน",
      symbol: "♉"
    },
    {
      id: "gemini",
      name: "Gemini",
      thaiName: "ราศีเมถุน",
      dateRange: "21 พฤษภาคม - 20 มิถุนายน",
      element: "ลม",
      symbol: "♊"
    },
    {
      id: "cancer",
      name: "Cancer",
      thaiName: "ราศีกรกฎ",
      dateRange: "21 มิถุนายน - 22 กรกฎาคม",
      element: "น้ำ",
      symbol: "♋"
    },
    {
      id: "leo",
      name: "Leo",
      thaiName: "ราศีสิงห์",
      dateRange: "23 กรกฎาคม - 22 สิงหาคม",
      element: "ไฟ",
      symbol: "♌"
    },
    {
      id: "virgo",
      name: "Virgo",
      thaiName: "ราศีกันย์",
      dateRange: "23 สิงหาคม - 22 กันยายน",
      element: "ดิน",
      symbol: "♍"
    },
    {
      id: "libra",
      name: "Libra",
      thaiName: "ราศีตุลย์",
      dateRange: "23 กันยายน - 22 ตุลาคม",
      element: "ลม",
      symbol: "♎"
    },
    {
      id: "scorpio",
      name: "Scorpio",
      thaiName: "ราศีพิจิก",
      dateRange: "23 ตุลาคม - 21 พฤศจิกายน",
      element: "น้ำ",
      symbol: "♏"
    },
    {
      id: "sagittarius",
      name: "Sagittarius",
      thaiName: "ราศีธนู",
      dateRange: "22 พฤศจิกายน - 21 ธันวาคม",
      element: "ไฟ",
      symbol: "♐"
    },
    {
      id: "capricorn",
      name: "Capricorn",
      thaiName: "ราศีมังกร",
      dateRange: "22 ธันวาคม - 19 มกราคม",
      element: "ดิน",
      symbol: "♑"
    },
    {
      id: "aquarius",
      name: "Aquarius",
      thaiName: "ราศีกุมภ์",
      dateRange: "20 มกราคม - 18 กุมภาพันธ์",
      element: "ลม",
      symbol: "♒"
    },
    {
      id: "pisces",
      name: "Pisces",
      thaiName: "ราศีมีน",
      dateRange: "19 กุมภาพันธ์ - 20 มีนาคม",
      element: "น้ำ",
      symbol: "♓"
    }
  ];

  // ข้อมูลคำทำนายรายวันสำหรับแต่ละราศี (ตัวอย่าง)
  const dailyPredictionTemplates = {
    general: [
      "วันนี้เป็นวันที่ดีสำหรับการเริ่มต้นสิ่งใหม่ๆ คุณจะมีพลังงานเต็มเปี่ยมและความกระตือรือร้นสูง",
      "วันนี้อาจมีอุปสรรคบางอย่างเข้ามา แต่คุณจะสามารถผ่านพ้นไปได้ด้วยความอดทน",
      "วันนี้เป็นวันที่เหมาะกับการพักผ่อนและทบทวนตัวเอง ให้เวลากับตัวเองบ้าง",
      "วันนี้คุณจะได้พบกับโอกาสใหม่ๆ ที่น่าสนใจ อย่าลังเลที่จะคว้าไว้",
      "วันนี้เป็นวันที่ดีสำหรับการเข้าสังคมและพบปะผู้คนใหม่ๆ คุณจะได้รับประโยชน์จากการสร้างเครือข่าย"
    ],
    love: [
      "ความสัมพันธ์ของคุณจะราบรื่นและมีความสุข คุณและคู่ของคุณจะเข้าใจกันมากขึ้น",
      "อาจมีความขัดแย้งเล็กๆ น้อยๆ กับคนรัก แต่จะสามารถแก้ไขได้ด้วยการพูดคุยอย่างเปิดใจ",
      "คนโสดมีโอกาสได้พบกับคนที่ถูกใจ ให้เปิดใจและเป็นตัวของตัวเอง",
      "ความรักของคุณต้องการการดูแลเอาใจใส่มากขึ้น ให้เวลากับคนที่คุณรักบ้าง",
      "วันนี้เป็นวันที่ดีสำหรับการแสดงความรักและความห่วงใยต่อคนที่คุณรัก"
    ],
    career: [
      "งานของคุณจะก้าวหน้าอย่างรวดเร็ว คุณจะได้รับการยอมรับจากเพื่อนร่วมงานและผู้บังคับบัญชา",
      "อาจมีความท้าทายในที่ทำงาน แต่คุณจะสามารถจัดการได้ด้วยความสามารถของคุณ",
      "วันนี้เป็นวันที่ดีสำหรับการวางแผนอนาคตในการทำงาน คิดถึงเป้าหมายระยะยาวของคุณ",
      "คุณอาจได้รับโอกาสใหม่ๆ ในการทำงาน อย่ากลัวที่จะลองสิ่งใหม่ๆ",
      "ความสัมพันธ์กับเพื่อนร่วมงานจะดีขึ้น คุณจะได้รับความร่วมมือที่ดีในการทำงาน"
    ],
    health: [
      "สุขภาพของคุณแข็งแรงดี แต่อย่าลืมดูแลตัวเองด้วยการออกกำลังกายและรับประทานอาหารที่มีประโยชน์",
      "คุณอาจรู้สึกเหนื่อยล้าเล็กน้อย ให้พักผ่อนให้เพียงพอและดูแลสุขภาพจิตของคุณ",
      "วันนี้เป็นวันที่ดีสำหรับการเริ่มต้นนิสัยการดูแลสุขภาพใหม่ๆ เช่น การออกกำลังกายหรือการทำสมาธิ",
      "ระวังความเครียดที่อาจส่งผลต่อสุขภาพของคุณ หาเวลาผ่อนคลายและทำกิจกรรมที่คุณชอบ",
      "สุขภาพโดยรวมของคุณดี แต่ควรระวังเรื่องการพักผ่อนที่ไม่เพียงพอ"
    ]
  };

  // ฟังก์ชันสร้างคำทำนายรายวันสำหรับราศีที่ระบุ
  function generateDailyPrediction(zodiacId, date, isWeekly = false) {
    // หาราศีที่ตรงกับ ID
    const zodiac = zodiacs.find(z => z.id === zodiacId);
    
    if (!zodiac) {
      throw new Error(`ไม่พบราศี ${zodiacId}`);
    }
    
    // สุ่มคำทำนายจากเทมเพลต
    const general = dailyPredictionTemplates.general[Math.floor(Math.random() * dailyPredictionTemplates.general.length)];
    const love = dailyPredictionTemplates.love[Math.floor(Math.random() * dailyPredictionTemplates.love.length)];
    const career = dailyPredictionTemplates.career[Math.floor(Math.random() * dailyPredictionTemplates.career.length)];
    const health = dailyPredictionTemplates.health[Math.floor(Math.random() * dailyPredictionTemplates.health.length)];
    
    // สุ่มเลขนำโชคและสีนำโชค
    const luckyNumber = Math.floor(Math.random() * 9) + 1;
    const luckyColors = ["แดง", "เขียว", "น้ำเงิน", "เหลือง", "ม่วง", "ส้ม", "ชมพู", "ขาว", "ดำ"];
    const luckyColor = luckyColors[Math.floor(Math.random() * luckyColors.length)];
    
    // สร้างคำทำนายรายวัน
    return {
      zodiacId,
      zodiac,
      date: date.toISOString().split('T')[0], // รูปแบบ YYYY-MM-DD
      isWeekly,
      general,
      love,
      career,
      health,
      luckyNumber,
      luckyColor
    };
  }

  // เพิ่มรายการราศีลงใน select
  const zodiacSelect = document.getElementById('zodiac');
  zodiacs.forEach(zodiac => {
    const option = document.createElement('option');
    option.value = zodiac.id;
    option.textContent = `${zodiac.symbol} ${zodiac.thaiName} (${zodiac.dateRange})`;
    zodiacSelect.appendChild(option);
  });

  // จัดการการเลือกราศีและประเภทคำทำนาย
  const predictionResult = document.getElementById('prediction-result');
  let activeTab = 'daily';
  
  // จัดการการเลือก tab
  const tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const tabId = this.dataset.tab;
      
      // Remove active class from all tab buttons
      document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked tab button
      this.classList.add('active');
      
      activeTab = tabId;
      
      // ถ้ามีการเลือกราศีแล้ว ให้แสดงผลลัพธ์ใหม่
      if (zodiacSelect.value) {
        showPrediction();
      }
    });
  });
  
  // จัดการการเลือกราศี
  zodiacSelect.addEventListener('change', function() {
    if (this.value) {
      showPrediction();
    } else {
      predictionResult.classList.add('hidden');
    }
  });
  
  // ฟังก์ชันแสดงผลลัพธ์
  function showPrediction() {
    const zodiacId = zodiacSelect.value;
    const isWeekly = activeTab === 'weekly';
    
    if (!zodiacId) {
      return;
    }
    
    // สร้างคำทำนาย
    const prediction = generateDailyPrediction(zodiacId, new Date(), isWeekly);
    
    // แสดงผลลัพธ์
    document.getElementById('zodiac-title').innerHTML = `${prediction.zodiac.symbol} ${prediction.zodiac.thaiName}`;
    document.getElementById('zodiac-date-range').textContent = prediction.zodiac.dateRange;
    
    document.getElementById('prediction-type').textContent = isWeekly ? 'ดวงประจำสัปดาห์' : 'ดวงประจำวันที่';
    document.getElementById('current-date').textContent = new Date().toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' });
    
    document.getElementById('general-prediction').textContent = prediction.general;
    document.getElementById('love-prediction').textContent = prediction.love;
    document.getElementById('career-prediction').textContent = prediction.career;
    document.getElementById('health-prediction').textContent = prediction.health;
    
    document.getElementById('lucky-number').textContent = prediction.luckyNumber;
    document.getElementById('lucky-color').textContent = prediction.luckyColor;
    
    document.getElementById('advice').textContent = isWeekly 
      ? "คำทำนายนี้เป็นภาพรวมสำหรับสัปดาห์นี้ แต่ละวันอาจมีความแตกต่างกัน ใช้วิจารณญาณของคุณในการตัดสินใจเสมอ"
      : "คำทำนายนี้เป็นเพียงแนวทางสำหรับวันนี้ ใช้วิจารณญาณของคุณในการตัดสินใจเสมอ";
    
    predictionResult.classList.remove('hidden');
    
    // เลื่อนไปที่ผลลัพธ์
    predictionResult.scrollIntoView({ behavior: 'smooth' });
  }
});