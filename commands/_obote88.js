/*CMD
  command: /obote88
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🤖 о боте 🤖
  group: 
CMD*/

Bot.run({
    command: "/balance",
    run_after: 60*60*24*5,  // 5 days delay
    label: "myLabel"
})
var buttons = [
[
  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "Бот был создан: 05.03.2023" + "\nПользователей в боте: *3920*" + "\nИспользование RAM: 110 mb")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id


Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
