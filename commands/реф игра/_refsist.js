/*CMD
  command: /refsist
  help: 
  need_reply: false
  auto_retry_time: 
  folder: реф игра
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var buttons = [
[
  { title: "🔗 Моя ссылка", command: "/mylink" },
  { title: "👥 Мои рефералы", command: "/reflist" }]
    ,
  [
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "Выберите функцию👇")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
