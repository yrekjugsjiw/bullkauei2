/*CMD
  command: /proverkaplat
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
  { title: "👛 Пополнить баланс", command: "/buyrub" }]
    ,
  [
  { title: "⬑ Назад", command: "/platvalu" }]
]
Bot.sendInlineKeyboard(buttons, "У тебя недостаточно средств. Стоимость *одного* прогноза в режиме *Краш* : 200rub. Пополнить *баланс* можно *ниже*, либо в *Профиле*")
