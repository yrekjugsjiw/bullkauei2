/*CMD
  command: /r
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin_id = "5868075152"
//you may get it via Bot.sendMessage(user.telegramid)

var msg_details = Bot.getProperty("support_msg_details",{})

if(user.telegramid!=admin_id){return}
if(!params){return}

var user_link = "[" + msg_details[params].name + " " + msg_details[params].last_name + "](tg://user?id=" + msg_details[params].userId +")"

Bot.sendMessage("Напиши ответ " + user_link )

Bot.run({
command: "/adminReply",
options: {user_link: user_link,userId: msg_details[params].userId,message_id: msg_details[params].message_id}
})
