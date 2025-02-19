/*CMD
  command: /help
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
  { title: "Перейти", url: "https://t.me/bulldropsoft/8" }]
    ,
  [
  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Решение популярных ошибок 👇")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs


