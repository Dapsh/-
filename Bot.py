import telebot
import requests
import json

bot = telebot.TeleBot('')
API = 'faad72d11624a2ba98e38a65ad51fed9'


@bot.message_handler(commands=['start'])
def start(message):
    bot.send_message(message.chat.id, 'Привет! Напиши название города!')


@bot.message_handler(content_types=['text'])
def get_weather(message):
    city = message.text.strip().lower()
    res = requests.get(f'https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API}&units=metric')

    if res.status_code == 200:
        data = json.loads(res.text)
        temp = data["main"]["temp"]
        bot.reply_to(message, f"Сейчас погода в городе {city.capitalize()}: {temp}°C")

        image = 'Sun.png' if temp > 5.0 else 'yasni.png'

        file = open('./' + image, 'rb')
        bot.send_photo(message.chat.id, file)

    else:
        bot.reply_to(message, f"Не удалось получить погоду для города {city.capitalize()}. Проверьте название города.")


bot.infinity_polling()

