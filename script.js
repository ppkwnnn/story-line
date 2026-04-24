const fortunes = {
    'ลาเต้': 'คุณเป็นคนที่ให้ความสำคัญกับความสมดุลครับ... แม้ภายนอกจะดูอ่อนโยนเหมือนฟองนม แต่ลึกๆ แล้วคุณมีความคิดที่หนักแน่น เป็นคนใจดีที่มักจะมอบพลังบวกให้คนรอบข้างเสมอเลย',
    'คาปูชิโน่': 'คุณเป็นคนมีชีวิตชีวาและมีความเป็นศิลปินในตัวครับ... คุณชอบดื่มด่ำกับช่วงเวลาที่สวยงาม เหมือนกับฟองนมหนานุ่ม คุณมักจะมองหาแง่มุมที่สนุกสนานในชีวิตอยู่เสมอ',
    'อเมริกาโน่': 'คุณเป็นคนตรงไปตรงมาและเข้มแข็งมากครับ... คุณชอบอะไรที่ชัดเจน ไม่ซับซ้อน แม้ชีวิตจะมีความขมบ้าง แต่คุณก็รู้วิธีที่จะจัดการกับมันได้อย่างสง่างามด้วยตัวคุณเอง',
    'ช็อกโกแลต': 'คุณเป็นคนที่ละเอียดอ่อนและต้องการการโอบกอดครับ... ลึกๆ แล้วคุณโหยหาความสบายใจ คุณเป็นคนซื่อสัตย์ต่อความรู้สึกตัวเอง และการได้เห็นคนรอบข้างมีความสุขก็คือความสุขของคุณ',
    'ชาผลไม้': 'คุณเป็นคนที่รักอิสระและมีความสดใสครับ... คุณไม่ชอบอะไรที่จำเจและมักจะมีไอเดียใหม่ๆ มาทำให้คนอื่นประหลาดใจเสมอ ใครที่อยู่ใกล้คุณมักจะรู้สึกสดชื่นไปด้วย'
};

const gameData = {
    1: {
        bg: 'https://img2.pic.in.th/IMG_7826.md.jpeg',
        narration: 'หลังจากผ่านมรสุมความเหนื่อยล้ามาทั้งสัปดาห์ในที่สุดวันหยุดที่เฝ้าฝันถึงเสียที คุณไม่อยากปล่อยให้เวลาอันมีค่านี้หมดไปกับการนอนซึมอยู่บนเตียง จึงตัดสินใจก้าวเท้าออกจากบ้านเพื่อสูดอากาศบริสุทธิ์ แสงแดดอ่อน ๆ ยามเช้าชวนให้รู้สึกดีไม่น้อย แต่สิ่งเดียวที่ขาดไปในตอนนี้คือเครื่องดื่มดี ๆ สักแก้วที่จะมาเติมเต็มในวันหยุดของคุณ',
        next: 2
    },
    2: {
        bg: 'https://img2.pic.in.th/IMG_7826.md.jpeg',
        narration: 'คุณเดินผ่านย่านการค้าที่คึกคัก ร้านค้าเรียงรายมากมายอยู่ตามข้างทาง แต่กลับไม่มีร้านไหนที่ดึงดูดใจคุณได้เลย',
        next: 3
    },
    3: {
        bg: 'https://img2.pic.in.th/IMG_7825a630c755af16e393.md.jpeg',
        narration: 'จนกระทั่ง ขาของคุณหยุดชะงักลงที่หน้าร้านกาแฟเล็ก ๆ ร้านหนึ่ง มันดูเรียบง่าย ไม่ได้หวือหวามาก แต่มันกลับให้ความรู้สึกอบอุ่นอย่างบอกไม่ถูก กลิ่นหอมจาง ๆ ของเมล็ดกาแฟที่ลอยมาแตะจมูก ชวนให้คุณนึกถึงความทรงจำเก่า ๆ ที่เกือบจะลืมเลือนไป ความรู้สึกชวนให้คิดถึงบางอย่างหรือใครบางคนที่ไม่ได้เจอมานาน ยืนมองอยู่หน้าร้านอยู่สักพักกำลังตัดสินใจว่าจะเข้าไปดีไหม',
        dialogue: { name: 'Y', text: 'อืมจะลองเข้าไปดีมั้ยนะ ?' },
        choices: [
            { text: 'เข้าไปในร้าน', next: 4 },
            { text: 'ไม่เข้าไป', next: 'MENU' }
        ]
    },
    4: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        narration: "ทันทีที่คุณผลักประตูเข้าไป เสียงกระดิ่งทองเหลืองเหนือหัวก็ดัง 'กรุ๊งกริ๊ง' ต้อนรับอย่างสดใส กลิ่นกาแฟคั่วบดโอบล้อมตัวคุณไว้ราวกับกำลังปลอบประโลม",
        dialogue: { name: 'Y', text: 'บรรยากาศในร้านดีจัง... จะนั่งตรงไหนดีนะ?' },
        choices: [
            { text: 'นั่งตรงเคาน์เตอร์ไม้ อยากดูวิธีชงเครื่องดื่ม', next: 5 },
            { text: 'นั่งริมหน้าต่าง มองดูผู้คนเดินผ่านไปมา', next: 5 },
            { text: 'นั่งมุมในสุดของร้าน อยากได้ความเป็นส่วนตัว', next: 5 }
        ]
    },
    5: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        narration: 'ในขณะที่คุณกำลังหย่อนตัวลงนั่ง ก็มีเสียงทักทายขึ้นเป็นเสียงที่นุ่มนวล คุณเงยหน้าขึ้นมาพบกับชายหนุ่มที่กำลังส่งยิ้มให้ด้วยสายตาที่อ่อนโยน',
        dialogue: [
            { name: '???', text: 'สวัสดีครับ... ไม่คุ้นหน้าเลย มาครั้งแรกหรือเปล่าครับ?' },
            { name: 'Y', text: 'อ่อค่ะ ใช่ค่ะ เพิ่งเคยมาครั้งแรกเลย ร้านตกแต่งสวยจังเลยนะคะ' },
            { name: 'KY', showChar: true, text: 'ขอบคุณนะครับ ผม เคียวมุ ครับ ยินดีที่ได้รู้จักและยินดีต้อนรับสู่พื้นที่เล็ก ๆ ของผมนะครับ... วันนี้ดูท่าทางจะเหนื่อยมาพอสมควรเลย รับเครื่องดื่มอะไรดีครับ?' }
        ],
        choices: [
            { text: 'ลาเต้', next: 'choice_drink', val: 'ลาเต้' },
            { text: 'คาปูชิโน่', next: 'choice_drink', val: 'คาปูชิโน่' },
            { text: 'อเมริกาโน่', next: 'choice_drink', val: 'อเมริกาโน่' },
            { text: 'ช็อกโกแลต', next: 'choice_drink', val: 'ช็อกโกแลต' },
            { text: 'ชาผลไม้', next: 'choice_drink', val: 'ชาผลไม้' }
        ]
    },
    'choice_temp': {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        dialogue: { name: 'KY', text: 'เมนูนี้ดีเลยนะครับ แล้วอยากรับเป็นแบบร้อนรือเย็นดีครับ?' },
        choices: [
            { text: 'แบบร้อน', next: 'choice_snack' },
            { text: 'แบบเย็น', next: 'choice_snack' }
        ]
    },
    'choice_snack': {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        dialogue: { name: 'KY', text: 'ได้เลยครับ...แล้วรับขนมทานคู่กันทานเพิ่มด้วยไหมครับ??' },
        choices: [
            { text: 'สตอเบอร์รี่ช๊อตเค้ก' },
            { text: 'บลูชีสพาย' },
            { text: 'ครัวซองต์' },
            { text: 'โดนัทช็อกโกแลต' },
            { text: 'แซนวิช' }
        ],
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        dialogue: [
            { name: 'KY', text: 'ทวนรายการสักครู่นะครับ ของคุณลูกค้าจะเป็น [DRINK] กับ [SNACK] นะครับ' },
            { name: 'Y', text: 'ใช่ค่ะ ตามนี้เลย' },
            { name: 'KY', text: 'รับทราบครับผม รอเครื่องดื่มกับขนมสักครู่นะครับ เดี๋ยวผมนำไปเสิร์ฟให้ครับ' }
        ],
        next: 6
    },
    6: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        narration: 'เวลาผ่านไปเพียงไม่นาน กลิ่นหอมกรุ่นที่แสนคุ้นเคยก็ลอยมาแตะจมูก เคียวมุเดินออกมาจากหลังเคาน์เตอร์พร้อมถาดไม้ที่เต็มไปด้วยของที่คุณสั่ง',
        dialogue: [
            { name: 'KY', text: 'ขออนุญาตนะครับ [DRINK] กับ [SNACK] ได้แล้วครับ' },
            { name: 'Y', text: 'น่าทานจังเลยค่ะ... ขอบคุณมากนะคะ' },
            { name: 'KY', text: 'ลองชิมดูสักนิดสิครับ...ไม่ทราบว่ามันจะถูกปากคุณหรือเปล่า?' },
            { name: 'Y', text: '(คุณจิบเครื่องดื่มเข้าไปเพียงนิด) อร่อย... อร่อยมากเลยค่ะ หวานกำลังดี แล้วก็นุ่มละมุนมาก ๆ เลย' },
            { name: 'KY', text: 'ดีใจที่ชอบนะครับ... รู้ไหมครับ มีคนบอกว่าเครื่องดื่มที่เราเลือกน่ะ มักจะสะท้อน "ตัวตน" ของคนดื่มออกมาด้วยนะ... สนใจอยากลองฟังคำทำนายเล่น ๆ ไหมครับ?' }
        ],
        choices: [
            { text: 'อยากฟังค่ะ ลองทายดูสิคะ', next: 7 },
            { text: 'อืม... ไม่ดีกว่าค่ะ รู้สึกเขิน ๆ', next: 8 }
        ]
    },
    7: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        dialogue: [
            { name: 'Y', text: 'ฟังดูน่าสนุกดีนะคะ อยากรู้เหมือนกันค่ะ ลองทายดูสิคะ' },
            { name: 'KY', text: 'ได้เลยครับ สำหรับคนที่เลือก [DRINK] บ่งบอกว่าคุณเป็นคนที่ [FORTUNE]' },
            { name: 'Y', text: 'โห... แอบแม่นจนน่าตกใจเลยนะคะเนี่ย' },
            { name: 'KY', text: 'ฮะฮะ จริงเหรอครับ? สงสัยผมจะทายถูกเพราะเห็นรอยยิ้มของคุณแน่เลย อ้อจริงสิ มื้อนี้ผมเลี้ยงคุณเองนะ' },
            { name: 'Y', text: 'เอ๋? จะดีเหรอคะ? ทำไมถึงใจดีแบบนี้ล่ะคะ?' },
            { name: 'KY', text: 'เพราะว่าวันนี้เป็นวันเกิดของผมเองน่ะครับ... ผมแค่อยากให้คนชิมกาแฟของผมมีความสุขที่สุด' }
        ],
        choices: [
            { text: 'จริงเหรอคะเนี่ย! สุขสันต์วันเกิดนะคะ', next: 9 },
            { text: 'จริงเหรอคะ... ขอบคุณมากเลยนะใจดีจัง', next: 10 }
        ]
    },
    8: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        dialogue: [
            { name: 'Y', text: 'อืม... ไม่ดีกว่าค่ะ รู้สึกเขิน ๆ ยังไงไม่รู้' },
            { name: 'KY', text: 'ฮะฮะ ขอโทษทีครับ ทานให้อร่อยนะครับ ผมแค่อยากให้คุณได้พักผ่อนจริง ๆ' },
            { name: 'KY', text: 'อ้อ จริงสิครับ... ก่อนจะกลับ ผมขออนุญาตเลี้ยงมื้อนี้คุณนะครับ' },
            { name: 'Y', text: 'เอ๋? จะดีเหรอคะ? ทำไมละคะ?' },
            { name: 'KY', text: 'เพราะว่าวันนี้เป็นวันเกิดของผมเองน่ะครับ... ขอบคุณที่แวะมาหาผมในวันพิเศษนะครับ' }
        ],
        choices: [
            { text: 'จริงเหรอคะเนี่ย! สุขสันต์วันเกิดนะคะ', next: 9 },
            { text: 'จริงเหรอคะ... ขอบคุณมากเลยนะใจดีจัง', next: 10 }
        ]
    },
    9: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        dialogue: [
            { name: 'Y', text: 'จริงเหรอคะเนี่ย! สุขสันต์วันเกิดนะคะ ขอให้ปีนี้เป็นปีที่ยอดเยี่ยมนะคะ' },
            { name: 'KY', text: 'ขอบคุณมากนะครับ... คำอวยพรของคุณทำให้หัวใจของผมฟูขึ้นเยอะเลย' },
            { name: 'KY', text: 'ถ้าคุณไม่รังเกียจ...คุณช่วยเขียนคำอวยพรทิ้งไว้ให้ผมหน่อยได้ไหมครับ?' },
            { name: 'KY', text: 'นี่ครับ... เขียนอะไรก็ได้ที่อยากบอกผม... ผมจะเก็บรักษามันไว้อย่างดีเลย' }
        ],
        next: 'END2'
    },
    10: {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        dialogue: [
            { name: 'Y', text: 'จริงเหรอคะ... ขอบคุณมากเลยนะใจดีจัง สุขสันต์วันเกิดนะคะ' },
            { name: 'KY', text: 'ยินดีที่สุดครับ... ขอบคุณที่คุณมาร่วมทำให้วันเกิดของผมมีความหมายขึ้นนะ' },
            { name: 'KY', text: 'ทานให้อร่อยนะครับ พักผ่อนให้เต็มที่นะ... หวังว่าเราจะได้พบกันใหม่นะครับ' }
        ],
        next: 'END1'
    },
    'END1': {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        dialogue: { name: 'KY', text: 'ขอบคุณที่แวะมานะครับ... ขอให้วันนี้เป็นวันที่ดีนะ' },
        next: 11
    },
    'END2': {
        bg: 'https://img2.pic.in.th/IMG_7830564ed53c7a0bceb1.md.jpeg',
        showChar: true,
        dialogue: { name: 'KY', text: 'ขอบคุณสำหรับคำอวยพรที่แสนพิเศษนี้นะครับ... ผมจะเก็บมันไว้ในความทรงจำเลย' },
        next: 12
    },
    11: {
        bg: 'https://img2.pic.in.th/IMG_7825a630c755af16e393.md.jpeg',
        narration: 'คุณเดินออกจากร้านพร้อมกับหัวใจที่เบาสบายขึ้นอย่างประหลาด ความเหนื่อยล้าที่สะสมมาทั้งสัปดาห์ดูจะจางหายไป เพียงเพราะเครื่องดื่มหนึ่งแก้ว... และรอยยิ้มที่แสนอ่อนโยนจากบาริสต้าที่ชื่อ "เคียวมุ"',
        next: 'MENU'
    },
    12: {
        bg: 'https://img2.pic.in.th/IMG_7825a630c755af16e393.md.jpeg',
        narration: 'คุณเดินออกจากร้านพร้อมกับหัวใจที่เบาสบายขึ้นอย่างประหลาด ความเหนื่อยล้าที่สะสมมาทั้งสัปดาห์ดูจะจางหายไป เพียงเพราะเครื่องดื่มหนึ่งแก้ว... และรอยยิ้มที่แสนอ่อนโยนจากบาริสต้าที่ชื่อ "เคียวมุ"',
        next: 'MENU'
    }
};

