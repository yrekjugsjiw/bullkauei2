/*CMD
  command: /zadans
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
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "Список доступных заданий: \n1️⃣ *Пригласи 5 друзей по своей реферальной ссылке*\n\n💰Награда: 100₽ на баланс.\n\n🔄 Статус: Выполняется\n\n2️⃣ *Реклама на сайте*\n\n❗️ Твоя задача зайти на сайт БуллДропа и в *чате* оставить ссылку на нашего бота, так нужно сделать в этих мини-играх: *Краш*, *Колесо*, *Лесенка*, *НЕ ЗАБЫВАЙТЕ ДЕЛАТЬ СКРИНЫ*\n\n💰Награда: 250₽ на баланс.\n\n🔄 Статус: Выполняется. После выполнения писать в поддержку.\n\n3️⃣ *Реклама в чатах по Standoff 2*\n\n❗️ Твоя задача найти 7 чатов по Standoff 2 и оставить там ссылку на бота, *НЕ ЗАБЫВАЙТЕ ДЕЛАТЬ СКРИНЫ*\n\n💰Награда: 350₽ на баланс.\n\n🔄 Статус: Выполняется. После выполнения писать в поддержку")

if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs
