// มีโทรศัพท์มืออืถอยู่ทั้งหมด 6 เครื่อง แต่ละเครื่องนั้น จะมีความถี่ของการโทรและการใช้แบตเตอรี่ที่แตกต่างกันออกไป
// จงหาว่าเครื่องไหนที่แบตเตอรี่จะหมดก่อน และเครื่องไหน แบตเตอรี่อยู่ได้นานที่สุด


//// ส่วนนี้เป็นส่วนของ array > object
const all = [{
    // - โดยที่เครื่องที่ 1 จะมีแบตเตอรี่ เริ่มต้น 89 % ซึ่งใน 1 ครั้ง จะวางโทรศัพท์ไว้เฉยๆ 3 นาที และมีการโทรออกอีก 1 นาที โดยแต่ละครั้งไม่ว่าจะวางไว้เฉยๆ หรือโทรออก แบตเตอรี่จะลดลงนาทีละ 0.2% นอกจากนี้การโทรออก แบตเตอรี่จะลดลง เพิ่มมากขึ้นกว่าเดิม 5 เท่า
    no: 1,              // # number of phone
    battery: 89,       // remain battery
    restTime: 3,       // mins
    callTime: 1,       // mins
    restBattery: 0.2, // %rest batter used
    callBattery: 0.2 * 6,    // % used
    callCount: 0,      // แต่ละ count คือ 1 นาที
    restCount: 0,      // แต่ละ count คือ 1 นาที
    timeTotalF: 0,     // ไว้แค่เทียบ
    timeH: 0, //เก็บชั่วโมง
    timeM: 0, //เก็บนาที
    timeS: 0 // เก็บวินาที
},
{
    // - โดยที่เครื่องที่ 2 จะมีแบตเตอรี่ เริ่มต้น 49 % ซึ่งใน 1 ครั้ง จะวางโทรศัพท์ไว้เฉยๆ 3 นาที และมีการโทรออกอีก 1 นาที โดยแต่ละครั้งไม่ว่าจะวางไว้เฉยๆ หรือโทรออก แบตเตอรี่จะลดลงนาทีละ 0.4% นอกจากนี้การโทรออก แบตเตอรี่จะลดลง เพิ่มมากขึ้นกว่าเดิม 2 เท่า
    no: 2,              // # number of phone
    battery: 49,       // remain battery
    restTime: 3,       // mins
    callTime: 1,       // mins
    restBattery: 0.4, // %rest batter used
    callBattery: 0.4 * 3,    // % used
    callCount: 0,      // แต่ละ count คือ 1 นาที
    restCount: 0,     // แต่ละ count คือ 1 นาที
    timeTotalF: 0,    // ไว้แค่เทียบ
    timeH: 0, //เก็บชั่วโมง
    timeM: 0, //เก็บนาที
    timeS: 0 // เก็บวินาที
},
{
    // - โดยที่เครื่องที่ 3 จะมีแบตเตอรี่ เริ่มต้น 78 % ซึ่งใน 1 ครั้ง จะวางโทรศัพท์ไว้เฉยๆ 2 นาที และมีการโทรออกอีก 1 นาที โดยแต่ละครั้งไม่ว่าจะวางไว้เฉยๆ หรือโทรออก แบตเตอรี่จะลดลงนาทีละ 0.5% นอกจากนี้การโทรออก แบตเตอรี่จะลดลง เพิ่มมากขึ้นกว่าเดิม 3 เท่า
    no: 3,              // # number of phone
    battery: 78,       // remain battery
    restTime: 2,       // mins
    callTime: 1,       // mins
    restBattery: 0.5, // %rest batter used
    callBattery: 0.5 * 4,    // % used
    callCount: 0,      // แต่ละ count คือ 1 นาที
    restCount: 0,       // แต่ละ count คือ 1 นาที
    timeTotalF: 0,     // ไว้แค่เทียบ
    timeH: 0, //เก็บชั่วโมง
    timeM: 0, //เก็บนาที
    timeS: 0 // เก็บวินาที
},
{
    // - โดยที่เครื่องที่ 4จะมีแบตเตอรี่ เริ่มต้น 19 % ซึ่งใน 1 ครั้ง จะวางโทรศัพท์ไว้เฉยๆ 20 นาที และมีการโทรออกอีก 1 นาที โดยแต่ละครั้งไม่ว่าจะวางไว้เฉยๆ หรือโทรออก แบตเตอรี่จะลดลงนาทีละ 0.1% นอกจากนี้การโทรออก แบตเตอรี่จะลดลง เพิ่มมากขึ้นกว่าเดิม 1 เท่า
    no: 4,              // # number of phone
    battery: 19,       // remain battery
    restTime: 20,       // mins
    callTime: 1,       // mins
    restBattery: 0.1, // %rest batter used
    callBattery: 0.1 * 2,    // % used
    callCount: 0,      // แต่ละ count คือ 1 นาที
    restCount: 0,      // แต่ละ count คือ 1 นาที
    timeTotalF: 0,    // ไว้แค่เทียบ
    timeH: 0, //เก็บชั่วโมง
    timeM: 0, //เก็บนาที
    timeS: 0 // เก็บวินาที
},
{
    // - โดยที่เครื่องที่ 5 จะมีแบตเตอรี่ เริ่มต้น 99 % ซึ่งใน 1 ครั้ง จะวางโทรศัพท์ไว้เฉยๆ 5 นาที และมีการโทรออกอีก 1 นาที โดยแต่ละครั้งไม่ว่าจะวางไว้เฉยๆ หรือโทรออก แบตเตอรี่จะลดลงนาทีละ 1% นอกจากนี้การโทรออก แบตเตอรี่จะลดลง เพิ่มมากขึ้นกว่าเดิม 2 เท่า
    no: 5,              // # number of phone
    battery: 99,       // remain battery
    restTime: 5,       // mins
    callTime: 1,       // mins
    restBattery: 1, // %rest batter used
    callBattery: 1 * 3,    // % used
    callCount: 0,      // แต่ละ count คือ 1 นาที
    restCount: 0,       // แต่ละ count คือ 1 นาที
    timeTotalF: 0,  // ไว้แค่เทียบ
    timeH: 0, //เก็บชั่วโมง
    timeM: 0, //เก็บนาที
    timeS: 0 // เก็บวินาที

}]