let currentScene = 1;
let dialogueIndex = 0;
let selectedDrink = "";
let selectedSnack = "";
let isTyping = false;

function startGame() {
    console.log("Game Starting..."); // ใส่ไว้เช็คใน Console ว่าฟังก์ชันทำงานไหม
    
    // ซ่อนเมนู และ โชว์หน้าจอเกม
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    
    // เริ่มต้นที่ Scene แรก
    currentScene = 1; 
    renderScene();
}

function renderScene() {
    const scene = gameData[currentScene];
    if (!scene) return;

    document.getElementById('game-container').style.backgroundImage = `url('${scene.bg}')`;
    
    const charSprite = document.getElementById('character-sprite');
    
    // เช็คค่า showChar จากตัวแปรในแต่ละฉาก
    if (scene.showChar) {
        charSprite.style.display = 'block';
        charSprite.style.opacity = '1';
    } else {
        charSprite.style.display = 'none';
        charSprite.style.opacity = '0';
    }

    dialogueIndex = 0;
    processStep();
}

function processStep() {
    const scene = gameData[currentScene];
    const choiceCont = document.getElementById('choice-container');
    choiceCont.style.display = 'none';

    if (scene.narration && dialogueIndex === 0) {
        showText(scene.narration, null);
        return;
    }

    let currentDialogue = null;
    if (Array.isArray(scene.dialogue)) {
        currentDialogue = scene.dialogue[dialogueIndex];
    } else if (scene.dialogue) {
        currentDialogue = scene.dialogue;
    }

    if (currentDialogue) {
        if (currentDialogue.showChar) {
            document.getElementById('character-sprite').style.display = 'block';
        }
        let text = currentDialogue.text.replace('[DRINK]', selectedDrink).replace('[SNACK]', selectedSnack);
        showText(text, currentDialogue.name);
    } else if (scene.choices) {
        showChoices(scene.choices);
    } else if (scene.next) {
        if(scene.next === 'MENU') location.reload();
        else {
            currentScene = scene.next;
            renderScene();
        }
    }
}

