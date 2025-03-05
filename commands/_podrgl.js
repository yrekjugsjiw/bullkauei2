/*CMD
  command: /podrgl
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
{ title: "Купить", command: "/buysubk" }]
  ,
[
 { title: "<- Назад", command: "/podpis" }]
]
Bot.sendInlineKeyboard(buttons, "Цена: *99 рублей* (47 украинских гривен, 1 USD.\n\nЧто ты получишь при покупке *BULL VIP*?\n-Каждые *15 дней* до конца подписки, ты рандомно получаешь прогноз из доступных режимов: Краш, Рулетка;\n-Доступ к платным прогнозам;\n-Возможность приобретать прогнозы;\n-Доступ к ежедновному бонусу\n-Доступ в чат, где ты сможешь общаться с другими обладателями BULL VIP ")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
