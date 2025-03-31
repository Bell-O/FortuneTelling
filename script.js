// Constants
const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/1356363988686078063/ojNNVGb4GmSdegZDK4mL5tSURGssLvgdm3snoFZYslQZ5SP-fxi_bfw20gJ_do5JeJxA";
const BUY_PRICE = 1000;
const SELL_PRICE = 900;

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const buyButton = document.getElementById('buy-button');
const sellButton = document.getElementById('sell-button');
const buyAmount = document.getElementById('buy-amount');
const sellAmount = document.getElementById('sell-amount');
const buyTotal = document.getElementById('buy-total');
const sellTotal = document.getElementById('sell-total');
const buyContact = document.getElementById('buy-contact');
const sellContact = document.getElementById('sell-contact');
const bankAccount = document.getElementById('bank-account');
const referenceCode = document.getElementById('reference-code');
const referenceCodeDisplay = document.getElementById('reference-code-display');
const specificDecimal = document.getElementById('specific-decimal');
const decimalExample = document.getElementById('decimal-example');
const sellAmountWithDecimal = document.getElementById('sell-amount-with-decimal');
const toast = document.getElementById('toast');

document.addEventListener('DOMContentLoaded', () => {
    generateReferenceCode();
    generateSpecificDecimal();
    setupEventListeners();
});

function setupEventListeners() {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    buyAmount.addEventListener('input', calculateBuyTotal);
    sellAmount.addEventListener('input', calculateSellTotal);

    buyButton.addEventListener('click', () => submitOrder('buy'));
    sellButton.addEventListener('click', () => submitOrder('sell'));
}

function switchTab(tabId) {
    tabs.forEach(tab => tab.classList.toggle('active', tab.getAttribute('data-tab') === tabId));
    tabContents.forEach(content => content.classList.toggle('active', content.id === `${tabId}-content`));
    buyButton.style.display = tabId === 'buy' ? 'flex' : 'none';
    sellButton.style.display = tabId === 'buy' ? 'none' : 'flex';
}

function generateReferenceCode() {
    const code = 'BRIL' + Math.floor(100000 + Math.random() * 900000);
    referenceCode.textContent = code;
    referenceCodeDisplay.textContent = code;
}

function generateSpecificDecimal() {
    const decimal = Math.floor(10000 + Math.random() * 90000).toString();
    specificDecimal.textContent = '.' + decimal;
    updateDecimalExample(decimal);
}

function updateDecimalExample(decimal) {
    decimalExample.textContent = `*ตัวอย่าง: หากต้องการขาย 10 BRIL ให้โอน 10.${decimal} BRIL`;
    updateSellAmountWithDecimal();
}

function updateSellAmountWithDecimal() {
    const amount = sellAmount.value || '0';
    const decimal = specificDecimal.textContent.substring(1);
    sellAmountWithDecimal.textContent = `*โปรดโอน ${amount}.${decimal} BRIL`;
}

function calculateBuyTotal() {
    if (buyAmount.value) {
        const total = parseFloat(buyAmount.value) * BUY_PRICE;
        buyTotal.value = total.toLocaleString('th-TH', {minimumFractionDigits: 2});
    } else {
        buyTotal.value = '0.00';
    }
}

function calculateSellTotal() {
    if (sellAmount.value) {
        const total = parseFloat(sellAmount.value) * SELL_PRICE;
        sellTotal.value = total.toLocaleString('th-TH', {minimumFractionDigits: 2});
        updateSellAmountWithDecimal();
    } else {
        sellTotal.value = '0.00';
        updateSellAmountWithDecimal();
    }
}

function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => showToast('คัดลอกสำเร็จ', message)).catch(err => {
        console.error('ไม่สามารถคัดลอกข้อความได้: ', err);
        showToast('เกิดข้อผิดพลาด', 'ไม่สามารถคัดลอกข้อความได้');
    });
}

function showToast(title, message) {
    const toastTitle = toast.querySelector('.toast-title');
    const toastMessage = toast.querySelector('.toast-message');
    toastTitle.textContent = title;
    toastMessage.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function submitOrder(type) {
    if (type === 'buy') {
        if (!buyAmount.value || !buyContact.value) return showToast('ข้อมูลไม่ครบถ้วน', 'กรุณากรอกจำนวน BRIL และช่องทางติดต่อ');
    } else {
        if (!sellAmount.value || !sellContact.value || !bankAccount.value) return showToast('ข้อมูลไม่ครบถ้วน', 'กรุณากรอกจำนวน BRIL, ช่องทางติดต่อ และบัญชีธนาคาร');
    }

    buyButton.disabled = true;
    sellButton.disabled = true;
    buyButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> กำลังส่งคำสั่ง...';
    sellButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> กำลังส่งคำสั่ง...';

    const orderData = type === 'buy' 
        ? { type, amount: buyAmount.value, total: buyTotal.value.replace(/,/g, ''), contact: buyContact.value, referenceCode: referenceCode.textContent }
        : { type, amount: sellAmount.value, total: sellTotal.value.replace(/,/g, ''), contact: sellContact.value, bankAccount: bankAccount.value, specificDecimal: specificDecimal.textContent.substring(1) };

    const embed = {
        title: type === 'buy' ? '🟢 คำสั่งซื้อ BRIL Token' : '🔴 คำสั่งขาย BRIL Token',
        color: type === 'buy' ? 3066993 : 15158332,
        fields: [
            { name: 'จำนวน', value: `${orderData.amount} BRIL`, inline: true },
            { name: 'ยอดรวม (THB)', value: `${orderData.total}`, inline: true },
            { name: 'ช่องทางติดต่อ', value: orderData.contact, inline: false },
        ],
        timestamp: new Date().toISOString()
    };

    if (type === 'buy') {
        embed.fields.push({ name: 'รหัสอ้างอิง', value: orderData.referenceCode, inline: false });
    } else {
        embed.fields.push(
            { name: 'บัญชีธนาคาร', value: orderData.bankAccount, inline: false },
            { name: 'เลขทศนิยมที่แนบ', value: orderData.specificDecimal, inline: true }
        );
    }

    fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ embeds: [embed] })
    })
    .then(res => {
        if (!res.ok) throw new Error('ส่งไป Discord ไม่สำเร็จ');
    })
    .catch(err => {
        console.error('❌ Discord Error:', err);
    });

    setTimeout(() => {
        showToast('ส่งคำสั่งสำเร็จ', `คำสั่ง${type === 'buy' ? 'ซื้อ' : 'ขาย'}ของคุณถูกส่งไปยังระบบแล้ว`);
        if (type === 'buy') {
            buyAmount.value = '';
            buyContact.value = '';
            buyTotal.value = '0.00';
            generateReferenceCode();
            buyButton.innerHTML = '<i class="fas fa-exchange-alt"></i> ยืนยันคำสั่งซื้อ';
        } else {
            sellAmount.value = '';
            sellContact.value = '';
            bankAccount.value = '';
            sellTotal.value = '0.00';
            generateSpecificDecimal();
            sellButton.innerHTML = '<i class="fas fa-exchange-alt"></i> ยืนยันคำสั่งขาย';
        }
        buyButton.disabled = false;
        sellButton.disabled = false;
    }, 2000);
}