let typingTimer; // เพิ่มตัวแปรสำหรับเก็บ timer
let currentFullText = ""; // เก็บข้อความเต็มไว้สำหรับแสดงตอน skip

function showText(text, name) {
    const characterSprite = document.getElementById('character-sprite');
    isTyping = true;
    const nameTag = document.getElementById('name-tag');
    const textContent = document.getElementById('text-content');
    
    // 1. จัดการ Name Tag
    nameTag.style.display = name ? 'block' : 'none';
    if(name) nameTag.innerText = name;

    // 2. จัดการตัวละคร (Character Sprite)
    // ถ้ามีชื่อคนพูด (ไม่ว่าจะเป็น KY หรือ Y) ให้แสดงตัวละครค้างไว้
    if (name) {
        // เช็คก่อนว่าคนพูดคือ KY หรือเปล่า (หรือจะให้แสดงค้างตั้งแต่ฉากที่มี KY ครั้งแรก)
        // ถ้าคุณต้องการให้โชว์แค่ตอนที่ KY ยืนอยู่ แม้เรา (Y) จะพูดด้วย ก็ใช้เงื่อนไขนี้ได้เลย
        characterSprite.style.display = 'block';
        characterSprite.style.opacity = '1';
    } 
    // ถ้าไม่มีชื่อ (บทบรรยาย/Narration) ให้ซ่อนตัวละคร
    else {
        characterSprite.style.display = 'none';
        characterSprite.style.opacity = '0';
    }

    // 3. ประมวลผลข้อความ (เหมือนเดิม)
    currentFullText = text.replace('[DRINK]', selectedDrink)
                          .replace('[SNACK]', selectedSnack)
                          .replace('[FORTUNE]', fortunes[selectedDrink] || '');

    textContent.innerHTML = "";
    let i = 0;
    
    clearTimeout(typingTimer);

    function type() {
        if (i < currentFullText.length) {
            textContent.innerHTML += currentFullText.charAt(i);
            i++;
            typingTimer = setTimeout(type, 30); 
        } else {
            isTyping = false;
        }
    }
    type();
}