//// ในส่วนนี้เป็นส่วนของฟังก์ชั่น การคำนวนเวลาที่ใช้จนแบตเตอรี่หมด
function timeCal(arrInput) { // กรุณาใส่ 1-5 เพราะแปลงค่าให้แล้ว
    let arrNo = arrInput - 1; // แปลงค่า ฉันอยู่นี่
    while (all[arrNo].battery != 0) { // ตรวจสอบว่ายังมีแบตเตอรี่หลงเหลือ ทำจนกว่าจะหมด
        // rest
        if (all[arrNo].battery <= 0) { break; }    // ตรวจจับว่า ถ้าหมดก็ยุติ while
        all[arrNo].battery -= all[arrNo].restBattery;                   // ทำทีละ 1 % เพื่อความละเอียด
        all[arrNo].restCount += 1;                 // นับจำนวนครั้งที่ทำของ rest
        // console.log(all[arrNo].restCount + ' rest Count');
        // console.log(all[arrNo].battery + ' R');
        // call
        // loop นำนวนเท่ากับทุก 1 % ใช้
        if (all[arrNo].battery <= 0) { break; } // ถ้าเขาหมดใจ ก็หยุดนะ เราน่ะ บอกตัวเอง 
        all[arrNo].battery -= all[arrNo].callBattery;               // ทำทีละ 1 % เพื่อความละเอียด
        all[arrNo].callCount += all[arrNo].callTime;             // นับจำนวนครั้งที่ทำของ call
        // console.log(all[arrNo].callCount + ' call Count');
        // console.log(all[arrNo].battery + ' C');

    }
    // / ประกาศไว้หลังคำนวนแล้ว ระวังหน่อย / / ใช้อันนี้สำหรับ comparison ************** ด้านล่าง ***************
    let timeTotal = all[arrNo].restCount * all[arrNo].restTime + all[arrNo].callCount * all[arrNo].callTime;
    let hTime = Math.floor(timeTotal / 60); // คำนวนเป้นชั่วโมง
    let mTime = timeTotal % 60; // คำนวนเศษนาที
    let sTime = 0;
    if ((all[arrNo].callTime % all[arrNo].callBattery) !== 0) {
        sTime = Math.floor((all[arrNo].callTime / all[arrNo].callBattery) * 60);
    }
    // console.log(sTime);
    console.log(`เครื่องที่ ${all[arrNo].no} ใช้เวลาไปทั้งหมด : ${hTime} ชั่วโมง  ${mTime} นาที  ${sTime} วินาที`);
    // console.log(all[arrNo].callCount + all[arrNo].restCount);
    all[arrNo].timeTotalF = timeTotal;  // เอาค่าออกไปเก็บ เพื่อคำนวนเปรียบเทียบ
    all[arrNo].timeH = hTime;
    all[arrNo].timeM = mTime;
    all[arrNo].timeS = sTime;
    // console.log(all[arrNo].timeTotalF);
    return hTime, mTime, timeTotal;
}

// console.log(timeCal(5));
// console.log('timeCal(ลำดับ) <= โปรดใช้ฟังก์ชั่นแจ้งลำดับไปที่ 1 - 5');
// console.log('timeCal(0)');



//// ในส่วนนี้เป็นส่วนการ loop เพื่อได้เวลาทุกเครื่อง


for (let i = 1; i <= 5; i++) {
    // console.log(timeCal(i));
    timeCal(i)
}


///// ในส่วนนี้ใช้คำนวนเปรียบเทียบ แต่เปรียบยังไงก็แพ้คนเก่า ว๊ายยยยยยย!!!~
let timeTotalHigh = 0;
let timeTotalLow = all[0].timeTotalF;
// console.log(timeTotalLow);
for (let i = 0; i < 5; i++) {
    if (all[i].timeTotalF > timeTotalHigh) {
        timeTotalHigh = all[i].timeTotalF;
        // console.log(timeTotalHigh);
    }
    if (all[i].timeTotalF < timeTotalLow) {
        timeTotalLow = all[i].timeTotalF;
        // console.log(timeTotalLow);
    }
}

// ใช้สำหรับตรวจสอบผู้ชนะเลิศ แต่ก็ไม่ชนะใจเธอ แป๋ว~
for (let i = 0; i < 5; i++) {
    if (timeTotalHigh == all[i].timeTotalF) {
        console.log(`โทรศัพท์เครื่องที่ ${all[i].no} แบตเตอรี่หมดช้าที่สุด! ใช้เวลาไปทั้งหมด : ${all[i].timeH} ชั่วโมง  ${all[i].timeM} นาที  ${all[i].timeS} วินาที`);

    }
    if (timeTotalLow == all[i].timeTotalF) {
        console.log(`โทรศัพท์เครื่องที่ ${all[i].no} แบตเตอรี่หมดเร็วที่สุด! ใช้เวลาไปทั้งหมด : ${all[i].timeH} ชั่วโมง  ${all[i].timeM} นาที  ${all[i].timeS} วินาที หมดเร็วไป เหมือนเธอหมดใจ!!! T^T`);

    }
}

// console.log(timeTotalHigh);
// console.log(timeTotalLow);

///// จบเหอะ ถ้าเธอไม่รักเราแล้ว เฮ้อ!~