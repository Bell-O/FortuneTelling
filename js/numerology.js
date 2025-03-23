document.addEventListener('DOMContentLoaded', function() {
  // ข้อมูลเลขศาสตร์
  const numerologyMeanings = [
    {
      number: 1,
      meaning: "ความเป็นผู้นำ ความคิดริเริ่ม ความเป็นตัวของตัวเอง",
      characteristics: ["มีความเป็นผู้นำสูง", "มีความคิดสร้างสรรค์", "มีความมั่นใจในตัวเอง", "ชอบความเป็นอิสระ", "มีความทะเยอทะยาน"]
    },
    {
      number: 2,
      meaning: "ความร่วมมือ ความสมดุล ความอ่อนโยน การเป็นคู่",
      characteristics: ["มีความอ่อนโยน", "ชอบความสงบ", "มีความอดทน", "เป็นนักการทูต", "มีความไวต่อความรู้สึก"]
    },
    {
      number: 3,
      meaning: "ความคิดสร้างสรรค์ การแสดงออก การสื่อสาร ความสนุกสนาน",
      characteristics: ["มีความคิดสร้างสรรค์สูง", "มีความสามารถในการสื่อสาร", "มีอารมณ์ขัน", "ชอบสังคม", "มองโลกในแง่ดี"]
    },
    {
      number: 4,
      meaning: "ความมั่นคง ความเป็นระเบียบ ความรับผิดชอบ การทำงานหนัก",
      characteristics: ["มีความรับผิดชอบสูง", "มีระเบียบวินัย", "มีความอดทน", "เป็นคนจริงจัง", "ชอบความมั่นคง"]
    },
    {
      number: 5,
      meaning: "เสรีภาพ การเปลี่ยนแปลง การผจญภัย ความยืดหยุ่น",
      characteristics: ["รักอิสระ", "ชอบการเปลี่ยนแปลง", "ชอบการผจญภัย", "มีความยืดหยุ่นสูง", "ชอบเรียนรู้สิ่งใหม่ๆ"]
    },
    {
      number: 6,
      meaning: "ความรับผิดชอบ ความรัก ครอบครัว ความสมดุล",
      characteristics: ["มีความรับผิดชอบต่อครอบครัว", "มีความเมตตา", "ชอบดูแลผู้อื่น", "มีความยุติธรรม", "ชอบความสวยงาม"]
    },
    {
      number: 7,
      meaning: "ความลึกลับ การวิเคราะห์ ความเป็นนักปราชญ์ จิตวิญญาณ",
      characteristics: ["ชอบวิเคราะห์", "มีความคิดลึกซึ้ง", "ชอบความสงบ", "มีญาณหยั่งรู้", "สนใจเรื่องจิตวิญญาณ"]
    },
    {
      number: 8,
      meaning: "พลังอำนาจ ความสำเร็จทางวัตถุ ความมั่งคั่ง การจัดการ",
      characteristics: ["มีความทะเยอทะยานสูง", "มีความสามารถในการจัดการ", "มีวินัยในตนเอง", "มุ่งมั่นสู่ความสำเร็จ", "มีภาวะผู้นำ"]
    },
    {
      number: 9,
      meaning: "ความเมตตา การให้ ความเสียสละ การบรรลุเป้าหมาย",
      characteristics: ["มีความเมตตากรุณา", "ชอบช่วยเหลือผู้อื่น", "มีอุดมคติสูง", "มีความคิดกว้างไกล", "มีความเสียสละ"]
    },
    {
      number: 11,
      meaning: "ญาณหยั่งรู้ แรงบันดาลใจ ความเป็นผู้นำทางจิตวิญญาณ",
      characteristics: ["มีญาณหยั่งรู้สูง", "มีความไวต่อความรู้สึก", "มีแรงบันดาลใจสูง", "มีความคิดสร้างสรรค์", "มีอุดมคติสูง"]
    },
    {
      number: 22,
      meaning: "ผู้สร้างโลก ความสำเร็จระดับสูง การสร้างสรรค์สิ่งยิ่งใหญ่",
      characteristics: ["มีวิสัยทัศน์กว้างไกล", "มีความสามารถในการสร้างสรรค์", "มีความเป็นผู้นำสูง", "มีความสามารถในการจัดการ", "มีความมุ่งมั่นสูง"]
    },
    {
      number: 33,
      meaning: "ครูระดับสูง การช่วยเหลือมนุษยชาติ ความรักที่ไม่มีเงื่อนไข",
      characteristics: ["มีความเมตตากรุณาสูง", "มีความเสียสละสูง", "มีความสามารถในการสอน", "มีความรักที่ไม่มีเงื่อนไข", "มีอุดมคติสูง"]
    },
    {
      number: 13,
      meaning: "การเปลี่ยนแปลง การปรับตัว การเริ่มต้นใหม่",
      characteristics: ["ชอบการเปลี่ยนแปลง", "มีความสามารถในการปรับตัว", "มีความคิดสร้างสรรค์", "ชอบความท้าทาย", "มีความกล้าหาญ"]
    },
    {
      number: 14,
      meaning: "อิสรภาพ การเดินทาง การเรียนรู้ผ่านประสบการณ์",
      characteristics: ["รักอิสระ", "ชอบการเดินทาง", "ชอบเรียนรู้สิ่งใหม่ๆ", "มีความยืดหยุ่น", "ชอบความท้าทาย"]
    },
    {
      number: 16,
      meaning: "การเปลี่ยนแปลงอย่างฉับพลัน การปลดปล่อย การทำลายเพื่อสร้างใหม่",
      characteristics: ["เผชิญกับการเปลี่ยนแปลงบ่อย", "มีความสามารถในการปรับตัวสูง", "มีความกล้าหาญ", "มีความเข้มแข็ง", "มีความสามารถในการฟื้นตัว"]
    },
    {
      number: 19,
      meaning: "ความเป็นผู้นำ ความเป็นอิสระ ความสำเร็จ",
      characteristics: ["มีความเป็นผู้นำสูง", "มีความคิดสร้างสรรค์", "มีความมั่นใจในตัวเอง", "มีความทะเยอทะยาน", "มีความสามารถในการจัดการ"]
    },
    {
      number: 23,
      meaning: "ความคิดสร้างสรรค์ การสื่อสาร ความสนุกสนาน",
      characteristics: ["มีความคิดสร้างสรรค์สูง", "มีความสามารถในการสื่อสาร", "มีอารมณ์ขัน", "ชอบสังคม", "มองโลกในแง่ดี"]
    },
    {
      number: 24,
      meaning: "ความมั่นคง ครอบครัว ความรับผิดชอบ",
      characteristics: ["มีความรับผิดชอบสูง", "ให้ความสำคัญกับครอบครัว", "มีความอดทน", "มีความเป็นระเบียบ", "ชอบความมั่นคง"]
    }
  ];

  // ฟังก์ชันคำนวณผลรวมตัวเลข
  function calculateNumberSum(number) {
    // ลบอักขระที่ไม่ใช่ตัวเลขออก
    const digitsOnly = number.replace(/\D/g, '');
    
    // คำนวณผลรวมของตัวเลขทั้งหมด
    let sum = 0;
    for (let i = 0; i < digitsOnly.length; i++) {
      sum += parseInt(digitsOnly[i]);
    }
    
    // ถ้าผลรวมมากกว่า 9 และไม่ใช่เลขมาสเตอร์ (11, 22, 33) ให้คำนวณต่อ
    if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      return calculateNumberSum(sum.toString());
    }
    
    return sum;
  }

  // ฟังก์ชันวิเคราะห์เลขศาสตร์
  function analyzeNumerology(number, type) {
    // คำนวณผลรวมตัวเลข
    const sum = calculateNumberSum(number);
    
    // หาความหมายของผลรวม
    const meaning = numerologyMeanings.find(m => m.number === sum) || {
      number: sum,
      meaning: "ไม่พบความหมายสำหรับเลขนี้",
      characteristics: []
    };
    
    // ตรวจสอบคู่เลขพิเศษ
    const specialPairs = findSpecialPairs(number);
    
    return {
      originalNumber: number,
      type,
      sum,
      meaning,
      specialPairs
    };
  }

  // ฟังก์ชันหาคู่เลขพิเศษ
  function findSpecialPairs(number) {
    const digitsOnly = number.replace(/\D/g, '');
    const specialPairs = [];
    
    // ตรวจสอบคู่เลขพิเศษ
    const pairs = [
      { pair: "13", meaning: "ใจร้อน ขี้หงุดหงิด แต่มีความสามารถในการปรับตัว" },
      { pair: "14", meaning: "ชอบอิสระ รักการเดินทาง มีโอกาสได้ไปต่างประเทศ" },
      { pair: "16", meaning: "มักเจอการเปลี่ยนแปลงกะทันหัน ต้องปรับตัวบ่อย" },
      { pair: "19", meaning: "เป็นผู้นำ มีความมั่นใจในตัวเอง ประสบความสำเร็จ" },
      { pair: "23", meaning: "มีความคิดสร้างสรรค์ เก่งการสื่อสาร มีเสน่ห์" },
      { pair: "24", meaning: "รักครอบครัว มีความรับผิดชอบสูง ชอบความมั่นคง" },
      { pair: "28", meaning: "มีโชคลาภ มีความสามารถในการหาเงิน" },
      { pair: "31", meaning: "มีความคิดสร้างสรรค์ มีความเป็นผู้นำ" },
      { pair: "32", meaning: "มีความสามารถในการสื่อสาร เป็นนักการทูต" },
      { pair: "36", meaning: "มีความคิดสร้างสรรค์ รักครอบครัว" },
      { pair: "41", meaning: "ทำงานหนัก มีความเป็นผู้นำ" },
      { pair: "45", meaning: "ชอบความมั่นคง แต่ก็รักอิสระ" },
      { pair: "51", meaning: "ชอบการเปลี่ยนแปลง มีความคิดสร้างสรรค์" },
      { pair: "54", meaning: "รักอิสระ แต่ก็ต้องการความมั่นคง" },
      { pair: "56", meaning: "ชอบการเปลี่ยนแปลง แต่ก็รักครอบครัว" },
      { pair: "69", meaning: "รักครอบครัว มีความเมตตา" },
      { pair: "78", meaning: "มีญาณหยั่งรู้ มีโชคลาภ" },
      { pair: "89", meaning: "ประสบความสำเร็จ มีความเมตตา" },
      { pair: "99", meaning: "มีความเมตตาสูง ชอบช่วยเหลือผู้อื่น" }
    ];
    
    // ตรวจสอบแต่ละคู่เลข
    for (let i = 0; i < digitsOnly.length - 1; i++) {
      const pair = digitsOnly.substring(i, i + 2);
      const matchedPair = pairs.find(p => p.pair === pair);
      
      if (matchedPair) {
        specialPairs.push(matchedPair);
      }
    }
    
    return specialPairs;
  }

  // จัดการการส่งฟอร์ม
  const numerologyForm = document.getElementById('numerology-form');
  const numerologyResult = document.getElementById('numerology-result');
  
  numerologyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const type = document.getElementById('numerology-type').value;
    let inputValue = '';
    
    switch (type) {
      case 'birthdate':
        inputValue = document.getElementById('birthdate').value;
        break;
      case 'phone':
        inputValue = document.getElementById('phone').value;
        break;
      case 'id':
        inputValue = document.getElementById('idCard').value;
        break;
    }
    
    if (!inputValue) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    
    // วิเคราะห์เลขศาสตร์
    const result = analyzeNumerology(inputValue, type);
    
    // แสดงผลลัพธ์
    let typeText = '';
    switch (result.type) {
      case 'birthdate':
        typeText = 'วันเกิด';
        break;
      case 'phone':
        typeText = 'เบอร์โทรศัพท์';
        break;
      case 'id':
        typeText = 'เลขบัตรประชาชน';
        break;
    }
    
    document.getElementById('numerology-info').textContent = `${typeText}: ${result.originalNumber}`;
    document.getElementById('numerology-sum').textContent = `ผลรวมเลขศาสตร์: ${result.sum}`;
    document.getElementById('numerology-meaning').textContent = result.meaning.meaning;
    
    const characteristicsList = document.getElementById('numerology-characteristics');
    characteristicsList.innerHTML = '';
    
    result.meaning.characteristics.forEach(char => {
      const li = document.createElement('li');
      li.textContent = char;
      characteristicsList.appendChild(li);
    });
    
    const specialPairsSection = document.getElementById('special-pairs-section');
    const specialPairsContainer = document.getElementById('special-pairs');
    
    if (result.specialPairs.length > 0) {
      specialPairsContainer.innerHTML = '';
      
      result.specialPairs.forEach(pair => {
        const pairCard = document.createElement('div');
        pairCard.className = 'special-pair-card';
        
        pairCard.innerHTML = `
          <h4>คู่เลข ${pair.pair}</h4>
          <p>${pair.meaning}</p>
        `;
        
        specialPairsContainer.appendChild(pairCard);
      });
      
      specialPairsSection.classList.remove('hidden');
    } else {
      specialPairsSection.classList.add('hidden');
    }
    
    numerologyResult.classList.remove('hidden');
    
    // เลื่อนไปที่ผลลัพธ์
    numerologyResult.scrollIntoView({ behavior: 'smooth' });
  });
});