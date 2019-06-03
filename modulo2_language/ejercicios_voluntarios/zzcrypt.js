// --- EJERCICIO ------------------------------------------------------------------------

// Descifra el siguiente secreto:
var secret = "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {

     var resultado = "";
     for (var i=0; i<secret.length; i++) {
        resultado += decryptChar(secret[i]);
     }
     console.log(resultado);
};

function decryptChar(value) {
  if (value !== ' ') {
    return plain.charAt(cipher.indexOf(value));
  }else {
    return value;
  }
}

decrypt(secret);