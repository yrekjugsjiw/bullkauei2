/*CMD
  command: /start
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
  var button = [
  [{title: "🔗 Перейти", url: "https://t.me/bulldropsoft"}],
  [{title: "Я подписался", command: "/joinede"}]
];

Bot.sendInlineKeyboard(button, "❗️ Подпишись на наш канал, чтобы получить доступ к боту.")
  // your other code here
  //..

  return true; // if false - cooldown is not restarted
}

function onStarting(){
  // cooldown just started
  var button = [
  [{title: "🔗 Перейти", url: "https://t.me/bulldropsoft"}],
  [{title: "Я подписался", command: "/joinede"}]
];

Bot.sendInlineKeyboard(button, "❗️ Подпишись на наш канал, чтобы получить доступ к боту.")
}

function onWaiting(waitTime){
  // we have active cooldown
  var buttons = [
[
  { title: " 🔄 Попробывать еще раз", command: "/start" }]
]
Bot.sendInlineKeyboard(buttons, " Попробуй еще раз через  " + waitTime + " секунд")
}

Libs.CooldownLib.user.watch({
  // you need name for cooldown
  name: "OemBonusCooldown",
  time: 15, // cooldown time, 120 secs - 2 minute
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

function doTouchOwnLink(){
  Bot.sendMessage("Ты нажал по своей ссылке!");
}

function doAttracted(refUser){
  

  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    "🎉 На твой баланс зачислено 25₽ за приглашение реферала. " 
  );
}

function doAlreadyAttracted(){
  Bot.sendMessage("");
}

let trackOptions = {
  onTouchOwnLink: doTouchOwnLink,
  onAttracted: doAttracted,
  onAlreadyAttracted: doAlreadyAttracted,
  debug: false // extra info for debugging
}

RefLib.track(trackOptions);




