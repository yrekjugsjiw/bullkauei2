/*CMD
  command: /cabinet98
  help: 
  need_reply: false
  auto_retry_time: 
  folder: профиль

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👤 профиль 👤
  group: 
CMD*/

//Bot.inspect(user.telegramid)
//Bot.inspect(user.username)
//Bot.inspect(user.first_name)
var buttons = [
[
  { title: "👛 Пополнить баланс", command: "/buyrub" }]
    ,
  [
  { title: "⬑ Назад", command: "/maine" }]
]
Bot.sendInlineKeyboard(buttons, "[[Информация]]:\n👤 Имя: "+user.first_name+"\n🆔️ ID: "+user.id+ "\n➖️➖️*Личный кабинет*➖️➖️"+ "\nБаланс: 0 rub"+ "\nПодписка : *None*"+ "\nДо конца подписки: 0 *d*" + "\n➖️➖️*Кол-во доступно прогнозов:*➖️➖️"+ "\nКраш: 0"+ "\nЛесенка: 0"+"\nКолесо: 0"+ "\n*Количество баллов* : 0")
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs



