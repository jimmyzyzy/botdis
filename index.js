import { Client, Events, GatewayIntentBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds , GatewayIntentBits.GuildMessages , GatewayIntentBits.MessageContent]});

import dotenv from 'dotenv';
dotenv.config();

/////////////////////////////////////////////////////////////////////////////////////////////////////HOMEWORKCHECK
import axios from "axios";

const API_KEY = 'AIzaSyAv3iOpyKk3SGvPThnK9uI6ncVZB1oH9AY'; // แทนที่ด้วย API Key ของคุณ
const SHEET_ID = '1ETzq4VzlO-a325zUK8iq6Qc3WXkoiVSOfPWsHqmWkO4'; // ใส่ ID ของ Google Sheet (ดูได้จาก URL)
const RANGE = '!A1:R18'; // กำหนดช่วงเซลล์ที่ต้องการอ่าน

const URL = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;

async function readGoogleSheet() {
        const response = await axios.get(URL);
        const rows = response.data.values;

    
        let text = ""
        for (let i = 0; i < rows.length; i++) {
            for (let l = 0; l < rows[i].length; l++) {
                if(l===0){
                    text = text + "วิชา **" + rows[i][l] + "** มีงาน : "
                }
                else{
                    text = text+ l +"." + rows[i][l] + " "
                }
                
                
            }
            text = text + "\n"
            text = text + "---------------------------"
            text = text + "\n"
        }
        return text;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////








client.on(Events.ClientReady, readyClient => {
  console.log(`Logged in as ${readyClient.user.tag}!`);
});








client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return;
  const currentDate = new Date();
  if (interaction.commandName === 'table') {
    const day1 = [
        "โครงงานคอมพิวเตอร์",
        "ฟิสิกส์",
        "สังคม",
        "คณิตเพิ่มเติม"
    ];
    const day2 = [
        "ชีวะ",
        "คณิตพื่น",
        "ไทย",
        "Fun Eng",
        "สังคม",
        "เคมี",
        "ชุมนุม"
    ];
    const day3 = [
        "Homeroom",
        "รำไทย",
        "Edelyn",
        "End R&W",
        "คณิตพื่น",
        "คณิตเพิ่มเติม",
        "ฟิสิกส์"
    ];
    const day4 = [
        "วิทยาการคำนวณ",
        "แนะแนว",
        "เคมี",
        "คณิตเพิ่มเติม",
        "ชีวะ"
    ];
    const day5 = [
        "ไทย",
        "รำไทย",
        "วิทยาการคำนวณ",
        "การงาน",
        "คณิตพื่น",
        "ประชุมระดับ"
    ];
    if(currentDate.getDay().toString()==='4'){
        let text = "";
        for (let i = 0; i < day4.length; i++) {
            text = text + day4[i] + " | "
        }
        await interaction.reply(text);
    }

    
    
  }

  if (interaction.commandName === 'homework') {
    
    await interaction.reply(await readGoogleSheet());

}  

  if (interaction.commandName === 'menu') {
    const mymenu = [
        "ผัดกระเพรา",
        "ต้มยำกุ้ง",
        "แกงเขียวหวาน",
        "ส้มตำ",
        "ปูผัดผงกะหรี่",
        "ไก่ทอด",
        "ข้าวผัด",
        "ผัดไทย",
        "แกงพะแนง",
        "ข้าวซอย",
        "แกงมัสมั่น",
        "ข้าวมันไก่",
        "ข้าวหมูแดง",
        "ข้าวขาหมู",
        "น้ำตกหมู",
        "ลาบหมู",
        "ไก่ย่าง",
        "หมูปิ้ง",
        "เนื้อย่าง",
        "ห่อหมก",
        "ทอดมันปลา",
        "ไข่เจียวหมูสับ",
        "ไข่ลูกเขย",
        "ข้าวเหนียวหมูย่าง",
        "แกงป่า",
        "แกงเลียง",
        "แกงส้ม",
        "แกงจืดเต้าหู้หมูสับ",
        "ไก่ต้มข่า",
        "ปลาทอดน้ำปลา",
        "ปลากระพงนึ่งมะนาว",
        "ยำวุ้นเส้น",
        "ยำถั่วพู",
        "ยำปลาดุกฟู",
        "ยำมะม่วง",
        "น้ำพริกกะปิ",
        "น้ำพริกอ่อง",
        "น้ำพริกหนุ่ม",
        "ข้าวคลุกกะปิ",
        "หมี่กะทิ",
        "หมี่ฮกเกี้ยน",
        "ขนมจีนน้ำเงี้ยว",
        "ขนมจีนน้ำยาป่า",
        "ขนมจีนน้ำยาแกงเขียวหวาน",
        "ข้าวแช่",
        "ข้าวต้มปลา",
        "ข้าวต้มหมู",
        "โจ๊กหมู",
        "บะหมี่เกี๊ยว",
        "ก๋วยเตี๋ยวเรือ",
        "ก๋วยเตี๋ยวต้มยำ",
        "เย็นตาโฟ",
        "ราดหน้า",
        "ผัดซีอิ๊ว",
        "ผัดขี้เมา",
        "หมูทอดกระเทียมพริกไทย",
        "ไก่ผัดเม็ดมะม่วงหิมพานต์",
        "ปลาดุกผัดเผ็ด",
        "หอยทอด",
        "ออส่วน",
        "ปอเปี๊ยะทอด",
        "ข้าวหมกไก่",
        "บะจ่าง",
        "กุ้งอบวุ้นเส้น",
        "หมึกย่าง",
        "ปลาหมึกนึ่งมะนาว",
        "หอยลายผัดน้ำพริกเผา",
        "ข้าวหน้าเป็ด",
        "ไก่อบ",
        "เนื้อผัดพริกแกง",
        "สเต๊กหมู",
        "สเต๊กไก่",
        "หมูกระทะ",
        "หม้อไฟ",
        "ต้มแซ่บกระดูกหมูอ่อน",
        "แกงฮังเล",
        "ไส้อั่ว",
        "น้ำพริกปลาร้า",
        "น้ำพริกเห็ด",
        "ปลานิลเผาเกลือ",
        "หมูแดดเดียว",
        "เนื้อแดดเดียว",
        "หมูยอทอด",
        "แหนมคลุก",
        "จิ้มจุ่ม",
        "พล่ากุ้ง",
        "พล่าเนื้อ",
        "ตำข้าวโพด",
        "ตำไทยไข่เค็ม",
        "ส้มตำปูปลาร้า",
        "ไก่ต้มฟัก",
        "ต้มจืดมะระยัดไส้",
        "เกาเหลา",
        "ข้าวหน้าไข่ดอง",
        "ไข่พะโล้",
        "แกงจืดฟักทอง",
        "แกงไตปลา",
        "ปลาราดพริก",
        "ข้าวหน้าไก่",
        "ไก่ตุ๋นมะนาวดอง",
        "กระดูกหมูตุ๋นยาจีน"
    ];
    const mydrink = [
        "ชานมไข่มุก",
        "ชาไทยเย็น",
        "โกโก้เย็น",
        "นมชมพู",
        "ชาเขียวมัทฉะเย็น",
        "มิลค์เชค",
        "ช็อกโกแลตปั่น",
        "สตรอว์เบอร์รีโยเกิร์ตปั่น",
        "อัญชันมะนาว",
        "ชามะนาว",
        "น้ำแตงโมปั่น",
        "น้ำผลไม้รวมปั่น",
        "นมสดคาราเมล",
        "น้ำส้มยูซุ",
        "น้ำแอปเปิ้ลโซดา",
        "น้ำบลูฮาวายโซดา",
        "น้ำแดงโซดามะนาว",
        "สมูทตี้ผลไม้",
        "น้ำมะม่วงปั่น",
        "กาแฟเย็น"
    ];
    
    await interaction.reply("วันนี้ลองทาน " + mymenu[Math.floor(Math.random() * mymenu.length)] + " กับ " + mydrink[Math.floor(Math.random() * mydrink.length)]);
  }
});



client.on(Events.MessageCreate, async message => {
    if (message.author.bot) return;

    if (message.content === 'Hi') {
        message.reply('Hi '+ message.author.displayName);
    }
});

client.login(process.env.TOKEN);