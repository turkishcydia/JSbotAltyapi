// Gerekli Modülleri Tanımlar.
var figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = (client, message, args, tools) => {
  var sınır = 75 //ASCII Karakter Sınırını Belirler. Bende ayarını değiştirmeyin çünkü küçük ekranlarda sıkıntı çıkarabilir.
  
  if(args.join(' ').length > sınır) return message.channel.send(`Çok karakter yazdınız. En fazla ${sınır} karakter yazabilirsin!`) 
     if(!args[0]) return message.channel.send('Lütfen geçerli yazı giriniz.'); 
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...'); //Konsola Hata Mesajı Bildirir
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'}); //Yazının ASCII Halini Gönderir

  });

};


//Yardım Menüsünde Gösterme
exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: 'Eğlence'
};
exports.help = {
  name: 'ascii',
   description: 'Ascii şeklinde yazı yazmanızı sağlar.',
  usage: 'ascii <mesaj>'
};