function showChoices(choices) {
    const choiceCont = document.getElementById('choice-container');
    choiceCont.innerHTML = "";
    choiceCont.style.display = 'flex';

    choices.forEach(c => {
        const div = document.createElement('div');
        div.className = 'choice-btn';
        div.innerText = c.text;
        div.onclick = () => {
            if (c.val) {
                if (currentScene === 5) selectedDrink = c.val;
                if (currentScene === 'choice_snack') selectedSnack = c.val;
            }
            if (c.next === 'MENU') location.reload();
            else if (c.next === 'choice_drink') {
                currentScene = 'choice_temp';
                renderScene();
            }
            else {
                currentScene = c.next;
                renderScene();
            }
        };
        choiceCont.appendChild(div);
    });
}

function nextStep() {
    const textContent = document.getElementById('text-content');

    if (isTyping) {
        // --- ส่วนที่เพิ่มเข้ามาสำหรับ Skip ---
        clearTimeout(typingTimer); // หยุดการพิมพ์ทีละตัว
        textContent.innerHTML = currentFullText; // แสดงข้อความเต็มทันที
        isTyping = false; // เปลี่ยนสถานะเป็นพิมพ์จบแล้ว
        return; // จบฟังก์ชันแค่นี้ (ยังไม่เปลี่ยนฉาก)
    }

    // --- Logic เปลี่ยนฉากเดิม ---
    const scene = gameData[currentScene];
    if (Array.isArray(scene.dialogue) && dialogueIndex < scene.dialogue.length - 1) {
        dialogueIndex++;
        processStep();
    } else if (scene.choices) {
        showChoices(scene.choices);
    } else if (scene.next) {
        if (scene.next === 'MENU') location.reload();
        else { 
            currentScene = scene.next; 
            renderScene(); 
        }
    }
}