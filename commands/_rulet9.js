/*CMD
  command: /rulet9
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

function onEnding(time){
  // can give bonus now
  var buttons = [
[
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "😢 К сожалению, сегодня тебе ничего не выпало. Попробуй завтра")
  // your other code here
  //..

  return true; // if false - cooldown is not restarted
}

function onStarting(){
  // cooldown just started
  var buttons = [
[
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "😢 К сожалению, сегодня тебе не повезло. Попробуй завтра")
}

function onWaiting(waitTime){
  // we have active cooldown
  var buttons = [
[
  { title: "⬑ Назад", command: "/bonusi91" }]
]
Bot.sendInlineKeyboard(buttons, "❗️Ты уже прокрутил ежедневную рулетку. Попробуй завтра. Осталось: " + waitTime + " секунд")
}

Libs.CooldownLib.user.watch({
  // you need name for cooldown
  name: "TemBonusCooldown",
  time: 86400, // cooldown time, 120 secs - 2 minute
  onStarting: onStarting,
  onEnding: onEnding,
  onWaiting: onWaiting
})
if(request.data){
var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})

}

//your bjs


