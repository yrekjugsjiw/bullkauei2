/*CMD
  command: /buyrub
  help: 
  need_reply: false
  auto_retry_time: 
  folder: профиль
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "Оплата картой РФ/СБП", url: "https://securepayments.tinkoff.ru/mjR8usVM" }]
    ,
  [
  { title: "DonationAlerts", url: "https://www.donationalerts.com/r/oplata24" }]
    ,
  [
  { title: "Оплата через CryptoBot", url: "http://t.me/send?start=IVCD0Jzenb8M" }]
    ,
  [
  { title: "⬑ Назад", command: "/cabinet98" }]
]
Bot.sendInlineKeyboard(buttons, "💰 *Инструкция*: Выбираешь способ оплаты, переходишь по ней, указываешь сумму  на которую хочешь пополнить баланс, оплачиваешь. К сожалению, пока нет авто-проверки оплаты, поэтому после оплаты *советуем* писать в поддержку, чтобы мы быстрее пополнили ваш счет")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
