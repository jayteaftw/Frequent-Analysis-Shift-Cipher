var CipherText = 'XI LPH P LGDCV CJBQTG IWPI HIPGITS XI, IWT ITATEWDCTGXCVXCV IWGTT IXBTH XC IWT STPS DU CXVWI, PCS IWT KDXRT DCIWT DIWTG TCS PHZXCV UDG HDBTDCT WT LPH CDI'
var PlainText = [];
var Val = [0];
var MaxP = 0; 
var decode;
for(var j = 0; j < CipherText.length; j++){
    if(CipherText[j] != ' ' && CipherText[j] != ','){
        decode = CipherText.charCodeAt(j) - 65;
        if(Val[decode] > 0)
            Val[decode]++;
        else 
            Val[decode] = 1
        if(Val[decode] > Val[MaxP]){
            MaxP = decode
        }
        
    }
        
}

for(j =0 ; j <  25; j++)
    console.log("Letter: " + String.fromCharCode(j+65) + ", " +Val[j])
console.log(MaxP)
var mostCommon = "E"
var Frequent = String.fromCharCode(MaxP+65)
console.log("The Most Frequent is Char is " + Frequent)
var k = ((mostCommon.charCodeAt(0) - 65) - (Frequent.charCodeAt(0)- 65))
console.log(k)
k = ((k%26)+26)%26
console.log(k)
for(var i = 0; i < CipherText.length; i++){
    if(CipherText[i] != ' '&& CipherText[i] != ','){
        decode = CipherText.charCodeAt(i) - 65;
        PlainText[i] = String.fromCharCode(((decode + k)%26)+ 65);
    }
    else
        PlainText[i] = ' '
}
console.log(PlainText.join(''));
console.log('X'.charCodeAt(0) + " " + 'I'.charCodeAt(0))
