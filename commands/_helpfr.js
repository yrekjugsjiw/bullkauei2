/*CMD
  command: /helpfr
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Мы *не даем* гарантии на *FREE* режим. В бесплатной версии прогнозы генерирует ИИ на основании последних 10 игр. Бесплатнаю (FREE) версию мы создали по приколу, поэтому доверять полностью ИИ не советуем.")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
