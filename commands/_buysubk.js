/*CMD
  command: /buysubk
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
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
  { title: "⬑ Назад", command: "/podpis" }]
]
Bot.sendInlineKeyboard(buttons, "Цена: *99 рублей* (47 украинских гривен, 1 USDT)\n\nТы собираешься купить *BULL VIP* на 30 *дней*.\n\nОплата Картой/СБП - оплата доступна с помощью карт, выпущенных в РФ, и Системы Быстрых Платежей.\n\nDonationAlerts - оплата доступна с помощью карт, выпущенных в РФ, и Системы Быстрых Платежей. *Можно использовать как замену, если не работает оплата Картой/СБП*\n\nОплата CryptoBot - оплата с помощью крипто валюты (USDT)\n\nЕсли у тебя не получилось оплатить с помощью одной платежной системы, то обязательно попробуй другую.\n\nЕсли возникли проблемы при оплате, пишите в *Поддержку*.")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}


