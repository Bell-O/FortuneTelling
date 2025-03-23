document.addEventListener('DOMContentLoaded', function() {
  // ข้อมูลสำหรับการคำนวณโหราศาสตร์ไทย
  const zodiacHouses = [
    { 
      id: 1, 
      name: "First House", 
      thaiName: "เรือนที่ 1 (ลัคนา)", 
      meaning: "บุคลิกภาพ รูปร่างหน้าตา นิสัยใจคอ" 
    },
    { 
      id: 2, 
      name: "Second House", 
      thaiName: "เรือนที่ 2", 
      meaning: "ทรัพย์สินเงินทอง การเงิน" 
    },
    { 
      id: 3, 
      name: "Third House", 
      thaiName: "เรือนที่ 3", 
      meaning: "พี่น้อง การสื่อสาร การเดินทางระยะสั้น" 
    },
    { 
      id: 4, 
      name: "Fourth House", 
      thaiName: "เรือนที่ 4", 
      meaning: "บ้าน ที่อยู่อาศัย ครอบครัว" 
    },
    { 
      id: 5, 
      name: "Fifth House", 
      thaiName: "เรือนที่ 5", 
      meaning: "ความรัก บุตร ความคิดสร้างสรรค์" 
    },
    { 
      id: 6, 
      name: "Sixth House", 
      thaiName: "เรือนที่ 6", 
      meaning: "สุขภาพ การงาน ผู้ใต้บังคับบัญชา" 
    },
    { 
      id: 7, 
      name: "Seventh House", 
      thaiName: "เรือนที่ 7", 
      meaning: "คู่ครอง หุ้นส่วน ความสัมพันธ์" 
    },
    { 
      id: 8, 
      name: "Eighth House", 
      thaiName: "เรือนที่ 8", 
      meaning: "มรดก ภาษี ความตาย การเปลี่ยนแปลง" 
    },
    { 
      id: 9, 
      name: "Ninth House", 
      thaiName: "เรือนที่ 9", 
      meaning: "การศึกษาระดับสูง ศาสนา การเดินทางไกล" 
    },
    { 
      id: 10, 
      name: "Tenth House", 
      thaiName: "เรือนที่ 10", 
      meaning: "อาชีพ ชื่อเสียง สถานะทางสังคม" 
    },
    { 
      id: 11, 
      name: "Eleventh House", 
      thaiName: "เรือนที่ 11", 
      meaning: "เพื่อน กลุ่มสังคม ความหวัง" 
    },
    { 
      id: 12, 
      name: "Twelfth House", 
      thaiName: "เรือนที่ 12", 
      meaning: "อุปสรรค ศัตรูลับ สิ่งซ่อนเร้น" 
    },
  ];

  const planets = [
    { id: "sun", name: "Sun", thaiName: "พระอาทิตย์", symbol: "☉" },
    { id: "moon", name: "Moon", thaiName: "พระจันทร์", symbol: "☽" },
    { id: "mercury", name: "Mercury", thaiName: "พระพุธ", symbol: "☿" },
    { id: "venus", name: "Venus", thaiName: "พระศุกร์", symbol: "♀" },
    { id: "mars", name: "Mars", thaiName: "พระอังคาร", symbol: "♂" },
    { id: "jupiter", name: "Jupiter", thaiName: "พระพฤหัสบดี", symbol: "♃" },
    { id: "saturn", name: "Saturn", thaiName: "พระเสาร์", symbol: "♄" },
    { id: "rahu", name: "Rahu", thaiName: "ราหู", symbol: "☊" },
    { id: "ketu", name: "Ketu", thaiName: "เกตุ", symbol: "☋" },
  ];

  const planetInHouseInterpretations = [
    {
      planetId: "sun",
      houseId: 1,
      interpretation: "คุณมีบุคลิกภาพโดดเด่น มีความเป็นผู้นำสูง มีความมั่นใจในตัวเอง มีพลังและความกระตือรือร้น"
    },
    {
      planetId: "sun",
      houseId: 10,
      interpretation: "คุณมีโอกาสประสบความสำเร็จในหน้าที่การงาน มีชื่อเสียง ได้รับการยอมรับจากสังคม มีโอกาสได้เป็นผู้นำ"
    },
    {
      planetId: "moon",
      houseId: 1,
      interpretation: "คุณมีจิตใจอ่อนไหว มีความรู้สึกไวต่อสิ่งรอบตัว มีอารมณ์ที่เปลี่ยนแปลงง่าย มีเสน่ห์และความอ่อนโยน"
    },
    {
      planetId: "moon",
      houseId: 4,
      interpretation: "คุณให้ความสำคัญกับครอบครัวและบ้าน มีความผูกพันกับมารดา มีความสุขในการใช้ชีวิตอยู่กับครอบครัว"
    },
    {
      planetId: "mercury",
      houseId: 3,
      interpretation: "คุณมีความสามารถในการสื่อสาร มีไหวพริบปฏิภาณดี มีความสัมพันธ์ที่ดีกับพี่น้อง ชอบการเรียนรู้และการเดินทาง"
    },
    {
      planetId: "mercury",
      houseId: 5,
      interpretation: "คุณมีความคิดสร้างสรรค์ มีไหวพริบในเรื่องความรัก มีความสามารถในการสอนหรือถ่ายทอดความรู้ให้กับผู้อื่น"
    },
    {
      planetId: "venus",
      houseId: 7,
      interpretation: "คุณมีเสน่ห์ดึงดูดคู่ครอง มีโอกาสได้คู่ครองที่ดี มีความสุขในความสัมพันธ์ มีความสามารถในการเจรจาต่อรอง"
    },
    {
      planetId: "venus",
      houseId: 2,
      interpretation: "คุณมีโชคลาภทางการเงิน มีรสนิยมดี ชอบความสวยงาม มีความสุขจากการใช้จ่ายเงินซื้อของสวยงาม"
    },
    {
      planetId: "mars",
      houseId: 10,
      interpretation: "คุณมีพลังงานมากในการทำงาน มีความกล้าหาญ มีภาวะผู้นำ มีโอกาสได้ตำแหน่งสูงในหน้าที่การงาน"
    },
    {
      planetId: "mars",
      houseId: 1,
      interpretation: "คุณมีบุคลิกกล้าแข็ง มีความเป็นนักสู้ มีพลังงานสูง มีความกระตือรือร้น แต่อาจมีอารมณ์ร้อนได้ง่าย"
    },
    {
      planetId: "jupiter",
      houseId: 9,
      interpretation: "คุณมีโอกาสได้ศึกษาในระดับสูง มีความรู้ทางปรัชญาและศาสนา มีโอกาสได้เดินทางไกล มีความโชคดี"
    },
    {
      planetId: "jupiter",
      houseId: 2,
      interpretation: "คุณมีโชคลาภทางการเงิน มีทรัพย์สินมาก มีความมั่งคั่ง มีโอกาสได้รับมรดกหรือทรัพย์สินจากผู้ใหญ่"
    },
    {
      planetId: "saturn",
      houseId: 10,
      interpretation: "คุณต้องทำงานหนักเพื่อความสำเร็จ มีความรับผิดชอบสูง มีวินัย มีความอดทน อาจพบอุปสรรคในการทำงาน"
    },
    {
      planetId: "saturn",
      houseId: 7,
      interpretation: "คุณอาจพบความล่าช้าในเรื่องคู่ครอง มีความรับผิดชอบต่อคู่ครอง อาจมีอุปสรรคในความสัมพันธ์ ต้องใช้ความอดทน"
    },
    {
      planetId: "rahu",
      houseId: 1,
      interpretation: "คุณมีความต้องการที่จะแตกต่างจากคนอื่น มีความทะเยอทะยานสูง มีความกล้าที่จะทำสิ่งแปลกใหม่"
    },
    {
      planetId: "rahu",
      houseId: 11,
      interpretation: "คุณมีความปรารถนาในความสำเร็จและการยอมรับทางสังคม มีเพื่อนที่แปลกและหลากหลาย มีความทะเยอทะยานสูง"
    },
    {
      planetId: "ketu",
      houseId: 12,
      interpretation: "คุณมีญาณหยั่งรู้ มีความสนใจในเรื่องลึกลับ มีความเข้าใจในเรื่องจิตวิญญาณ อาจมีความฝันที่เป็นลางบอกเหตุ"
    },
    {
      planetId: "ketu",
      houseId: 9,
      interpretation: "คุณมีความสนใจในเรื่องศาสนาและจิตวิญญาณ มีความเข้าใจในเรื่องปรัชญาชีวิต มีความรู้ที่ลึกซึ้ง"
    },
  ];

  // สร้างรายการจังหวัด
  const provinces = [
    "กรุงเทพมหานคร", "กระบี่", "กาญจนบุรี", "กาฬสินธุ์", "กำแพงเพชร", "ขอนแก่น", "จันทบุรี", "ฉะเชิงเทรา",
    "ชลบุรี", "ชัยนาท", "ชัยภูมิ", "ชุมพร", "เชียงราย", "เชียงใหม่", "ตรัง", "ตราด", "ตาก", "นครนายก",
    "นครปฐม", "นครพนม", "นครราชสีมา", "นครศรีธรรมราช", "นครสวรรค์", "นนทบุรี", "นราธิวาส", "น่าน",
    "บึงกาฬ", "บุรีรัมย์", "ปทุมธานี", "ประจวบคีรีขันธ์", "ปราจีนบุรี", "ปัตตานี", "พระนครศรีอยุธยา",
    "พะเยา", "พังงา", "พัทลุง", "พิจิตร", "พิษณุโลก", "เพชรบุรี", "เพชรบูรณ์", "แพร่", "ภูเก็ต",
    "มหาสารคาม", "มุกดาหาร", "แม่ฮ่องสอน", "ยโสธร", "ยะลา", "ร้อยเอ็ด", "ระนอง", "ระยอง", "ราชบุรี",
    "ลพบุรี", "ลำปาง", "ลำพูน", "เลย", "ศรีสะเกษ", "สกลนคร", "สงขลา", "สตูล", "สมุทรปราการ",
    "สมุทรสงคราม", "สมุทรสาคร", "สระแก้ว", "สระบุรี", "สิงห์บุรี", "สุโขทัย", "สุพรรณบุรี", "สุราษฎร์ธานี",
    "สุรินทร์", "หนองคาย", "หนองบัวลำภู", "อ่างทอง", "อำนาจเจริญ", "อุดรธานี", "อุตรดิตถ์", "อุทัยธานี", "อุบลราชธานี"
  ];

  // เพิ่มรายการจังหวัดลงใน select
  const birthPlaceSelect = document.getElementById('birthPlace');
  provinces.forEach(province => {
    const option = document.createElement('option');
    option.value = province;
    option.textContent = province;
    birthPlaceSelect.appendChild(option);
  });

  // ฟังก์ชันจำลองการคำนวณลัคนาและตำแหน่งดาวในเรือน
  function calculateThaiAstrology(birthDate, birthTime, birthPlace) {
    // ในระบบจริงจะต้องมีการคำนวณทางดาราศาสตร์ที่ซับซ้อน
    // แต่สำหรับตัวอย่างนี้เราจะจำลองข้อมูลเพื่อแสดงการทำงานของระบบ
    
    // จำลองการคำนวณลัคนา (Ascendant)
    const ascendant = Math.floor(Math.random() * 12) + 1; // สุ่มลัคนา 1-12
    
    // จำลองตำแหน่งดาวในเรือนต่างๆ
    const planetPositions = planets.map(planet => {
      const houseId = Math.floor(Math.random() * 12) + 1; // สุ่มเรือน 1-12
      return {
        planet,
        houseId,
        interpretation: planetInHouseInterpretations.find(
          interp => interp.planetId === planet.id && interp.houseId === houseId
        )?.interpretation || `${planet.thaiName}อยู่ในเรือนที่ ${houseId} ส่งผลต่อชีวิตของคุณในด้านที่เกี่ยวข้องกับเรือนนี้`
      };
    });
    
    return {
      birthDate,
      birthTime,
      birthPlace,
      ascendant,
      ascendantMeaning: zodiacHouses.find(house => house.id === ascendant)?.meaning || "",
      planetPositions
    };
  }

  // จัดการการส่งฟอร์ม
  const thaiAstrologyForm = document.getElementById('thai-astrology-form');
  const resultContainer = document.getElementById('result-container');
  
  thaiAstrologyForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const birthDate = document.getElementById('birthDate').value;
    const birthTime = document.getElementById('birthTime').value;
    const birthPlace = document.getElementById('birthPlace').value;
    
    if (!birthDate || !birthTime || !birthPlace) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }
    
    // คำนวณดวงชะตา
    const result = calculateThaiAstrology(new Date(birthDate), birthTime, birthPlace);
    
    // แสดงผลลัพธ์
    document.getElementById('birth-info').textContent = `ข้อมูลวันเกิด: ${new Date(result.birthDate).toLocaleDateString('th-TH')} เวลา ${result.birthTime} น. จังหวัด${result.birthPlace}`;
    
    document.getElementById('ascendant-info').textContent = `ลัคนาของคุณอยู่ที่ ${zodiacHouses.find(h => h.id === result.ascendant)?.thaiName}`;
    document.getElementById('ascendant-meaning').textContent = result.ascendantMeaning;
    
    const planetPositionsContainer = document.getElementById('planet-positions');
    planetPositionsContainer.innerHTML = '';
    
    result.planetPositions.forEach(position => {
      const planetCard = document.createElement('div');
      planetCard.className = 'card';
      
      planetCard.innerHTML = `
        <div class="card-header" style="background-color: var(--primary); color: var(--primary-foreground);">
          <h4>${position.planet.symbol} ${position.planet.thaiName}</h4>
        </div>
        <div class="card-body">
          <p>อยู่ในเรือนที่ ${position.houseId} (${zodiacHouses.find(h => h.id === position.houseId)?.meaning})</p>
          <p class="text-muted">${position.interpretation}</p>
        </div>
      `;
      
      planetPositionsContainer.appendChild(planetCard);
    });
    
    resultContainer.classList.remove('hidden');
    
    // เลื่อนไปที่ผลลัพธ์
    resultContainer.scrollIntoView({ behavior: 'smooth' });
  });
  
  // ปุ่มพิมพ์ผลการวิเคราะห์
  const printBtn = document.getElementById('print-btn');
  printBtn.addEventListener('click', function() {
    window.print();
  });
});